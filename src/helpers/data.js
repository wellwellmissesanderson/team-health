export default class DataHelpers {

    static formatForCategoryChart = (nodes, fieldKey) => {

        return new Promise((resolve, reject) => {
            const data = this.getUniqueCategories(nodes, fieldKey);

            if(!data) {
                reject(new Error('something happened...'));
            } else {
                resolve(data);
            }
        });
    };

    static formatForBarChart = (nodes, withHeader = true) => {
        return new Promise((resolve, reject) => {
            const data = withHeader ? nodes : this.getDataRows(nodes);

            if(!data) {
                reject(new Error('ruh roh! Something happened...'));
            } else {
                resolve(data);
            }
        });
    };

    static getHeaderRow = (nodes, fieldKey = 'field1') => {
        if(!nodes || !nodes.length) { return '' }

        return nodes[0].node[fieldKey];
    };

    static getDataRows = (nodes) => {
        return nodes.slice(1);
    };

    static getInstancesFromCategories = (nodes, categories) => {
        if(!nodes || !nodes.length || !categories) { return {} }

        const categoriesMap = {};

        nodes.forEach((node, i) => {
            // will only have one string this time
            const catName = node.node['field1'];

            // If not a valid string, remove from categories
            if(!catName) { return; }

            if(categoriesMap[catName]) {
                categoriesMap[catName].instances++;
            } else {
                categoriesMap[catName] = {
                    title: catName,
                    instances: 1
                };
            }
        });

        // use map to preserve order as mandated by
        // charting library
        const orderedInstances = new Map();

        categories.map(category => {
            const instances = categoriesMap[category] ? categoriesMap[category].instances : 0;

            orderedInstances.set(category, instances);
        });

        return orderedInstances;
    }

    static getUniqueCategories = (nodes, fieldKey = 'field1', hasHeaderRow = true) => {
        if(!nodes || !nodes.length) { return {} }

        // remove header row? (it is CSV after all)
        const nodesOnly = hasHeaderRow ? nodes.slice(1) : nodes;
        const categoriesMap = {
            // title
            // instances
        };

        nodesOnly.forEach((node, i) => {
            const categories = _getCSVRowItems(node.node[fieldKey]);

            // If not a valid string, remove from categories
            if(!categories) { return; }

            categories.forEach((category, i) => {
                if(categoriesMap[category]) {
                    categoriesMap[category].instances++;
                } else {
                    categoriesMap[category] = {
                        title: category,
                        instances: 1
                    };
                }
            });
        });

        return categoriesMap;
    };
};

// split values on comma and send as array items
const _getCSVRowItems = (rowStr) => {
    if(!rowStr) { return null; }

    return rowStr.split(',');
}
