
How to run this app?

### Tools are needed:
-npm or yarn
-node :version 16
-Git

### Running the app

npm i

npm run start or yarn start

### Testing RESTful API

* get patients 
http://localhost:8000/api/v1/patn1


Return:

[
    {
        "id": 88801,
        "Date_of_Birth": "Jan_01_01",
        "First_Name": "Jill",
        "Last_Name": "Bodland",
        "Allergies": "Peanut",
        "Medications": "Panadol"
    },
    {
        "id": 88802,
        "Date_of_Birth": "Jan_01_1980",
        "First_Name": "Mendi",
        "Last_Name": "Solemany",
        "Allergies": "Prawn",
        "Medications": "Panicillin"
    },
    {
        "id": 88803,
        "Date_of_Birth": "Jan_01_1990",
        "First_Name": "Lizzie",
        "Last_Name": "Bowers",
        "Allergies": "Seafood",
        "Medications": "Zoloft"
    }
]


* get a patient
http://localhost:8000/api/v1/patn1/88801

Return:

{
    "Date_of_Birth": "Jan_01_01",
    "First_Name": "Jill",
    "Last_Name": "Bodland",
    "Allergies": "Peanut",
    "Medications": "Panadol"
}



* get questions for a patient

http://localhost:8000/api/v1/patn1/88801/questions


Return:
[
    {
        "ID": 77701,
        "description": "What is your blood pressure?"
    }
]


* get answers for the question of the patient

http://localhost:8000/api/v1/patn1/88801/questions/77701

Return:

[
    {
        "ID": 99901,
        "answer": "higt:125,low:90"
    }
]


### What this app is doing:

-create web server with expressjs
-import SQLite db
-create connection with database server
-create table in database
-connect web server with database
-grep data from database , and make data RESTful, then deliver data via http to front end
