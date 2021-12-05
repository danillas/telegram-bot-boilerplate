/* eslint-disable */
const { config } = require('dotenv');
const { red, green } = require('chalk');

const configFile = '.env';

const requiredEnvVars = ['BOT_TOKEN'];

// Parse env file
const { parsed } = config({ path: configFile });

if (!parsed) {
  console.log(
    red(`Environment variables validation failed. Unable to find env file: ${configFile}`)
  );
  return process.exit(1);
}

// Get missing environment variables
const missing = requiredEnvVars.filter(v => !(v in parsed));

// In case, we have missing variables, exit from process with non-zero code
if (missing.length > 0) {
  console.log(
    red(`Environment variables validation failed. Missing: ${missing.join(', ')}`)
  );
  return process.exit(1);
}

console.log(green('Envrionment variables are fine! Variables: '), parsed);
process.exit(0);
