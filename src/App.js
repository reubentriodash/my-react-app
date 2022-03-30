import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import Contact from './pages/contact';
import Blogs from './pages/blogs';
import SignUp from './pages/signup';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		  <Route path='/' exact component={Home} />
	  	<Route path='/about' component={About} />
		  <Route path='/contact' component={Contact} />
		  <Route path='/blogs' component={Blogs} />
		  <Route path='/sign-up' component={SignUp} />
	</Routes>
	</Router>
);
}

export default App;
