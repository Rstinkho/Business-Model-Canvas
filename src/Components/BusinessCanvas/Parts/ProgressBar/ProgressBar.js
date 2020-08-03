import React from 'react';
import {saveAs} from 'file-saver';
import html2canvas from 'html2canvas';
import './ProgressBar.css';

const progressBar = () => {

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
  
        <div id="verticalBottom" className="row row-md-12 fixed-bottom justify-content-center">
            
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

        <div id="download" className="row">
            <div className="col col-6 align-items-center">
                <span className="download" onClick={genPdf}> Download as .png (free)</span>
            </div>
            <div className="col col-6">
                <span className="download" onClick={genPdf}> Continue edit (subscription)</span>
            </div>
        </div>
    </div>
    )}

export default progressBar;