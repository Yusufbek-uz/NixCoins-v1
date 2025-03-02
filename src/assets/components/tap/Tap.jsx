// import React, { useState } from 'react';
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { Head } from "../head/Head";

import coin from '../../img/coin.png'
import nix from '../../img/Veranix.png'
import poweri from '../../img/power.png'
import './tap.css'



export function Tap() {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(count);
    const [power, setPower] = useState(10);
    const [tap, setTap] = useState(1);
    const [lvl, setLvl] = useState(1)


    function plus() {
        setPower(power + 3)
    }



    useEffect(() => {
        if (power < 7500) {
            const interval = setInterval(() => {
                setPower(prevPower => prevPower + 3);
            }, 2000);

            return () => clearInterval(interval);
        }
    }, [power]);

    useEffect(() => {
        const taper = document.getElementById('taper');
        if (power > 0) {
            taper.style.filter = "contrast(100%)";
            taper.style.pointerEvents = "auto";
        }
    }, [power]);


    function work() {
        const taper = document.getElementById('taper');
        if (power <= 0) {
            taper.style.filter = "contrast(30%)"
            taper.style.pointerEvents = "none";
        } else {
            const newCount = count + tap;
            setCount(newCount);
            setPower(power - tap)
            if (newCount >= 9 && newCount < 25 && lvl < 2) {
                setLvl(2);
                setTap(tap + 1);
            } else if (newCount >= 25 && newCount < 50 && lvl < 3) {
                setLvl(3);
                setTap(tap + 1);
            } else if (newCount >= 50 && newCount < 75 && lvl < 4) {
                setLvl(4);
                setTap(tap + 1);
            } else if (newCount >= 75 && newCount < 100 && lvl < 5) {
                setLvl(5);
                setTap(tap + 1);
            } else if (newCount >= 100 && newCount < 125 && lvl < 6) {
                setLvl(6);
                setTap(tap + 5);
            } else if (newCount >= 125 && newCount < 150 && lvl < 7) {
                setLvl(7);
                setTap(tap + 1);
            } else if (newCount >= 150 && newCount < 175 && lvl < 8) {
                setLvl(8);
                setTap(tap + 1);
            } else if (newCount >= 175 && newCount < 200 && lvl < 9) {
                setLvl(9);
                setTap(tap + 1);
            } else if (newCount >= 200 && newCount < 500 && lvl < 10) {
                setLvl(10);
                setTap(tap + 1);
            } else if (newCount >= 500 && newCount < 1000 && lvl < 11) {
                setLvl(11);
                setTap(tap + 4);
            } else if (newCount >= 1000 && newCount < 2500 && lvl < 12) {
                setLvl(12);
                setTap(tap + 1);
            } else if (newCount >= 2500 && newCount < 5000 && lvl < 13) {
                setLvl(13);
                setTap(tap + 1);
            } else if (newCount >= 5000 && newCount < 7500 && lvl < 14) {
                setLvl(14);
                setTap(tap + 1);
            } else if (newCount >= 10000 && lvl < 15) {
                setLvl(15);
                setTap(tap + 4);
            }
        }
    }

    return (
        <>
            <Head tap={tap} power={power} lvl={lvl} />
            <div className="balance">
                <img src={coin} alt="" />
                <h1>{count}</h1>
            </div>
            <div className="tapl">
                <motion.img
                    src={nix}
                    alt="Tap"
                    width={300}
                    whileTap={{ scale: 1.1, rotate: 5 }}
                    onClick={() => work()}
                    id="taper"
                    transition={{ duration: 1 }}
                />
            </div>
            <div className="boost">
                <div className="tap-limit">
                    <img src={poweri} alt="" />
                    <h3>{power} / 7500</h3>
                </div>
                <h3><a href="#">Level {lvl}</a></h3>
            </div>
        </>
    )
}