import React from 'react';
import $ from 'jquery'; 

const form = (props) => {

    $(document).ready(function() {

        // variables for DOM manipulation with input form
        // 1. customer's relationships
        var wrapper	= $("#transaction");
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
        
        // jQuery functions for removing unneccessary elements of canvas

        // 1. customer's relationships
        $(wrapper).on("click",".removeField", function(e){
            e.preventDefault(); $(wrapper).hide();
            $(staticOne).val(null);
        })
        $(wrapper2).on("click",".removeField_2", function(e){
            e.preventDefault(); $(wrapper2).hide();
            $(staticTwo).val(null);
          })
        $(wrapper3).on("click",".removeField_3", function(e){
            e.preventDefault(); $(wrapper3).hide();
            $(staticThree).val(null);
          })
        $(wrapper4).on("click",".removeField_4", function(e){
            e.preventDefault(); $(wrapper4).hide();
            $(staticFour).val(null);
        })

        // 2. customer's segments
        $(oneSidedStatic).on("click",".removeField", function(e){
            e.preventDefault(); $(oneSidedStatic).hide();
            $(oneSidedStatic_1).val(null);
        })
        $(twoSidedStatic).on("click",".removeField_2", function(e){
            e.preventDefault(); $(twoSidedStatic).hide();
            $(twoSidedStatic_1).val(null);
        })
        
      });

    if (props.form.info.form.currentId === "keyActivities") {
        return (
            <form name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
            <p>What key suppliers/resources does your business model require?</p>

                <div>
                    <input id="A1" type="text" name="mytext" defaultValue={props.form.info.canvas.keyActivities} />
                    <div className="input_fields_wrap"/>
                </div>
    
                <input type="submit" value="Submit"/>
    
            </form>
        )
    } else if (props.form.info.form.currentId === "keyPartners") {
        return (
            <form name="chatform"onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
            
                <div>
                    <p>Who are your key OPERATIONAL partners?</p>
                    <input id="P1" type="text" name="mytext" placeholder="add operational partner" />
                    <div className="input_fields_wrap"/>
                </div>

                 <div>
                    <p>Who are your key MARKETING partners?</p>
                    <input id="P2" type="text" name="mytext" placeholder="add marketing partner" />
                    <div className="input_fields_wrap"/>
                </div>
    
                <input type="submit" value="Submit" />
    
            </form>
        )
    } else if (props.form.info.form.currentId === "keyResources") {
        return (
            <form name="chatform"onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
                <div>
                <p>What do you need to accomplish for your business to be operational?</p>
                    <input id="P1" type="text" name="mytext" placeholder="add resources" />
                    <div className="input_fields_wrap"/>
                </div>
    
                <input type="submit" value="Submit" />
    
            </form>
        )
    } else if (props.form.info.form.currentId === "valueProposition") {
        return (
            <form name="chatform"onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
                <div>
                <p>What is the problem you are solving? Or Which customer needs are you satisfying?</p>
                    <input id="P1" type="text" name="mytext" placeholder="add problems/needs" />
                    <div className="input_fields_wrap"/>
                </div>

                                <div>
                <p>What is the unique selling point of your product?</p>
                    <input id="P1" type="text" name="mytext" placeholder="add USP" />
                    <div className="input_fields_wrap"/>
                </div>

                                <div>
                <p>What are the features that macth your customers needs?</p>
                    <input id="P1" type="text" name="mytext" placeholder="add features" />
                    <div className="input_fields_wrap"/>
                </div>

                                <div>
                <p>How can you summarize the above into a 1-2 sentences tagline for your business?</p>
                    <input id="P1" type="text" name="mytext" placeholder="summarize it (optional)" />
                    <div className="input_fields_wrap"/>
                </div>
    
                <input type="submit" value="Submit" />
    
            </form>
        )
    }  else if (props.form.info.form.currentId === "channels") {
        return (
            <form name="chatform"onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
                <div>
                <p>What are your DISTRIBUTION channels?</p>
                    <input id="P1" type="text" name="mytext" placeholder="add resources" />
                    <div className="input_fields_wrap"/>
                </div>
                <div>
                <p>What are your MARKETING channels?</p>
                    <input id="P1" type="text" name="mytext" placeholder="add resources" />
                    <div className="input_fields_wrap"/>
                </div>
    
                <input type="submit" value="Submit" />
    
            </form>
        )
    }  else if (props.form.info.form.currentId === "customerRel") {
        return (
            <form className="hola" name="chatform"onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
            <p>What kind of relationship do you have with your customers? Choose all that applies</p>
            <div id ="transaction">
                    <input type="text" id="static_1" value="transactional:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="add description" /> <button className="removeField">X</button>
                    <div className="input_fields_wrap"/>
            </div>

            <div id="longterm">
                    <input type="text" id="static_2" value="long-term:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="add description" /> <button className="removeField_2">X</button>
                    <div className="input_fields_wrap"/>
            </div>

            <div id="community">
                    <input type="text" id="static_3" value="community:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="add description" /> <button className="removeField_3">X</button>
                    <div className="input_fields_wrap"/>
            </div>

            <div id="personal">
                    <input type="text" id="static_4" value="personal:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="add description" /> <button className="removeField_4">X</button>
                    <div className="input_fields_wrap"/>
            </div>

            

                <input type="submit" value="Submit" />  
            </form>
        ) 
    } else if (props.form.info.form.currentId === "revenueStream") {
        return (
            <form name="chatform"onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
                <div>
                <p>What is your primary revenue source</p>
                    <input id="P1" type="text" name="mytext" placeholder="add source" />
                    <div className="input_fields_wrap"/>
                </div>
                <div>
                <p>What is your secondary revenue source</p>
                    <input id="P1" type="text" name="mytext" placeholder="add source" />
                    <div className="input_fields_wrap"/>
                </div>
    
                <input type="submit" value="Submit" />
    
            </form>
        )
    }  else if (props.form.info.form.currentId === "customerSeg") {
        return (
            <form className="hola" name="chatform"onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
            <p>Give information about the customer segments</p>
            <div>CHOOSE</div>
            <div id ="oneSided">
                    <input type="text" id="oneSided_1" value="one-sided" disabled></input>
                    <button className="removeField">X</button>
                    <div className="input_fields_wrap"/>
            </div>
            <div>OR</div>
            <div id="twoSided">
                    <input type="text" id="twoSided_1" value="two-sided" disabled></input>
                    <button className="removeField_2">X</button>
                    <div className="input_fields_wrap"/>
            </div>

            <p>Who is your primary target segment?</p>
            <input id="P1" type="text" name="mytext" placeholder="add source" />
            <div className="input_fields_wrap"/>

            <p>Who is your secondary target segment?</p>
            <input id="P1" type="text" name="mytext" placeholder="add source" />
            <div className="input_fields_wrap"/>

            <p>Which is your primary target market?</p>
            <input id="P1" type="text" name="mytext" placeholder="add source" />
            <div className="input_fields_wrap"/>
                
            <input type="submit" value="Submit" />  
            </form>
        ) 
    } else if (props.form.info.form.currentId === "costStructure") {
        return (
            <form className="hola" name="chatform"onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
            <p>What is your primary business cost?</p>

            <div id ="transaction">
                    <input type="text" id="static_1" value="Human capital:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="$" /> <button className="removeField">X</button>
                    <div className="input_fields_wrap"/>
            </div>

            <div id="longterm">
                    <input type="text" id="static_2" value="Inventory:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="$" /> <button className="removeField_2">X</button>
                    <div className="input_fields_wrap"/>
            </div>

            <div id="community">
                    <input type="text" id="static_3" value="Technology:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="$" /> <button className="removeField_3">X</button>
                    <div className="input_fields_wrap"/>
            </div>

            <div id="personal">
                    <input type="text" id="static_4" value="Other:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="add description" /> <button className="removeField_4">X</button>
                    <div className="input_fields_wrap"/>
            </div>

            <p>What is your secondary business cost?</p>
            <input id="P1" type="text" name="mytext" placeholder="add source" />
            <div className="input_fields_wrap"/>
                
            <input type="submit" value="Submit" />  
            </form>
        ) 
    }  else {
        return (
            <form name="chatform"onSubmit={props.func} >
            <h4>{props.form.info.form.title}</h4>
            <div>
                    <input id="P1" type="text" name="mytext" />
                    <div className="input_fields_wrap"/>
                </div>
    
                <input type="submit" value="Submit" />
    
            </form>
        )
    }   
};

export default form;