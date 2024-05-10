window.addEventListener("load", solve);

function solve() {
    let name = document.getElementById("users-name");
    let gender = document.getElementById("gender");
    let muscleGroup = document.getElementById("muscle-group");
    let generateBtn = document.getElementById("generate-btn");
    generateBtn.addEventListener("click", generateWorkout);
    let workoutResult = document.getElementById("workout-result");

let previousWorkout = null;

function generateWorkout(e) {
    e.preventDefault();
    if (
        name.value === "" ||
        gender.value === "" ||
        muscleGroup.value === "" ||
        (gender.value !== "male" && gender.value !== "female") ||
        (muscleGroup.value !== "push" &&
            muscleGroup.value !== "pull" &&
            muscleGroup.value !== "legs")
    ) {
        alert(
            "Please fill all fields and select valid options for gender and muscle group."
        );
        return;
    }

    workoutResult.innerHTML = "";

    let workouts = gender.value === "male" ? maleWorkouts : femaleWorkouts;
    let selectedWorkouts = workouts[muscleGroup.value];

    selectedWorkouts = selectedWorkouts.filter(
        (workout) => workout.name !== previousWorkout
    );
    let randomWorkout =
        selectedWorkouts[Math.floor(Math.random() * selectedWorkouts.length)];

    previousWorkout = randomWorkout.name;

    renderWorkout(randomWorkout);
}


    function renderWorkout(workout) {
        let h4 = document.createElement("h4");
        h4.textContent = `Here is the perfect workout for you, ${name.value}: ${workout.name}`;
        workoutResult.appendChild(h4);

        let ul = document.createElement("ul");
        workout.exercises.forEach((exercise) => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${exercise.name}:</strong> ${exercise.description}, Sets: ${exercise.sets}, Reps: ${exercise.reps}`;
            ul.appendChild(li);
        });
        workoutResult.appendChild(ul);
    }
}
let maleWorkouts = {
    push: [
        {
            name: "Push 1",
            exercises: [
                {
                    name: "Push-ups",
                    description: "A classic bodyweight exercise that strengthens the chest, shoulders, and triceps.",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Dumbbell Bench Press",
                    description: "A compound exercise that targets the chest, shoulders, and triceps.",
                    sets: 4,
                    reps: 10
                },
                {
                    name: "Overhead Shoulder Press",
                    description: "An effective exercise for building shoulder strength and muscle.",
                    sets: 3,
                    reps: 10
                },
                {
                    name: "Tricep Dips",
                    description: "A bodyweight exercise that targets the triceps.",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Chest Flyes",
                    description: "An isolation exercise for the chest muscles.",
                    sets: 3,
                    reps: 12
                }
            ]
        },
        {
            name: "Push 2",
            exercises: [
                {
                    name: "Push-ups",
                    description: "A classic bodyweight exercise that strengthens the chest, shoulders, and triceps.",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Dumbbell Flyes",
                    description: "An isolation exercise that targets the chest muscles.",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Tricep Dips",
                    description: "A bodyweight exercise that targets the triceps.",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Shoulder Press Machine",
                    description: "A machine-based exercise that targets the shoulders.",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Incline Dumbbell Bench Press",
                    description: "A variation of the bench press that targets the upper chest.",
                    sets: 4,
                    reps: 10
                }
            ]
        }
    ],
    pull: [
        {
            name: "Pull 1",
            exercises: [
                {
                    name: "Pull-ups",
                    description: "An upper body exercise that primarily targets the back and biceps.",
                    sets: 4,
                    reps: 8
                },
                {
                    name: "Dumbbell Rows",
                    description: "A rowing exercise that targets the back muscles.",
                    sets: 4,
                    reps: 10
                },
                {
                    name: "Bicep Curls",
                    description: "An isolation exercise for the biceps.",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Hammer Curls",
                    description: "An alternative biceps exercise that targets the brachialis.",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Lat Pulldowns",
                    description: "A machine-based exercise that targets the back and biceps.",
                    sets: 3,
                    reps: 12
                }
            ]
        },
        {
            name: "Pull 2",
            exercises: [
                {
                    name: "Barbell Rows",
                    description: "A compound exercise that targets the back muscles.",
                    sets: 4,
                    reps: 10
                },
                {
                    name: "Dumbbell Hammer Curls",
                    description: "A variation of bicep curls that targets the brachialis.",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Close Grip Pulldowns",
                    description: "A variation of lat pulldowns that targets the inner back and biceps.",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Face Pulls",
                    description: "An exercise that targets the rear deltoids and upper back.",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Reverse Flyes",
                    description: "An exercise that targets the rear deltoids and upper back.",
                    sets: 3,
                    reps: 12
                }
            ]
        }
    ],
    legs: [
        {
            name: "Legs 1",
            exercises: [
                {
                    name: "Squats",
                    description: "A fundamental lower body exercise that targets the quadriceps, hamstrings, and glutes.",
                    sets: 4,
                    reps: 12
                },
                {
                    name: "Lunges",
                    description: "A unilateral lower body exercise that targets the quadriceps, hamstrings, and glutes.",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Deadlifts",
                    description: "A compound exercise that targets the posterior chain, including the lower back, glutes, and hamstrings.",
                    sets: 4,
                    reps: 10
                },
                {
                    name: "Leg Press",
                    description: "A machine-based exercise that targets the quadriceps, hamstrings, and glutes.",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Calf Raises",
                    description: "An exercise to target the calf muscles.",
                    sets: 3,
                    reps: 15
                }
            ]
        },
        {
            name: "Legs 2",
            exercises: [
                {
                    name: "Romanian Deadlifts",
                    description: "A variation of deadlifts that primarily targets the hamstrings and glutes.",
                    sets: 4,
                    reps: 10
                },
                {
                    name: "Leg Curls",
                    description: "An isolation exercise for the hamstrings.",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Step-ups",
                    description: "An exercise to target the quadriceps and glutes.",
                    sets: 3,
                    reps: 12
                },
                {
                    name: "Seated Calf Raises",
                    description: "A seated variation of calf raises.",
                    sets: 3,
                    reps: 15
                },
                {
                    name: "Leg Extensions",
                    description: "An isolation exercise for the quadriceps.",
                    sets: 3,
                    reps: 12
                }
            ]
        }
    ]
};
let femaleWorkouts = {
        push: [
            {
                name: "Push 1",
                exercises: [
                    {
                        name: "Modified Push-ups",
                        description: "A variation of push-ups suitable for beginners or those with less upper body strength.",
                        sets: 3,
                        reps: 10
                    },
                    {
                        name: "Dumbbell Chest Press",
                        description: "A chest exercise using dumbbells to target the pectoral muscles.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Shoulder Press",
                        description: "An exercise targeting the shoulder muscles.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Tricep Kickbacks",
                        description: "An isolation exercise for the triceps.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Chest Flyes",
                        description: "An isolation exercise for the chest muscles.",
                        sets: 3,
                        reps: 12
                    }
                ]
            },
            {
                name: "Push 2",
                exercises: [
                    {
                        name: "Incline Bench Press",
                        description: "A variation of the bench press that targets the upper chest.",
                        sets: 3,
                        reps: 10
                    },
                    {
                        name: "Dumbbell Shoulder Press",
                        description: "A variation of shoulder press using dumbbells.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Tricep Dips",
                        description: "A bodyweight exercise targeting the triceps.",
                        sets: 3,
                        reps: 10
                    },
                    {
                        name: "Cable Chest Press",
                        description: "An exercise using cable machines to target the chest muscles.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Tricep Pushdowns",
                        description: "An isolation exercise targeting the triceps.",
                        sets: 3,
                        reps: 12
                    }
                ]
            }
        ],
        pull: [
            {
                name: "Pull 1",
                exercises: [
                    {
                        name: "Assisted Pull-ups",
                        description: "A variation of pull-ups using an assisted pull-up machine or resistance bands.",
                        sets: 3,
                        reps: 8
                    },
                    {
                        name: "Dumbbell Rows",
                        description: "A rowing exercise targeting the back muscles.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Bicep Curls",
                        description: "An isolation exercise targeting the biceps.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Lat Pulldowns",
                        description: "An exercise targeting the back muscles.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Reverse Flyes",
                        description: "An exercise targeting the rear deltoids and upper back.",
                        sets: 3,
                        reps: 12
                    }
                ]
            },
            {
                name: "Pull 2",
                exercises: [
                    {
                        name: "Wide Grip Rows",
                        description: "An exercise targeting the back muscles.",
                        sets: 3,
                        reps: 10
                    },
                    {
                        name: "Hammer Curls",
                        description: "An alternative biceps exercise targeting the brachialis.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Face Pulls",
                        description: "An exercise targeting the rear deltoids and upper back.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Cable Rows",
                        description: "An exercise targeting the back muscles.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Bicep Hammer Curls",
                        description: "An alternative biceps exercise targeting the brachialis.",
                        sets: 3,
                        reps: 12
                    }
                ]
            }
        ],
        legs: [
            {
                name: "Legs 1",
                exercises: [
                    {
                        name: "Bodyweight Squats",
                        description: "A basic lower body exercise targeting the quadriceps, hamstrings, and glutes.",
                        sets: 3,
                        reps: 15
                    },
                    {
                        name: "Lunges",
                        description: "A unilateral lower body exercise targeting the quadriceps, hamstrings, and glutes.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Leg Press",
                        description: "A machine-based exercise targeting the quadriceps, hamstrings, and glutes.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Romanian Deadlifts",
                        description: "A variation of deadlifts targeting the hamstrings and glutes.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Calf Raises",
                        description: "An exercise targeting the calf muscles.",
                        sets: 3,
                        reps: 15
                    }
                ]
            },
            {
                name: "Legs 2",
                exercises: [
                    {
                        name: "Sumo Squats",
                        description: "A variation of squats targeting the inner thighs and glutes.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Step-ups",
                        description: "An exercise targeting the quadriceps and glutes.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Leg Curl Machine",
                        description: "An isolation exercise targeting the hamstrings.",
                        sets: 3,
                        reps: 12
                    },
                    {
                        name: "Seated Calf Raises",
                        description: "A seated variation of calf raises.",
                        sets: 3,
                        reps: 15
                    },
                    {
                        name: "Hip Thrusts",
                        description: "An exercise targeting the glutes and hamstrings.",
                        sets: 3,
                        reps: 12
                    }
                ]
            }
        ]
};
