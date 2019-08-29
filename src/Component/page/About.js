import React from 'react'

export default function About() {
    return (
        <React.Fragment>
            <div id="about" className="container">
                <h2>About</h2>
                <p id="presentation">
                    This is a student projet made with React JS and it's a Progressive Web App oriented.
                    <br />
                    Therefore you can install this web app on your mobile phone (Android or Iphone) 
                </p>
                <h2>How to install ?</h2>
                <div className="content-install-instruction">
                    <h3>ANDROID</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt in 
                        doloremque voluptates ipsa recusandae enim accusamus voluptatibus fugiat itaque commodi! 
                        Libero, hic enim! Exercitationem consequuntur dignissimos odio impedit enim harum, placeat libero suscipit, 
                        porro voluptate odit architecto, pariatur maxime ratione?
                    </p>
                </div>
                <div className="content-install-instruction">
                    <h3>IOS</h3>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt in 
                        doloremque voluptates ipsa recusandae enim accusamus voluptatibus fugiat itaque commodi! 
                        Libero, hic enim! Exercitationem consequuntur dignissimos odio impedit enim harum, placeat libero suscipit, 
                        porro voluptate odit architecto, pariatur maxime ratione?
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}
