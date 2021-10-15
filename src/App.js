import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Home from './Main/Home/Home'
import Courses from './Main/Courses/Courses'
import Hiring from './Main/Hiring/Hiring'

function App() {
  return (
    <div className = 'page' >
      <Router>
        <Header />
        <Switch>
          <Route exact path  = '/' component={Home} />
          <Route exact path  = '/courses' component={Courses} />
          <Route exact path  = '/hiring' component={Hiring} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
