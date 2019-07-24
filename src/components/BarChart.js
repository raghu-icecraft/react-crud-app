import React from 'react';
import {
    XYPlot,
    XAxis, // Shows the values on x axis
    YAxis, // Shows the values on y axis
    VerticalBarSeries,
    LabelSeries
} from 'react-vis';
import './BarChart.css';

class BarChart extends React.Component {
    constructor(props){
        super(props);
        this.state={
          title: 'A Plant based CRUD application',
          datas: [],
          shouldHide: true
        }
      } 
    
    componentDidMount() {
        let datas = [
            { "y": 100, "x": "Jan" },
            { "y": 112, "x": "Feb" },
            { "y": 230, "x": "Mar" },
            { "y": 268, "x": "Apr" },
            { "y": 300, "x": "May" },
            { "y": 310, "x": "Jun" },
            { "y": 315, "x": "Jul" },
            { "y": 340, "x": "Aug" }
        ]

        this.setState({
            datas: datas,
            shouldHide: false
          });
          
    }  
    render() {
        const data = this.state.datas;
        const chartWidth = 800;
        const chartHeight = 400;
        const chartDomain = [0, chartHeight];
        return (
            <div className={this.state.shouldHide ? "hidden" : ""}> 
                <XYPlot 
                    xType="ordinal" 
                    width={chartWidth} 
                    height={chartHeight} 
                    //<!-- yDomain={chartDomain}  -->
                    >
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries
                        data={data}
                    />
                    <LabelSeries
                        data={data.map(obj => {
                            return { ...obj, label: obj.y.toString() }
                        })}
                        labelAnchorX="middle"
                        labelAnchorY="text-after-edge"
                    />
                </XYPlot>
            </div>
        );
    }
}
export default BarChart;
