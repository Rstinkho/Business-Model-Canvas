import React from 'react';
import InputForm from '../InputForm/InputForm';

const BusinessCanvas = (props) => {

  const partners = props.info.canvas.keyPartners.map(partner => {
    return <p>{partner}</p>
  })

  const activities = props.info.canvas.keyActivities.map(activity => {
    return <p>{activity}</p>
  })

  const resources = props.info.canvas.keyResources.map(resource => {
    return <p>{resource}</p>
  })

  const values = props.info.canvas.valueProposition.map(value => {
    return <p>{value}</p>
  })

  const channels = props.info.canvas.channels.map(channel => {
    return <p>{channel}</p>
  })

  const cusRels = props.info.canvas.customerRel.map(cusRel => {
    return <p>{cusRel}</p>
  })

  const cusSegs = props.info.canvas.customerSeg.map(cusSeg => {
    return <p>{cusSeg}</p>
  })

  const costs = props.info.canvas.costStructure.map(cost => {
    return <p>{cost}</p>
  })

  const revenues = props.info.canvas.revenueStream.map(revenue => {
    return <p>{revenue}</p>
  })

  return (

  <div className="container-fluid">
    <div id="canvas" className="row row-md-12">
      <div className="col col-md-9">
          <div id="verticalHeader" className="row row-md-12 mb-4"> 
            <div className="col-md-5">
              <h1>The Business Model Canvas</h1>
            </div>  

            <div className="col-md-7">     
              <div className="row">  
                  <div className="col-sm-6 col-md-3"><label>Designer For:</label><input/> </div>
                  <div className="col-sm-6 col-md-3"><label>By:</label><input /></div>
                  <div className="col-sm-6 col-md-3"><label>Date:</label><input /></div>
                </div>  
            </div>

          </div>
              
          <div id="verticalFirst" className="row row-md-12 mr-5 ml-5 mb-3">
              <div id="keyPartners" className="col-sm-2 col-md-2" onClick={props.click}>
                  <h3>Key Partners</h3>
                  {partners}
              </div>

              <div className="col-sm-3">
                <div id="activRes" className="row mr-2 ml-2">
                  <div id="keyActivities" className="col-12 mb-2" onClick={props.click}>
                    <h3>Key Activities</h3>
                    {activities}
                  </div> 
                  <div id="keyResources" className="col-12" onClick={props.click}> 
                    <h3>Key Resources</h3>
                    {resources}
                  </div> 
                </div>
              </div>

              <div id="valueProposition" className="col-sm-2" onClick={props.click}>
                <h3>Value Proposition</h3>
                {values}
              </div>

              <div className="col-sm-3">
                <div id="activRes" className="row mr-2 ml-2">
                  <div id="channels" className="col-12 mb-2" onClick={props.click}>
                    <h3>Channels</h3>
                    {channels}
                  </div> 
                  <div id ="customerRel" className="col-12" onClick={props.click}> 
                    <h3>Customer Relationships</h3>
                    {cusRels}
                  </div> 
                </div>
              </div>

            <div id="customerSeg" className="col col-sm-2" onClick={props.click}>
              <h3>Customer Segments </h3>
              {cusSegs}
              </div>
          </div>
          
          <div id="verticalSecond" className="row row-md-12 ml-5 mr-5">
            <div id="costStructure" className="col col mr-2" onClick={props.click}>
              <h3>Cost structure</h3>
              {costs}
            </div> 
            <div id="revenueStream" className="col col" onClick={props.click}>
              <h3>Revenue stream</h3>
              {revenues}
            </div>
          </div>
      </div>

      <div id="inputForm" className="col col-md-3">
      <InputForm
      func = {props.fill}
      form = {props} />
      </div>
    </div>  
    <div id="verticalBottom" className="row row-md-12 mt-4 fixed-bottom justify-content-center"> 
            
            <div className="col col-auto">
              <p>Key partners</p>
            </div>
            <div className="col col-auto">
              <p>Key activities</p>
            </div> 
            <div className="col col-auto">
              <p>Key resources</p>
            </div> 
            <div className="col col-auto">
              <p>Value proposition</p>
            </div>
            <div className="col col-auto">
              <p>Channels</p>
            </div> 
            <div className="col col-auto">
              <p>Customer relationships</p>
            </div>   
            <div className="col col-auto">
              <p>Customer segments</p>
            </div>
            <div className="col col-auto">
              <p>Cost structure</p>
            </div> 
            <div className="col col-auto">
              <p>Revenue stream</p>
            </div>       

          </div> 
  </div>
  )
}

export default BusinessCanvas;


