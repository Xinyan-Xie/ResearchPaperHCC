import React from 'react';
import DimensionSelection from './components/DimensionSelection';
import SegmentView from './components/SegmentView';
import BranchView from './components/BranchView';
import './App.css';

function App() {
  return (
    <div className="App">
      <DimensionSelection />
      <SegmentView />
      <BranchView />
    </div>
  );
}

export default App;
