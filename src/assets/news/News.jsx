import { Head } from '../components/head/Head'

import React from 'react'
import './news.css'

import nix from '../img/Veranix.png'
import coin from '../img/coin.png'

export default function News() {
  return (
    <div className='container'>
        <Head />
        <div className="cards">
            <div className="card">
                <div className="card-h">
                    <img src={nix} alt="" width={50} />
                    <div className="card-info">
                        <h3>Boost in TGE</h3>
                        <p>Profit per hour</p>
                        <div className="cost">
                            <img src={coin} alt="" />
                            <p>120</p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="card-lv">
                    <div className="lvl">
                        <p>lvl 1</p>
                        <hr />
                        <div className="cost">
                            <img src={coin} alt="" />
                            <p>192</p>22
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
