import './SearchBar.css'
function SearchBar(){
    return(
        <div className="container">
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" placeholder='search events......' name='#' />
        </div>
    );
}
export default SearchBar;
