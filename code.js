function convertToAdjList(adjMatrix) {
    if (adjMatrix.length === 0) {
        return [];  
    }

    let adjList = Array.from({ length: adjMatrix.length }, () => []);
    adjMatrix.forEach((row, i) => {
        row.forEach((value, j) => {
            if (value === 1) {
                adjList[i].push(j);
            }
        });
    });
    return adjList;
}
