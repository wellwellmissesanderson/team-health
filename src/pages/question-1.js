import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { CategoriesChart } from '../components/categories-chart';
import Layout from "../components/layout"
import DataHelpers from '../helpers/data';

export const QuestionTwo = ({ data }) => {
    const GQL_NODE_PATH = data.allQuestionthreeCsv.edges;
    const [categories, setCategories] = useState({});

    useEffect(() => {
        DataHelpers.formatForCategoryChart(GQL_NODE_PATH)
            .then(res => setCategories(res));
    }, [GQL_NODE_PATH]);

    return (
    <Layout>

        <h4>Based on this definition of 'great', has your perception of your squad being great gotten better/worse in the last 3 months?</h4>
        <hr></hr>

        <div className="chart">
            <CategoriesChart categories={categories} />
        </div>

        <hr></hr>
    </Layout>
    );
}

export default QuestionTwo;

export const QuestionTwoQuery = graphql`
    query {
        allQuestionthreeCsv {
            edges {
                node {
                    field1
                }
            }
        }
    }`
