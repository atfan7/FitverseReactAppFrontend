
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import 'bootstrap-icons/font/bootstrap-icons.css';


import Header from './FitZen/Header';
import Footer  from "./FitZen/Footer";

import Routing from './FitZen/Routing';

import { createContext, useState } from 'react';


export const Store=createContext();













function App() {

  const [token,setToken] = useState("");
  return (
   <main className='container-fluid p-0'>

    

    

    <Store.Provider value={[token,setToken]}>
    
    <Header />
    <Routing />
    
    <Footer />  

    </Store.Provider> 

    

    

  
   </main>
      
    )
    
  
}

export default App;
