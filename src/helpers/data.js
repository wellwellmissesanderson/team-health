export default class DataHelpers {
    static getCategories = (nodes) => {

        return new Promise((resolve, reject) => {
            const data = _getUniqueCategories(nodes);
            console.log('data > ', data);

            if(!data) {
                reject(new Error('something happened...'));
            } else {
                resolve(data);
            }
        });
    };
};

//getUniqueCategories
const _getUniqueCategories = (nodes) => {
    if(!nodes || !nodes.length) { return {} }

    // remove header row (it is CSV after all)
    const nodesOnly = nodes.slice(1);
    const categoriesMap = {
        // title
        // instances
    };

    nodesOnly.forEach((node, i) => {
        const categories = _getCSVRowItems(node.node.field2);

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

// split values on comma and send as array items
const _getCSVRowItems = (rowStr) => {
    if(!rowStr) { return null; }

    return rowStr.split(',');
}
