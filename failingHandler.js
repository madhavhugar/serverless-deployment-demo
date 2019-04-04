'use strict';

async function failHandler(event, context) {
  throw new Error('Take me to Cloudwatch, and raise an alarm');
}

module.exports = failHandler;
