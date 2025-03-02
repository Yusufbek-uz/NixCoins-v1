import React from 'react'
import './bar.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import NewsPage from '../../news/News';
// import FriendsPage from './';
// import MainPage from './';
// import WalletPage from './';
// import AirDropPage from './';


import nix from '../../../assets/img/Veranix.png'

export function Bar() {
    return (
        <Router>
            <div className="bar-container">
                <div className="menus">
                    <Link to="/news" className="news">
                        <i className="fa-solid fa-newspaper"></i>
                        <h4>News</h4>
                    </Link>
                    <Link to="/friends" className="friend">
                        <i className="fa-solid fa-user-group"></i>
                        <h4>Friends</h4>
                    </Link>
                    <Link to="/" className="menu">
                        <i className="fa-solid fa-house"></i>
                        <h4>Main</h4>
                    </Link>
                    <Link to="/wallet" className="wallet">
                        <i className="fa-solid fa-wallet"></i>
                        <h4>Wallet</h4>
                    </Link>
                    <Link to="/airdrop" className="drop">
                        <img src={nix} alt="" width={40} style={{borderRadius:"50%"}} />
                        <h4>AirDrop</h4>
                    </Link>
                </div>
            </div>

            <Routes>
                <Route path="/news" element={<NewsPage />} />
                {/* <Route path="/" element={<MainPage />} />
                <Route path="/friends" element={<FriendsPage />} />
                <Route path="/wallet" element={<WalletPage />} />
                <Route path="/airdrop" element={<AirDropPage />} /> */}
            </Routes>
        </Router>
    )
}