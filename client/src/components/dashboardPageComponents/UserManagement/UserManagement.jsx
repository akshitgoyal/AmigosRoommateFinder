import React, { Component } from 'react'
import './UserManagement.css'
// import Posts from './Posts/Posts'

class UserManagement extends Component {

    // renderPost(posts, start, end){
    //     let renderPost = [];
    //     for (let i = start; i < Math.min(posts.length, end); i++){
    //         let idName = 'Posts' + i
    //         renderPost.push(<td key={idName} className='postWrap'><Posts userInfo={posts[i]}/></td>);
            
    //     }
    //     return renderPost
    // }

    // renderPosts(posts){
    //     let renderPosts = []
    //     for (let i = 0; i <= Math.floor(posts.length/3); i++){
    //         let idName = 'Post' + i
    //         renderPosts.push(<tr key={idName}>{this.renderPost(posts, i*3, i*3 + 3)}</tr>)
    //     }
    //     console.log(">>" + renderPosts)
    //     return renderPosts
    // }

    render() {
        const { posts } = this.props;
        return (
            <div id="postPanel">
                <h2>User Profiles</h2>
                {/* <hr/>
                {posts.length !== 0 ? <table className='postTable'>
                    <tbody>
                        {this.renderPosts(posts)}
                    </tbody>
                </table> : null} */}
            </div>
        )
    }
}

export default UserManagement