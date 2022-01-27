import React from 'react'
import axios from 'axios'
import CopyToClipboard from 'react-copy-to-clipboard';
// import {useLocation} from 'react-router-dom'



const Copybtn =({value})=>{
    const [copy,setCopy] = React.useState(true)
    return(
        <CopyToClipboard text={value}>
            <span onCopy={()=>setCopy(false)}>{copy?"copied":"Copy"}</span>
        </CopyToClipboard>
    )
}

export function Airdrop(){

    const [userData, setUserData] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const address = React.useRef();
    // const location = useLocation();
    // const path = location.pathname.split("/")[2]
    const path = "61dd6000b21c5cf3cabc7c4d";

    

    const submitHandler = async(e) =>{
        e.preventDefault();
        const Data = {
            address: address.current.value,
            userId: path
        }

        if(Data){
            await axios.post(`http://localhost:5000/api/user/${path}/refferal`, Data);
            setUserData(Data)
            localStorage.setItem("userData",JSON.stringify(Data))
            setTimeout(()=>{
                window.location.reload()
            },2000)
       }else{
       }
       if(userData){
           setLoading(false);
       }
    }
    const useraddress = JSON.parse(localStorage.getItem("userData"));
    const addressUrl = `https://localhost:3000/airdrop/user/${useraddress.address}`
    return(
        <>
            {useraddress?
            <div><input type="text" value={addressUrl} readOnly/>
            <button><Copybtn value={addressUrl}/></button>
            <p>http://localhost:500/user/{useraddress.address}</p>
            </div>:
            <>{userData?<p>Successfull</p>:<form onSubmit={submitHandler}><input type="text" ref={address}/>
            <button>{loading?"loading":"submit"}</button></form>}</>
            }
        </>
    )
}