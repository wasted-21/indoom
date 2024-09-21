import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './reuseable/navbar/main';

//import page
import Home from './page/home/main'
import Comparison from './page/comparison/main'
import Dealer from './page/dealer/main';
import Workshop from './page/workshop/main'
import Market from './page/market/main'
import Error from './page/error'

export default function Main({setThemes}){
    return(
        <>
            {
                <>    
                <BrowserRouter>
                <Navbar  setThemes={setThemes}/>
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/comparison' element={<Comparison/>} />
                        <Route path='/dealer' element={<Dealer/>} />
                        <Route path='/workshop' element={<Workshop/>} />
                        <Route path='/market' element={<Market/>} />

                        <Route path='*' element={<Error/>} />
                    </Routes>
                </BrowserRouter>
                </>
            }
        </>
    );
}