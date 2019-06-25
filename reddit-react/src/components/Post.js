import React from "react";

const Post = ({ post }) => {
  return (
    <div className="post">
      <div className="votes">
        <div className="upvote">
          <span role="img" aria-label="up vote">
            ⬆️
          </span>
        </div>
        <div className="votecount">{post.votes}</div>
        <div className="downvote">
          <span role="img" aria-label="down vote">
            ⬇️
          </span>
        </div>
      </div>
      <div className="content">
        <div className="title-area">
          <span className="title">#{post.category}</span>
        </div>
        <div className="meta-area">
          <span className="time">
            Submitted by
            <strong>Author name</strong>
          </span>
        </div>
        <div className="body">
          <p> {post.body}</p>
          <img src={post.imageUrl} alt="" />
        </div>

        <div className="link-area" />
      </div>
    </div>
  );
};

export default Post;
