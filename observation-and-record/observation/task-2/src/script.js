class Student {

    constructor(name, rollNumber, department, cgpa) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
        this.cgpa = cgpa;
    }

}

const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const departmentInput = document.getElementById("department");
const cgpaInput = document.getElementById("cgpa");

const displayButton = document.getElementById("displayBtn");
const profileDiv = document.getElementById("profile");


displayButton.addEventListener("click", function () {

    const name = nameInput.value;
    const rollNumber = rollInput.value;
    const department = departmentInput.value;
    const cgpa = cgpaInput.value;

    if (name === "" || rollNumber === "" || department === "" || cgpa === "") {
        alert("Please enter all student details.");
        return;
    }
    
    const student = new Student(
        name,
        rollNumber,
        department,
        cgpa
    );


    profileDiv.innerHTML = "";


    const profileCard = document.createElement("div");
    profileCard.className = "profile-card";


    const heading = document.createElement("h2");
    heading.textContent = "Student Profile";


    const namePara = document.createElement("p");
    namePara.textContent = "Name : " + student.name;


    const rollPara = document.createElement("p");
    rollPara.textContent = "Roll No : " + student.rollNumber;


    const departmentPara = document.createElement("p");
    departmentPara.textContent = "Department : " + student.department;


    const cgpaPara = document.createElement("p");
    cgpaPara.textContent = "CGPA : " + student.cgpa;


    profileCard.appendChild(heading);
    profileCard.appendChild(namePara);
    profileCard.appendChild(rollPara);
    profileCard.appendChild(departmentPara);
    profileCard.appendChild(cgpaPara);


    profileDiv.appendChild(profileCard);

});