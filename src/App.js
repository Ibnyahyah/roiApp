// import { Airdrop } from './airdrop';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Body from './components/body/body';
// import Footer from './components/footer/footer';
// import Nav from './components/nav/nav';
import Home from './pages/home/home';
import Token from './pages/token/token';

function App() {
  return (
    <Router>
      <Routes>
            {/* <Nav/> */}
            {/* <Body/> */}
            {/* <Footer/> */}
            {/* <Airdrop/> */}
          <Route path="/" element={<Home/>}/>
          <Route path="/token" element={<Token/>}/>
      </Routes>
    </Router>
  );
}

export default App;
