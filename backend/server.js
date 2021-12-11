// const express = require('express');
// const app = express();
// const request = require('request');
// const cors = require('cors');
// const port = 8000;
// const bodyParser = require('body-parser');
// const axios = require('axios');
// const redis = require('redis');
// const redisClient = redis.createClient();

// var isInitialized = false;
// var subjects = [
//     {
//         "subjectID": "240-101",
//         "subjectName": "Intro to Computer Programming",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 39,
//         "maximum": 40
//     },
//     {
//         "subjectID": "240-203",
//         "subjectName": "Computer Engineering Software Laboratory II",
//         "weight": 1,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 38,
//         "maximum": 40
//     },
//     {
//         "subjectID": "240-204",
//         "subjectName": "Computer Engineering Hardware Laboratory II",
//         "weight": 1,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 19,
//         "maximum": 50
//     },
//     {
//         "subjectID": "240-205",
//         "subjectName": "Electric Circuits",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 19,
//         "maximum": 30
//     },
//     {
//         "subjectID": "240-206",
//         "subjectName": "Intro to Computer Networks",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 20,
//         "maximum": 30
//     },
//     {
//         "subjectID": "240-207",
//         "subjectName": "Programming and Data Structures",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 39,
//         "maximum": 60
//     },
//     {
//         "subjectID": "240-208",
//         "subjectName": "Digital Logic and Design",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 49,
//         "maximum": 50
//     },
//     {
//         "subjectID": "240-209",
//         "subjectName": "Basic Electronics",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 48,
//         "maximum": 70
//     },
//     {
//         "subjectID": "240-210",
//         "subjectName": "Programming Technique",
//         "weight": 2,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 51,
//         "maximum": 60
//     },
//     {
//         "subjectID": "240-211",
//         "subjectName": "Software Engineering",
//         "weight": 2,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 41,
//         "maximum": 50
//     },
//     {
//         "subjectID": "240-212",
//         "subjectName": "Probability and Statistic",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 57,
//         "maximum": 60
//     },
//     {
//         "subjectID": "240-213",
//         "subjectName": "Discrete Mathematics",
//         "weight": 2,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 51,
//         "maximum": 60
//     },
//     {
//         "subjectID": "240-214",
//         "subjectName": "Data Communication and Networking",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 52,
//         "maximum": 60
//     },
//     {
//         "subjectID": "240-215",
//         "subjectName": "Computer Engineering Mathematics",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 51,
//         "maximum": 80
//     },
//     {
//         "subjectID": "240-301",
//         "subjectName": "Advanced Computer Engineering Laboratory I",
//         "weight": 1,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 59,
//         "maximum": 60
//     },
//     {
//         "subjectID": "240-302",
//         "subjectName": "Advanced Computer Engineering Laboratory II",
//         "weight": 1,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 51,
//         "maximum": 70
//     },
//     {
//         "subjectID": "240-303",
//         "subjectName": "Ethical, Legal and Social Issues",
//         "weight": 1,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 51,
//         "maximum": 60
//     },
//     {
//         "subjectID": "240-304",
//         "subjectName": "Computer Operating System",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 39,
//         "maximum": 60
//     },
//     {
//         "subjectID": "240-305",
//         "subjectName": "Database Systems",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 41,
//         "maximum": 45
//     },
//     {
//         "subjectID": "240-306",
//         "subjectName": "Wireless and Mobile Networks",
//         "weight": 2,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 51,
//         "maximum": 60
//     },
//     {
//         "subjectID": "240-307",
//         "subjectName": "Computer Architecture and Organization",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 51,
//         "maximum": 70
//     },
//     {
//         "subjectID": "240-308",
//         "subjectName": "Computer Engineering Project Preparation",
//         "weight": 2,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 19,
//         "maximum": 50
//     },
//     {
//         "subjectID": "240-309",
//         "subjectName": "Microcontroller and Interfacing",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 52,
//         "maximum": 60
//     },
//     {
//         "subjectID": "240-310",
//         "subjectName": "Algorithms: Design and Analysis",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 41,
//         "maximum": 71
//     },
//     {
//         "subjectID": "240-311",
//         "subjectName": "Distributed Computing and Web Technologies",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 51,
//         "maximum": 70
//     },
//     {
//         "subjectID": "240-312",
//         "subjectName": "Computer Security",
//         "weight": 3,
//         "departure": "Computer Engineering",
//         "faculty": "Engineering",
//         "registered": 51,
//         "maximum": 90
//     }
// ];

// //MongoDB
// var MongoClient = require('mongodb').MongoClient;
// var url = "mongodb://localhost:27018,localhost:27019,localhost:27020?replicaSet=cmpos"

// //to check that this subject is in your database
// var isValidSubject = async (subject_id) => {
//     if(subject_id.startsWith("240-")) {
//         await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
//             (err, db) => {
//                 if (err) throw err;
//                 var dbo = db.db("registration");
//                 dbo.collection("subjects").findOne({"subjectID": subject_id}, (err, subject) => {
//                     if (err) throw err;
//                     if(subject != null) {
//                         return true;
//                     } else {
//                         return false;
//                     }
//                 });
//             }
//         );
//     } else {
//         return false;
//     }
// }

// app.use(cors());

// //initialize web server & redis
// app.get('/', (req, res) => {
//     res.send("Hello!, Welcome to RegisterApp");
//     if(!isInitialized) {
//         subjects.forEach((subject, index) => {
           
//         });
//         isInitialized = !isInitialized;
//     }
// });

// //get all subjects in database
// app.get('/subjects', (req, res) => {
//     MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
//         (err, db) => {
//             if (err) throw err;
//             var dbo = db.db("registration");
//             dbo.collection("subjects").find({}).toArray((err, subjects) => {
//                 if (err) throw err;
//                 res.send(subjects);
//                 db.close();
//             })
//         }
//     );
// });

// //to get subject by id
// app.get('/subjects/:id', (req, res) => {
//     var subject_id = req.params.id;
//     if(isValidSubject(subject_id)) {
//         MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
//             (err, db) => {
//                 if (err) throw err;
//                 var dbo = db.db("registration");
//                 dbo.collection("subjects").findOne({"subjectID": subject_id}, (err, subject) => {
//                     if (err) throw err;
//                     res.json(subject);
//                     db.close();
//                 });
//             }
//         );
//     } else {
//         res.status(404).send("Cannot find this course.");
//     }
// });

// /*---------------------------------------------- register and withdraw ----------------------------------------------*/
// //to register in :id course
// app.get('/subjects/:id/register', (req, res) => {
//     var subject_id = req.params.id;
//     var max;
   
//     });
    
//     });
// });

// //to withdraw in :id course
// app.get('/subjects/:id/withdraw', (req, res) => {
//     var subject_id = req.params.id;
    
// });
// /*-------------------------------------------------------------------------------------------------------------------*/

// /*---------------------------------------------- add and delete all ----------------------------------------------*/
// //add
// app.get('/add_subjects', async (req, res) => {
//     await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
//         (err, db) => {
//             if (err) throw err;
//             var dbo = db.db("registration");
//             dbo.collection('subjects').insert(subjects);
//             res.send(subjects);
//         }
//     );
// });

// //delete
// app.get('/delete_subjects', (req, res) => {
//     MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
//         (err, db) => {
//             if (err) throw err;
//             var dbo = db.db("registration");
//             dbo.collection('subjects').drop();
//             res.send("All Subjects are deleted.");
//         }
//     );
// });
// /*------------------------------------------------------------------------------------------------------------------*/

// app.listen(80, () => console.log(`Registration_System_Server is listening on port 80`));

// //TO DO
// /*
// 1. go to localhost:8000/delete_subjects
// 2. go to localhost:8000/add_subjects
// 3. go to / (for initialize redis)
// 4. here we go

// p.s. if you go to / again after 4., you need to redo 1-3 again.
// */


let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

// all of our routes will be prefixed with /api
app.use('/api', bodyParser.json(), router);   //[use json]
app.use('/api', bodyParser.urlencoded({ extended: false }), router);

let bears = {
    list: [
        { "id": 1, "name": "Winnie", "weight": 50 },
        { "id": 2, "name": "Pooh", "weight": 66 }]
}
let user = { 'name': 'Warodom', 'age': 23 }
 
router.route('/users')
   .get((req, res) => res.json(user))
   .put((req, res) => {
       user = { name: req.body.name, age: user.age }
       res.json(user)
   })

router.route('/bears')
    .get((req, res) => res.json(bears))

    .post((req, res) => {
        console.log(req.body)
        let newBear = {}
        newBear.id = (bears.list.length) ? bears.list[bears.list.length - 1].id + 1 : 1
        newBear.name = req.body.name
        newBear.weight = req.body.weight
        bears = { "list": [...bears.list, newBear] }
        res.json(bears)
    })

router.route('/bears/:bear_id')
    .get((req, res) => {
        const bear_id = req.params.bear_id
        const id = bears.list.findIndex(item => +item.id === +bear_id)
        res.json(bears.list[id])
    })
    .put((req, res) => {
        const bear_id = req.params.bear_id
        const id = bears.list.findIndex(item => +item.id === +bear_id)
        bears.list[id].name = req.body.name
        bears.list[id].weight = req.body.weight
        res.json(bears)
    })

    .delete((req, res) => {
        const bear_id = req.params.bear_id
        console.log('bearId: ', bear_id)
        bears.list = bears.list.filter(item => +item.id !== +bear_id)
        res.json(bears)
    })

app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(80, () => console.log('server is running...'))