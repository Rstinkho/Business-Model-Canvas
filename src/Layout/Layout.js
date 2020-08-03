import React, { Fragment } from 'react';
import BusinessCanvas from '../Components/BusinessCanvas/BusinessCanvas';
import Navbar from '../UI/Navbar/Navbar';
import Sidebar from '../UI/Sidebar/Sidebar';
import Footer from '../UI/Footer/Footer';
import HomeScreen from '../HomeScreen/HomeScreen';
import { Route } from 'react-router-dom';
import Vrin from '../Components/Vrin/Vrin'
import Swot from '../Components/Swot/Swot';
import SwotE from '../Components/SwotE/SwotE';

const layout = ( props ) => {
    return (
        <Fragment>
            <Route path="/"> <Navbar info = {props.currentInstrumentName}/> </Route> 
            <Route path="/"> <Sidebar choose={props.choose}/> </Route>
            <Route path="/" exact component={HomeScreen} />
                <Route path="/components/bmc"><BusinessCanvas
                    info = {props.info}
                    click = {props.click}
                    fill = {props.fill} />
                </Route>
                <Route path="/components/vrin"> <Vrin title = {props.info.form.title}
                                                      next = {props.next}
                                                      vrinState = {props.info.vrin} /> </Route>
                <Route path="/components/swot"> <Swot info = {props.info}
                                                      clickSwot = {props.clickSwot}
                                                      fillSwot = {props.fillSwot} /> </Route> 
                <Route path="/components/swotE"> <SwotE info = {props.info}
                                                        clickSwotE = {props.clickSwotE}
                                                        fillSwotE = {props.fillSwotE} /> </Route> 
            <Route path="/" exact component={Footer} />
        </Fragment>
    )
}

export default layout