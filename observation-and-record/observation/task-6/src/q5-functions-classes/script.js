function calculateSquare(number) {
    return number * number;
}

const functionOutput = document.getElementById("functionOutput");
const studentContainer = document.getElementById("studentContainer");
const showStudents = document.getElementById("showStudents");

functionOutput.textContent = `Function result: Square of 6 = ${calculateSquare(6)}`;

class Student {
    constructor(name, rollNumber, department) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
    }

    getDetails() {
        return `${this.name} is a student of ${this.department}.`;
    }
}

showStudents.addEventListener("click", () => {
    const student1 = new Student("Bhuvan", "101", "CSE-AIML");
    const student2 = new Student("Ananya", "102", "CSE");
    const student3 = new Student("Rahul", "103", "IT");

    const students = [student1, student2, student3];

    studentContainer.innerHTML = "";

    students.forEach(student => {
        const card = document.createElement("div");
        card.className = "student";

        card.innerHTML = `
            <h3>${student.name}</h3>
            <p>Roll Number: ${student.rollNumber}</p>
            <p>Department: ${student.department}</p>
            <p>${student.getDetails()}</p>
        `;

        studentContainer.appendChild(card);
    });
});