import React, { useState, useEffect } from 'react';

function Search() {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);
    


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredPosts = posts.filter(post => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div>
      <h1>Posts</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>{post.title} - {post.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
