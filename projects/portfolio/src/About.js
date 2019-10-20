import React from 'react'


const About = () => {
    return(
        <div>
            <div className = "about" >
                <img src = {require("./assets/picture.JPG")} className = "image" alt = "headshot" /> 
                <span className = "about-text">
                    I am a web developer with an electronics background. I have experience with JavaScript, HTML, CSS, React, and databases including MongoDB. I also have experience programming highly sensitive electronics. I have great problem solving skills and an eye for detail. 
                    <br/>
                    My user-side experience with large data management programs, such as enterprise resource planning, inventory management systems, and other logistics software gives me a great insight into how data managment should work. I know how frustrating these programs can be, and I also know how to create a great user experience.  
                    <br/>
                    <br/>
                    Contact me today and I will put these skills to work for you! 
                </span>
                <span className = "about-text">

                </span>

            </div>

        </div>
    )
}

export default About