// Set the connection string based from the config vars of the production server
// To run locally use 'mongodb://localhost/mern-crud' instead of process.env.DB
// export YOURDB="mongodb://<USER>:<PASSWORD>@<URI>:<PORT>/<DATABASE>"

module.exports = {
  db: "mongodb://localhost:27017/junction"
};
