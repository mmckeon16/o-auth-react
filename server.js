const express = require("express");
require("dotenv").config();
var jwt = require("express-jwt");
var jwksRsa = require("jwks-rsa");

const checkJwt = jwt({
  // Dynamically provide a signing key based on the kid in the header
  // and the signing keys provided by the JWKS endpoint.
  secret: jwksRsa.expressJwtSecret({
    cache: true, // cache the signing key
    rateLimit: true,
    jwksRequestsPerMinute: 5, // prevent attackers from requesting more than 5 per minute
    jwksUri: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/.well-known/jwks.json`
  }),

  // Validate the audience and the issuer.
  audience: process.env.REACT_APP_AUTH0_AUDIENCE,
  issuer: `https://${process.env.REACT_APP_AUTH0_DOMAIN}/`,

  // This must match the algorithm selected in the Auth0 dashboard under your app's advanced settings under the OAuth tab
  algorithms: ["RS256"]
});

const app = express();

app.get("/public", function(req, res) {
  res.json({
    message: "hello from public api"
  });
});

app.get("/private", checkJwt, function(req, res) {
  res.json({
    message: "hello from private api"
  });
});

const port = 3001;

app.listen(port, function() {
  console.log("running server on " + port);
});
