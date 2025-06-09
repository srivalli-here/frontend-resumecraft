document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('resumeForm');
  const template = document.getElementById('template1');
  const downloadBtn = document.getElementById('downloadPdf');

  form.addEventListener('input', () => {
    const name = form.elements['name'].value;
    const email = form.elements['email'].value;
    const phone = form.elements['phone'].value;
    const education = form.elements['education'].value;
    const experience = form.elements['experience'].value;
    const skills = form.elements['skills'].value;

    template.innerHTML = `
      <h2>${name}</h2>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <h3>Education</h3>
      <p>${education}</p>
      <h3>Experience</h3>
      <p>${experience}</p>
      <h3>Skills</h3>
      <p>${skills}</p>
    `;

    template.classList.add('active-template');
  });

  downloadBtn.addEventListener('click', () => {
    const element = document.getElementById('template1');
    html2pdf().from(element).save('resume.pdf');
  });
});
