function Footer(){
    return(
        <div>
            <footer className="container font-2 text-center mt-2 mb-2">
               <hr className="m-1"/>
               <p>&copy; Copyright {new Date().getFullYear()} || Shiroi Token</p>
            </footer>
        </div>
    )
}
export default Footer;