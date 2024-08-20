import './SearchBar.css'
function A_searchBar(){
    return(
        <div className="container">
            <input type="text" placeholder='search events......' name='#' />
            <i class="fa fa-search" aria-hidden="true"></i>
        </div>
    );
}
export default A_searchBar;