import React from "react";
import { Footer, Head, Layout, Menu } from "./components";
import ROUTES, { RenderRoutes } from "./routes";

function App() {
  return (
    <>
      <Head title={"Global Education Group - SKKU"} />
      <Layout>
        <Menu />
        <RenderRoutes routes={ROUTES} />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
