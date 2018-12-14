import React, { Component } from 'react';
import BusinessCanvas from './BusinessCanvas/BusinessCanvas';
import update from 'react-addons-update';
import './App.css';

class App extends Component {
  state = {
    canvas: {
      keyPartners: [" ", " "],
      keyActivities: [" "],
      keyResources: [" "],
      valueProposition: [" ", " ", " ", " "],
      channels: ["*", "*", "*"],
      customerRel: ["*", "*", "*"],
      customerSeg: ["*", "*", "*"],
      costStructure: ["*", "*", "*"],
      revenueStream: ["*", "*", "*"]
    },
    form: {
      title: "Click on the canvas title to edit",
      currentId: ""
    }
  }

  fillForm = (event) => {
    event.preventDefault();
    var array = [];

    var i;
    for (i = 1; i < event.target.length; i++) {
      array.push(event.target[i - 1].value)
    }

      if (this.state.form.currentId === "keyPartners") {
        this.setState( { canvas: update(this.state.canvas, {keyPartners: {$set: array }})
        })
      };

      if (this.state.form.currentId === "keyActivities") {
        this.setState( { canvas: update(this.state.canvas, {keyActivities: {$set: array }})
        })
      };

      if (this.state.form.currentId === "keyResources") {
        this.setState( { canvas: update(this.state.canvas, {keyResources: {$set: array }})
        })
      };

      if (this.state.form.currentId === "valueProposition") {
        this.setState( { canvas: update(this.state.canvas, {valueProposition: {$set: array }})
        })
      };

      if (this.state.form.currentId === "channels") {
        this.setState( { canvas: update(this.state.canvas, {channels: {$set: array }})
        })
      };

      if (this.state.form.currentId === "customerRel") {
        this.setState( { canvas: update(this.state.canvas, {customerRel: {$set: array }})
        })
      };

      if (this.state.form.currentId === "customerSeg") {
        this.setState( { canvas: update(this.state.canvas, {customerSeg: {$set: array }})
        })
      };

      if (this.state.form.currentId === "costStructure") {
        this.setState( { canvas: update(this.state.canvas, {costStructure: {$set: array }})
        })
      };

      if (this.state.form.currentId === "revenueStream") {
        this.setState( { canvas: update(this.state.canvas, {revenueStream: {$set: array }})
        })
      };

  console.log(array)
  console.log(this.state.form.currentId)
  }

  setForm = (event) => {
    this.setState( { form: update(this.state.form, { currentId: {$set: event.target.id}})      
    })
    document.chatform.reset();
  }


  render() {
    return (
      <div>
      <BusinessCanvas
      info = {this.state}
      click = {this.setForm}
      fill = {this.fillForm}
      />
      </div>

    );
  }
}

export default App;
