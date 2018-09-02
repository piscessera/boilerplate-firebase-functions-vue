import * as functions from 'firebase-functions';

/**
 * greeting name function.
 */

export function greetingFunction(req, res): void {
  let result: any = {};

  const data = {
    name: req.body.name
  };

  result = {
    greeting: 'Hello ' + data.name
  }

  res.send(result);
}
