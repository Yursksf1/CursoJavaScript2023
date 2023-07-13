import React from 'react';
import axios from 'axios';

class App extends React.Component {
  state = {
    posts: [],
    newPost: {
      title: '',
      body: '',
    },
    selectedPost: null,
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.setState({ posts: response.data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      newPost: {
        ...prevState.newPost,
        [name]: value,
      },
    }));
  };

  handleCreatePost = () => {
    const { newPost } = this.state;
    axios.post('https://jsonplaceholder.typicode.com/posts', newPost)
      .then(response => {
        this.fetchPosts();
        this.setState({ newPost: { title: '', body: '' } });
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleSelectPost = post => {
    this.setState({ selectedPost: post });
  };

  handleUpdatePost = () => {
    const { selectedPost } = this.state;
    axios.put(`https://jsonplaceholder.typicode.com/posts/${selectedPost.id}`, selectedPost)
      .then(response => {
        this.fetchPosts();
        this.setState({ selectedPost: null });
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleDeletePost = id => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        this.fetchPosts();
        if (this.state.selectedPost && this.state.selectedPost.id === id) {
          this.setState({ selectedPost: null });
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    const { posts, newPost, selectedPost } = this.state;

    return (
      <div>
        <h1>CRUD App</h1>

        <h2>Posts</h2>
        <ul>
          {posts.map(post => (
            <li key={post.id} onClick={() => this.handleSelectPost(post)}>
              {post.title}
              <button onClick={() => this.handleDeletePost(post.id)}>Eliminar</button>
            </li>
          ))}
        </ul>

        <h2>Crear nuevo post</h2>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={newPost.title}
          onChange={this.handleInputChange}
        />
        <textarea
          name="body"
          placeholder="Contenido"
          value={newPost.body}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleCreatePost}>Crear</button>

        {selectedPost && (
          <div>
            <h2>Editar post</h2>
            <input
              type="text"
              name="title"
              placeholder="Título"
              value={selectedPost.title}
              onChange={event =>
                this.handleInputChange({
                  target: { name: 'title', value: event.target.value },
                })
              }
            />
            <textarea
              name="body"
              placeholder="Contenido"
              value={selectedPost.body}
              onChange={event =>
                this.handleInputChange({
                  target: { name: 'body', value: event.target.value },
                })
              }
            />
            <button onClick={this.handleUpdatePost}>Actualizar</button>
          </div>
        )}
      </div>
    );
  }
}

export default App;