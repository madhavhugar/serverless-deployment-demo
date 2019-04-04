'use strict';

async function helloWorld(event, context) {
  return {
    statusCode: 200,
    headers: {"content-type": "text/html"},
    body: '<h2 align="center">Hello, World<h2>'
  };
}

module.exports = helloWorld;
