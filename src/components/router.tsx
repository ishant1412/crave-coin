import  { memo } from 'react';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Dashboard from './dashboard';


import Landing from './landing';
import Scan from './scan';
import Rewards from './rewards';
import Profile from './profile';
import Layout from './layout';
import ScanTest from './scan-test';
const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing></Landing>}  ></Route>
      <Route path='/' element={ <Layout></Layout>} >
         
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path='/scan' element={<Scan></Scan>} />
         <Route path='/rewards' element={<Rewards></Rewards>} />
         <Route path='/profile' element={<Profile></Profile>} />
         <Route path='/scan-test'element={<ScanTest></ScanTest>}/>
         </Route>
       
        </Routes></BrowserRouter>
  );
};

export default memo(Router);