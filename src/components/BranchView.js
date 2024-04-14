import React from 'react';
import styles from '../styles/BranchView.module.css';
import HeightGraph from './HeightGraph';
import SpreadOfBranchesGraph from './SpreadOfBranchesGraph';
import DayTenView from './DayTenView';


const BranchView = () => {
  return (
    <div className={styles.branchView}>
       
      <HeightGraph />
      <SpreadOfBranchesGraph />
      <DayTenView />
      <h2 class="branchTitle">Branch View</h2>
      {/* Insert additional components for the branch view */}
    </div>
  );
};

export default BranchView;
