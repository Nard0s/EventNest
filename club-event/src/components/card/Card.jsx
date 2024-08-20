import './Card.css'
import img from '../img/Screenshot 2024-08-16 221005.png';

import Yellow_button from '../Button/Yellow_button';

function Card(props){
    return(
        <div className="container">   
    
            <div className='card'>
                <img src={img} alt="event poster"/>
                <h2>{props.club_name}</h2>
                <div className="text">
                <p>{props.description}.....</p>
                </div>
               
                <Yellow_button btn="see more "/>
                
            </div>
            
            
        </div>
    );
}
export default Card;