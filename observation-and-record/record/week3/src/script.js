const students = [];



const nameInput = document.getElementById("nameInput");

const marksInput = document.getElementById("marksInput");

const addBtn = document.getElementById("addBtn");

const studentList = document.getElementById("studentList");

const totalStudents = document.getElementById("totalStudents");

const averageMarks = document.getElementById("averageMarks");

const highestMarks = document.getElementById("highestMarks");

const lowestMarks = document.getElementById("lowestMarks");

const passedStudents = document.getElementById("passedStudents");



function addStudent() {

    const name = nameInput.value.trim();

    const marks = Number(marksInput.value);


    if (name === "" || marksInput.value === "") {

        alert("Please enter student name and marks.");

        return;
    }


    if (marks < 0 || marks > 100) {

        alert("Marks must be between 0 and 100.");

        return;
    }


    const student = {
        name: name,
        marks: marks
    };


    students.push(student);


    nameInput.value = "";

    marksInput.value = "";


    displayStudents();

    calculateStatistics();

    displayPassedStudents();

}



function displayStudents() {

    studentList.innerHTML = "";


    if (students.length === 0) {

        studentList.textContent = "No students available.";

        return;
    }


    students.forEach(function(student, index) {

        const studentCard = document.createElement("div");

        studentCard.className = "student-card";


        const studentText = document.createElement("span");

        studentText.textContent =
            (index + 1) +
            ". " +
            student.name +
            " - " +
            student.marks;


        studentCard.appendChild(studentText);

        studentList.appendChild(studentCard);

    });

}



function calculateStatistics() {

    const total = students.length;


    totalStudents.textContent =
        "Total Students: " + total;


    if (total === 0) {

        averageMarks.textContent = "Average Marks: 0";

        highestMarks.textContent = "Highest Marks: 0";

        lowestMarks.textContent = "Lowest Marks: 0";

        return;
    }


    const marksArray = students.map(function(student) {

        return student.marks;

    });



    const totalMarks = marksArray.reduce(
        function(sum, marks) {

            return sum + marks;

        },
        0
    );


    const average = totalMarks / total;



    const highest = Math.max(...marksArray);

    const lowest = Math.min(...marksArray);


    averageMarks.textContent =
        "Average Marks: " + average.toFixed(2);


    highestMarks.textContent =
        "Highest Marks: " + highest;


    lowestMarks.textContent =
        "Lowest Marks: " + lowest;

}



function displayPassedStudents() {

    const passed = students.filter(function(student) {

        return student.marks >= 40;

    });


    if (passed.length === 0) {

        passedStudents.textContent =
            "No students have passed.";

        return;
    }


    passedStudents.innerHTML = "";


    passed.forEach(function(student) {

        const paragraph = document.createElement("p");

        paragraph.textContent =
            student.name +
            " - " +
            student.marks;

        passedStudents.appendChild(paragraph);

    });

}



const findStudent = (name) => {

    return students.find(function(student) {

        return student.name.toLowerCase() ===
               name.toLowerCase();

    });

};



addBtn.addEventListener("click", addStudent);



displayStudents();

calculateStatistics();

displayPassedStudents();