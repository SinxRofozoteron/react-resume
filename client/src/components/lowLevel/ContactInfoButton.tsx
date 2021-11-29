import { useState } from "react";

import Modal from "./ContactInfoModal";

const ContactInfoBtn: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    function onClickHandler() {
        setShowModal(state => !state);
    }
    return (
        <>
            <button onClick={onClickHandler}>Contact Info</button>
            <Modal show={showModal} onCloseClick={onClickHandler} />
        </>
    );
}

export default ContactInfoBtn;