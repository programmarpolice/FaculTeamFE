import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import About from "./About";
import Help from "./Help"; // Create Help component
import Support from "./Support"; // Create Support component
import FAQs from "./FAQs"; // Create FAQs component
import SocialMedia from "./SocialMedia"; // Create Social Media component

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/help" component={Help} />
          <Route path="/support" component={Support} />
          <Route path="/faqs" component={FAQs} />
          <Route path="/social-media" component={SocialMedia} />
          {/* Other routes */}
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
