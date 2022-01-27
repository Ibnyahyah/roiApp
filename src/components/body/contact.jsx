import { useRef, useState } from 'react';
import emailjs from 'emailjs-com'

function Contact(){

    const [text, setText] = useState()
    
    const REACT_APP_YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
    const REACT_APP_YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
    const REACT_APP_YOUR_USER_ID = process.env.REACT_APP_YOUR_USER_ID;

    const form = useRef()

    function submitHandler(e){
        e.preventDefault();
        emailjs.sendForm(REACT_APP_YOUR_SERVICE_ID, REACT_APP_YOUR_TEMPLATE_ID, form.current, REACT_APP_YOUR_USER_ID)
            .then((result) => {
                setText('Your message was send Successfully')
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setText(`Opps! an error occur ${error.text}`)
            });
        };
    return(
        <div className="card bg-white contact">
            <p>Let us know if you have some advice for Shiroi Dev.</p>
            {text? <p className="text-center mt-1 mb-1 text-green">Your message was send Successfully</p> :<form ref={form} onSubmit={submitHandler}>
                <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Surname Firstname" name="name" min="4" required/>
                <label htmlFor="email">Email </label>
                    <input type="email" id="email" placeholder="example@gmail.com" name="email" min="10" required/>
                <label htmlFor="text">Message</label>
                    <textarea id="text" placeholder="Message content" name="message" min="20" required></textarea>
                <button className="btn mb-1">Send</button>
            </form>}
        </div>
    )
}
export default Contact;