import { expect } from 'chai';
import app from '../app.js';
import request from 'supertest';

describe('API Tests', () => {
    it('should return "Hello, World!" on / GET', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).to.equal(200);
        console.log(res.body)
        expect(res.body.message).to.equal('Hello, World!');
    });
});
