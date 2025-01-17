import './App.css';
import React from 'react';

import Family from './components/basics/Family';
import Card from './components/layout/Card';
import Random from './components/basics/Random';
import Fragment from './components/basics/Fragment';
import WithParameters from './components/basics/WithParameters';
import First from './components/basics/First';

export default function App(props) {
    return (
        <div className="App">
            <h1>React Foundations</h1>
            <br />
            <div className="Cards">
                <Card Title="#05 - Family" color="#00C8F8">
                    <Family lastName="XPTO" />
                </Card>
            </div>
            <div className="Cards">
                <Card Title="#04 - Random Number" color="#FA6900">
                    <p>First Card</p>
                    <Random min={1} max={60} />
                </Card>
                <Card Title="#03 - Fragment" color="#00C2B1">
                    <Fragment />
                </Card>
                <Card Title="#02 - With Parameters" color="#FF8C00">
                    <WithParameters
                        title="Second Component"
                        subtitle="Nice"
                        duration={120}
                    />
                </Card>
                <Card Title="#01 - First" color="#008080">
                    <First />
                </Card>
            </div>
        </div>
    );
}

// Arrow function
// export default _ =>
//     <div id="app">
//         <h1>React Foundations</h1>
//         <Fragment />
//         <WithParameters title="Second Component" subtitle="Nice" duration={120} />
//         <First />
//     </div>
