import React, { Component } from 'react'

import './StocksGraph.scss'

import CanvasJSReact from './canvasjs.react'
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export class StocksGraph extends Component {
    public chart: any

	render() {
		const options = {
			animationEnabled: true,
			// exportEnabled: true,
            zoomEnabled: true,
			// theme: 'light1', // 'light1', 'dark1', 'dark2'
            axisX: {
                lineThickness: 0,
                gridThickness: 0,
                tickLength: 0,
                labelFormatter: () => ''
            },
            axisY: {
                lineThickness: 0,
                gridThickness: 0,
                tickLength: 0,
                labelFormatter: () => ''
              },
			data: [{
				type: 'line',
                lineColor: 'black',
				// toolTipContent: 'Week {x}: {y}%',
				dataPoints: [
					{ x: 1, y: 64 },
					{ x: 2, y: 61 },
					{ x: 3, y: 64 },
					{ x: 4, y: 62 },
					{ x: 5, y: 64 },
					{ x: 6, y: 60 },
					{ x: 7, y: 58 },
					{ x: 8, y: 59 },
					{ x: 9, y: 53 },
					{ x: 10, y: 54 },
					{ x: 11, y: 61 },
					{ x: 12, y: 60 },
					{ x: 13, y: 55 },
					{ x: 14, y: 60 },
					{ x: 15, y: 56 },
					{ x: 16, y: 60 },
					{ x: 17, y: 59.5 },
					{ x: 18, y: 63 },
					{ x: 19, y: 58 },
					{ x: 20, y: 54 },
					{ x: 21, y: 59 },
					{ x: 22, y: 64 },
					{ x: 23, y: 59 }
				]
			}]
		}
		return (
		<div className='stocks-graph-container'>
			<CanvasJSChart options = {options}
				//  onRef={(ref: any) => {                 }}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}}

// export const StocksGraph: React.FC = () => {



//     return (
//         <div className='stocks-graph-container'>
//             Graph Works!!!
//         </div>
//     )
// }