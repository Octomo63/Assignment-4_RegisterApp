let express = require('express');
let bodyParser = require('body-parser');
let router = express.Router();
let cors = require('cors');
let app = express();
app.use(cors());

var subjects = [
    {
        "subjectID": "240-101",
        "subjectName": "Intro to Computer Programming",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 39,
        "maximum": 40
    },
    {
        "subjectID": "240-203",
        "subjectName": "Computer Engineering Software Laboratory II",
        "weight": 1,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 38,
        "maximum": 40
    },
    {
        "subjectID": "240-204",
        "subjectName": "Computer Engineering Hardware Laboratory II",
        "weight": 1,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 19,
        "maximum": 50
    },
    {
        "subjectID": "240-205",
        "subjectName": "Electric Circuits",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 19,
        "maximum": 30
    },
    {
        "subjectID": "240-206",
        "subjectName": "Intro to Computer Networks",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 20,
        "maximum": 30
    },
    {
        "subjectID": "240-207",
        "subjectName": "Programming and Data Structures",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 39,
        "maximum": 60
    },
    {
        "subjectID": "240-208",
        "subjectName": "Digital Logic and Design",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 49,
        "maximum": 50
    },
    {
        "subjectID": "240-209",
        "subjectName": "Basic Electronics",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 48,
        "maximum": 70
    },
    {
        "subjectID": "240-210",
        "subjectName": "Programming Technique",
        "weight": 2,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 51,
        "maximum": 60
    },
    {
        "subjectID": "240-211",
        "subjectName": "Software Engineering",
        "weight": 2,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 41,
        "maximum": 50
    },
    {
        "subjectID": "240-212",
        "subjectName": "Probability and Statistic",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 57,
        "maximum": 60
    },
    {
        "subjectID": "240-213",
        "subjectName": "Discrete Mathematics",
        "weight": 2,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 51,
        "maximum": 60
    },
    {
        "subjectID": "240-214",
        "subjectName": "Data Communication and Networking",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 52,
        "maximum": 60
    },
    {
        "subjectID": "240-215",
        "subjectName": "Computer Engineering Mathematics",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 51,
        "maximum": 80
    },
    {
        "subjectID": "240-301",
        "subjectName": "Advanced Computer Engineering Laboratory I",
        "weight": 1,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 59,
        "maximum": 60
    },
    {
        "subjectID": "240-302",
        "subjectName": "Advanced Computer Engineering Laboratory II",
        "weight": 1,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 51,
        "maximum": 70
    },
    {
        "subjectID": "240-303",
        "subjectName": "Ethical, Legal and Social Issues",
        "weight": 1,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 51,
        "maximum": 60
    },
    {
        "subjectID": "240-304",
        "subjectName": "Computer Operating System",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 39,
        "maximum": 60
    },
    {
        "subjectID": "240-305",
        "subjectName": "Database Systems",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 41,
        "maximum": 45
    },
    {
        "subjectID": "240-306",
        "subjectName": "Wireless and Mobile Networks",
        "weight": 2,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 51,
        "maximum": 60
    },
    {
        "subjectID": "240-307",
        "subjectName": "Computer Architecture and Organization",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 51,
        "maximum": 70
    },
    {
        "subjectID": "240-308",
        "subjectName": "Computer Engineering Project Preparation",
        "weight": 2,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 19,
        "maximum": 50
    },
    {
        "subjectID": "240-309",
        "subjectName": "Microcontroller and Interfacing",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 52,
        "maximum": 60
    },
    {
        "subjectID": "240-310",
        "subjectName": "Algorithms: Design and Analysis",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 41,
        "maximum": 71
    },
    {
        "subjectID": "240-311",
        "subjectName": "Distributed Computing and Web Technologies",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 51,
        "maximum": 70
    },
    {
        "subjectID": "240-312",
        "subjectName": "Computer Security",
        "weight": 3,
        "departure": "Computer Engineering",
        "faculty": "Engineering",
        "registered": 51,
        "maximum": 90
    }
];

//MongoDB
var MongoClient = require('mongodb').MongoClient;
const { read } = require('mongodb/lib/gridfs/grid_store');
var url = "mongodb://localhost:27018,localhost:27019,localhost:27020?replicaSet=cmpos"

//to check that this subject is in your database
var isValidSubject = async (subject_id) => {
    if(subject_id.startsWith("240-")) {
        await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
            (err, db) => {
                if (err) throw err;
                var dbo = db.db("registration");
                dbo.collection("subjects").findOne({"subjectID": subject_id}, (err, subject) => {
                    if (err) throw err;
                    if(subject != null) {
                        return true;
                    } else {
                        return false;
                    }
                });
            }
        );
    } else {
        return false;
    }
}

//get all subjects in database
app.get('/subjects', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
        (err, db) => {
            if (err) throw err;
            var dbo = db.db("registration");
            dbo.collection("subjects").find({}).toArray((err, subjects) => {
                if (err) throw err;
                res.send(subjects);
                db.close();
            })
        }
    );
});

//add
app.get('/add_subjects', async (req, res) => {
    await MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
        (err, db) => {
            if (err) throw err;
            var dbo = db.db("registration");
            dbo.collection('subjects').insert(subjects);
            res.json(subjects);
        }
    );
});

//delete
app.get('/delete_subjects', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
        (err, db) => {
            if (err) throw err;
            var dbo = db.db("registration");
            dbo.collection('subjects').drop();
            res.send("All Subjects are deleted.");
        }
    );
});

var sub
//to get subject by id
app.get('/subjects/:id', (req, res) => {
    var subject_id = req.params.id;

    
    if(isValidSubject(subject_id)) {
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
            (err, db) => {
                if (err) throw err;
                var dbo = db.db("registration");
                dbo.collection("subjects").findOne({"subjectID": subject_id}, (err, subject) => {
                    sub = subject;
                    if (err) throw err;
                    res.json(subject);
                    db.close();
                });
            }
        );
    } else {
        res.status(404).send("Cannot find this course.");
    }
});

//select
app.post('/select/:id', (req, res) => {
    var subject_id = req.params.id;

    if(isValidSubject(subject_id)) {
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
            (err, db) => {
                if (err) throw err;
                var dbo = db.db("regis");
                dbo.collection('subjects').insert(sub);
                res.json(sub);
            }
        );
    } else {
        res.status(404).send("Cannot find this course.");
    }
});

//Show select
app.get('/select', (req, res) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
        (err, db) => {
            if (err) throw err;
            var dbo = db.db("regis");
            dbo.collection("subjects").find({}).toArray((err, subjects) => {
                if (err) throw err;
                res.send(subjects);
                db.close();
            })
        }
    );
});

//DeleteOne
app.delete('/select/:id', (req, res) => {
    var subject_id = req.params.id;
    if(isValidSubject(subject_id)) {
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true },
            (err, db) => {
                if (err) throw err;
                var dbo = db.db("regis");
                dbo.collection("subjects").findOne({"subjectID": subject_id}, (err, subject) => {
                    console.log(subject);
                    if (err) throw err;
                    dbo.collection('subjects').deleteOne(subject);
                    res.send('delete');
                });
                
            }
        );
    } else {
        res.status(404).send("Cannot find this course.");
    }
});

app.use("*", (req, res) => res.status(404).send('404 Not found'));
app.listen(80, () => console.log('server is running...'))