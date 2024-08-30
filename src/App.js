//import Parent from "./components/parentChild/Parent";
//import ChildOne from "./components/optimization/ChildOne"
//import ParentOne from "./components/optimization/ParentOne"
//import GrandParent from "./components/optimization/GrandParent";
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { Route, Routes } from "react-router-dom";
import NavBar from "./reactQuery/navBar/NavBar";
import Home from "./reactQuery/pages/Home";
import Users from "./reactQuery/pages/Users";
import Profile from "./reactQuery/pages/profile";
import Login from "./reactQuery/pages/login";

import RQusers from "./reactQuery/pages/RQusers";

import { QueryClientProvider, QueryClient  } from 'react-query';
import { ReactQueryDevtools} from 'react-query/devtools'

//import ParentContext from "./components/useContext/ParentContext";

//import CountMemo from "./components/useMemo/CountMemo";

//import ParentThree from "./components/IncorrectOptimization/ParentThree";
//import ParentComponent from "./components/useCallBack/ParentComponent"
//import ContextParent from "./components/context/ContextParent";

const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient} >

    <div 
    //className="App"
    >
      {/* <h1>App JS Heading</h1> */}
      {/* <Parent /> */}
      {/* <ParentOne>
        <ChildOne />
      </ParentOne> */}
      {/* <GrandParent /> */}
      {/* <ParentThree /> */}
      {/* <ContextParent /> */}
      {/* <ParentComponent /> */}
      {/* <CountMemo /> */}
      {/* <ParentContext /> */}
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="RQusers" element={<RQusers />} />
        <Route path="profile" element={<Profile />} />
        <Route path="login" element={<Login />} />
      </Routes>
      
      <h1>React Query</h1>

    </div>
      <ReactQueryDevtools initialIsOpen={false} position='botton-right' />
      </QueryClientProvider>
  );
}

export default App;
