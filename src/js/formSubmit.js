export async function onSubmit(e) {
    e.preventDefault();
    let name = document.getElementById('name');
    let phone = document.getElementById('phone');
    let email = document.getElementById('email');
    let question = document.getElementById('question');

    const form = new FormData(e.target);
    const formData = Object.fromEntries(form);

    let req = await fetch('http://localhost:4000/form_submissions', {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(formData)
    });

    if (req.ok == true) {
        name.value = '';
        phone.value = '';
        email.value = '';
        question.value = '';
    }
}