import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Make sure Routes is imported

import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import ButtonClick from './components/ButtonClick';
import ListKeys from './components/ListKeys';
import Lifecycle from './components/LifeCycleMethod';
import JSXComponent from './components/JsxExample';
import Hooks from './components/Hooks';
import Form from './components/Form';
import './App.css'; // Import CSS file for styling

function App() {
  return (
    <Router>
      <div>
        <h1>React Examples</h1>
        <nav>
          <ul className="nav-links">
            <li><Link to="/functional-component">Functional Component</Link></li>
            <li><Link to="/class-component">Class Component</Link></li>
            <li><Link to="/button-click">Button Click</Link></li>
            <li><Link to="/list-keys">List Keys</Link></li>
            <li><Link to="/life-cycle">Life cycle</Link></li>
            <li><Link to="/jsx-example">JSX Example</Link></li>
            <li><Link to="/hooks">Hooks</Link></li>
            <li><Link to="/form">Form</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/functional-component" element={<FunctionalComponent name="Priyanka"/>} />
          <Route path="/class-component" element={<ClassComponent />} />
          <Route path="/button-click" element={<ButtonClick />} />
          <Route path="/list-keys" element={<ListKeys />} />
          <Route path="/life-cycle" element={<Lifecycle />} />
          <Route path="/jsx-example" element={<JSXComponent />} />
          <Route path="/hooks" element={<Hooks />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
