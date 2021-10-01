import './App.css';
import Home from './components/Home'
import Shop from './components/Shop'
import Card from './components/Card'
import Pay from './components/Pay'
import Login from './components/Login'
import { useState, useEffect } from 'react'



import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";



function App() {
  const [products, setProducts] = useState();
  useEffect(async () => {
    const response = await fetch("https://api.npoint.io/6e47eb0c77bfff5b9c52")
    const data = await response.json();
    return setProducts(data);
  },[])

  return (
    <Router>
      <nav className="navbar ">
        <div className="container d-flex">
          <Link className="header-nav-link" style={{ fontWeight: "700" }} to="/">Ecommerce</Link>
          <div className="d-flex nav-space">
            <Link className="header-nav-link text-start" to="/shop">Shop</Link>
            <Link className="header-nav-link text-start" to="/about">About</Link>
            <div className="nav-form-area">
              <input className="nav-input" placeholder="Search" type="text" size="50" />
              <span><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
            </div>

          </div>
          <div className="right-side">
            <Link className="header-nav-link text-start" to="/shopcard">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="20.5" r="1" /><circle cx="18" cy="20.5" r="1" /><path d="M2.5 2.5h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6l1.6-8.4H7.1" /></svg>
            </Link>
            <Link className="header-nav-link text-start" to="/login">Login</Link>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/shop" exact>
          <Shop products={products} />
        </Route>
        <Route path="/card/:id" exact >
          <Card products={products} />
        </Route>
        <Route path="/pay/:id">
          <Pay products={products} />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>


  );
}

export default App;
