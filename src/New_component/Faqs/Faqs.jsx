import { useRef, useState } from "react"
import { FaqsData } from "./dummy";

export default function Faqs(){

    const [open, setOpen] = useState(false);
    const contentRef = useRef()
    
    function OpenFaq(e){
        if(open === false){
            setOpen(true);
        }else if(open === true){
            setOpen(false);
        }
    }
    
    return(
        <div className="container">
            {FaqsData.map(({header,content},index)=>(
                <div className={`card p-0 mb-2 ${open === true ?'pb-1':null}`}>
                    <div className="card bg-red-light-7 display-f justify-space-between align-center" onClick={OpenFaq}>
                        <h1 className="ml-1">{header}</h1>
                        <i className="mr-1 font-3 text-white" style={{cursor:'pointer'}}>{open === true?'Close':'Open'}</i>
                    </div>
                    {open === true?<p className="display-f justify-center mt-1 p-1" ref={contentRef}>{content}</p>:null}
                </div>
            ))}
        </div>
    )
}