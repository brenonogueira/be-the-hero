const express = require("express");

const OngController = require("./controllers/OngController");
const IncidentsController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");

const routes = express.Router();

//Session
routes.post('/sessions', SessionController.create)

//ongs
routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.create);

//incidents
routes.get("/incidents", IncidentsController.index);
routes.post("/incidents", IncidentsController.create);
routes.delete("/incidents/:id", IncidentsController.delete);

//Profile
routes.get("/profile", ProfileController.index);

module.exports = routes;
