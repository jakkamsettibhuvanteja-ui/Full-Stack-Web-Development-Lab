const message = document.getElementById("message");
const tableBody = document.getElementById("studentTableBody");


function showMessage(text, success = true) {
    message.textContent = text;
    message.className = success ? "success" : "error";
}


function displayStudents(students) {

    tableBody.innerHTML = "";

    if (!Array.isArray(students)) {
        students = [students];
    }

    if (students.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="6">
                    No students found
                </td>
            </tr>
        `;

        return;
    }


    students.forEach(student => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.rollNo}</td>
            <td>${student.name}</td>
            <td>${student.branch}</td>
            <td>${student.year}</td>
            <td>${student.marks}</td>
            <td>${student.email}</td>
        `;

        tableBody.appendChild(row);
    });
}


// ==========================================
// ADD STUDENT
// ==========================================

async function addStudent() {

    const student = {

        rollNo: document.getElementById("rollNo").value.trim(),

        name: document.getElementById("name").value.trim(),

        branch: document.getElementById("branch").value.trim(),

        year: Number(
            document.getElementById("year").value
        ),

        marks: Number(
            document.getElementById("marks").value
        ),

        email: document.getElementById("email").value.trim()
    };


    if (
        !student.rollNo ||
        !student.name ||
        !student.branch ||
        !student.year ||
        !student.email
    ) {
        showMessage(
            "Please fill all student details.",
            false
        );

        return;
    }


    if (
        student.marks < 0 ||
        student.marks > 100
    ) {
        showMessage(
            "Marks must be between 0 and 100.",
            false
        );

        return;
    }


    try {

        const response = await fetch("/students", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(student)

        });


        const data = await response.json();


        if (!response.ok) {
            throw new Error(
                data.error || data.message
            );
        }


        showMessage(
            "Student added successfully."
        );

        clearAddForm();

        getAllStudents();

    } catch (error) {

        showMessage(
            error.message,
            false
        );
    }
}


// ==========================================
// DISPLAY ALL
// ==========================================

async function getAllStudents() {

    try {

        const response =
            await fetch("/students");

        const students =
            await response.json();

        displayStudents(students);

        showMessage(
            `${students.length} student(s) displayed.`
        );

    } catch (error) {

        showMessage(
            "Unable to fetch students.",
            false
        );
    }
}


// ==========================================
// MARKS > 75
// ==========================================

async function getAbove75() {

    try {

        const response =
            await fetch("/students/marks/above75");

        const students =
            await response.json();

        displayStudents(students);

        showMessage(
            `${students.length} student(s) have marks greater than 75.`
        );

    } catch (error) {

        showMessage(
            "Unable to fetch students.",
            false
        );
    }
}


// ==========================================
// MARKS > 80
// ==========================================

async function getAbove80() {

    try {

        const response =
            await fetch("/students/above80");

        const students =
            await response.json();

        displayStudents(students);

        showMessage(
            `${students.length} student(s) have marks greater than 80.`
        );

    } catch (error) {

        showMessage(
            "Unable to fetch students.",
            false
        );
    }
}


// ==========================================
// MARKS < 50
// ==========================================

async function getBelow50() {

    try {

        const response =
            await fetch("/students/below50");

        const students =
            await response.json();

        displayStudents(students);

        showMessage(
            `${students.length} student(s) have marks below 50.`
        );

    } catch (error) {

        showMessage(
            "Unable to fetch students.",
            false
        );
    }
}


// ==========================================
// SORT MARKS
// ==========================================

async function getSortedStudents() {

    try {

        const response =
            await fetch("/students/sorted");

        const students =
            await response.json();

        displayStudents(students);

        showMessage(
            "Students sorted by marks in descending order."
        );

    } catch (error) {

        showMessage(
            "Unable to sort students.",
            false
        );
    }
}


// ==========================================
// HIGHEST MARKS
// ==========================================

async function getHighest() {

    try {

        const response =
            await fetch("/students/highest");

        const student =
            await response.json();

        displayStudents(student);

        showMessage(
            `Highest marks: ${student.marks}`
        );

    } catch (error) {

        showMessage(
            "Unable to find highest marks.",
            false
        );
    }
}


// ==========================================
// SEARCH BY ROLL NUMBER
// ==========================================

async function searchByRoll() {

    const rollNo =
        document.getElementById("searchRoll").value.trim();


    if (!rollNo) {

        showMessage(
            "Enter a roll number.",
            false
        );

        return;
    }


    try {

        const response =
            await fetch(
                `/students/roll/${encodeURIComponent(rollNo)}`
            );


        const data =
            await response.json();


        if (!response.ok) {
            throw new Error(data.message);
        }


        displayStudents(data);

        showMessage(
            "Student found successfully."
        );

    } catch (error) {

        showMessage(
            error.message,
            false
        );

        tableBody.innerHTML = "";
    }
}


// ==========================================
// SEARCH BY BRANCH
// ==========================================

async function searchByBranch() {

    const branch =
        document.getElementById("searchBranch").value.trim();


    if (!branch) {

        showMessage(
            "Enter a branch.",
            false
        );

        return;
    }


    try {

        const response =
            await fetch(
                `/students/branch/${encodeURIComponent(branch)}`
            );


        const students =
            await response.json();


        displayStudents(students);

        showMessage(
            `${students.length} student(s) found in ${branch}.`
        );

    } catch (error) {

        showMessage(
            "Unable to search branch.",
            false
        );
    }
}


// ==========================================
// SEARCH CONDITIONS
// ==========================================

async function searchCondition() {

    const marks =
        document.getElementById("conditionMarks").value;

    const year =
        document.getElementById("conditionYear").value;


    const params = new URLSearchParams();


    if (marks) {
        params.append("marks", marks);
    }


    if (year) {
        params.append("year", year);
    }


    if (!marks && !year) {

        showMessage(
            "Enter marks or year.",
            false
        );

        return;
    }


    try {

        const response =
            await fetch(
                `/students/search?${params.toString()}`
            );


        const students =
            await response.json();


        displayStudents(students);

        showMessage(
            `${students.length} student(s) found.`
        );

    } catch (error) {

        showMessage(
            "Unable to search students.",
            false
        );
    }
}


// ==========================================
// UPDATE MARKS
// ==========================================

async function updateMarks() {

    const rollNo =
        document.getElementById("updateRoll").value.trim();

    const marks =
        Number(
            document.getElementById("updateMarks").value
        );


    if (!rollNo) {

        showMessage(
            "Enter roll number.",
            false
        );

        return;
    }


    if (marks < 0 || marks > 100) {

        showMessage(
            "Marks must be between 0 and 100.",
            false
        );

        return;
    }


    try {

        const response =
            await fetch(
                `/students/${encodeURIComponent(rollNo)}/marks`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify({
                        marks
                    })
                }
            );


        const data =
            await response.json();


        if (!response.ok) {
            throw new Error(data.message);
        }


        showMessage(
            "Marks updated successfully."
        );

        getAllStudents();

    } catch (error) {

        showMessage(
            error.message,
            false
        );
    }
}


// ==========================================
// UPDATE EMAIL / BRANCH
// ==========================================

async function updateDetails() {

    const rollNo =
        document
            .getElementById("updateDetailsRoll")
            .value
            .trim();

    const email =
        document
            .getElementById("updateEmail")
            .value
            .trim();

    const branch =
        document
            .getElementById("updateBranch")
            .value
            .trim();


    if (!rollNo) {

        showMessage(
            "Enter roll number.",
            false
        );

        return;
    }


    if (!email && !branch) {

        showMessage(
            "Enter a new email or branch.",
            false
        );

        return;
    }


    const updateData = {};


    if (email) {
        updateData.email = email;
    }


    if (branch) {
        updateData.branch = branch;
    }


    try {

        const response =
            await fetch(
                `/students/${encodeURIComponent(rollNo)}`,
                {
                    method: "PUT",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(updateData)
                }
            );


        const data =
            await response.json();


        if (!response.ok) {
            throw new Error(data.message);
        }


        showMessage(
            "Student details updated successfully."
        );

        getAllStudents();

    } catch (error) {

        showMessage(
            error.message,
            false
        );
    }
}


// ==========================================
// DELETE STUDENT
// ==========================================

async function deleteStudent() {

    const rollNo =
        document
            .getElementById("deleteRoll")
            .value
            .trim();


    if (!rollNo) {

        showMessage(
            "Enter roll number.",
            false
        );

        return;
    }


    const confirmed =
        confirm(
            `Delete student ${rollNo}?`
        );


    if (!confirmed) {
        return;
    }


    try {

        const response =
            await fetch(
                `/students/${encodeURIComponent(rollNo)}`,
                {
                    method: "DELETE"
                }
            );


        const data =
            await response.json();


        if (!response.ok) {
            throw new Error(data.message);
        }


        showMessage(
            "Student deleted successfully."
        );

        getAllStudents();

    } catch (error) {

        showMessage(
            error.message,
            false
        );
    }
}


// ==========================================
// CLEAR ADD FORM
// ==========================================

function clearAddForm() {

    document.getElementById("rollNo").value = "";
    document.getElementById("name").value = "";
    document.getElementById("branch").value = "";
    document.getElementById("year").value = "";
    document.getElementById("marks").value = "";
    document.getElementById("email").value = "";
}


// ==========================================
// INITIAL LOAD
// ==========================================

getAllStudents();