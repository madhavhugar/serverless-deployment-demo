'use strict';

async function abuseWorld(event, context) {
  return {
    statusCode: 200,
    headers: {"content-type": "text/html"},
    body: '<h2 align="center">F*ck the world<h2>'
  };
}

module.exports = abuseWorld;
