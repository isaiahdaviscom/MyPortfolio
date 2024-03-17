import { Nav } from 'react-bootstrap';

interface CookieConsentNavItemLinkProps {
  eventKey: string;
  label: string;
}
const CookieConsentNavItemLink = ({ eventKey, label }: CookieConsentNavItemLinkProps) => {
  return (
    <Nav.Item as="div">
      <Nav.Link as="button" eventKey={eventKey}>
        {label}
      </Nav.Link>
    </Nav.Item>
  );
}

export default CookieConsentNavItemLink;
