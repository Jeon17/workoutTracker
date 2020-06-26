const router = express.Router;
const db = require("../models");

module.exports = function (app) {
  //Used by /public/api.js to get workouts
  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  //Adds a new workout
  app.post("/api/workouts", async (req, res) => {
    try {
      const response = await db.Workout.create({ type: "workout" });
      res.json(response);
    } catch (err) {
      err;
    }
  });

  //Used by /public/api.js to add an exercise to workout
  app.put("/api/workouts/:id", ({ body, params }, res) => {
    //console.log(body, params)
    const workoutId = params.id;
    //console.log(workoutId);
    let storedExercises = [];

    db.Workout.find({ _id: workoutId })
      .then((dbWorkout) => {
        // console.log(dbWorkout)
        storedExercises = dbWorkout[0].exercises;
        res.json(dbWorkout[0].exercises);
        let allExercises = [...storedExercises, body];
        console.log(allExercises);
        updateWorkout(allExercises);
      })
      .catch((err) => {
        res.json(err);
      });

    function updateWorkout(exercises) {
      db.Workout.findByIdAndUpdate(
        workoutId,
        { exercises: exercises },
        function (err, doc) {
          if (err) {
            console.log(err);
          }
        }
      );
    }
  });

  //Used by /public/stats to display on dashboard
  app.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
      .then((workout) => {
        res.json(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    // "runValidators" will ensure new exercises meet our schema requirements
    { new: true, runValidators: true }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});
