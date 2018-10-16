import React, { Component } from 'react';


class Overall extends Component {

    state = {
        macaroons: 'todo'
    };

    recordState = () => {
        console.log(this);
    }

    componentWillReceiveProps(newProps) {
        if (newProps !== this.props) {
            this.setState(newProps.prevState)
        }
    };
    render() {
        console.log(this.state)
        return (


            <div className="App">
                <p> This is the only element, a &lt;p&gt; element, within a div within the  <code>Overall.js</code> Component!
                </p>

                <h2>Just kidding, this second one has {this.props.prop01} some props in it. (prop01, specifically)</h2>
                <h3>This is prop02: {this.props.prop02}</h3>
                <h4>Prop 03: (is the turds function being called: should return the string "turds") : {this.props.prop03}</h4>
                <h5>Well, props 4 &amp; 5: {this.props.prop04("maGNA carter")} and {this.props.prop05.string}</h5>
                <button
                    onClick={this.props.prop06}
                >Button.</button>
                <button
                    onClick={this.recordState}
                >button 2</button>
            </div>
        );
    }
}

export default Overall;
