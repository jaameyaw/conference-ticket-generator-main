import '../styles/TicketForm.css';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo, faTrash } from '@fortawesome/free-solid-svg-icons';


export default function TicketForm() {
    const [avatar, setAvatar] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file && ['image/jpeg', 'image/png'].includes(file.type) && file.size <= 500000) {
            const reader = new FileReader();
            reader.onload = (event) => setAvatar (event.target.result);
            reader.readAsDataURL(file);
        }
    }

    const handleDeleteAvatar = () => {
        setAvatar(null);
    }

    return (
        <form  className="ticket-form">
            <div className="form-container">
                <div className="upload-section">
                    <label htmlFor="">Upload Avatar</label>
                    <div className="upload-area">
                        <input type="file" id="avatar-input" accept="image/*" onChange={handleFileChange} />

                        {avatar ? (
                            <div className="avatar-container">
                                <img src={avatar} alt="Avatar Preview" className="avatar-preview" />
                                <button type="button" className="delete-btn" onClick={handleDeleteAvatar}>
                                    <FontAwesomeIcon icon={faTrash} /> Remove
                                </button>
                            </div>
                        ) : ( 
                            <div>
                                <label htmlFor="avatar-input">
                                    <img src="/images/icon-upload.svg" alt="Upload Icon" className="upload-icon" />
                                </label>
                                
                                <p>Drag and drop or click to upload</p>
                            </div>

                        )}
                    </div>
                    <p className="hint"><FontAwesomeIcon icon={faCircleInfo} />Upload your photo (JPG or PNG, max size: 500KB).</p>
                </div>
            </div>
        </form>
    )
}

