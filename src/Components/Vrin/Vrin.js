import React, { Fragment } from 'react';
import './Vrin.css';
import ProgressBar from '../BusinessCanvas/Parts/ProgressBar/ProgressBar';
import InputFormVrin from './Parts/InputForm';

const vrin = ( props ) => {

    const style = {
        height: '30%',
        width: '100%',
        backgroundColor: 'white',
        borderRadius: '15%',
        textAlign: 'center'
    }

const activeElement = 'active'

    return (
        <Fragment>
            
            <div id="canvas" className="row row-md-12" style={{marginLeft: 0, marginRight: 0 }}>

            <div id="canvas_screen" className="col col-md-9">
                <div id="verticalFirst" className="row row-md-12 mr-5 ml-5 mb-3">
                    <div id={activeElement} className="col-2">
                        <div className="row" style={{backgroundColor: 'lightskyblue', transform: 'rotate(5deg)'}}>
                            <h1>V</h1>
                            <p>Valuable</p>
                        </div>
                    
                        <div className="row"><p>NO</p></div>
                        <div className="row"><p>YES</p></div>
                        <div className="row"><p>YES</p></div>
                        <div className="row"><p>YES</p></div>
                        <div className="row"><p>YES</p></div>
                        
                    </div>

                    <div className="col-2">
                        <div className="row" style={{backgroundColor: 'salmon', transform: 'rotate(-6deg)'}}>
                            <h1>R</h1>
                            <p>Rare</p>
                        </div>
                        <div className="row"></div>
                        <div className="row"><p>NO</p></div>
                        <div className="row"><p>YES</p></div>
                        <div className="row"><p>YES</p></div>
                        <div className="row"><p>YES</p></div>
                    </div>

                    <div className="col-2">
                        <div className="row" style={{backgroundColor: 'lightgreen', transform: 'rotate(3deg)'}}>
                            <h1>I</h1>
                            <p>Inimitable</p>
                        </div>
                        <div className="row"></div>
                        <div className="row"></div>
                        <div className="row"><p>NO</p></div>
                        <div className="row"><p>YES</p></div>
                        <div className="row"><p>YES</p></div>
                    </div>

                    <div className="col-2">
                        <div className="row" style={{backgroundColor: 'lightcyan', transform: 'rotate(-7deg)'}}>
                            <h1>O</h1>
                            <p>Organized</p>
                        </div>
                        <div className="row"></div>
                        <div className="row"></div>
                        <div className="row"></div>
                        <div className="row"><p>NO</p></div>
                        <div className="row"><p>YES</p></div>
                    </div>

                    <div className="col-4 mt-5">
                        <div className="row-r" style={{backgroundColor: 'lightskyblue'}}>
                            <div className="col-12" style={style}>
                                <p style={{color: 'lightskyblue', fontSize: '18px'}}>VALUABLE</p>
                                <p>{props.vrinState.valuable}</p>
                            </div>
                            <div className="col-12"></div>
                        </div>
                        <div className="row-r" style={{backgroundColor: 'salmon'}}>
                            <div className="col-12" style={style}>
                                <p style={{color: 'salmon', fontSize: '18px'}}>RARE</p>
                                <p>{props.vrinState.rare}</p>
                            </div>
                            <div className="col-12"></div>
                        </div>
                        <div className="row-r" style={{backgroundColor: 'lightgreen'}}>
                            <div className="col-12" style={style}>
                                <p style={{color: 'lightgreen', fontSize: '18px'}}>INIMITABLE</p>
                                <p>{props.vrinState.inimitable}</p>
                            </div>
                            <div className="col-12"></div>
                        </div>
                        <div className="row-r" style={{backgroundColor: 'lightcyan'}}>
                            <div className="col-12" style={style}>
                                <p style={{color: 'lightcyan', fontSize: '18px'}}>ORGANIZED</p>
                                <p>{props.vrinState.organized}</p>
                            </div>
                            <div className="col-12"></div>
                        </div>
                    </div>
                </div>
            </div>

            

            <div id="inputForm" className="col col-md-3">
                <form name="chatform" >
                <h2> {props.title} </h2>
                    <InputFormVrin curentCol={props.curentCol} next={props.next} vrinState={props.vrinState} />
                </form>
            </div>
            </div>
            <ProgressBar />
           
        </Fragment>
    )
};

export default vrin;