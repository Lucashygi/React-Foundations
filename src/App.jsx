import './App.css';
import React from 'react';

// Components
import Family from './components/basics/Family';
import Member from './components/basics/Member';
import Card from './components/layout/Card';
import Random from './components/basics/Random';
import Fragment from './components/basics/Fragment';
import WithParameters from './components/basics/WithParameters';
import First from './components/basics/First';
import StudentsList from './components/loop/StudentsList';
import ProductsTable from './components/loop/ProductsTable';
import EvenOrOdd from './components/conditional/EvenOrOdd';
import UserInfo from './components/conditional/UserInfo';
import DirectParent from './components/comunication/DirectParent';
import IndirectParent from './components/comunication/IndirectParent';
import Input from './components/forms/input';
import Counter from './components/counter/Counter';
import MegaSena from './components/mega/Mega';

export default function App(props) {
    return (
        <div className="App">
            <h1>React Foundations</h1>
            <br />
            <div className="Cards">
                <Card Title="#13 - Mega Sena" color="#FF4C65">
                    <MegaSena />
                </Card>
                <Card Title="#12 - Counter" color="#FF4C65">
                    <Counter initialNumber={10} />
                </Card>
                <Card Title="#11 - Controlled Component" color="#FF4C65">
                    <Input />
                </Card>
                <Card Title="#10 - Indirect Communication" color="#8C4646">
                    <IndirectParent />
                </Card>
                <Card Title="#09 - Direct Communication" color="#59323C">
                    <DirectParent />
                </Card>
                <Card Title="#08 - Conditional Render" color="#FF4C65">
                    <EvenOrOdd number={21} />
                    <UserInfo user={{ name: 'John' }} />
                </Card>
                <Card Title="#07 - Products" color="#FF4C65">
                    <ProductsTable />
                </Card>
                <Card Title="#06 - Students Loop" color="#FA6990">
                    <StudentsList />
                </Card>
                <Card Title="#05 - Family" color="#00C8F8">
                    <Family lastName="XPTO">
                        <Member name="John" />
                        <Member name="Jane" />
                        <Member name="Jim" />
                    </Family>
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
