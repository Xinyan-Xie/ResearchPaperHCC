// src/components/DimensionSelection.js
import React from 'react';
import styles from '../styles/DimensionSelection.module.css';
import ButtonGroup from './ButtonGroup';
import CheckboxTable from './CheckboxTable';

const DimensionSelection = () => {
  return (
    <div className={styles.dimensionSelection}>
      <h2 className={styles.DimensionTitle}>Dimension Selection Content</h2>
      <CheckboxTable />
      {/* <ButtonGroup /> */}
    </div>
  );
};

export default DimensionSelection;
