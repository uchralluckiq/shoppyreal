import React, {useState} from "react";
import '../toystore/toystore.css'
const Sign = () => {
    return(
        <div className="sign">
            <form>
                <h3>Login Here</h3>
                <label for="username">Username</label>
                <input type="text" placeholder="Email or Phone" id="username" />
                <label for="password">Password</label>
                <input type="password" placeholder="Password" id="password" />
                <a href="../face.html"><div class="button">Log In</div></a>
            </form>
        </div>
    )
}
 
export default Sign;