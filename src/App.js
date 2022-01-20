import GlobalStyle from './globalStyles'
import { BrowserRouter as Router, Routes as Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignupPage from './pages/SignupPage'
import PricingPage from './pages/PricingPage'

function App() {
  return (
    <Router>
      <GlobalStyle />

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/signup' exact component={SignupPage} />
        <Route path='/pricing' exact component={PricingPage} />
      </Switch>
    </Router>
  )
}

export default App
