import React, { useState } from 'react';
import SearchBar from './SearchBar'; // Adjust path as needed

const contentList = [
  { id: 1, title: 'Home', description: 'Welcome to the home page.' },
  { id: 2, title: 'About', description: 'Learn more about us.' },
  // Add more content items here
];

const SearchableContent = () => {
  const [filteredContent, setFilteredContent] = useState(contentList);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredContent(contentList);
      return;
    }
    const lowercasedQuery = query.toLowerCase();
    const results = contentList.filter(
      item =>
        item.title.toLowerCase().includes(lowercasedQuery) ||
        item.description.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredContent(results);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <div>
        {filteredContent.map(item => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchableContent;
