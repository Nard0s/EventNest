import'./Button.css'
function Green_button(props){
    return(
        <div>
            <button className='green'style={{padding:props.padding}}>{props.btn}<i class="fa fa-arrow-right" aria-hidden="true"></i></button>
        </div>
    );
}

export default Green_button;