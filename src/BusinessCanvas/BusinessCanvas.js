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
              <div id="KP" className="col-sm-2 col-md-2">
                  <h3> <span id="keyPartners" onClick={props.click}>Key Partners</span> </h3>
                  <ul>
                    <li>
                      Operational partners: {partners[0]}
                    </li>
                    <li>
                      Marketing partners: {partners[1]}
                    </li>
                  </ul>
              </div>

              <div className="col-sm-3">
                <div id="activRes" className="row mr-2 ml-2">
                  <div id="KA" className="col-12 mb-2" onClick={props.click}>
                  <h3> <span id ="keyActivities">Key Activities</span> </h3>
                    {activities}
                  </div> 
                  <div id="KR" className="col-12" onClick={props.click}> 
                    <h3> <span id="keyResources">Key Resources</span> </h3>
                    {resources}
                  </div> 
                </div>
              </div>

              <div id="VP" className="col-sm-2" onClick={props.click}>
                <h3> <span id="valueProposition">Value Proposition</span> </h3>
                {values}
              </div>

              <div className="col-sm-3">
                <div id="activRes" className="row mr-2 ml-2">
                  <div id="CH" className="col-12 mb-2" onClick={props.click}>
                    <h3> <span id="channels">Channels</span> </h3>
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
            
            <div className="col col-auto text-center mr-4">
              
              <label>
                
                <input type="checkbox" name="" />
                <span className="check"></span>
                <p>Step 1</p>
              </label>
            </div>
            <div className="col col-auto text-center mr-4">
              
              <label>
                
                <input type="checkbox" name="" />
                <span className="check"></span>
                <p>Step 2</p>
              </label>
            </div> 
            <div className="col col-auto text-center mr-4">
              
              <label>
                
                <input type="checkbox" name="" />
                <span className="check"></span>
                <p>Step 3</p>
              </label>
            </div> 
            <div className="col col-auto text-center mr-4">
              
              <label>
                
                <input type="checkbox" name="" />
                <span className="check"></span>
                <p>Step 4</p>
              </label>
            </div>
            <div className="col col-auto text-center mr-4">
              
              <label>
                
                <input type="checkbox" name="" />
                <span className="check"></span>
                <p>Step 5</p>
                
              </label>
            </div> 
            <div className="col col-auto text-center mr-4">
              
              <label>
                
                <input type="checkbox" name="" />
                <span className="check"></span>
                <p>Step 6</p>
              </label>
            </div>   
            <div className="col col-auto text-center mr-4">
              
              <label>
                
                <input type="checkbox" name="" />
                <span className="check"></span>
                <p>Step 7</p>
              </label>
            </div>
            <div className="col col-auto text-center mr-4">
              
              <label>             
                <input type="checkbox" name="" />
                
                <span className="check"></span>
                <p>Step 8</p>
              </label>
            </div> 
            <div className="col col-auto text-center mr-4">
              
              <label className="col align-items-center">             
                <input type="checkbox" name="" />
                
                <span className="check"></span>
                Step 9
              </label>
            </div>       

          </div> 
  </div>
  )
}

export default BusinessCanvas;


