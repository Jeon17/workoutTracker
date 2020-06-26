const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Creating new schema to let it be routed to MongoDB 
const newSchema = new Schema(
    {
    day: {
      type: Date,
      default: Date.now,
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Enter exercise type",
        },
        name: {
          type: String,
          trim: true,
          required: "Enter exercise name",
        },
        duration: {
          type: Number,
          required: "Enter exercise duration (mins)",
        },
        weight: {
          type: Number,
        },
        reps: {
          type: Number,
        },
        sets: {
          type: Number,
        },
        distance: {
          type: Number,
        },
      },
    ],
  },
);

//Virtual schema needed for computing properties of document
newSchema.virtual("totalDuration").get(function () {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("workout", newSchema);

module.exports = Workout;
