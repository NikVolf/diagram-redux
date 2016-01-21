import React from 'react';
import ReactDOM from 'react-dom';
import Diagram from './components/Diagram';

const activities = [{ type: "rect", position: { x: 0, y: 0 }, size: { width: 100, height: 80 }}];

ReactDOM.render(
    <Diagram activities={activities} />,
    document.getElementById('app')
);