import logo from './logo.svg';
import './App.css';
import Navbar from'./components/Navbar'
import ProfilePhoto from './components/ProfilePhoto';
import FullName from './components/FullName';
import Address from './components/Address'






function App() {
  return (
   <div>
  <Navbar/>
  <ProfilePhoto/>
  <FullName/>
  <Address/>


   </div>
  );
}

export default App;
