import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Pizza/Menu";

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
