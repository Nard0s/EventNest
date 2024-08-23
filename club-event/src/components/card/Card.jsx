import './Card.css'
import img from '../img/Screenshot 2024-08-16 221005.png';

import Yellow_button from '../Button/Yellow_button';

function Card(props){
    return(
        <div>   
            <div className="card_container">
                <img src={img} alt="" />
                <h2>{props.title}</h2>
                <p className="description">
                    {props.description}
                </p>
                <div className="btn"><a href=""><Yellow_button  btn='see more '/></a></div>
            </div>
            
            
            
        </div>
    );
}
export default Card;