import React from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import FeatureHooks from "./components/Hooks/FeatureHooks";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
      <FeatureHooks/>
      <ContactMe/>
      <Footer/>
    </div>
  );
}

export default App;
