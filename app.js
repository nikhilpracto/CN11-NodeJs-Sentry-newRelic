const Sentry = require("@sentry/node");
const http = require("http");
// or use es6 import statements
// import * as Sentry from '@sentry/node';

const Tracing = require("@sentry/tracing");
// or use es6 import statements
// import * as Tracing from '@sentry/tracing';

class ErrorFunction {
    captureEvent(event){
        console.log("Error");
        return Promise.reject("429");
    }
}

Sentry.init({
    debug: true,
    dsn: "https://05a693ddddc744da95078a94b98f0b21@o1197875.ingest.sentry.io/6320565",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  erorFunction: ErrorFunction
});

http.createServer(function(req, res){
    res.write("Hi Everyone");
    res.end();
}).listen(8080);

Sentry.captureMessage("test messagee");