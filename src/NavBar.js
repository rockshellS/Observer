import React from "react"
import NavPhoto from "./assets/music.jpg"

const NavBar = () => {
    return(
        <div className="nav--background">
            <button className="nav--btn" >Profile</button>
            <button className="nav--btn">Music</button>
            <button className="nav--btn">Contact</button>
        </div>
    )
}

export default NavBar