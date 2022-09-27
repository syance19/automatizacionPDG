const ONE_SEC = 1000;
const SMALL = 3000;
const MEDIUM = 6000;
const LARGE = 10000;
const XLARGE = 30000;

const IMPLICIT_TIMEOUT = 5000;
const PAGELOAD_TIMEOUT = 10000;
const WAIT_FOR_TIMEOUT = 10000;

const WaitTime = {
    SMALL,
    MEDIUM,
    LARGE,
    XLARGE,
    ONE_SEC,
};

const DefaultTimeout = {
    IMPLICIT_TIMEOUT,
    PAGELOAD_TIMEOUT,
    WAIT_FOR_TIMEOUT,
};

export { WaitTime, DefaultTimeout };