import React, { Component } from 'react';
import Layout from './Layout/Layout';
import update from 'react-addons-update';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  state = {
    canvas: {
      keyPartners: [" "],
      keyActivities: [" "],
      keyResources: [" "],
      valueProposition: [" ", " ", " ", " "],
      channels: [" ", " "],
      customerRel: [" "],
      customerSeg: [" ", " ", " ", " "],
      costStructure: [" "],
      revenueStream: [" ", " "],
      currentId: "",
    },
    vrin: {
      valuable: "1",
      rare: "4",
      inimitable: "3",
      organized: "8",
      currentId: "valuable"
    },
    swot: {
      strength: "1",
      weakness: "2",
      opportunity: "3",
      threat: "4",
      currentId: ""
    },
    swotE: {
      strength_S: "1",
      weakness_W: "2",
      opportunity_O: "3",
      threat_T: "4",
      so_strategy: "5",
      wo_strategy: "6",
      st_strategy: "7",
      wt_strategy: "8",
      currentId: ""
    },
    form: {
      title: ""
    }
  }

// Function switching the name of framework in the state
chooseInstrument = (event) => {
  console.log(event.target.outerText)
  this.setState( { form: update(this.state.form, { title: {$set: event.target.outerText}})
})
}


////////////////////////////////////////////////////
//--Functions for Business Model Canvas--// START/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////
//''There's a possibility to make this function global and put all frameworks filling actions here. 
//However, i suppouse that in the end of the day there will be literally thousands of "if" statements, 
//which checks the component user is currently using, so huge perfomance drop is expected. 
//Need to run tests here, what is better: keep in 1 function set or different function sets for every framework.'' 

  fillFormBmc = (event) => {
    event.preventDefault();
    var array = [];

    var i;
    for (i = 0; i < event.target.length; i++) {
      array.push(event.target[i].value)
    }

      if (this.state.canvas.currentId === "keyPartners") {
        this.setState( { canvas: update(this.state.canvas, {currentId: {$set: null }, keyPartners: {$set: array } })
        });
        document.getElementById("keyPartners_chk").checked = "true";
      };

      if (this.state.canvas.currentId === "keyActivities") {
        this.setState( { canvas: update(this.state.canvas, {currentId: {$set: null }, keyActivities: {$set: array }})
        });
        document.getElementById("keyActivities_chk").checked = "true";
      };

      if (this.state.canvas.currentId === "keyResources") {
        this.setState( { canvas: update(this.state.canvas, {currentId: {$set: null }, keyResources: {$set: array }})
        });
        document.getElementById("keyResources_chk").checked = "true";
      };

      if (this.state.canvas.currentId === "valueProposition") {
        this.setState( { canvas: update(this.state.canvas, {currentId: {$set: null }, valueProposition: {$set: array }})
        });
        document.getElementById("valueProposition_chk").checked = "true";
      };

      if (this.state.canvas.currentId === "channels") {
        this.setState( { canvas: update(this.state.canvas, {currentId: {$set: null }, channels: {$set: array }})
        });
        document.getElementById("channels_chk").checked = "true";
      };

      if (this.state.canvas.currentId === "customerRel") {
        this.setState( { canvas: update(this.state.canvas, {currentId: {$set: null }, customerRel: {$set: array }})
        });
        document.getElementById("customerRel_chk").checked = "true";
      };

      if (this.state.canvas.currentId === "customerSeg") {
        this.setState( { canvas: update(this.state.canvas, {currentId: {$set: null }, customerSeg: {$set: array }})
        });
        document.getElementById("customerSeg_chk").checked = "true";
      };

      if (this.state.canvas.currentId === "costStructure") {
        this.setState( { canvas: update(this.state.canvas, {currentId: {$set: null }, costStructure: {$set: array }})
        });
        document.getElementById("costStructure_chk").checked = "true";
      };

      if (this.state.canvas.currentId === "revenueStream") {
        this.setState( { canvas: update(this.state.canvas, {currentId: {$set: null }, revenueStream: {$set: array }})
        });
        document.getElementById("revenueStream_chk").checked = "true";
      };
  }

  setFormBmc = (event) => {
    console.log(event.target.id)
    this.setState( { canvas: update(this.state.canvas, { currentId: {$set: event.target.id}})
    })
    document.chatform.reset();
  }
//////////////////////////////////////////////////
//--Functions for Business Model Canvas--// END///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////


///////////////////////////////////
//--Functions for SWOT--// START//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////
  fillFormSwot = (event) => {
    event.preventDefault();

    var array = [];

    var i;
    for (i = 0; i < event.target.length; i++) {
      array.push(event.target[i].value)
    }
    if (this.state.swot.currentId === "strengths") {
      this.setState( { swot: update(this.state.swot, {currentId: {$set: null}, strength: {$set: array}})
    });
    }
    if (this.state.swot.currentId === "weaknesses") {
      this.setState( { swot: update(this.state.swot, {currentId: {$set: null}, weakness: {$set: array}})
    });
    }
    if (this.state.swot.currentId === "opps") {
      this.setState( { swot: update(this.state.swot, {currentId: {$set: null}, opportunity: {$set: array}})
    });
    }
    if (this.state.swot.currentId === "threats") {
      this.setState( { swot: update(this.state.swot, {currentId: {$set: null}, threat: {$set: array}})
    });
    }
  };

  setFormSwot = (event) => {
    console.log(event.target.id)
    this.setState( { swot: update(this.state.swot, { currentId: {$set: event.target.id}})
    })
    //document.chatform.reset();
  }
///////////////////////////////////
//--Functions for SWOT--// END/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////


///////////////////////////////////
//--Functions for SWOT(ENHANCED)--// START/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////
  fillFormSwotE = (event) => {
    event.preventDefault();
    var array = [];

    var i;
    for (i = 0; i < event.target.length; i++) {
      array.push(event.target[i].value)
    }
    if (this.state.swotE.currentId === "strength_S") {
      console.log(array)
      this.setState( { swotE: update(this.state.swotE, {currentId: {$set: null}, strength_S: {$set: array}})
    });
    }
    if (this.state.swotE.currentId === "opportunity_O") {
      console.log(array)
      this.setState( { swotE: update(this.state.swotE, {currentId: {$set: null}, opportunity_O: {$set: array}})
    });
    }
    if (this.state.swotE.currentId === "threat_T") {
      console.log(array)
      this.setState( { swotE: update(this.state.swotE, {currentId: {$set: null}, threat_T: {$set: array}})
    });
    }
    if (this.state.swotE.currentId === "so_strategy") {
      console.log(array)
      this.setState( { swotE: update(this.state.swotE, {currentId: {$set: null}, so_strategy: {$set: array}})
    });
    }
    if (this.state.swotE.currentId === "st_strategy") {
      console.log(array)
      this.setState( { swotE: update(this.state.swotE, {currentId: {$set: null}, st_strategy: {$set: array}})
    });
    }
    if (this.state.swotE.currentId === "weakness_W") {
      console.log(array)
      this.setState( { swotE: update(this.state.swotE, {currentId: {$set: null}, weakness_W: {$set: array}})
    });
    }
    if (this.state.swotE.currentId === "wo_strategy") {
      console.log(array)
      this.setState( { swotE: update(this.state.swotE, {currentId: {$set: null}, wo_strategy: {$set: array}})
    });
    }
    if (this.state.swotE.currentId === "wt_strategy") {
      console.log(array)
      this.setState( { swotE: update(this.state.swotE, {currentId: {$set: null}, wt_strategy: {$set: array}})
    });
    }
  };

  setFormSwotE = (event) => {
    console.log(event.target.id)
    this.setState( { swotE: update(this.state.swotE, {currentId: {$set: event.target.id}})
    })
  }
///////////////////////////////////
//--Functions for SWOT(ENHANCED)--// END/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////



//--Functions for VRIN, in progress currently fucked up--// START
  vrinChoose = ( event ) => {
    // console.log(event.target[3].value)
    this.setState( {vrin: update(this.state.vrin, {valuable: {$set: event.target[3].value}, currentId: {$set: "rare"}})})
    event.preventDefault();
  }
//--Functions for VRIN--// END


  render() {
    return (
      <BrowserRouter>
        <Layout
        info = {this.state}
        //For BMC
        click = {this.setFormBmc}
        fill = {this.fillFormBmc}
        //Global
        choose = {this.chooseInstrument}
        //Vrin
        next = {this.vrinChoose}
        //Swot
        clickSwot = {this.setFormSwot}
        fillSwot = {this.fillFormSwot}
        //SwotE
        clickSwotE = {this.setFormSwotE}
        fillSwotE = {this.fillFormSwotE}
        />
      </BrowserRouter>
    );
  }
}

export default App;
