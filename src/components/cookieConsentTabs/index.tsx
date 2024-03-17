import { useState } from 'react';
import { Tab, Nav, Badge } from 'react-bootstrap';
import CookieConsentNavItemLink from '../cookieConsentNavItemLink';
import CookieConsentNavItemInputSearch from '../cookieConsentNavItemInputSearch';
const CookieConsentTabs = () => {
  // const [activeTab, setActiveTab] = useState('categories');
  const [searchValue, setSearchValue] = useState('');
  const [showSearchInput, setShowSearchInput] = useState(false);
  const data = [
    { text: 'Sample text for categories', pane: 'categories', date: '2023-08-19' },
    { text: 'Another sample text for services', pane: 'services', date: '2023-08-20' }
    // ... add more sample data if needed
  ];
  const filteredData = data.filter(item => item.text.includes(searchValue));

  return (
    <Tab.Container defaultActiveKey="categories">
      <Nav variant="pills" fill>
        <CookieConsentNavItemInputSearch
          showSearchInput={showSearchInput}
          setShowSearchInput={setShowSearchInput}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <CookieConsentNavItemLink eventKey="all" label="All" />
        <CookieConsentNavItemLink eventKey="categories" label="Categories" />
        <CookieConsentNavItemLink eventKey="services" label="Services" />
      </Nav>
      <Tab.Content>
        {filteredData.map((item, index) => (
          <Tab.Pane eventKey={item.pane} key={index}>
            <p>{item.text}</p>
            <Badge>{item.pane}</Badge>
            <span className="ml-2">{item.date}</span>
          </Tab.Pane>
        ))}
      </Tab.Content>
    </Tab.Container>
  )

}
export default CookieConsentTabs;
