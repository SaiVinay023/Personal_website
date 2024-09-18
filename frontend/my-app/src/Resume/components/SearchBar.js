import React, { useState } from 'react';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearchChange}
      onKeyPress={(event) => {
        if (event.key === 'Enter') {
          handleSearch();
        }
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handleSearch} edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      sx={{ width: '100%', maxWidth: 600, margin: '20px auto' }} // Style adjustments
    />
  );
};

export default SearchBar;
