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

        // 3. cost structure
        var wrapper_cs	= $("#hcapital");
        var wrapper2_cs = $("#inventory");
        var wrapper3_cs = $("#technology");
        var wrapper4_cs = $("#other");
        var staticOne_cs = $("#static_1cs");
        var staticTwo_cs = $("#static_2cs");
        var staticThree_cs = $("#static_3cs");
        var staticFour_cs = $("#static_4cs");

        
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

        // 3. cost structure
        $(wrapper_cs).on("click",".removeFieldcs", function(e){
            e.preventDefault(); $(wrapper_cs).hide();
            $(staticOne_cs).val(null);
        })
        $(wrapper2_cs).on("click",".removeField_2cs", function(e){
            e.preventDefault(); $(wrapper2_cs).hide();
            $(staticTwo_cs).val(null);
          })
        $(wrapper3_cs).on("click",".removeField_3cs", function(e){
            e.preventDefault(); $(wrapper3_cs).hide();
            $(staticThree_cs).val(null);
          })
        $(wrapper4_cs).on("click",".removeField_4cs", function(e){
            e.preventDefault(); $(wrapper4_cs).hide();
            $(staticFour_cs).val(null);
        })
      });

    if (props.form.info.form.currentId === "keyActivities") {
        return (
            <form name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
            <p>What key suppliers/resources does your business model require?</p>

                <div className="input-box">
                    <input id="A1" type="text" name="mytext" defaultValue={props.form.info.canvas.keyActivities} />
                </div>
    
                <input type="submit" value="Submit"/>
    
            </form>
        )
    } else if (props.form.info.form.currentId === "keyPartners") {
        return (
            <form name="chatform"onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
            
                <div className="input-box">
                    <p>Who are your key OPERATIONAL partners?</p>
                    <input id="P1" type="text" name="mytext" placeholder="add operational partner" />                  
                </div>

                 <div className="input-box">
                    <p>Who are your key MARKETING partners?</p>
                    <input id="P2" type="text" name="mytext" placeholder="add marketing partner" />                   
                </div>
    
                <input type="submit" value="Submit" />
    
            </form>
        )
    } else if (props.form.info.form.currentId === "keyResources") {
        return (
            <form name="chatform"onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
                <div className="input-box">
                <p>What do you need to accomplish for your business to be operational?</p>
                    <input id="P1" type="text" name="mytext" placeholder="add resources" />                   
                </div>
    
                <input type="submit" value="Submit" />
    
            </form>
        )
    } else if (props.form.info.form.currentId === "valueProposition") {
        return (
            <form name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
                <div className="input-box">
                <p>What is the problem you are solving? Or Which customer needs are you satisfying?</p>
                    <input id="P1" type="text" name="mytext" placeholder="add problems/needs" />
                </div>

                <div className="input-box">
                <p>What is the unique selling point of your product?</p>
                    <input id="P1" type="text" name="mytext" placeholder="add USP" />                    
                </div>

                <div className="input-box">
                <p>What are the features that macth your customers needs?</p>
                    <input id="P1" type="text" name="mytext" placeholder="add features" />                   
                </div>

                <div className="input-box">
                <p>How can you summarize the above into a 1-2 sentences tagline for your business?</p>
                    <input id="P1" type="text" name="mytext" placeholder="summarize it (optional)" />                   
                </div>  

                <input type="submit" value="Submit" />
    
            </form>
        )
    }  else if (props.form.info.form.currentId === "channels") {
        return (
            <form name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
                <div className="input-box">
                <p>What are your DISTRIBUTION channels?</p>
                    <input id="P1" type="text" name="mytext" placeholder="add resources" />                  
                </div>
                <div className="input-box">
                <p>What are your MARKETING channels?</p>
                    <input id="P1" type="text" name="mytext" placeholder="add resources" />                
                </div>
    
                <input type="submit" value="Submit" />
    
            </form>
        )
    }  else if (props.form.info.form.currentId === "customerRel") {
        return (
            <form className="hola" name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
            <p>What kind of relationship do you have with your customers? Choose all that applies, delete unneccessary</p>          
            <div className="input-box" id ="transaction">
                    <input type="text" id="static_1" value="transactional:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="add description" /> <button className="removeField">X</button>                  
            </div>

            <div className="input-box" id="longterm">
                    <input type="text" id="static_2" value="long-term:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="add description" /> <button className="removeField_2">X</button>                  
            </div>

            <div className="input-box" id="community">
                    <input type="text" id="static_3" value="community:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="add description" /> <button className="removeField_3">X</button>                  
            </div>

            <div className="input-box" id="personal">
                    <input type="text" id="static_4" value="personal:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="add description" /> <button className="removeField_4">X</button>                   
            </div>

                <input type="submit" value="Submit" />  
            </form>
        ) 
    } else if (props.form.info.form.currentId === "revenueStream") {
        return (
            <form name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
                <div className="input-box">
                <p>What is your primary revenue source</p>
                    <input id="P1" type="text" name="mytext" placeholder="add source" />                   
                </div>
                <div className="input-box">
                <p>What is your secondary revenue source</p>
                    <input id="P1" type="text" name="mytext" placeholder="add source" />                  
                </div>

                <input type="submit" value="Submit" />
    
            </form>
        )
    }  else if (props.form.info.form.currentId === "customerSeg") {
        return (
            <form className="hola" name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
            <p>Give information about the customer segments</p>
            <div>CHOOSE</div>
            <div className="input-box" id ="oneSided">
                    <input type="text" id="oneSided_1" value="one-sided" disabled></input>
                    <button className="removeField">X</button>
                    
            </div>
            <div>OR</div>
            <div className="input-box" id="twoSided">
                    <input type="text" id="twoSided_1" value="two-sided" disabled></input>
                    <button className="removeField_2">X</button>                 
            </div>
            <div className="input-box">
            <p>Who is your primary target segment?</p>
            <input id="P1" type="text" name="mytext" placeholder="add source" />        

            <p>Who is your secondary target segment?</p>
            <input id="P1" type="text" name="mytext" placeholder="add source" />
            
            <p>Which is your primary target market?</p>
            <input id="P1" type="text" name="mytext" placeholder="add source" />
                       
            <input type="submit" value="Submit" />  
            </div>
            </form>
        ) 
    } else if (props.form.info.form.currentId === "costStructure") {
        return (
            <form className="hola" name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
            <p>What is your primary business cost?</p>

            <div className="input-box" id ="hcapital">
                    <input type="text" id="static_1cs" value="Human capital:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="$" /> <button className="removeFieldcs">X</button>                
            </div>

            <div className="input-box" id="inventory">
                    <input type="text" id="static_2cs" value="Inventory:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="$" /> <button className="removeField_2cs">X</button>              
            </div>

            <div className="input-box" id="technology">
                    <input type="text" id="static_3cs" value="Technology:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="$" /> <button className="removeField_3cs">X</button>                   
            </div>

            <div className="input-box" id="other">
                    <input type="text" id="static_4cs" value="Other:" disabled></input>
                    <input id="P1" type="text" name="mytext" placeholder="add description" /> <button className="removeField_4cs">X</button>                 
            </div>
            <div className="input-box">
            <p>What is your secondary business cost?</p>
            <input id="P1" type="text" name="mytext" placeholder="add source" />
            </div>
                      
            <input type="submit" value="Submit" />  
            </form>
        ) 
    }  else {
        return (
            <form name="chatform" onSubmit={props.func} >
            <h4>{props.form.info.form.title}</h4>  
            </form>
        )
    }   
};

export default form;