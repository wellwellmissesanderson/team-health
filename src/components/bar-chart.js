import React from 'react';
import { Bar } from 'react-chartjs-2';
// import BG_COLOURS, { darken } from '../helpers/palette';
import { RANK_OPTIONS } from '../helpers/constants';
import DataHelpers from '../helpers/data';

export const BarChart = (props) => {
    const { title, data } = props;

    // get count of each
    const instanceMap = DataHelpers.getInstancesFromCategories(data, RANK_OPTIONS);

    const labels = data && Array.from(instanceMap.keys());
    const values = data && Array.from(instanceMap.values());

    const chartData = {
        labels: labels,
        datasets: [
            {
            label: title,
            backgroundColor: 'rgb(38, 166, 154)',
            borderColor: 'rgb(32, 142, 131)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: values
            }
        ]
    };

    return (
        <div className="chart chart-lg">
            <Bar
                data={chartData}
                options={{
                    maintainAspectRatio: false
                }}
            />
        </div>
    );
};

