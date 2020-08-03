import React, { Fragment } from 'react';
import './SwotE.css';
import ProgressBar from '../BusinessCanvas/Parts/ProgressBar/ProgressBar'
import InputFormSwotE from './Parts/InputForm/InputForm';

const swotE = ( props ) => {

    return (
        <Fragment>
            
            <div id="canvas" className="row row-md-12" style={{marginLeft: 0, marginRight: 0 }}>

            <div id="canvas_screen" className="col col-md-9" style={{textAlign: '-webkit-center'}}>
                <div className="row ml-5 mt-4" style={{height: '30%', width: '80%' }}>
                    <div id="org" className="col-4">
                        <div className="row" style={{height: '20%', width: '100%'}}><h3>ORGANISATION</h3></div>
                    </div>

                    <div id="op-o" className="col-4">
                            <div className="row" style={{height: '20%', width: '100%'}}><h3><span id="opportunity_O" onClick={props.clickSwotE}>OPPORTUNITIES-O</span></h3></div>
                            <hr/>
                            <p>{props.info.swotE.opportunity_O}</p>

                    </div>

                    <div id="thr-t" className="col-4">
                            <div className="row" style={{height: '20%', width: '100%'}}><h3><span id="threat_T" onClick={props.clickSwotE}>THREATS-T</span></h3></div>
                            <hr/>
                            <p>{props.info.swotE.threat_T}</p>
                    </div>
                </div>


                <div className="row ml-5" style={{height: '30%', width: '80%' }}>
                    <div id="s-s" className="col-4">
                        <div className="row" style={{height: '20%', width: '100%'}}><h3><span id="strength_S" onClick={props.clickSwotE}>STRENGTHS-S</span></h3></div>
                        <hr/>
                        <p>{props.info.swotE.strength_S}</p>
                    </div>

                    <div id="so-s" className="col-4">
                        <div className="row" style={{height: '20%', width: '100%'}}><h3><span id="so_strategy" onClick={props.clickSwotE}>SO STRATEGIES</span></h3></div>
                        <hr/>
                        <p>{props.info.swotE.so_strategy}</p>
                    </div>

                    <div id="st-s" className="col-4">
                            <div className="row" style={{height: '20%', width: '100%'}}><h3><span id="st_strategy" onClick={props.clickSwotE}>ST STRATEGIES</span></h3></div>
                            <hr/>
                            <p>{props.info.swotE.st_strategy}</p>
                    </div>
                </div>

                <div className="row ml-5" style={{height: '30%', width: '80%' }}>
                    <div id="w-w" className="col-4">
                        <div className="row" style={{height: '20%', width: '100%'}}><h3><span id="weakness_W" onClick={props.clickSwotE}>WEAKNESSES-W</span></h3></div>
                        <hr/>
                        <p>{props.info.swotE.weakness_W}</p>
                    </div>

                    <div id="wo-s" className="col-4">
                        <div className="row" style={{height: '20%', width: '100%'}}><h3><span id="wo_strategy" onClick={props.clickSwotE}>WO STRATEGIES</span></h3></div>
                        <hr/>
                        <p>{props.info.swotE.wo_strategy}</p>
                    </div>

                    <div id="wt-s" className="col-4">
                            <div className="row" style={{height: '20%', width: '100%'}}><h3><span id="wt_strategy" onClick={props.clickSwotE}>WT STRATEGIES</span></h3></div>
                            <hr/>
                            <p>{props.info.swotE.wt_strategy}</p>
                    </div>
                </div>

            </div>
            <div id="inputForm" className="col col-md-3">
                
                <h2> {props.info.form.title} </h2>
                <InputFormSwotE swotEState = {props.info.swotE} fillSwotE = {props.fillSwotE}/>
                
            </div>

            </div>
         
            <ProgressBar />
           
        </Fragment>
    )
}

export default swotE;