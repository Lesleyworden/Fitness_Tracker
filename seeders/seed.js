let mongoose = require("mongoose");
let db = require("../models/");

// connect to local mongoose database
mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// seed objects
let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate() - 10),
    exercises: [
      {
        type: "resistance",
        name: "Bicep Curl",
        duration: 20,
        weight: 75,
        reps: 10,
        sets: 4,
      },
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 225,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 9),
    exercises: [
      {
        type: "resistance",
        name: "Lateral Pull",
        duration: 20,
        weight: 250,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 8),
    exercises: [
      {
        type: "resistance",
        name: "Push Press",
        duration: 25,
        weight: 185,
        reps: 8,
        sets: 4,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 7),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 6),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 160,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date().setDate(new Date().getDate() - 5),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 185,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 4)),
    exercises: [
      {
        type: "resistance",
        name: "Quad Press",
        duration: 30,
        weight: 300,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 3)),
    exercises: [
      {
        type: "resistance",
        name: "Bench Press",
        duration: 20,
        weight: 165,
        reps: 10,
        sets: 4,
      },
    ],
  },
  {
    day: new Date(new Date().setDate(new Date().getDate() - 2)),
    exercises: [
      {
        type: "resistance",
        name: "Military Press",
        duration: 20,
        weight: 135,
        reps: 10,
        sets: 4,
      },
      {
        type: "resistance",
        name: "Squats",
        duration: 15,
        weight: 315,
        reps: 5,
        sets: 5,
      },
      {
        type: "cardio",
        name: "Running",
        duration: 40,
        distance: 5,
      },
    ],
  },
];

// delete all previous records from the database
db.Workout.deleteMany({})
  // insert all seed items
  .then(() => db.Workout.collection.insertMany(workoutSeed))
  // log how many records were inserted
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  // error logging
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
