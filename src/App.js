import React from "react";
import "./styles/App.scss";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Navbar from "./components/Elements/Navbar";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "react-redux";
import store from "./store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddContact from "./components/contacts/AddContact";
import EditContct from "./components/contacts/EditContact";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route
                  exact
                  path="/contact/addcontact"
                  component={AddContact}
                />
                <Route exact path="/contact/edit/:id" component={EditContct} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
