import '../styles/TicketForm.css';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';


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

    return (
        <form  className="ticket-form">
            <div className="form-container">
                <div className="upload-section">
                    <label htmlFor="">Upload Avatar</label>
                    <div className="upload-area">
                        <input type="file" id="avatar-input" accept="image/*" onChange={handleFileChange} />

                        {avatar ? (
                            <img src={avatar} alt="Avatar Preview" className="avatar-preview" /> 
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

