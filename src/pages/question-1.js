import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import { graphql } from "gatsby"
import { CategoriesChart } from '../components/categories-chart';
import Layout from "../components/layout"
import DataHelpers from '../helpers/data';

export const SecondPage = ({ data }) => {
  const GQL_NODE_PATH = data.allQuestiononeCsv.edges;
  const [categories, setCategories] = useState({});

  useEffect(() => {
    DataHelpers.getCategories(GQL_NODE_PATH)
      .then(res => setCategories(res));
  }, [GQL_NODE_PATH]);

  return (
    <Layout>

      <h4>If you've ever been on a truly great team (sports, volunteering, work, other), what specifically made it that way?</h4>
      <hr></hr>
      <h5 className="muted">The long-form responses were tagged into {categories.length} categories</h5>

      <CategoriesChart categories={categories} />

      <hr></hr>
      {/* <Link to="/">Go back to the homepage</Link> */}
    </Layout>
  );
}

export default SecondPage

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
