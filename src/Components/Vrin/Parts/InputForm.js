import React from 'react';

const inputFormVrin = ( props ) => {

    if (props.vrinState.currentId === 'valuable') {
        return (  
                <form name="chatform" onSubmit={props.next} >
                    <h3>Is product/service valuable?</h3>

                    <div className="input-box">
                        <button type="button" className="btn-add" id="addPers">Yes</button>
                        <button type="button" className="btn-add" id="addPers" style={{backgroundColor: 'red'}}>No</button>
                    </div>

                    <h3>if clicked yes:</h3>
                    <p>change colors first col</p>

                    <div className="input-box">
                        <input type="text" value="Justify value:" disabled></input>
                        <input className="P1" type="text" name="mytext" autoComplete="off" defaultValue={props.vrinState.valuable} placeholder="add text" />
                    </div>

                    <input type="submit" />

                </form> )
    } else if (props.vrinState.currentId === 'rare') {
        return (
            <form onSubmit={props.func} >
            <h3>Is product/service rare?</h3>

            <div className="input-box">
                <button type="button" className="btn-add" id="addPers">Yes</button>
                <button type="button" className="btn-add" id="addPers" style={{backgroundColor: 'red'}}>No</button>
            </div>

            <h3>if clicked yes:</h3>
            <p>change colors second col</p>

            <div className="input-box">
                <input type="text" value="Justify rarity:" disabled></input>       
                <input className="P2" type="text" name="mytext" autoComplete="off" defaultValue={props.vrinState.rare} placeholder="add text" />
           </div>

            <input type="submit" />
            </form>
        )
    } else {
        return (
            <h1>Hui</h1>
        )
    }
}

export default inputFormVrin
