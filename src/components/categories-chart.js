import React from 'react';
import { Pie } from 'react-chartjs-2';
import BG_COLOURS, { darken } from '../helpers/palette';

export const CategoriesChart = (props) => {
    const { categories, ...other } = props;

    const instances = [];
    const tags = [];

    Object.values(categories).forEach((cat, i) => {
        instances[i] = cat.instances;
        tags[i] = cat.title;
    });

    const legendOptions = {
        position: 'bottom',
        labels: {
            fontColor: 'rgb(135, 135, 135)'
        },
    }

    const chartData = {
        labels: tags,
        datasets: [{
            data: instances,
            backgroundColor: BG_COLOURS,
            hoverBackgroundColor: darken(BG_COLOURS)
        }]
    };

    return (
        <Pie data={chartData} legend={legendOptions} className="chart" {...other} />
    );
}

export default CategoriesChart;

// Would need to setup <StaticQuery> to do this here.
// https://www.gatsbyjs.org/docs/static-query/
// export const IndexQuery = graphql`
//     query {
//         allQuestiononeCsv {
//             edges {
//                 node {
//                     field2
//                 }
//             }
//         }
//     }`