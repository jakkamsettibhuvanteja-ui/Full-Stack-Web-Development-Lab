// 1. SINGLE INHERITANCE

class Person {

    constructor(name) {
        this.name = name;
    }

    introduce() {
        return "My name is " + this.name;
    }

}


class Student extends Person {

    constructor(name, rollNumber) {

        super(name);

        this.rollNumber = rollNumber;

    }

    study() {
        return this.name + " is studying.";
    }

}


// 2. MULTILEVEL INHERITANCE

class GraduateStudent extends Student {

    constructor(name, rollNumber, course) {

        super(name, rollNumber);

        this.course = course;

    }

    research() {
        return this.name + " is doing research in " + this.course + ".";
    }

}


// 3. HIERARCHICAL INHERITANCE

class Teacher extends Person {

    constructor(name, subject) {

        super(name);

        this.subject = subject;

    }

    teach() {
        return this.name + " teaches " + this.subject + ".";
    }

}


// 4. MULTIPLE INHERITANCE USING MIXINS

const CanFly = {

    fly() {
        return this.name + " can fly.";
    }

};


const CanSwim = {

    swim() {
        return this.name + " can swim.";
    }

};


class Duck extends Person {

    constructor(name) {

        super(name);

    }

}


Object.assign(
    Duck.prototype,
    CanFly,
    CanSwim
);



const displayButton = document.getElementById("displayBtn");

const output = document.getElementById("output");



displayButton.addEventListener("click", function () {


    const student = new Student(
        "Bhuvan Teja",
        "A24126552084"
    );


    const graduateStudent = new GraduateStudent(
        "Sravan Kumar",
        "A24126552085",
        "Artificial Intelligence"
    );


    const teacher = new Teacher(
        "Dr. Santosh",
        "Full Stack Web Development"
    );


    const duck = new Duck("Donald");


    output.innerHTML = "";



    const singleCard = document.createElement("div");

    singleCard.className = "inheritance-card";


    const singleHeading = document.createElement("h2");

    singleHeading.textContent = "1. Single Inheritance";


    const singleText = document.createElement("p");

    singleText.textContent =
        "Person → Student";


    const singleResult = document.createElement("p");

    singleResult.textContent =
        student.introduce() +
        " | Roll No: " +
        student.rollNumber +
        " | " +
        student.study();


    singleCard.appendChild(singleHeading);

    singleCard.appendChild(singleText);

    singleCard.appendChild(singleResult);

    output.appendChild(singleCard);



    const multiLevelCard = document.createElement("div");

    multiLevelCard.className = "inheritance-card";


    const multiLevelHeading = document.createElement("h2");

    multiLevelHeading.textContent =
        "2. Multilevel Inheritance";


    const multiLevelText = document.createElement("p");

    multiLevelText.textContent =
        "Person → Student → GraduateStudent";


    const multiLevelResult = document.createElement("p");

    multiLevelResult.textContent =
        graduateStudent.introduce() +
        " | Roll No: " +
        graduateStudent.rollNumber +
        " | Course: " +
        graduateStudent.course +
        " | " +
        graduateStudent.research();


    multiLevelCard.appendChild(multiLevelHeading);

    multiLevelCard.appendChild(multiLevelText);

    multiLevelCard.appendChild(multiLevelResult);

    output.appendChild(multiLevelCard);



    const hierarchicalCard = document.createElement("div");

    hierarchicalCard.className = "inheritance-card";


    const hierarchicalHeading = document.createElement("h2");

    hierarchicalHeading.textContent =
        "3. Hierarchical Inheritance";


    const hierarchicalText = document.createElement("p");

    hierarchicalText.textContent =
        "Person → Student and Person → Teacher";


    const hierarchicalResult = document.createElement("p");

    hierarchicalResult.textContent =
        teacher.introduce() +
        " | Subject: " +
        teacher.subject +
        " | " +
        teacher.teach();


    hierarchicalCard.appendChild(hierarchicalHeading);

    hierarchicalCard.appendChild(hierarchicalText);

    hierarchicalCard.appendChild(hierarchicalResult);

    output.appendChild(hierarchicalCard);



    const multipleCard = document.createElement("div");

    multipleCard.className = "inheritance-card";


    const multipleHeading = document.createElement("h2");

    multipleHeading.textContent =
        "4. Multiple Inheritance Using Mixins";


    const multipleText = document.createElement("p");

    multipleText.textContent =
        "CanFly + CanSwim → Duck";


    const multipleResult = document.createElement("p");

    multipleResult.textContent =
        duck.introduce() +
        " | " +
        duck.fly() +
        " | " +
        duck.swim();


    multipleCard.appendChild(multipleHeading);

    multipleCard.appendChild(multipleText);

    multipleCard.appendChild(multipleResult);

    output.appendChild(multipleCard);

});