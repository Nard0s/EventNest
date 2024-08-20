import './Button.css'
function Blue_button(props){
    return(
        <div>
             <button className="blue">{props.btn}<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
    );
}
export default Blue_button;