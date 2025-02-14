import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import reportWebVitals from './reportWebVitals';

import App from './App';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUS';


import DashBoard from './Admin/DashBoard';
import CreateEvents from './Admin/CreateEvents';
import ManageEvents from './Admin/ManageEvents';
import EventUpdateForm from './Admin/EventUpdateForm';
import GuestLogin from './components/GuestLogin';
import EventDetails from './Admin/EventDetails';

ReactDOM.render(

  <BrowserRouter>
    <Routes>
      <Route path='/' element={< App />} >
        <Route path='/' element={< Home />} />
        <Route path='/Login' element={<SignIn />} />
        <Route path='/guest-login' element={<GuestLogin />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/contact-us' element={<ContactUs />} />

        {/* <Route element={<ProtectedRoute />}> */}
        <Route path='/events' element={<DashBoard />} />
        <Route path='/event-details/:id' element={<EventDetails />} />
        <Route path='/dashboard' element={<DashBoard />} />
          <Route path="/create-event" element={<CreateEvents />} />
          <Route path="/manage-events" element={<ManageEvents />} />
          <Route path='/update-event/:id' element={<EventUpdateForm />} />
        {/* </Route> */} 
        {/* <Route path='*' element={<PageNotFound />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);


reportWebVitals();








