import React from 'react';
import styles from '../styles/BranchView.module.css';
import HeightGraph from './HeightGraph';
import SpreadOfBranchesGraph from './SpreadOfBranchesGraph';
import DayTenView from './DayTenView';


const BranchView = () => {
  return (
    <div className={styles.branchView}>
      <h2>Branch View</h2>
      <HeightGraph />
      <SpreadOfBranchesGraph />
      <DayTenView />
      {/* Insert additional components for the branch view */}
    </div>
  );
};

export default BranchView;
