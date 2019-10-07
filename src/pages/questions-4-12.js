import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { BarChart } from '../components/bar-chart';
import { GQL_KEYS_RANKING } from '../helpers/constants';
import Layout from "../components/layout"
import DataHelpers from '../helpers/data';

export const RankingQuestions = ({ data }) => {

    const [datasets, setDatasets] = useState(null);

    useEffect(() => {
        const shouldGetHeader = true;

        // loop over paths and format data
        const promiseList = GQL_KEYS_RANKING.map(q => DataHelpers.formatForBarChart(data[q]['edges'], shouldGetHeader));

        Promise.all(promiseList)
        .then(res => setDatasets(res))
    }, [data]);

    return (
        <Layout>
            <h4>Rankings</h4>
            <hr></hr>

            {datasets && datasets.map((set, i) => {
                const title = DataHelpers.getHeaderRow(set);
                const data = DataHelpers.getDataRows(set);

                return (
                    <BarChart key={`${title}|${i}`} data={data} title={title} />
                );
            })}

            <hr></hr>
        </Layout>
    );
}

export default RankingQuestions;

// ToDo: use promise.all to gen pages
// https://swas.io/blog/using-multiple-queries-on-gatsbyjs-createpages-node-api/
export const IndexQuery = graphql`
    query {
        allQuestionfourCsv {
            edges {
                node {
                    field1
                }
            }
        }
        allQuestionfiveCsv {
            edges {
                node {
                    field1
                }
            }
        }
        allQuestionsixCsv {
            edges {
                node {
                    field1
                }
            }
        }
        allQuestionsevenCsv {
            edges {
                node {
                    field1
                }
            }
        }
        allQuestioneightCsv {
            edges {
                node {
                    field1
                }
            }
        }
        allQuestionnineCsv {
            edges {
                node {
                    field1
                }
            }
        }
        allQuestiontenCsv {
            edges {
                node {
                    field1
                }
            }
        }
        allQuestionelevenCsv {
            edges {
                node {
                    field1
                }
            }
        }
        allQuestiontwelveCsv {
            edges {
                node {
                    field1
                }
            }
        }
        allQuestionthirteenCsv {
            edges {
                node {
                    field1
                }
            }
        }
        allQuestionfourteenCsv {
            edges {
                node {
                    field1
                }
            }
        }
        allQuestionfifteenCsv {
            edges {
                node {
                    field1
                }
            }
        }
    }`
