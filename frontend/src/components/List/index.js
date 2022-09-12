import React, { useEffect, useState } from "react";

import { Button, Container, Item } from "./styles";

const List = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/news")
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <Container>
      {posts.map((post) => (
        <Button>
          <Item>{post.subject}</Item>
        </Button>
      ))}
    </Container>
  );
};

export default List;
