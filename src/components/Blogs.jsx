import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import BlogDetails from "./BlogDetails";

export default function Blogs() {
  const { posts, loading } = useContext(AppContext);

  return (
    <div className="blogs-container">
      {loading ? (
        <div className="loading-container">
          <p className="loading-text">Loading</p>
        </div>
      ) : posts.length === 0 ? (
        <div className="no-blogs-container">
          <p className="no-blogs-text">No Blogs Found!</p>
        </div>
      ) : (
        posts.map((post) => (
          <BlogDetails key={post.id} post={post} />
        ))
      )}
    </div>
  );
}
