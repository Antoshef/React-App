import React, { Component } from 'react';
import './Posts.css';
import { Link, Route } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import axios from 'axios';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Antoshef'
                    }
                })
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }  
    
    selectedPostHandler(id) {
        this.setState({selectedPost: id});
    }

    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts
                .map(post => {
                    return (
                        <Link to={'/posts/' + post.id} key={post.id}>    
                            <Post 
                                title ={post.title} 
                                author={post.author} 
                                clicked ={() => this.selectedPostHandler(post.id)}/>
                        </Link>
                    );
                });
            };
        return(
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        );
    };
};

export default Posts;