import { useState } from 'react';

import { ContactInfoModal } from './ContactInfoModal';

export const ContactInfoBtn = () => {
  const [showModal, setShowModal] = useState(false);

  function onClickHandler() {
    setShowModal(state => !state);
  }
  return (
    <>
      <button onClick={onClickHandler}>Contact Info</button>
      <ContactInfoModal show={showModal} onCloseClick={onClickHandler} />
    </>
  );
};
