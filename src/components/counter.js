import React from "react";

// const ErrorComponent = () => {
//     return <div> {props.ignore} </div>
// }
class Counter extends React.Component {
    constructor(props) {
        console.log("Counter Constructor");
        super(props)
        this.state = {
            counter: 0,
            seed: 0,
            initializing: true
        }
        this.increment = () => {
            this.setState({ counter: this.state.counter + 1 })
        }
        this.decrement = () => {
            this.setState({ counter: this.state.counter - 1 })
        }
    }

    static getDerivedStateFromProps(props, state) {
        // console.log(props.seed, state.seed);
        if (props.seed && state.seed !== props.seed) {
            return {
                seed: props.seed,
                counter: props.seed
            }
        }
        return null
    }

    componentDidMount() {
        console.log("Component did mounted");
        setTimeout(() => {
            this.setState({ initializing: false })
        }, 5000)
        console.log('----------------------');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('Component did update');
        console.log('----------------------');
    }

    componentWillUnmount() {
        console.log("Component will unmount");
    }

    componentDidCatch(error, info) {
        console.log("Component did catch");
        this.setState({ error, info })
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp) {
            console.log("Should component update? - DO NOT RENDER");
            return false
        }
        console.log("Should component update? - RENDER");
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Get snapshot before update');
        return null
    }

    render() {
        console.log("Counter Render");

        if (this.state.initializing) {
            return <div> Initilzaing...... </div>
        }
        if (this.props.showErrorComponent && this.state.error) {
            return <div> We have encounter an error! -- {this.state.error.message}</div>
        }
        return (
            <div>
                <button onClick={this.increment}>  Increment </button>
                <button onClick={this.decrement}>  Decrement </button>
                <h1> Counter : {this.state.counter} </h1>
                {/* {this.props.showErrorComponent ? <ErrorComponent /> : null} */}
            </div>
        )
    }
}

export default Counter