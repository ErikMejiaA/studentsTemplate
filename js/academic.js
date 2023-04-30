document.addEventListener("DOMContentLoaded", () => {
    //1.FECTH API para consumir un JSON
    //getStudent();
    //2. FECTH API para consumir un JSON de un Array
    //getStudents();
    //3. FECTH API para consumir un JSON desde la web
    getStudentsFromPublicApi();
})

function getStudent() {
    fetch('API/student.json')
        .then(response => {
            return response.json();
            /*console.log(response);*/
        })
        .then(data => {
            /*console.log(data);*/
            showOneStudent(data)
        })
}

function showOneStudent(data) {
    const { idUsuario, nombre, carrera, sexo, jornada } = data;
    //enviamos la informacion del estudiante a html

    const contenedor = document.querySelector('tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${idUsuario}</td>
    <td>${nombre}</td>
    <td>${carrera}</td>
    <td>${sexo}</td>
    <td>${jornada}</td>
    `;
    contenedor.appendChild(row)
}


async function getStudentsFromPublicApi() {
    const url = "https://vermenmasterchief.tk/estudiantes.php";
    /*fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            showAllStudents(data.datos)
        })*/

    try {
        const response = await fetch(url);
        const data = await response.json();
        showAllStudents(data.datos)
        
    } catch (error) {
        console.log(error)
    }
    
}

function showAllStudents(students) {
    const contenedor = document.querySelector('tbody');

    students.forEach(element => {
        const { id_usuario, nombre, programa, sexo, jornada } = element;
        
        const rows = document.createElement('tr')
        rows.innerHTML = `
        <td>${id_usuario}</td>
        <td>${nombre}</td>
        <td>${programa}</td>
        <td>${sexo}</td>
        <td>${jornada}</td>
        `;
        contenedor.appendChild(rows)
    });
}

function getStudents() {
    const url = "API/students.json";
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(data => {
            showAllStudents(data)
        })
}

function showAllStudents(students) {
    const contenedor = document.querySelector('tbody');

    students.forEach(element => {
        const { id_usuario, nombre, programa, sexo, jornada } = element;
        
        const rows = document.createElement('tr')
        rows.innerHTML = `
        <td>${id_usuario}</td>
        <td>${nombre}</td>
        <td>${programa}</td>
        <td>${sexo}</td>
        <td>${jornada}</td>
        `;
        contenedor.appendChild(rows)
    });
}

    