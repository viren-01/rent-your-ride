import { useState } from 'react';
import '../../styles/Modal.css';

export default function Modal({onClose, isOpen}) {
    const [isVisible, setIsVisible] = useState(isOpen);

    const closeModal = () => {
        setIsVisible(false);
        onClose();
    };

    return (
        <>
        {
            isVisible && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>Modal Header</h2>
                            <button className="close-btn" onClick={closeModal}>Close</button>
                        </div>
                        <div className="modal-body">
                            <p>Modal Body Content</p>
                        </div>
                    </div>
                </div>
            )
        }
        </>
    )
}