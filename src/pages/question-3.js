import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { CategoriesChart } from '../components/categories-chart';
import Layout from "../components/layout"
import DataHelpers from '../helpers/data';

    export const QuestionOne = ({ data }) => {
        const GQL_NODE_PATH = data.allQuestiononeCsv.edges;
        const [categories, setCategories] = useState({});

        useEffect(() => {
        DataHelpers.formatForCategoryChart(GQL_NODE_PATH, 'field2')
            .then(res => setCategories(res));
        }, [GQL_NODE_PATH]);

        return (
        <Layout>
            <h4>If you've ever been on a truly great team (sports, volunteering, work, other), what specifically made it that way?</h4>
            <h5 className="muted">The long-form responses were tagged into the categories shown.</h5>
            <hr></hr>

            <div className="chart chart-lg">
                <CategoriesChart
                    categories={categories}
                />
            </div>

            <hr></hr>
        </Layout>
        );
    }

    export default QuestionOne;

    export const IndexQuery = graphql`
        query {
            allQuestiononeCsv {
                edges {
                    node {
                        field2
                    }
                }
            }
        }`
