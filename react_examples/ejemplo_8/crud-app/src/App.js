import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: '', body: '' });
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setNewPost(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInputChangeUpdate = event => {
    const { name, value } = event.target;
    setSelectedPost(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreatePost = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
        fetchPosts();
        setNewPost({ title: '', body: '' });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleSelectPost = post => {
    setSelectedPost(post);
  };

  const handleUpdatePost = () => {
    axios.put(`https://jsonplaceholder.typicode.com/posts/${selectedPost.id}`, selectedPost)
      .then(response => {
        fetchPosts();
        setSelectedPost(null);
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDeletePost = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        fetchPosts();
        if (selectedPost && selectedPost.id === id) {
          setSelectedPost(null);
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>CRUD App</h1>

      <h2>Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id} onClick={() => handleSelectPost(post)}>
            {post.title}
            <button onClick={() => handleDeletePost(post.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <h2>Crear nuevo post</h2>
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={newPost.title}
        onChange={handleInputChange}
      />
      <textarea
        name="body"
        placeholder="Contenido"
        value={newPost.body}
        onChange={handleInputChange}
      />
      <button onClick={handleCreatePost}>Crear</button>

      {selectedPost && (
        <div>
          <h2>Editar post</h2>
          <input
            type="text"
            name="title"
            placeholder="Título"
            value={selectedPost.title}
            onChange={event =>
              handleInputChangeUpdate({
                target: { name: 'title', value: event.target.value },
              })
            }
          />
          <textarea
            name="body"
            placeholder="Contenido"
            value={selectedPost.body}
            onChange={event =>
              handleInputChangeUpdate({
                target: { name: 'body', value: event.target.value },
              })
            }
          />
          <button onClick={handleUpdatePost}>Actualizar</button>
        </div>
      )}
    </div>
  );
}

export default App;
