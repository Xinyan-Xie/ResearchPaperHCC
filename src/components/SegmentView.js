import React, { useEffect, useState } from 'react';
import styles from '../styles/SegmentView.module.css';
import VegetationIndexChart from './VegetationIndexChart';
import RadarChartComponent from './RadarChartComponent';


function fetchJsonData(setData) {
  fetch('../data/HC2_C_7D_Info.json')
      .then(response => response.json())
      .then(json => {
          // Process and transform the JSON data to the format expected by your radar chart
          const processedData = transformDataForChart(json);
          setData(processedData);
      })
      .catch(error => console.error('Failed to load JSON data', error));
}

function transformDataForChart(data) {
  // Assuming we want to use `height`, `volume`, and `maxSpreadVal` from the `panicle` and segments
  const segments = Object.values(data.segment); // Convert segments object to array
  const chartData = segments.map(segment => ({
      axis: "Segment",
      value: segment.endHeight // Example: using endHeight as value
  }));

  // Add `panicle` data
  chartData.push({
      axis: "Panicle Height",
      value: data.panicle.height
  });

  return [chartData]; // RadarChart might expect an array of arrays
}

const SegmentView = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchJsonData(setData);
}, []);

  var myData = [
      [ // First dataset
          {axis: "Strength", value: 0.59},
          {axis: "Skill", value: 0.56},
          {axis: "Health", value: 0.42},
          {axis: "Speed", value: 0.34},
          {axis: "Luck", value: 0.48},
          {axis: "Luck", value: 0.48},
          {axis: "Luck", value: 0.48},
          {axis: "Luck", value: 0.48}
      ],
      [ // Second dataset
          {axis: "Strength", value: 0.88},
          {axis: "Skill", value: 0.27},
          {axis: "Health", value: 0.26},
          {axis: "Speed", value: 0.29},
          {axis: "Luck", value: 0.65},
          {axis: "Luck", value: 0.65},
          {axis: "Luck", value: 0.65},
          {axis: "Luck", value: 0.65},
          
      ]
    ];

  return (
    <div className={styles.segmentView}>
      {/* Insert additional components or HTML elements as needed */}
      <h2 className='SegmentTitle'>Segment View</h2>
      <RadarChartComponent data={data} />
      {/* <VegetationIndexChart /> */}
      {/* Repeat for other charts or visual elements in the Segment View */}
    </div>
  );
};

export default SegmentView;



// // SegmentView.js
// import React from 'react';
// import RadarChartComponent from './RadarChartComponent';

// const SegmentView = () => {
//   // Sample data
// var myData = [
//   [ // First dataset
//       {axis: "Strength", value: 0.59},
//       {axis: "Skill", value: 0.56},
//       {axis: "Health", value: 0.42},
//       {axis: "Speed", value: 0.34},
//       {axis: "Luck", value: 0.48}
//   ],
//   [ // Second dataset
//       {axis: "Strength", value: 0.88},
//       {axis: "Skill", value: 0.27},
//       {axis: "Health", value: 0.26},
//       {axis: "Speed", value: 0.29},
//       {axis: "Luck", value: 0.65}
//   ]
// ];

//   return (
//     <div className="segmentView">
//       {/* other components */}
//       <h1>Segment View</h1>
//       {/* <RadarChartComponent data={myData} /> */}
//     </div>
//   );
// };

// export default SegmentView;

