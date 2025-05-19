let students = [];

function addStudent(){
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const gpa = parseFloat(document.getElementById('gpa').value);

    if (name === ''|| id === '' || isNaN(gpa)) {
        alert("Please fill all fields correctly!");
        return;

    }

    const student = {
        name: name,
        id: id,
        gpa: gpa,
        status: gpa >=2.5 ? 'Pass':'Fail'
    };

    students.push(student);

  //Clear inputs
    document.getElementById('name').value = '';
    document.getElementById('id').value = '';
    document.getElementById('gpa').value = '';

};

function showStudents(){
    const table = document.getElementById('studentTable');

    table.innerHTML = `
     <tr>
            <th>Name</th>
            <th>Id</th>
            <th>GPA</th>
            <th>Status</th>
     </tr>
`;

    students.forEach(function(student) {
        let row =table.insertRow();
        row.className = student.status === 'Pass' ? 'pass' : 'fail';

        row.insertCell(0).innerText =student.name;
        row.insertCell(1).innerText =student.id;
        row.insertCell(2).innerText =student.gpa;
        row.insertCell(3).innerText =student.status;
    });
}