const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// form submission handler
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Input
    const photoInput = (document.getElementById('photo') as HTMLInputElement).files![0];
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const Fathername = (document.getElementById('FatherName') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const number = (document.getElementById('number') as HTMLInputElement).value;
    const education = (document.getElementById('Qualification') as HTMLInputElement).value;
    const skills = (document.getElementById('skill') as HTMLInputElement).value;
    const certification = (document.getElementById('certifications') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const workplace = (document.getElementById('workplace') as HTMLInputElement).value;

    const reader = new FileReader();
    reader.onload = function (e) {
        if (e.target) {
            const resumeHTML = `
                <h1> DYNAMIC AND EDITABLE RESUME</h1>
                <img src="${e.target.result}" alt="Profile Picture" style="width: 300px; height: 300px; border-radius: 100%;">
                <h2>Personal Information:</h2>
                <p><b>Name:</b><span contenteditable="true">${name}</span></p>
                <p><b>FatherName:</b><span contenteditable="true">${Fathername}</span></p>
                <p><b>Email:</b><span contenteditable="true">${email}</span></p>
                <p><b>Number:</b><span contenteditable="true">${number}</span></p>
                <h3>Education:</h3>
                <p><b>Education:</b><span contenteditable="true">${education}</span></p>
                <h3>Skills:</h3>
                <p><b>Skills:</b><span contenteditable="true"> ${skills}</span></p>
                <p><b>Certification:</b><span contenteditable="true"> ${certification}</span></p>
                <h3>Experience:</h3>
                <p><b>Experience:</b><span contenteditable="true">${experience}</span></p>
                <p><b>Workplace:</b><span contenteditable="true">${workplace}</span></p>
            `;
            if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHTML;
            } else {
                console.error('Error: resumeDisplayElement not found');
            }
        } else {
            console.error('Error: e.target is null');
        }
    };
    reader.readAsDataURL(photoInput);
});
