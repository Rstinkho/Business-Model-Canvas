import React from 'react';

const inputFormSwotE = ( props ) => {
    if (props.swotEState.currentId === "strength_S") {
        return (
            <form name="chatform" onSubmit={props.fillSwotE}>
            <h2>Strength Strategies</h2>
            <p>Add up to 5 strength strategies </p>

                <div className="input-box">
                    <input id="A1" defaultValue="" autoComplete="off" type="text" name="mytext" placeholder="add strength strategies" />
                </div>

                <input type="submit"/>

            </form>
        )
    }if (props.swotEState.currentId === "weakness_W") {
        return (
            <form name="chatform" onSubmit={props.fillSwotE}>
            <h2>Weakness Strategies</h2>
            <p>Add up to 5 weakness strategies </p>

                <div className="input-box">
                    <input id="A1" defaultValue="" autoComplete="off" type="text" name="mytext" placeholder="add weakness strategies" />
                </div>

                <input type="submit"/>

            </form>
        )
    }if (props.swotEState.currentId === "opportunity_O") {
        return (
            <form name="chatform" onSubmit={props.fillSwotE}>
            <h2>Opportunities O</h2>
            <p>Add up to 5 opportunities </p>

                <div className="input-box">
                    <input id="A1" defaultValue="" autoComplete="off" type="text" name="mytext" placeholder="add opportunities" />
                </div>

                <input type="submit"/>

            </form>
        )
    }if (props.swotEState.currentId === "threat_T") {
        return (
            <form name="chatform" onSubmit={props.fillSwotE}>
            <h2>Threats T</h2>
            <p>Add up to 5 threats </p>

                <div className="input-box">
                    <input id="A1" defaultValue="" autoComplete="off" type="text" name="mytext" placeholder="add threats" />
                </div>

                <input type="submit"/>

            </form>
        )
    }if (props.swotEState.currentId === "so_strategy") {
        return (
            <form name="chatform" onSubmit={props.fillSwotE}>
            <h2>Strength Opportunities strategies</h2>
            <p>Add up to 5 strength opportunities strategies </p>

                <div className="input-box">
                    <input id="A1" defaultValue="" autoComplete="off" type="text" name="mytext" placeholder="add so strategies" />
                </div>

                <input type="submit"/>

            </form>
        )
    }if (props.swotEState.currentId === "wo_strategy") {
        return (
            <form name="chatform" onSubmit={props.fillSwotE}>
            <h2>Weakness Opportunities strategies</h2>
            <p>Add up to 5 weakness opportunities strategies </p>

                <div className="input-box">
                    <input id="A1" defaultValue="" autoComplete="off" type="text" name="mytext" placeholder="add wo strategies" />
                </div>

                <input type="submit"/>

            </form>
        )
    }if (props.swotEState.currentId === "st_strategy") {
        return (
            <form name="chatform" onSubmit={props.fillSwotE}>
            <h2>Strength Threats strategies</h2>
            <p>Add up to 5 strength threats strategies </p>

                <div className="input-box">
                    <input id="A1" defaultValue="" autoComplete="off" type="text" name="mytext" placeholder="add st strategies" />
                </div>

                <input type="submit"/>

            </form>
        )
    }if (props.swotEState.currentId === "wt_strategy") {
        return (
            <form name="chatform" onSubmit={props.fillSwotE}>
            <h2>Weakness Threats strategies</h2>
            <p>Add up to 5 weakness threats strategies </p>

                <div className="input-box">
                    <input id="A1" defaultValue="" autoComplete="off" type="text" name="mytext" placeholder="add wt strategies" />
                </div>

                <input type="submit"/>

            </form>
        )
    }       
    else
    return (
        <form name="chatform" >
        <h1>Nothing</h1>
        </form>
    )
};

export default inputFormSwotE;