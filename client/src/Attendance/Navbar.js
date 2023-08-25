import React,{useContext} from 'react'
import {Link ,useHistory} from 'react-router-dom'
import {useSelector} from "react-redux"
import {logoutUser} from "./actions/user_action"

const NavBar = ()=>{
    
     const history = useHistory()
     
     const currentUser = JSON.parse(localStorage.getItem("currentUser"))
     
    const logoutUserProfile = ()=>{
        localStorage.removeItem('currentUser');
        history.push('/signin')
    }
    return(
        <nav className='navbar navbar-dark' style={{backgroundColor:'#CBD4C2'}}>
        <div className="nav-wrapper blue" style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
           
           <div >
           <Link to={""} className="brand-logo center" 
          style={{color:"black",fontSize:"30px",textDecoration:"none",fontFamily:"Acme",marginLeft:"20px"}}>Student Portal</Link>
           </div>
           {/* <div style={{marginLeft:"60px"}}>
                {currentUser !== null && <><button  onClick={()=> logoutUserProfile()} >logout</button></>}
           </div> */}
        
         
        </div>
      </nav>
    )
}


export default NavBar