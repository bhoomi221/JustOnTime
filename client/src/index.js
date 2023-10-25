import React from 'react'
import ReactDOM from 'react-dom/client'
import { render } from 'react-dom';
import reportWebVitals from './reportWebVitals'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom"
import { HashRouter } from "react-router-dom";
import Login from './pages/user/login.jsx'
import Signup from "./pages/user/signup.jsx";
import SendResetLink from "./pages/resetPassword/sendResetLink"
import ResetPassword from "./pages/resetPassword/resetPassword"
import ResetSuccessful from "./pages/resetPassword/resetSuccessful"
import ResetEmail from "./pages/user/customer/changeEmail/resetEmail"
import CustomerVerifyEmail from './pages/user/verification/verifyEmail/verifyEmail.jsx'
import CustomerVerificationRequired from './pages/user/verification/verificationRequired/verificationRequired.jsx'
import CustomerInfo from './pages/user/customer/customerInfo/customerInfo.jsx'
import CustomerHome from "./pages/user/customer/home/CustomerHome";
import OrganizerMain from './pages/user/organizer/main/main.jsx'
import Header from './components/header/Header'
import { store } from './store.js'
import {Provider} from 'react-redux'
import Search from './pages/user/customer/search/Search'
import AdminDashboard from './pages/admin/dashboard'
import EventInfo from './pages/event/info/eventInfo'
import OrganizerSignup from "./pages/user/organizer/register/OrganizerSignup";
import CreateEvent from './pages/event/createEvent/createEvent'

import 'bootstrap/dist/css/bootstrap.css'
import './stylesheet.css'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";


export default function App() {
  return (
  <>
      <Routes>
        <Route exact path="/" element={<CustomerHome />} />
        <Route exact path="/personal-info/" element={<CustomerInfo />} />
        <Route exact path="login/" element={<Login />} />
        <Route exact path="/signup/" element={<Signup />} />
        <Route path="dashboard" element={<CustomerHome />} />
        <Route path="reset-link" >
          <Route path=":changed" element={<SendResetLink />}/>    
        </Route>
        <Route path="reset-successful" >
          <Route path=":changed" element={<ResetSuccessful />}/>    
        </Route>
        <Route path="resetpassword" >              
          <Route path=":token" >
            <Route path=":id" element={<ResetPassword />} />
          </Route>
        </Route>
        <Route path="resetemail" >              
              <Route path=":token" >
                <Route path=":id" element={<ResetEmail />} />
              </Route>
        </Route>
        <Route path="event">
          <Route path=":eventId" element={<EventInfo/>} />
        </Route>
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="customer">
          <Route path="verification-required" element={<CustomerVerificationRequired />} />
          <Route path="verifyemail">              
            <Route path=":email">
              <Route path=":token" element={<CustomerVerifyEmail />} />
            </Route>
          </Route>
        </Route>
        <Route path="organizer">
            <Route path = "" element={<OrganizerMain/>}/>
            <Route path="signup" element={<OrganizerSignup/>} />
            <Route path="createEvent" element={<CreateEvent/>} />
        </Route>
        <Route path = "search"  element={<Search/>}/>
      </Routes>
  </>
  );
}

//const root = ReactDOM.createRoot(document.getElementById('root'));
render(
  <Provider store={store}>
    <HashRouter>
      <Header />
      <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={true}
            pauseOnFocusLoss
            pauseOnHover
      />
      <App />
    </HashRouter>
     
  </Provider>,document.getElementById('root') );

reportWebVitals();

