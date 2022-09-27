import * as report from './reporter';
import allure from '@wdio/allure-reporter';


export const addStep = (message: string, logLevel = 'info') => {
    report.addStep(`STEP: ${message}`, logLevel);
}

export const addAssertion = (message: string, status: boolean) => {
    report.addStep(`Assertion>> ${message}`, status ? 'info' : 'error');
}

export const allureConsoleReportGenerator = async (context: any) => {
    const scenarioTags = context.pickle.tags;
    let tagasList = [];
    for (let i = 0; i < scenarioTags.length; i++) {
        tagasList.push(scenarioTags[i].name);
    }
    const scenarioName = context.pickle.name;
    const scenarioId = context.pickle.id;
    const feature = context.gherkinDocument.feature;

    let contextValues = [];
    contextValues.push(tagasList.toString());
    contextValues.push(scenarioName.toString());
    contextValues.push(scenarioId.toString());
    contextValues.push(feature?.name.toString());


}