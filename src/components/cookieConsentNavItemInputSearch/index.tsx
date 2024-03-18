// import { Nav, Button, InputGroup, FormControl } from 'react-bootstrap';
// import { Search } from 'react-bootstrap-icons'; // Make sure to install 'react-bootstrap-icons' package

// const CookieConsentNavItemInputSearch = ({
//   showSearchInput,
//   setShowSearchInput,
//   searchValue,
//   setSearchValue
// }) => (
//   <Nav.Item className="ml-auto">
//     {!showSearchInput ? (
//       <Button variant="link" onClick={() => setShowSearchInput(true)}>
//         <Search size={24} />
//       </Button>
//     ) : (
//       <InputGroup>
//         <FormControl
//           autoFocus
//           placeholder="Search..."
//           value={searchValue}
//           onChange={(e) => setSearchValue(e.target.value)}
//           onBlur={() => setShowSearchInput(false)}
//         />
//       </InputGroup>
//     )}
//   </Nav.Item>
// );

function CookieConsentNavItemInputSearch() {
  return (
    <div>
      <CookieConsentNavItemInputSearch />
    </div>
  );
} 

export default CookieConsentNavItemInputSearch;
