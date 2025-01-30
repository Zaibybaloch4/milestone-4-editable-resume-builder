var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// form submission handler
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Input
    var photoInput = document.getElementById('photo').files[0];
    var name = document.getElementById('name').value;
    var Fathername = document.getElementById('FatherName').value;
    var email = document.getElementById('email').value;
    var number = document.getElementById('number').value;
    var education = document.getElementById('Qualification').value;
    var skills = document.getElementById('skill').value;
    var certification = document.getElementById('certifications').value;
    var experience = document.getElementById('experience').value;
    var workplace = document.getElementById('workplace').value;
    var reader = new FileReader();
    reader.onload = function (e) {
        if (e.target) {
            var resumeHTML = "\n                <h1> DYNAMIC AND EDITABLE RESUME</h1>\n                <img src=\"".concat(e.target.result, "\" alt=\"Profile Picture\" style=\"width: 300px; height: 300px; border-radius: 100%;\">\n                <h2>Personal Information:</h2>\n                <p><b>Name:</b><span contenteditable=\"true\">").concat(name, "</span></p>\n                <p><b>FatherName:</b><span contenteditable=\"true\">").concat(Fathername, "</span></p>\n                <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n                <p><b>Number:</b><span contenteditable=\"true\">").concat(number, "</span></p>\n                <h3>Education:</h3>\n                <p><b>Education:</b><span contenteditable=\"true\">").concat(education, "</span></p>\n                <h3>Skills:</h3>\n                <p><b>Skills:</b><span contenteditable=\"true\"> ").concat(skills, "</span></p>\n                <p><b>Certification:</b><span contenteditable=\"true\"> ").concat(certification, "</span></p>\n                <h3>Experience:</h3>\n                <p><b>Experience:</b><span contenteditable=\"true\">").concat(experience, "</span></p>\n                <p><b>Workplace:</b><span contenteditable=\"true\">").concat(workplace, "</span></p>\n            ");
            if (resumeDisplayElement) {
                resumeDisplayElement.innerHTML = resumeHTML;
            }
            else {
                console.error('Error: resumeDisplayElement not found');
            }
        }
        else {
            console.error('Error: e.target is null');
        }
    };
    reader.readAsDataURL(photoInput);
});
