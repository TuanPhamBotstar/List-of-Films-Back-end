const Film = require("../models/Film.model");

module.exports.postFilm = (req, res) => {
  console.log(req.body);
  const newTask = new Film({
    id:req.body.id,
    name: req.body.name,
    link: req.body.link,
    author:req.body.author,
    show: true,
    hl:false
  });
  newTask.save();
  res.writeHead(302, {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  });
};
module.exports.getFilm = (req, res) => {
  Film.find({}, (err, tasks) => {
    if (err) throw err;

    res.status(200).send(tasks);
  });
};
module.exports.getFilmById = (req, res) => {
  const id = req.params._id;
  console.log(id)
  Film.find({_id:id}, (err, task) => {
    if (err) console.log(err);

    res.status(200).send(task);
  });
};
// module.exports.getFilmCompleted = (req, res) => {
//   Film.find({ isFinished: true }, (err, tasks) => {
//     if (err) throw err;

//     res.status(200).send(tasks);
//   });
// };
module.exports.deleteFilm = (req, res) => {
  const id = req.params.id;
  console.log(id);
  Film.find({ _id: id })
    .deleteOne()
    .exec((err, result) => {
      console.log('hello')
      if (err) console.log(err);  

      console.log(result);
    })
    res.status(204);
};
module.exports.updateFilm = (req, res) => {
  const id = req.params._id;
  console.log(req.body);
  const film = Film.where({ _id: id });

  if (film.name != req.body.name) {
    film.updateOne({ $set: { name: req.body.name } }).exec();
  }
  if (film.link != req.body.link) {
    film.updateOne({ $set: { link: req.body.link } }).exec();
  }
  if (film.author != req.body.author) {
    film.updateOne({ $set: { author: req.body.author } }).exec();
  }

  res.status(200);
};