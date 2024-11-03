// Sample data for demonstration purposes
const studentData = {
    "2022030473": { name: "Ndano Ntaho", subjects: { Tp: 88, Wil: 92, Proj: 85,DS: 88,TS: 98 ,BC: 78} },
    "2022030600": { name: "Nobuhle Nkosi", subjects: { Tp: 76, Wil: 84, Proj: 90,DS: 88,TS: 98 ,BC: 78 } },
    "2022030601": { name: "Lindokuhle Mkhize", subjects: { Tp: 76, Wil: 84, Proj: 90,DS: 88,TS: 98 ,BC: 78} },
    "2022030602": { name: "Andiswa Dube", subjects: { Tp: 76, Wil: 84, Proj: 90,DS: 88,TS: 98 ,BC: 78 } },
    "2022030603": { name: "Mthobisi", subjects: { Tp: 76, Wil: 84, Proj: 90 ,DS: 88,TS: 98 ,BC: 78,} },
    "2022030604": { name: "Lwandle Mjobo", subjects: { Tp: 76, Wil: 84, Proj: 90,DS: 88,TS: 98 ,BC: 78 } },
    "2022030605": { name: "Minenhle Nxumalo", subjects: { Tp: 76, Wil: 84, Proj: 90 ,DS: 88,TS: 98 ,BC: 78} }
};

function showStudentInfo() {
    const studentNumber = document.getElementById('studentNumber').value;
    const resultDiv = document.getElementById('result');

    // Clear previous results
    resultDiv.innerHTML = '';

    // Check if student number exists in the data
    if (studentData[studentNumber]) {
        const student = studentData[studentNumber];
        let html = `<h2>Student: ${student.name}</h2><h3>Marks:</h3><ul>`;
        
        // Generate the list of subjects and marks
        for (const [subject, mark] of Object.entries(student.subjects)) {
            html += `<li>${subject}: ${mark}</li>`;
        }
        
        html += '</ul>';
        resultDiv.innerHTML = html;
    } else {
        resultDiv.innerHTML = '<p>No student found with that number.</p>';
    }
}
