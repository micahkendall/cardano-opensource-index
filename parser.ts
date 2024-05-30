import fs from 'fs';
import { Validator } from 'jsonschema';
import type { FromSchema } from "json-schema-to-ts";
import schema from "./schema"

type SchemaType = FromSchema<typeof schema>;

const rawData = fs.readFileSync('./data.json', 'utf-8');
const unparsedData = JSON.parse(rawData);

// Create a new Validator instance
const validator = new Validator();

// Validate the data against the schema
const validationResult = validator.validate(unparsedData, JSON.parse(JSON.stringify(schema)));

// Check if the validation passed or failed
if (validationResult.errors.length > 0) {
  console.error('Validation failed with the following errors:');
  validationResult.errors.forEach(error => {
    console.error(`- ${error.stack}`);
  });
  throw new Error("Goodbye!")
}

console.log('Validation succeeded. The data conforms to the schema.');
export const data = validationResult.instance as unknown as SchemaType