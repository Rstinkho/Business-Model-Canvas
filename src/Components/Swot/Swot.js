import React, { Fragment } from 'react';
import ProgressBar from '../BusinessCanvas/Parts/ProgressBar/ProgressBar';
import './Swot.css'
import InputFormSwot from './Parts/InputForm/InputForm';

const swot = ( props ) => {

    return (
        <Fragment>
            
            <div id="canvas" className="row row-md-12" style={{marginLeft: 0, marginRight: 0 }}>

            <div id="canvas_screen" className="col col-md-9" style={{textAlign: '-webkit-center'}}>
                <div className="row mt-5" style={{height: '40%', width: '80%' }}>
                    <div id="strength" className="col-6">
                        <div className="row" style={{height: '20%', width: '100%'}}>
                            <h3><span id="strengths" onClick={props.clickSwot}>Strengths</span></h3>
                        </div>
                        <hr/>
                        <p>{props.info.swot.strength}</p>
                    </div>
                    <div id="weakness" className="col-6">
                            <div className="row" style={{height: '20%', width: '100%'}}><h3><span id="weaknesses" onClick={props.clickSwot}>Weaknesses</span></h3></div>
                            <hr/>
                            <p>{props.info.swot.weakness}</p>
                    </div>
                </div>


                <div className="row ml-5" style={{height: '40%', width: '80%' }}>
                    <div id="opp" className="col-6">
                        <div className="row" style={{height: '20%', width: '100%'}}><h3><span id="opps" onClick={props.clickSwot}>Opportunities</span></h3></div>
                        <hr/>
                        <p>{props.info.swot.opportunity}</p>
                    </div>
                    <div id="threat" className="col-6">
                        <div className="row" style={{height: '20%', width: '100%'}}><h3><span id="threats" onClick={props.clickSwot}>Threats</span></h3></div>
                        <hr/>
                        <p>{props.info.swot.threat}</p>
                    </div>
                </div>
            </div>

            
            <div id="inputForm" className="col col-md-3">
                
                <h2> {props.info.form.title} </h2>
                <InputFormSwot swotState = {props.info.swot} fillSwot = {props.fillSwot} />

                
            </div>
            </div>
            <ProgressBar />
           
        </Fragment>
    )
}

export default swot;