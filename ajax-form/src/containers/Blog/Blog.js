import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../components/hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));

class Blog extends Component { 
    state = {
        auth: true
    };

    render () {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact 
                                activeStyle={{color: 'orange', textDecoration: 'underline'}}>
                                Posts</NavLink></li>
                            <li><NavLink to="/new-post">New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1 style={{textAlign: 'center'}}>Not Found!</h1>} />
                    {/* <Redirect from='/' to='/posts' /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;