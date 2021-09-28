import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavTop from './components/Nav'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <>
      <Router>
        <NavTop />
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App
