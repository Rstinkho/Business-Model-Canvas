import React from 'react';
import $ from 'jquery';
import './InputForm.css';

const form = (props) => {

    $(document).ready(function() {

        // variables for DOM manipulation with input form
        // 1. customer's relationships
        var wrapper = $("#transaction");
        var wrapper2 = $("#longterm");
        var wrapper3 = $("#community");
        var wrapper4 = $("#personal");
        var staticOne = $("#static_1");
        var staticTwo = $("#static_2");
        var staticThree = $("#static_3");
        var staticFour = $("#static_4");
        // 2. customer's segments
        var oneSidedStatic = $("#oneSided");
        var oneSidedStatic_1 = $("#oneSided_1");
        var twoSidedStatic = $("#twoSided");
        var twoSidedStatic_1 = $("#twoSided_1");
        // 3. cost structure
        var wrapper_cs  = $("#hcapital");
        var wrapper2_cs = $("#inventory");
        var wrapper3_cs = $("#technology");
        var wrapper4_cs = $("#other");
        var staticOne_cs = $("#static_1cs");
        var staticTwo_cs = $("#static_2cs");
        var staticThree_cs = $("#static_3cs");
        var staticFour_cs = $("#static_4cs");

        var x = $("#download");

        if  (
                ($('#keyPartners_chk').is(":checked")) &&
                ($('#keyActivities_chk').is(":checked")) &&
                ($('#keyResources_chk').is(":checked")) &&
                ($('#valueProposition_chk').is(":checked")) &&
                ($('#channels_chk').is(":checked")) &&
                ($('#customerRel_chk').is(":checked")) &&
                ($('#customerSeg_chk').is(":checked")) &&
                ($('#costStructure_chk').is(":checked")) &&
                ($('#revenueStream_chk').is(":checked"))
            )
                {
                  $(x).removeAttr('hidden')
                }



        // jQuery functions for removing unneccessary elements of canvas

        // 1. customer's relationships
        $(wrapper).on("click",".removeField", function(e){
            e.preventDefault(); $(wrapper).attr('hidden', true);
            $(staticOne).val(null);
            $('#addTrans').show();
        })
        $('#addTrans').click(function(e) {
            e.preventDefault(); $(wrapper).removeAttr('hidden');
            $(staticOne).val("TRANSACTIONAL:");
            $('#addTrans').hide();
        })

        $(wrapper2).on("click",".removeField_2", function(e){
            e.preventDefault(); $(wrapper2).attr('hidden', true);
            $(staticTwo).val(null);
            $('#addLong').show();
          })
        $('#addLong').click(function(e) {
            e.preventDefault(); $(wrapper2).removeAttr('hidden');
            $(staticTwo).val("LONG-TERM:");
            $('#addLong').hide();
        })

        $(wrapper3).on("click",".removeField_3", function(e){
            e.preventDefault(); $(wrapper3).attr('hidden', true);
            $(staticThree).val(null);
            $('#addComm').show();
          })
        $('#addComm').click(function(e) {
            e.preventDefault(); $(wrapper3).removeAttr('hidden');
            $(staticThree).val("COMMUNITY:");
            $('#addComm').hide();
        })

        $(wrapper4).on("click",".removeField_4", function(e){
            e.preventDefault(); $(wrapper4).attr('hidden', true);
            $(staticFour).val(null);
            $('#addPers').show();
        })
        $('#addPers').click(function(e) {
            e.preventDefault(); $(wrapper4).removeAttr('hidden');
            $(staticFour).val("PERSONAL:");
            $('#addPers').hide();
        })


        // 2. customer's segments
        $(oneSidedStatic).on("click",".removeField", function(e){
            e.preventDefault(); $(oneSidedStatic).attr('hidden', true);
            $(oneSidedStatic_1).val(null);
            $('#addOneSided').show();
        })
        $('#addOneSided').click(function(e) {
            e.preventDefault(); $(oneSidedStatic).removeAttr('hidden');
            $(oneSidedStatic_1).val("one-sided");
            $('#addOneSided').hide();
        })

        $(twoSidedStatic).on("click",".removeField_2", function(e){
            e.preventDefault(); $(twoSidedStatic).attr('hidden', true);
            $(twoSidedStatic_1).val(null);
            $('#addTwoSided').show();
        })
        $('#addTwoSided').click(function(e) {
            e.preventDefault(); $(twoSidedStatic).removeAttr('hidden');
            $(twoSidedStatic_1).val("two-sided");
            $('#addTwoSided').hide();
        })

        // 3. cost structure
        $(wrapper_cs).on("click",".removeFieldcs", function(e){
            e.preventDefault(); $(wrapper_cs).attr('hidden', true);
            $(staticOne_cs).val(null);
            $('#addHC').show();
        })
        $('#addHC').click(function(e) {
            e.preventDefault(); $(wrapper_cs).removeAttr('hidden');
            $(staticOne_cs).val("Human Capital:");
            $('#addHC').hide();
        })

        $(wrapper2_cs).on("click",".removeField_2cs", function(e){
            e.preventDefault(); $(wrapper2_cs).attr('hidden', true);
            $(staticTwo_cs).val(null);
            $('#addInv').show();
        })
        $('#addInv').click(function(e) {
            e.preventDefault(); $(wrapper2_cs).removeAttr('hidden');
            $(staticTwo_cs).val("Inventory:");
            $('#addInv').hide();
        })

        $(wrapper3_cs).on("click",".removeField_3cs", function(e){
            e.preventDefault(); $(wrapper3_cs).attr('hidden', true);
            $(staticThree_cs).val(null);
            $('#addTech').show();
        })
        $('#addTech').click(function(e) {
            e.preventDefault(); $(wrapper3_cs).removeAttr('hidden');
            $(staticThree_cs).val("Technology:");
            $('#addTech').hide();
        })

        $(wrapper4_cs).on("click",".removeField_4cs", function(e){
            e.preventDefault(); $(wrapper4_cs).attr('hidden', true);
            $(staticFour_cs).val(null);
            $('#addOther').show();
        })
        $('#addOther').click(function(e) {
            e.preventDefault(); $(wrapper4_cs).removeAttr('hidden');
            $(staticFour_cs).val("Other:");
            $('#addOther').hide();
        })
      });

    if (props.form.info.canvas.currentId === "keyActivities") {
        return (
            <form name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>#{props.form.info.canvas.currentId}</h4>
            <p>What do you need to accomplish for your business to be operational? </p>

                <div className="input-box">
                    <input id="A1" defaultValue="" autoComplete="off" type="text" name="mytext" placeholder="add activities" />
                </div>

                <input type="submit"/>

            </form>
        )
    } else if (props.form.info.canvas.currentId === "keyPartners") {
        return (
            <form name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>#{props.form.info.canvas.currentId}</h4>

                <div className="input-box">
                    <input type="text" value="Operational partners:" disabled></input>
                    <input className="P1" type="text" name="mytext" defaultValue="" autoComplete="off" placeholder="add operational partner" />
                </div>

                 <div className="input-box">
                    <input type="text" defaultValue="Marketing partners:"  disabled></input>
                    <input id="P2" type="text" name="mytext" autoComplete="off" defaultValue=""  placeholder="add marketing partner" />
                </div>

                <input type="submit"/>
            </form>
        )
    } else if (props.form.info.canvas.currentId === "keyResources") {
        return (
            <form name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>#{props.form.info.canvas.currentId}</h4>
                <div className="input-box">
                <p>What key suppliers/resources does your business model require?</p>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add resources" />
                </div>

                <input type="submit"/>

            </form>
        )
    } else if (props.form.info.canvas.currentId === "valueProposition") {
        return (
            <form name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>#{props.form.info.canvas.currentId}</h4>
                <div className="input-box">
                <p>What is the problem you are solving?</p>
                    <input type="text" defaultValue="Problems/needs:"  hidden></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue=""  placeholder="add problems/needs" />
                </div>

                <div className="input-box">
                <p>What is the unique selling point of your product?</p>
                    <input type="text" defaultValue="USP:"  hidden></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add USP" />
                </div>

                <div className="input-box">
                <p>What are the features that macth your customers needs?</p>
                    <input type="text" defaultValue="Features:"  hidden></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add features" />
                </div>

                <div className="input-box">
                <p>How can you summarize the above into a 1-2 sentences tagline for your business?</p>
                    <input type="text" defaultValue="Summary:" disabled hidden></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="summarize it (optional)" />
                </div>

                <input type="submit"/>

            </form>
        )
    }  else if (props.form.info.canvas.currentId === "channels") {
        return (
            <form name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>#{props.form.info.canvas.currentId}</h4>
                <div className="input-box">
                    <input type="text" value="Distribution channels:" disabled></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add channel" />
                </div>
                <div className="input-box">
                    <input type="text" value="Marketing channels:" disabled></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add channel" />
                </div>

                <input type="submit"/>

            </form>
        )
    }  else if (props.form.info.canvas.currentId === "customerRel") {
        return (
            <form className="hola" name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>#{props.form.info.canvas.currentId}</h4>
            <p>What kind of relationship do you have with your customers? Add all that applies</p>

            <div className="input-box">
            <button type="button" className="btn-add" id="addTrans">Add transactional</button>
            </div>
            <div className="input-box" id ="transaction" hidden>
                    <input type="text" id="static_1" value="" disabled></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add description" /> <button className="removeField">X</button>
            </div>

            <div className="input-box">
            <button type="button" className="btn-add" id="addLong">Add longterm</button>
            </div>
            <div className="input-box" id="longterm" hidden>
                    <input type="text" id="static_2" value="" disabled></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add description" /> <button className="removeField_2">X</button>
            </div>

            <div className="input-box">
             <button type="button" className="btn-add" id="addComm">Add community</button>
            </div>
            <div className="input-box" id="community" hidden>
                    <input type="text" id="static_3" value="" disabled></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add description" /> <button className="removeField_3">X</button>
            </div>

            <div className="input-box">
            <button type="button" className="btn-add" id="addPers">Add personal</button>
            </div>
            <div className="input-box" id="personal" hidden>
                    <input type="text" id="static_4" value="" disabled></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add description" /> <button className="removeField_4">X</button>
            </div>

                <input type="submit"/>
            </form>
        )
    } else if (props.form.info.canvas.currentId === "revenueStream") {
        return (
            <form name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>#{props.form.info.canvas.currentId}</h4>
                <div className="input-box">
                <p>What is your primary revenue source</p>
                    <input type="text" value="Primary revenue source:" hidden disabled></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add source" />
                </div>
                <div className="input-box">
                <p>What is your secondary revenue source</p>
                    <input type="text" value="Secondary revenue source:" hidden disabled></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add source" />
                </div>

                <input type="submit" />
            </form>
        )
    }  else if (props.form.info.canvas.currentId === "customerSeg") {
        return (
            <form className="hola" name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>#{props.form.info.canvas.currentId}</h4>
            <p>Give information about the customer segments</p>

            <div className="input-box">
            <button type="button" className="btn-add" id="addOneSided">Add one-sided</button>
            </div>
            <div className="input-box" id ="oneSided" hidden>
                    <input type="text" id="oneSided_1" value="" disabled></input>
                    <button className="removeField">X</button>
            </div>

            <div className="input-box">
            <button type="button" className="btn-add" id="addTwoSided">Add two-sided</button>
            </div>
            <div className="input-box" id="twoSided" hidden>
                    <input type="text" id="twoSided_1" value="" disabled></input>
                    <button className="removeField_2">X</button>
            </div>

            <div className="input-box">
            <p>Who is your primary target segment?</p>
            <input type="text" defaultValue="primary target segment" disabled hidden></input>
            <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add source" />
            </div>

            <div className="input-box">
            <p>Who is your secondary target segment?</p>
            <input type="text" defaultValue="secondary target segment" disabled hidden></input>
            <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add source" />
            </div>

            <div className="input-box">
            <p>Which is your primary target market?</p>
            <input type="text" defaultValue="target market" disabled hidden></input>
            <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add source" />
            </div>

            <input type="submit" />
            </form>
        )
    } else if (props.form.info.canvas.currentId === "costStructure") {
        return (
            <form className="hola" name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>#{props.form.info.canvas.currentId}</h4>
            <p>What is your primary business cost?</p>

            <div className="input-box">
            <button type="button" className="btn-add" id="addHC">Add human capital</button>
            </div>
            <div className="input-box" id ="hcapital" hidden>
                    <input type="text" id="static_1cs" value="" disabled></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="$" /> <button className="removeFieldcs">X</button>
            </div>

            <div className="input-box">
            <button type="button" className="btn-add" id="addInv">Add inventory</button>
            </div>
            <div className="input-box" id="inventory" hidden>
                    <input type="text" id="static_2cs" value="" disabled></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="$" /> <button className="removeField_2cs">X</button>
            </div>

            <div className="input-box">
            <button type="button" className="btn-add" id="addTech">Add technology</button>
            </div>
            <div className="input-box" id="technology" hidden>
                    <input type="text" id="static_3cs" value="" disabled></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue=" " placeholder="$" /> <button className="removeField_3cs">X</button>
            </div>

            <div className="input-box">
            <button type="button" className="btn-add" id="addOther">Add other</button>
            </div>
            <div className="input-box" id="other" hidden>
                    <input type="text" id="static_4cs" value="" disabled></input>
                    <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add description" /> <button className="removeField_4cs">X</button>
            </div>
            <div className="input-box">
            <p>What is your secondary business cost?</p>
            <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue="" placeholder="add source" />
            </div>

            <input type="submit" />
            </form>
        )
    }  else {
        return (           
            <form name="chatform" onSubmit={props.func} >
            <h4>{props.form.info.form.title}</h4>
            {/* <form action="https://formspree.io/rstinkho@gmail.com" method="POST">
            <p>enter email to get a password</p>
              <input type="text" value="Your password is NG15PX" name="password" hidden />
              <input type="email" name="Your mail" />
              <input type="submit" value="Send" />
            </form> s */}
              </form>
        )
    }
};

export default form;