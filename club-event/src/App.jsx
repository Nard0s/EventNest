import './App.css'
import Event from './Event/Event'
import Club_page from './Club_page/Club_page'
import Navbar from './components/navBar/Navbar'
import Home from './Home/Home'
import Register from './Register/Register'
import SearchBar from './components/SearchBar/SearchBar'
import Blue_button from './components/Button/Blue_button'
import Green_button from './components/Button/Green_button'
import Card from './components/card/Card'
import Add_post from './Add_post/Add_post'
import Member_Info from './Member_Info/Member_Info'
import About from './About/About'
import Admin from './Admin/Admin'
import Admin_login from './Admin_login/Admin_login'
function App() {
  return (
    <>
    <Admin_login/>
      {/* <Admin/>????? */}
      {/* <About/> */}
      <Member_Info/>
      {/* <Add_post/> */}
      {/* <Card/> */}
      {/* <Blue_button/> */}
      {/* <SearchBar/> */}
      {/* <Register/> */}
      {/* <Home/> */}
      {/* <Event/> */}
      {/* <Club_page/> */}
      {/* <Navbar/> */}
    </>
  )
}

export default App
