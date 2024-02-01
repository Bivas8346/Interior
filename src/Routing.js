import React, { Suspense } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Spinner from 'react-bootstrap/Spinner';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Common/Hader/Header';
import Footer from './Common/Footer/Footer';
// import Store from './Component/Store/Store';
import PNF from './Common/PNF/PNF';
// import Room from './Component/Room/Room';
import Subroom from './Component/Room/Subroom';
import Substore from './Component/Store/substore';
import New from './Component/New/New';
import Roomdetails from './Component/Room/Roomdetails';
import Subonestore from './Component/Store/Subonestore';
import About from './Component/About us/About';
import Signup from './Component/Regtool/Signup';
import Login from './Component/Regtool/Login';
import Cms from './Component/Commercial/Cms';
import Contact from './Component/Contact/Contact';
// import Blog from './Component/Blogs/Blog';
import ProtectedRoutes from './Component/Regtool/Protect';
import Profile from './Component/Regtool/Profile';
import Storedes from './Component/Store/Storedes';


let Store = React.lazy(() => {
  return new Promise((resolve,) => {
    setTimeout(() => resolve(import('./Component/Store/Store')), 2000)
  })
}
);
let Room = React.lazy(() => {
  return new Promise((resolve,) => {
    setTimeout(() => resolve(import('./Component/Room/Room')), 2000)
  })
}
);
let Blog = React.lazy(() => {
  return new Promise((resolve,) => {
    setTimeout(() => resolve(import('./Component/Blogs/Blog')), 2000)
  })
}
);

const Routing = () => {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Box sx={{ width: 1515 }} >
        <Spinner animation="grow" variant="light" />
        <Skeleton />
        <Skeleton animation="wave" />
        <Skeleton animation={false} />
      </Box>}>
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />


          <Route path='Store' element={<Store />} />
          <Route path='Store/sub-store/:store_i' element={<Substore />} />
          <Route path='Store/sub-store/:store_i/subo_store/:store_o' element={<Subonestore />} />




          <Route path='Room' element={<Room />} />
          <Route path='Room/sub-room/:room_i' element={<Subroom />} />

          <Route path='cms' element={<Cms />} />
          <Route path='blog' element={<Blog />} />


          <Route path='reg' element={<Signup />} />
          <Route path='log' element={<Login />} />
          <Route path='pro' element={<Profile />} />


          <Route path='new' element={<New />} />

          <Route element={<ProtectedRoutes />}>
          <Route path='Room/sub-room/:room_i/details/:room_des' element={<Roomdetails />} />
          <Route path='Store/sub-store/:store_i/subo_store/:store_o/storedes/:store_d' element={<Storedes />} />

            <Route path='contact' element={<Contact />} />
          </Route>


          <Route path='*' element={<PNF />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}

export default Routing