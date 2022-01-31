import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const CopyClipboard = ({value}) =>{
    const [copied, setCopied] = React.useState(false)
    return(
        <CopyToClipboard text={value}>
            <button className="btn btn-white br-md pl-2 pr-2 pt-1 text-black address" onCopy={()=>setCopied(true)}>{copied?"Contract address Copied":"0x0918700Dd458b3573cb7207063f91219Af88e209"}</button>
        </CopyToClipboard>
    )
}
export default CopyClipboard;
// const CopyClipboard = ({value}) =>{
//     const [copied, setCopied] = React.useState(false)
//     return(
//         <CopyToClipboard text={value}>
//             <p onCopy={()=>setCopied(true)}>{copied?"Copied":"<i className="fas fa-copy"></i>"}</p>
//         </CopyToClipboard>
//     )
// }
// export default CopyClipboard;