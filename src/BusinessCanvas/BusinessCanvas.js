import React from 'react';
import InputForm from '../InputForm/InputForm';
import html2canvas from 'html2canvas';
import {saveAs} from 'file-saver';

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
    return <span>{cusRel}</span>
  })

  const cusSegs = props.info.canvas.customerSeg.map(cusSeg => {
    return <p>{cusSeg}</p>
  })

  const costs = props.info.canvas.costStructure.map(cost => {
    return <span>{cost}</span>
  })

  const revenues = props.info.canvas.revenueStream.map(revenue => {
    return <span>{revenue}</span>
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

  function genPdf() {
    html2canvas(document.getElementById("canvas_screen"), {
      useCORS: true
    })
      .then(function (canvas) {
        canvas.toBlob(function (blob) {
          saveAs(blob, "canvas.png");
        }, "image/png", 1);
        })
        .catch(function (err) { console.log(err); });
  };


  return (
  <div className="container-fluid">
    <div id="canvas" className="row row-md-12">
      <div id="canvas_screen" className="col col-md-9">
          <div id="verticalHeader" className="row row-md-12 mb-4">
            <div id="logo" className="col-md-8">
            </div>

            <div className="col-md-4 mt-auto">

                <div className="row">
                  <div className="col-sm-6 col-md-3 m-2 mr-3"><input placeholder="Designer For:"/> </div>
                  <div className="col-sm-6 col-md-3 m-2 mr-3"><input placeholder="By:" /></div>
                  <div className="col-sm-6 col-md-3 m-2"><input placeholder="Date:" /></div>
                </div>

              <div className="row">
              <h2>The Business Model Canvas</h2>
              </div>

            </div>
          </div>

          <div id="verticalFirst" className="row row-md-12 mr-5 ml-5 mb-3">

              <div id="KP" className="col-sm-2 col-md-2">
                      <h3> <span id="keyPartners" onClick={props.click}>Key Partners</span> </h3>
                      <hr/>
                      <h6><font color="darkblue">{partners[0]}</font></h6>
                      {partners[1]}
                      <h6><font color="darkgreen">{partners[2]}</font></h6>
                      {partners[3]}
              </div>

              <div className="col-sm-2">
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

              <div id="VP" className="col-sm-3" onClick={props.click}>
                <h3> <span id="valueProposition">Value Proposition</span> </h3>
                <hr/>
                <h6><font color="navy">{values[0]}</font></h6>
                <p> {values[1]}</p>
                <h6><font color="darkgreen">{values[2]}</font></h6>
                <p> {values[3]}</p>
                <h6> <font color="tomato">{values[4]}</font></h6>
                <p> {values[5]}</p>
                <h6> <font color="darkcyan">{values[6]}</font></h6>
                <p> {values[7]}</p>
              </div>

              <div className="col-sm-3">
                <div id="activRes" className="row mr-2 ml-2">

                  <div id="CH" className="col-12 mb-2" onClick={props.click}>
                    <h3> <span id="channels">Channels</span> </h3>
                    <hr/>

                    <p> <font color="darkcyan">{channels[1]}</font> </p>
                    <p> <font color="navy">{channels[3]}</font> </p>
                  </div>

                    <div id ="CR" className="col-12" onClick={props.click}>
                        <h3> <span id ="customerRel">Customer Relationships</span> </h3>
                        <hr/>
                        <div className="box">
                            <p><font color="darkcyan">{cusRels[0]} </font>{cusRels[1]}{cusRels[2]}</p>
                            <p><font color="tomato">{cusRels[3]} </font>{cusRels[4]}{cusRels[5]}</p>
                            <p><font color="navy">{cusRels[6]} </font>{cusRels[7]}{cusRels[8]}</p>
                            <p><font color="darkblue">{cusRels[9]} </font>{cusRels[10]}{cusRels[11]}{cusRels[12]}</p>
                        </div>

                    <h6> <font color="darkcyan">{channels[0]}</font></h6>
                    <p>{channels[1]}</p>
                    <h6> <font color="tomato">{channels[2]}</font></h6>
                    <p>{channels[3]}</p>

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

            <div id="CS" className="col col-sm-2" onClick={props.click}>
              <h3> <span id="customerSeg">Customer Segments</span> </h3>
              <hr/>

              {cusSegs}
            </div>
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

    <div id="verticalBottom" className="row row-md-12 mt-4 fixed-bottom justify-content-center">

            <div className="col col-auto text-center mr-4">
              <label>
                <input id="keyPartners_chk" type="checkbox" name="" disabled />
                <span className="check"></span>
              </label>
            </div>

            <div className="col col-auto text-center mr-4">
              <label>
                <input id="keyActivities_chk" type="checkbox" name="" disabled />
                <span className="check"></span>
              </label>
            </div>

            <div className="col col-auto text-center mr-4">
              <label>
                <input id="keyResources_chk" type="checkbox" name="" disabled />
                <span className="check"></span>
              </label>
            </div>

            <div className="col col-auto text-center mr-4">
              <label>
                <input id="valueProposition_chk" type="checkbox" name="" disabled />
                <span className="check"></span>
              </label>
            </div>

            <div className="col col-auto text-center mr-4">
              <label>
                <input id="channels_chk" type="checkbox" name="" disabled />
                <span className="check"></span>
              </label>
            </div>

            <div className="col col-auto text-center mr-4">
              <label>
                <input id="customerRel_chk" type="checkbox" name="" disabled />
                <span className="check"></span>
              </label>
            </div>

            <div className="col col-auto text-center mr-4">
              <label>
                <input id="customerSeg_chk" type="checkbox" name="" disabled />
                <span className="check"></span>
              </label>
            </div>

            <div className="col col-auto text-center mr-4">
              <label>
                <input id="costStructure_chk" type="checkbox" name="" disabled />
                <span className="check"></span>
              </label>
            </div>

            <div className="col col-auto text-center mr-4">
              <label className="col align-items-center">
                <input id="revenueStream_chk" type="checkbox" name="" disabled />
                <span className="check"></span>
              </label>
            </div>

            <div id="download" className="row" hidden >
                <div className="col col-6 align-items-center">
                </div>
                <div className="col col-6">
                    <span className="download" onClick={genPdf}><h4>IMAGE/PNG</h4></span>
                    <span className="download" onClick={genPdf}><h4>TEXT/PDF</h4></span>
                </div>
            </div>
        </div>
  </div>
  )
}
export default BusinessCanvas;


