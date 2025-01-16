import React from 'react';

import Random from './components/basics/Random';
import Divisor from './components/basics/Divisor';
import Fragment from './components/basics/Fragment';
import WithParameters from './components/basics/WithParameters';
import First from './components/basics/First';


export default function App(props) {
    return (
        <div id="app">
            <h1>React Foundations</h1>
            <br />
            <Random min={1} max={60} />
            <br />
            <Divisor />
            <br />
            <Fragment />
            <br />
            <Divisor />
            <br />
            <WithParameters title="Second Component" subtitle="Nice" duration={120} />
            <br />
            <Divisor />
            <br />
            <First />
    </div>
    )
}


// Arrow function
// export default _ => 
//     <div id="app">
//         <h1>React Foundations</h1>
//         <Fragment />
//         <WithParameters title="Second Component" subtitle="Nice" duration={120} />
//         <First />
//     </div>