import React, { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  
  // Sample names data
  const names = [
    "Viswa",
    "John",
    "Sarah",
    "Mike",
    "Emma",
    "David",
    "Lisa",
    "Alex",
    "Maria",
    "Chris"
  ];

  // Filter names based on search text
  const filteredNames = names.filter(name =>
    name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      <h2>Search Names</h2>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '16px',
          width: '300px',
          border: '1px solid #ccc',
          borderRadius: '5px'
        }}
      />
      
      {/* Display Results */}
      <div style={{ marginTop: '20px' }}>
        {searchText && (
          <div>
            <h3>Results:</h3>
            {filteredNames.length > 0 ? (
              <ul>
                {filteredNames.map((name, index) => (
                  <li key={index} style={{ padding: '5px', fontSize: '18px' }}>
                    {name}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No names found</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;