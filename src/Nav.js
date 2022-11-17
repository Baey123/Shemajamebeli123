import facebook from './facebook.png'
function Nav(){
    return(
    <div className='EntireSite'>
        <nav >
            <img src = {facebook} className = 'facebook'></img>
                        <ul>
                        <li>Home</li>
                        <li>Conact</li>
                        <li>About</li>
                    </ul> 
                  
                          
            </nav>
           
    </div>
    )
}
export default Nav;