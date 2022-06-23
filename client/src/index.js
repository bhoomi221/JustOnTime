import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from './pages/user/login.jsx'
import Signup from "./pages/user/signup.jsx";
<<<<<<< HEAD
import CustomerVerifyEmail from './pages/user/verification/verifyEmail/verifyEmail.jsx'
import CustomerVerificationRequired from './pages/user/verification/verificationRequired/verificationRequired.jsx'
import CustomerInfo from './pages/user/customer/customerInfo/customerInfo.jsx'
import CustomerHome from "./pages/user/customer/home/CustomerHome";
=======
import OrgVerifyEmail from './pages/user/organizer/verifyEmail/verifyEmail.jsx'
import OrgVerificationRequired from './pages/user/organizer/verificationRequired/verificationRequired.jsx'
import CustomerVerifyEmail from './pages/user/verifyEmail/verifyEmail.jsx'
import CustomerVerificationRequired from './pages/user/verificationRequired/verificationRequired.jsx'
import CustomerInfo from './pages/user/customerInfo/customerInfo.jsx'
>>>>>>> dev
import Header from './components/header/Header'
import { store } from './store.js'
import {Provider} from 'react-redux'

import 'bootstrap/dist/css/bootstrap.css'
import './stylesheet.css'

export default function App() {
  return (
  <>
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="personal-info" element={<CustomerInfo />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="dashboard" element={<CustomerHome />} />
            <Route path="customer">
              <Route path="verification-required" element={<CustomerVerificationRequired />} />
              <Route path="verifyemail">              
                <Route path=":email">
                  <Route path=":token" element={<CustomerVerifyEmail />} />
                </Route>
              </Route>
            </Route>
        </Routes>
    </Router>
  </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();

