"use strict";
const nameinput = document.getElementById('name');
const jobtitle = document.getElementById('jobtitle');
const Phone = document.getElementById('Phone');
const email = document.getElementById('email');
const linkedin = document.getElementById('linkedin');
const degree = document.getElementById('degree');
const university = document.getElementById('university');
const skill1 = document.getElementById('skill1');
const skill2 = document.getElementById('skill2');
const skill3 = document.getElementById('skill3');
const jobtitleexp = document.getElementById('jobtitleexp');
const company = document.getElementById('company');
const startyear = document.getElementById('startyear');
const endyear = document.getElementById('endyear');
const form = document.getElementById('resumeForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem('form_name', nameinput.value);
    localStorage.setItem('form_jobtitle', jobtitle.value);
    localStorage.setItem('form_Phone', Phone.value);
    localStorage.setItem('form_email', email.value);
    localStorage.setItem('form_linkedin', linkedin.value);
    localStorage.setItem('form_degree', degree.value);
    localStorage.setItem('form_university', university.value);
    localStorage.setItem('form_skill1', skill1.value);
    localStorage.setItem('form_skill2', skill2.value);
    localStorage.setItem('form_skill3', skill3.value);
    localStorage.setItem('jobtitleexp', jobtitle.value);
    localStorage.setItem('company', company.value);
    localStorage.setItem('startyear', startyear.value);
    localStorage.setItem('endyear', endyear.value);
    window.location.href = '../previewresumee/dynamic_Resumee.html';
});