const retries = 3;
const delayMins = 2000;
const apiMock = () => {
    return new Promise((resolve, reject) => {
        const apiResponse = {
            name: "Meer",
            designation: "Developer"
        };
        const statusCode = 400;
        if (statusCode === 200)
            resolve(apiResponse);
        else
            reject("Something wrong");
    });
};

const retry = (callback, retries, delay) => {
    return new Promise((resolve, reject) => {
        callback()
            .then(resolve)
            .catch(err => {
                if (retries > 0) {
                    console.log("Retrying, attempts left: " + retries);
                    setTimeout(() => {
                        retry(callback, retries - 1, delay).then(resolve).catch(reject);
                    }, delay);
                } else {
                    reject("Failed");
                }
            });
    });
};

retry(apiMock, retries, delayMins)
    .then(result => console.log("Success:", result))
    .catch(err => console.log("Failed:", err));