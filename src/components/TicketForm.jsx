import '../styles/TicketForm.css';

import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faTrash } from '@fortawesome/free-solid-svg-icons';


export default function TicketForm() {
    const [avatar, setAvatar] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        github: '',
    });

    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file && ['image/jpeg', 'image/png'].includes(file.type) && file.size <= 500000) {
            const reader = new FileReader();
            reader.onload = (event) => setAvatar (event.target.result);
            reader.readAsDataURL(file);
        }
        
        // Reset input value to allow selecting the same file again
        e.target.value = '';
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(true);
    }

    const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragOver(false);

        const file = e.dataTransfer.files[0];

        if (file && ['image/jpeg', 'image/png'].includes(file.type) && file.size <= 500000) {
            const reader = new FileReader();
            reader.onload = (event) => setAvatar (event.target.result);
            reader.readAsDataURL(file);
        }
    }

    const uploadAreaClick = () => { 
        fileInputRef.current?.click();
    }

    const handleDeleteAvatar = () => {
        setAvatar (null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    }

    const handleInputChange = (e) => {
        const { name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }


    return (
        <form  className="ticket-form">
            <div className="form-container">
                <div className="upload-section">
                    <label htmlFor="avatar-input">Upload Profile Picture</label>

                    <div 
                        className={`upload-area ${isDragOver ? 'drag-over' : ''}`}
                        onClick={uploadAreaClick} 
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                    >
                        <input type="file" id="avatar-input" accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
                        {avatar ? (
                            <div className="avatar-container">
                                <img src={avatar} alt="Avatar Preview" className="avatar-preview" />
                                <button 
                                    type="button" 
                                    className="delete-btn" 
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        handleDeleteAvatar();
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTrash} /> Remove
                                </button>
                            </div>
                        ) : ( 
                            <div>
                                <img src="/images/icon-upload.svg" alt="Upload Icon" className="upload-icon" />
                                <p>Drag and drop or click to upload</p>
                            </div>

                        )}
                    </div>
                    <p className="hint"><FontAwesomeIcon icon={faCircleInfo} />Upload your photo (JPG or PNG, max size: 500KB).</p>
                </div>

                <div className="form-fields-section">
                    <div className="form-group">
                        <label htmlFor="fullName">Full Name</label>
                        <input 
                            type="text" 
                            id="fullName" 
                            name="fullName" 
                            value={formData.fullName} 
                            onChange={handleInputChange} 
                            placeholder="Enter your full name" 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            placeholder="example@email.com" 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="github">GitHub Username</label>
                        <input 
                            type="text" 
                            id="github" 
                            name="github" 
                            value={formData.github} 
                            onChange={handleInputChange} 
                            placeholder="@yourusername" 
                        />
                    </div>
                </div>
                
                <button type="submit" className="submit-btn">Generate My Ticket</button>

            </div>
        </form>
    )
}

