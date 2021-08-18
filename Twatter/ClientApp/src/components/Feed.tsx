import React, { useEffect, useState } from "react";
import "../styles/_Feed.scss"
import {Post, IPost} from "./Post";
import {TweetBox} from "./TweetBox";

export function Feed() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [posts, setItems] = useState<IPost[]>([]);
  
  // copypasta I dont understand a fucking thing xD
  useEffect( () => {
    fetch("api/testmodels")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  const test_posts: IPost[] = [
      {
        displayName: "Elon Musk",
        username: "elonmusk",
        isVerified: true,
        message: "random post",
        imageURL: "https://pbs.twimg.com/media/E5pUX3QVEAMlnU9?format=jpg&name=large",
        avatarURL: "https://pbs.twimg.com/profile_images/1404334078388670466/DgO3WL4S_400x400.jpg",
      },

  ];

  return (
    <div className="Feed">
      <div className="Feed-header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          isVerified={post.isVerified}
          message={post.message}
          avatarURL={post.avatarURL}
          imageURL={post.imageURL}
        />
      ))}
    </div>
  );
}