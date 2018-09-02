// Test framework.
import 'mocha';
// Assertion library.
import { use, expect } from 'chai';
// Standalone test spies, stubs and mocks.
import * as sinon from 'sinon';
// Extends Chai with assertions for the Sinon.JS 
import * as sinonChai from 'sinon-chai';

import { greetingFunction } from '../src/greeting.function';

use(sinonChai)

import * as _test from 'firebase-functions-test';
const test = _test();

describe('Greeting', () => {

    it('should make the greeting', () => {
        const req = {
            body: {
                name: 'Piscessera'
            }
        };
            
        const res = { send: (s) => {} };

        const spy = sinon.spy(res, 'send');

        greetingFunction(req, res);

        expect(res.send).to.have.been.calledWith(sinon.match({ greeting: 'Hello Piscessera' }));
    });

});
