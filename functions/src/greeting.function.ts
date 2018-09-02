import * as functions from 'firebase-functions';

/**
 * greeting name function.
 */

export function greetingFunction(req, res): void {
  let result: any = {};

  const data = {
    name: req.body.name
  };

  // get config from firebase
  // functions.config()

  // use firebase real time database
  // const admin = require('firebase-admin');
  // const ref = db.ref('simple/1').once('value')
    //.then(function(snapshot){ 
      //if(snapshot.exists()){
        // if data exist
      // }else{
        // if data not exist
      // } 
  // });

  result = {
    greeting: 'Hello ' + data.name
  }

  res.send(result);
}
