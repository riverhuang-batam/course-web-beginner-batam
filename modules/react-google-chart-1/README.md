# [react-google-chart 1](https://react-google-charts.com/)

---

## Installation

`npm install react-google-charts --save`

---

## Usage

```js
import React, { Component } from 'react';
import Chart from 'react-google-charts';

export default class ReactGoogleCharts extends Component {
    render(){
        return (
            <div>
                <Chart
                    width={300}
                    height={300}
                    chartType="ColumnChart"
                    loader={<div>Loading Chart</div>}
                    data={[
                        [
                            'City', '2010 Population', '2000 Population'
                        ],
                        [
                            'New York City', 8175000, 8008000
                        ],
                        [
                            'Los Angeles, CA', 3792000, 3694000
                        ]
                    ]}
                    options={{
                        title: 'Population of Largest U.Us. Cities',
                        chartArea: { with: '30%'},
                        hAxis: {
                            title: 'Total Population',
                            minValue: 0,
                        },
                        vAxis: {
                            title: 'City'
                        }
                    }}
                    legendToggle
                />
            </div>
        )
    }
}
```