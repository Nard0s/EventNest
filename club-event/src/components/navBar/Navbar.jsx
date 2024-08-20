import './Navbar.css'
function Navbar(){
    return(
        <div className='container'>
            <div className="log">
                <a href=""><h1>CE</h1></a>
            </div>
            <ul>
                <li><a href="#">Home <span></span></a></li>
                <li><a href="#">About<span></span></a></li>
                <li><a href="#">Events<span></span></a></li>
                <li><a href="#">Contact<span></span></a></li>
            </ul>
        </div>
    );
}
export default Navbar;