// Dependencies
import React, { Component } from 'react';
import timeAgo from 'node-time-ago';

// Utils
import { isFirstRender } from '../../../shared/utils/data';

// Styles
import styles from './Posts.scss';

class Posts extends Component {
  render() {
    const { posts } = this.props;

    if (isFirstRender(posts)) {
      return null;
    }

    return (
      <div className={styles.posts}>
        <div className="header">
          <div className="title">
            <strong>Blog</strong>
          </div>
        </div>

        {posts && posts.map(post =>
          <div key={post.id} className="post">
            <p>
              <span className="id">{post.id}</span> {post.title}{' '}<small>(by {post.author})</small>
            </p>

            <small className="details">
              {timeAgo(post.date)}
            </small>
          </div>
        )}
      </div>
    );
  }
}

export default Posts;
