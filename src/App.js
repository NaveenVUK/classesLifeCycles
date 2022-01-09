import './App.css';
import React from 'react';
import Counter from './components/counter';

/* 
Life cycle devided into 4 main group
1. Mounting
2. Updating 
3. Error boundry
4. Unmounting 

*/

class App extends React.Component {
  constructor(props) {
    console.log("App Constructor ");
    super(props)

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40,
      showErrorComponent: false
    }

    this.mountCounter = () => {
      this.setState({ mount: true })
    }
    this.unmountCounter = () => {
      this.setState({ mount: false })
    }

    this.ignoreProp = () => {
      this.setState({ ignoreProp: Math.random() })
    }
    this.seedGenerator = () => {
      this.setState({ seed: Number.parseInt(Math.random() * 100) })
    }

    this.toggleError = () => {
      this.setState({ showErrorComponent: !this.state.showErrorComponent })
    }
  }
  render() {
    console.log('App render');
    // console.log('ignoreprops', this.state.ignoreProp);
    return (
      <div>
        <button onClick={this.mountCounter} disabled={this.state.mount}> Mount Count </button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}> UnMount Count </button>

        <button onClick={this.ignoreProp}> Ignore Props</button>
        <button onClick={this.seedGenerator}> seed Generator</button>

        <button onClick={this.toggleError}> toggleError </button>
        {this.state.mount ?
          <Counter
            ignoreProp={this.state.ignoreProp}
            seed={this.state.seed}
            showErrorComponent={this.state.showErrorComponent}
          />
          :
          null
        }
      </div>
    )

  }
}

export default App;
