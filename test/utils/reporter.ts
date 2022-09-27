import allure from '@wdio/allure-reporter';

/**
 * Global reporter used for both logger and Allure.
 * Currently added message goes as a arg to .addstep() of alllure
 * @param loglevel
 * @param msg
 */
function addStep(msg: string, loglevel: string) {
    let arr = ["info", "error"];
    // if (!msg) logger.error(`Given message: ${msg} is not valid to report`);
    // if (!arr.includes(loglevel)) logger.error(`Given loglevel: ${loglevel} is
    // invalid and should be one of these values: ${arr}`);

    try {
        if (loglevel === "error") {
            allure.addStep(msg, {}, "failed");
        } else {
            allure.addStep(msg);
            // logger.info(`${msg}`);
        }
    } catch (err) {
        throw Error(`Error reporting reporter step, ${err}`);
    }
}
export { addStep }