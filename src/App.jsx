/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Header />
      <h3>Built using Codespaces! 🥳</h3>
      <p>Follow instructions in README to utilize this template for your site or class.</p>
    </>
  );
};

export default App;

const siteProps = {
  name: "Maxime Lemée",
  title: "Developpeur Web",
  email: "maxime.lemee1@gmail.com",
  gitHub: "https://github.com/Maxlamenace53",
  linkedIn: "https://github.com/Maxlamenace53",
};
