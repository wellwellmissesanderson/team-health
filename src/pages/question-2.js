import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { CategoriesChart } from '../components/categories-chart';
import Layout from "../components/layout"
import DataHelpers from '../helpers/data';

export const QuestionTwo = ({ data }) => {
    const GQL_NODE_PATH = data.allQuestiontwoCsv.edges;
    const [categories, setCategories] = useState({});

    useEffect(() => {
        DataHelpers.getCategories(GQL_NODE_PATH)
            .then(res => setCategories(res));
    }, [GQL_NODE_PATH]);

    return (
    <Layout>

        <h4>Has your perception of Sycle's engineering department being great gotten better/worse in the last 12 months?</h4>
        <hr></hr>

        <CategoriesChart categories={categories} />

        <hr></hr>
    </Layout>
    );
}

export default QuestionTwo

export const QuestionTwoQuery = graphql`
    query {
        allQuestiontwoCsv {
            edges {
                node {
                    field1
                }
            }
        }
    }`
