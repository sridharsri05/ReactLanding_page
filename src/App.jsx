import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import AboutUs from './components/pages/AboutUs'
import ContactUs from './components/pages/ContactUs'

import './App.css';

function App() {
  return (
    <div className="body-wrap">
      <Router>
        <Layout>
          <Routes>
            <Route path={'/AboutUs'} element={<AboutUs />}></Route>
            <Route path={'/ContactUs'} element={<ContactUs />}></Route>
            <Route path={'/'} element={<Home />}></Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
