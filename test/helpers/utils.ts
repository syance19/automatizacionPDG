interface CucumberDataTable {
    rawTable: [string[]];
}

/**
 * Takes a Cucumber Data Table as input and
 * returns a list of the values passed by the data table.
 * Also remove the first element of the list before returning.
 * feature
 * Example:
 *  Input from feature file:
 *    | List of values |
 *    | Value1         |
 *    | Value2         |
 *  Output:
 *  ['Value1','Value2']
 * 
 */
const dataTableDeserializer = (dataTable: CucumberDataTable) => {
    const entryList = dataTable.rawTable;
    entryList.shift();
    const finalList = entryList.map((elem) => elem[0]);
    return finalList;
};

export { dataTableDeserializer };