import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar(){

    const [style, setStyle] = useState(false);

    function handleClick(){
        if(style === false){
            setStyle(true)
        }else if(style === true){
            setStyle(false)
        }
    }


    return(
        <div className="navbar">
            <nav className="container">
                <Link to="/" className="site-title text-white font-3">
                    SHIROI$
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={style ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={style ? "item active" : "item display-f align-center"}>
                    <li className="m-1"><Link to="/token">TOKEN</Link></li>
                    <li className="m-1">CLAIM</li>
                    <li className="m-1">AIRDROP</li>
                    <li className="m-1 font-md font-3 text-gray-light-6">STORE<sup className="text-red">soon</sup></li>
                    <li className="m-1 font-md font-3 text-gray-light-6">STAKE<sup className="text-red">soon</sup></li>
                    <li className="m-1 font-md font-3 text-gray-light-6">GAME<sup className="text-red">soon</sup></li>
                    <button className=" m-1 btn btn-white br-md pl-3 pr-3 text-red">1$ = Token</button>
                    <a href="https://pancakeswap.finance/swap?outputCurrency=0x0918700Dd458b3573cb7207063f91219Af88e209" target="_blank" rel="noreferrer" className=" m-1 btn btn-red br-md pl-3 pr-3 font-3 text-white">Buy SHIROI$</a>    
                    <h2 className="text-center mt-5 social-icon">OUR COMMUNITY</h2>
                    <div className="mt-1 display-i text-center social-icon">
                        <a href="https://t.me/shiroiofficial" target="_blank" rel="noreferrer" className="text-red-light-2"><i className="fab fa-telegram fa-2x"></i></a>
                        <a href="https://instagram.com/shiroi_token?utm_medium=copy_link" target="_blank" rel="noreferrer" className="text-red-light-2 ml-1"><i className="fab fa-instagram fa-2x"></i></a>
                        <a href="https://twitter.com/shiroi_token?t=ycLdF1NGN_OudKFYJSRQjQ&s=09" target="_blank" rel="noreferrer" className="text-red-light-2 ml-1"><i className="fab fa-twitter fa-2x"></i></a>
                    </div>
                </ul>
            </nav>
        </div>
    )
}