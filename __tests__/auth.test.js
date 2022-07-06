// 'use strict';

// const supertest = require('supertest');
// const server = require('../src/server').server;
// const { sequelize } = require('../src/models');

// const mockRequest = supertest(server);

// let users = {
//   admin: { username: 'admin', password: 'password', role: 'admin' },
//   editor: { username: 'editor', password: 'password', role: 'editor' },
//   user: { username: 'user', password: 'password', role: 'user' },
// };

// beforeAll(async (done) => {
//   await sequelize.sync();
//   done();
// });
// afterAll(async (done) => {
//   await sequelize.drop();
//   done();
// });

// describe('Auth Router', () => {

//   Object.keys(users).forEach(userType => {

//     describe(`${userType} users`, () => {

//       it('can create one', async () => {

//         const response = await mockRequest.post('/signup').send(users[userType]);
//         const userObject = response.body;

//         expect(response.status).toBe(201);
//         expect(userObject.token).toBeDefined();
//         expect(userObject.user.id).toBeDefined();
//         expect(userObject.user.username).toEqual(users[userType].username);

//       });

//       it('can signin with basic', async () => {

//         const response = await mockRequest.post('/signin')
//           .auth(users[userType].username, users[userType].password);

//         const userObject = response.body;
//         expect(response.status).toBe(200);
//         expect(userObject.token).toBeDefined();
//         expect(userObject.user.id).toBeDefined();
//         expect(userObject.user.username).toEqual(users[userType].username);

//       });

//       it('can signin with bearer', async () => {

//         // First, use basic to login to get a token
//         const response = await mockRequest.post('/signin')
//           .auth(users[userType].username, users[userType].password);

//         const token = response.body.token;

//         // First, use basic to login to get a token
//         const bearerResponse = await mockRequest
//           .get('/users')
//           .set('Authorization', `Bearer ${token}`);

//         // Not checking the value of the response, only that we "got in"
//         expect(bearerResponse.status).toBe(200);

//       });

//     });

//     describe('bad logins', () => {
//       it('basic fails with known user and wrong password ', async () => {

//         const response = await mockRequest.post('/signin')
//           .auth('admin', 'xyz');
//         const userObject = response.body;

//         expect(response.status).toBe(403);
//         expect(userObject.user).not.toBeDefined();
//         expect(userObject.token).not.toBeDefined();

//       });

//       it('basic fails with unknown user', async () => {

//         const response = await mockRequest.post('/signin')
//           .auth('nobody', 'xyz');
//         const userObject = response.body;

//         expect(response.status).toBe(403);
//         expect(userObject.user).not.toBeDefined();
//         expect(userObject.token).not.toBeDefined();

//       });

//       it('hits "/secret"', async () => {

//         // First, use basic to login to get a token
//         const tokenResponse = await mockRequest.post('/signin')
//           .auth(users[userType].username, users[userType].password);

//         const token = tokenResponse.body.token;

//         // First, use basic to login to get a token
//         const response = await mockRequest
//           .get('/secret')
//           .set('Authorization', `Bearer ${token}`);

//         expect(response.status).toBe(200);
//         expect(response.text).toBe('Welcome to the secret area');
//       });
//     });

//   });

// });
