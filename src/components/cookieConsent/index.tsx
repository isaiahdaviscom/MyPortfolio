import { useState } from 'react';
import { Modal, Button, Image } from 'react-bootstrap';
import TabContent from '../cookieConsentTabs';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(!localStorage.getItem('cookieConsent'));
  const [isChangeWindow, setIsChangeWindow] = useState(false);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDeny = () => {
    setIsVisible(false);
  };

  const handleChange = () => {
    setIsChangeWindow(true);
  };

  const handleCloseChangeWindow = () => {
    setIsChangeWindow(false);
  };

  return (
    <Modal
      show={isVisible}
      onHide={handleDeny}
      size='lg'
      centered
      backdrop="static">
      <Modal.Header closeButton>
        <Image src="./images/profile-branded.png" alt="Company Logo" width={50} height={50} />
      </Modal.Header>
      {!isChangeWindow ? (
        <>
          <Modal.Body>This website uses cookies to ensure you get the best experience on our website.</Modal.Body>
          <Modal.Footer>
            <Button className="col" variant="secondary" onClick={handleChange}>Change</Button>
            <Button className="col" variant="danger" onClick={handleDeny}>Deny</Button>
            <Button className="col" variant="success" onClick={handleAccept}>Accept</Button>
          </Modal.Footer>
        </>
      ) : (
        <>
          <Modal.Body>
            <h5>Privacy Settings</h5>
            Here you can manage your cookie settings.
            <TabContent />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseChangeWindow}>Close</Button>
          </Modal.Footer>
        </>
      )}
    </Modal>
  );
};

export default CookieConsent;
