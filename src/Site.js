import './App.js';
import { useContext } from "react";
import icon from "./human.jpg"


const humans=[
    {
        id:1,
        humanname:"Leonardo Da vinci",
        price:1200,
        instock : true
    },
    {
        id:2,
        humanname:"Paul Hobbins",
        

    },
    {
        id:3,
        humanname:"James Hook",

    },
    {
        id:4,
        humanname:"Barack Obama",

    },
    {
        id:5,
        humanname:"Donald Trumpetti",

    },
    {
        id:6,
        humanname:"Joe Bidenios",

    },
]

function Alertios(){
    alert("Friend request sent")
}
function Site(){
   
    return <div  className="card">
        {
            
        humans.map(item =>(
            <div key={item.id}  className ={"profilecard"}> 
                <p className='profilename'>{item.humanname}</p> 
                <img src = {icon} className = 'image'></img>
                <button className='button1' onclick = {Alertios()}>Send friend request</button>
            </div>   
        ))
        }
    </div>
    }
    
export default Site