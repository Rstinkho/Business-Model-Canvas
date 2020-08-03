import React from 'react';
import './HomeScreen.css';

const homeScreen = ( ) => (
    <div id="canvasHomeScreen" className="row row-md-12" style={{marginLeft: 0, marginRight: 0 }}>

        <div className="col col-md-4" style={{ backgroundImage: `url(${require("./consult.png")})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }} >

        </div>

        <div className="col col-md-4 mt-2 mb-4">
            
            <div id="homeOne" className="row row-md-4 mt-4">
                <div className="col">
                    <h5>Maketing instruments and frameworks</h5>
                    <p>Create, modify and style most of the marketing frameworks, like S.W.O.T, P.E.S.T.E.L, Business Model Canvas, V.R.I.N, Ghannt Chart and others</p>
                    <p>Use it in presentations, assignments, business plans</p>
                    <p>Download your framework as PDF or img</p>
                </div>
            </div>

            <div id="homeTwo" className="row row-md-4">
                <div className="col">
                    <h5>Marketing explanations and tutorials</h5>
                    <p>Not sure how to fill your business canvas? Which framework to use for the project? Get help from explonatory system inside every instrument</p>
                </div>
            </div>

            <div id="homeThree" className="row row-md-4">
                <div className="col">
                    <h5>Services</h5>
                    <p>General marketing consultancy</p>
                    <p>Customized market researches and business plan</p>
                    <p>Tutoring services including help with assignments</p>
                </div>
            </div>

            </div>

        <div className="col col-md-4" style={{ backgroundImage: `url(${require("./graphs.png")})` }} >
            
        </div>    

    </div>
)

export default homeScreen;