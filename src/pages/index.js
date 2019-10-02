import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { CategoriesChart } from '../components/categories-chart';
import Layout from "../components/layout"
import DataHelpers from '../helpers/data';

export const IndexPage = ( {data} ) => {
  const GQL_NODE_PATH = data.allQuestiononeCsv.edges;
  const [categories, setCategories] = useState({});

  useEffect(() => {
    DataHelpers.getCategories(GQL_NODE_PATH)
      .then(res => setCategories(res));
  }, [GQL_NODE_PATH]);

  return (
    <Layout>
      <h2>We asked some questions about our team.</h2>

      <hr></hr>
      <h4>Question 1: If you've ever been on a truly great team (sports, volunteering, work, other), what specifically made it that way?</h4>
      <hr></hr>
      <h5 className="muted">The long-form responses were tagged into {categories.length} categories</h5>

      <CategoriesChart categories={categories} />

      <hr></hr>
      <h4>Question 2: If you've been on a less-than-great team, what specifically made it that way?</h4>
      <hr></hr>

      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </Layout>

  );
}

export default IndexPage;

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
