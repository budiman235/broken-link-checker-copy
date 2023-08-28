"use-strict";

function enhanceHeader(options) {
    let headers = {
        "user-agent": options.userAgent
    };
    if (options.basicAuthUsername && options.basicAuthPassword) {
        let basicAuthToken = Buffer.from((options.basicAuthUsername + ":" + options.basicAuthPassword)).toString('base64');
        headers.Authorization = "Basic " + basicAuthToken;
    }
    return headers;
}

module.exports = enhanceHeader