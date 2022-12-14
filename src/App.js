import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import "./App.css"
import NavbarComponent from "./components/NavbarComponent"
import Signup from './components/Signup'
import Profile from './components/Profile'

function App() {
  return (
    <BrowserRouter>
		  <NavbarComponent />
			<Switch>
			<Route path="/">
					<Signup />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
				<Route path="/profile">
					<Profile />
				</Route>
			</Switch>
    </BrowserRouter>
  );
}

export default App;