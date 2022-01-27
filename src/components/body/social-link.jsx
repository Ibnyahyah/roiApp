import { SocialData } from "./data-road";

const SocialLink=()=>{
    return(
        <ul className="display-column mt-5" style={{position:'fixed',bottom:'0',left:'0',top:'0',right:'1'}}>
            {SocialData.map(({url, icon})=>{
                return<li style={listStyle} key={icon}><a href={url} target="_blank" rel="noreferrer" className="text-blue-light-6"><i className={icon}></i></a></li>
            })}
        </ul>
    )
}
const listStyle ={
    width:'50px',
    height:'50px',
    background:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // borderRadius:'50%'
}
export default SocialLink;