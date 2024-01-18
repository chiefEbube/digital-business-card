import React from "react";
import avatar from "./assets/avatar.png"

export default function Info() {
    return (
        <div className="info">
            <img src={avatar} alt="" />
            <h1>Chief Ebube</h1>
            <em>Frontend Developer</em>

            <a href="mailto:brave.ebube@gmail.com"><button className="email"><i class="fa-solid fa-envelope"></i>Email</button></a>
            <a href="https://www.linkedin.com/in/chiefebube/"><button className="linked"><i class="fa-brands fa-linkedin"></i>LinkedIn</button></a>
        </div>
    )
}