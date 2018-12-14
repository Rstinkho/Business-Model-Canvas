import React from 'react';

const form = (props) => {



    if (props.form.info.form.currentId === "keyActivities") {
        return (
            <form name="chatform" onSubmit={props.func} >
            <h2>FILL IN</h2>
            <h4>{props.form.info.form.currentId}</h4>
            <p>What key suppliers/resources does your business model require?</p>

                <div>
                    <input id="A1" type="text" name="mytext" placeholder="Add activity" />
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
                <p>What do you need to accomplish for your business to be operational?</p>
                    <input id="P1" type="text" name="mytext" placeholder="add resources" />
                    <div className="input_fields_wrap"/>
                </div>
    
                <input type="submit" value="Submit" />
    
            </form>
        )
    } else {
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