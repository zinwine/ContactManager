import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/layouts/Header'
import Contacts from './components/contacts/Contacts'
import About from './components/pages/About'
import Notfound from './components/pages/404Page'
import Test from './components/test/Test'
import AddContact from './components/contacts/AddContact'
import EditContact from './components/contacts/EditContact'
import { Provider } from './Context'

class App extends Component{
  render(){
      return (
          <Provider>
            <Router>
              <div className="App">
                  <Header branding="Contact Manager" />
                  <div className="container">
                    <Switch>
                      <Route exact path="/" component={Contacts} />
                      <Route exact path="/contact/add" component={AddContact} />
                      <Route exact path="/contact/edit/:id" component={EditContact} />
                      <Route exact path="/about" component={About} />
                      <Route exact path="/test" component={Test} />
                      {/* Not Found Page */}
                      <Route component={Notfound} />
                    </Switch>
                  </div>
              </div>
            </Router>
        </Provider>
      )
  }
}
export default App;
