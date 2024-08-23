import './Button.css'
function Yellow_button(props){
    return(
        <div>
             <button className="yellow" style={
                {width:props.width,
                height:props.height}
                }>{props.btn}<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
    );
}
export default Yellow_button;