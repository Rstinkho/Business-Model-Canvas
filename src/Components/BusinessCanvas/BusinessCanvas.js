import React, { Fragment } from 'react';
import InputForm from './Parts/InputForm/InputForm';
import ProgressBar from './Parts/ProgressBar/ProgressBar';
import  './BusinessCanvas.css';

const BusinessCanvas = (props) => {

  const partners = props.info.canvas.keyPartners.map(partner => {
    return <p key={{partner}.index}>{partner}</p>
  })

  const activities = props.info.canvas.keyActivities.map(activity => {
    return <p key={activity.length}>{activity}</p>
  })

  const resources = props.info.canvas.keyResources.map(resource => {
    return <p key={resource.length}>{resource}</p>
  })

  const values = props.info.canvas.valueProposition.map(value => {
    return <p key={{value}.index}>{value}</p>
    
  })

  const channels = props.info.canvas.channels.map(channel => {
    return <p key={{channel}.index}>{channel}</p>
  })

  const cusRels = props.info.canvas.customerRel.map(cusRel => {
    return <span key={cusRel.length + 'cr'}>{cusRel}</span>
  })

  const cusSegs = props.info.canvas.customerSeg.map(cusSeg => {
    return <p key={{cusSeg}.index}>{cusSeg}</p>
  })

  const costs = props.info.canvas.costStructure.map(cost => {
    return <span key={cost + "c"}>{cost}</span>
  })

  const revenues = props.info.canvas.revenueStream.map(revenue => {
    return <span key={revenue.length + "r"}>{revenue}</span>
  })



  // html2canvas(target, {
  //   useCORS: true
  // })
  //   .then(function (canvas) {
  //     canvas.UniversalToBlob(function (blob) {
  //       saveAs(blob, "aScreenshot.png");
  //     }, "image/png", 1);
  //   })
  //   .catch(function (err) { console.log(err); });

  return (
    <Fragment>
      
      <div id="canvas" className="row row-md-12" style={{marginLeft: 0, marginRight: 0 }}>
            
            <div id="canvas_screen" className="col col-md-9">
                
                <div id="verticalFirst" className="row row-md-12 mr-5 ml-5 mb-3">
                    <div id="KP" className="col-sm-2 col-md-2">
                        <h3> <span id="keyPartners" onClick={props.click}>Key Partners</span> </h3>
                        <hr/>
                            <h6><font color="darkblue">{partners[0]}</font></h6>
                            {partners[1]}
                            <h6><font color="darkgreen">{partners[2]}</font></h6>
                            {partners[3]}
                    </div>
      
                    <div className="col-sm-3">
                      <div id="activRes" className="row mr-2 ml-2">
                        <div id="KA" className="col-12 mb-2" onClick={props.click}>
                        <h3> <span id ="keyActivities">Key Activities</span> </h3>
                        <hr/>
                          {activities}
                        </div>
                        <div id="KR" className="col-12" onClick={props.click}>
                          <h3> <span id="keyResources">Key Resources</span> </h3>
                          <hr/>
                          {resources}
                        </div>
                      </div>
                    </div>
      
                    <div id="VP" className="col-sm-2" onClick={props.click}>
                      <h3> <span id="valueProposition">Value Proposition</span> </h3>
                      <hr/>
                      <h6><font color="navy">{values[0]}</font></h6>
                       {values[1]}
                      <h6><font color="darkgreen">{values[2]}</font></h6>
                       {values[3]}
                      <h6> <font color="tomato">{values[4]}</font></h6>
                       {values[5]}
                      <h6> <font color="darkcyan">{values[6]}</font></h6>
                       {values[7]}
                    </div>
      
                    <div className="col-sm-3">
                      <div id="activRes" className="row mr-2 ml-2">
                        <div id="CH" className="col-12 mb-2" onClick={props.click}>
                          <h3> <span id="channels">Channels</span> </h3>
                          <hr/>
                          <h6> <font color="darkcyan">{channels[0]}</font></h6>
                           {channels[1]}
                          <h6> <font color="tomato">{channels[2]}</font></h6>
                           {channels[3]}
      
                        </div>
                        <div id ="CR" className="col col-12" onClick={props.click}>
                          <h3> <span id ="customerRel">Customer Relationships</span> </h3>
                          <hr/>
                          <div className="box">
                          <p><font size="2" face="arial" color="darkcyan">{cusRels[1]} </font>{cusRels[2]}{cusRels[3]}</p>
                          <p><font size="2" face="arial" color="tomato">{cusRels[5]} </font>{cusRels[6]}{cusRels[7]}</p>
                          <p><font size="2" face="arial" color="navy">{cusRels[9]} </font>{cusRels[10]}{cusRels[11]}</p>
                          <p><font size="2" face="arial" color="darkgreen">{cusRels[13]} </font>{cusRels[14]}</p>
                          </div>
                      </div>
                    </div>
                    </div>
      
                  <div id="CS" className="col col-sm-2" onClick={props.click}>
                    <h3> <span id="customerSeg">Customer Segments</span> </h3>
                    <hr/>
                    <h6> <font color="darkcyan">{cusSegs[1]}</font></h6>
                    <h6> <font color="tomato">{cusSegs[4]}</font></h6>
                    <h6> <font color="darkcyan">{cusSegs[6]}</font></h6>
                    {cusSegs[7]}
                    <h6> <font color="tomato">{cusSegs[8]}</font></h6>
                    {cusSegs[9]}
                    <h6> <font color="darkcyan">{cusSegs[10]}</font></h6>
                    {cusSegs[11]}
                    </div>
                </div>
      
                <div id="verticalSecond" className="row row-md-12 ml-5 mr-5">
                  <div id="CoS" className="col col mr-2" onClick={props.click}>
                    <h3> <span id="costStructure">Cost structure</span> </h3>
                    <hr/>
                    <div className="box">
                    <p><font size="2" face="arial" color="darkcyan"> {costs[1]} </font>{costs[2]}</p>
                    <p><font size="2" face="arial" color="tomato">{costs[5]} </font>{costs[6]}{costs[7]}</p>
                    <p><font size="2" face="arial" color="navy">{costs[9]} </font>{costs[10]}{costs[11]}</p>
                    <p><font size="2" face="arial" color="darkgreen">{costs[13]} </font>{costs[14]}</p>
                    <p><font size="2" face="arial" color="darkgreen">{costs[16]} </font></p>
                    </div>
                  </div>
                  <div id="RS" className="col col" onClick={props.click}>
                    <h3> <span id="revenueStream">Revenue stream</span> </h3>
                    <hr/>
                    <h6> <font color="darkcyan">{revenues[0]}</font></h6>
                    <p>{revenues[1]}</p>
                    <h6> <font color="tomato">{revenues[2]}</font></h6>
                    <p>{revenues[3]}</p>
                  </div>
                </div>
            </div>
      
            <div id="inputForm" className="col col-md-3">
            <InputForm
            func = {props.fill}
            form = {props} />
            </div>      
          </div>
          <ProgressBar />
  </Fragment>
  )
}
export default BusinessCanvas;