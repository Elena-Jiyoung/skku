import React from "react";
import { Helmet } from "react-helmet";

const Head = ({ title }) => {
  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <title>{title}</title>
    </Helmet>
  );
};

export default Head;
