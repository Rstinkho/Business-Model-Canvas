import React from 'react';


const inputFormSwot = ( props ) => {
    if (props.swotState.currentId === "strengths") {
        return (
            <form name="chatform" onSubmit={props.fillSwot} >
            <h2>Strengths</h2>
            <p>Add up to 5 strengths </p>

                <div className="input-box">
                    <input id="A1" defaultValue="" autoComplete="off" type="text" name="mytext" placeholder="add strength" />
                </div>

                <input type="submit"/>

            </form>
        )
    } else if (props.swotState.currentId === "weaknesses") {
        return (
            <form name="chatform" onSubmit={props.fillSwot} >
            <h2>Weaknesses</h2>
            <p>Add up to 5 weaknesses </p>

                <div className="input-box">
                    <input id="A1" defaultValue="" autoComplete="off" type="text" name="mytext" placeholder="add weakness" />
                </div>

                <input type="submit"/>
            </form>
        )
    } else if (props.swotState.currentId === "opps") {
        return (
            <form name="chatform" onSubmit={props.fillSwot} >
            <h2>Opportunities</h2>
            <p>Add up to 5 opportunities </p>

                <div className="input-box">
                    <input id="A1" defaultValue="" autoComplete="off" type="text" name="mytext" placeholder="add opportunities" />
                </div>

                <input type="submit"/>
            </form>
        )
    } else if (props.swotState.currentId === "threats") {
        return (
            <form name="chatform" onSubmit={props.fillSwot} >
            <h2>Threats</h2>
            <p>Add up to 5 threats </p>

                <div className="input-box">
                    <input id="A1" defaultValue="" autoComplete="off" type="text" name="mytext" placeholder="add threats" />
                </div>

                <input type="submit"/>
            </form>
        )
    } 
    
    else {
        return (
            <form name="chatform" >
                <h1>Nothing</h1>
            </form>
        )
    }
}

export default inputFormSwot;