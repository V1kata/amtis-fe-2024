export async function onSubmit(e) {
    e.preventDefault();
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form);

    let req = await fetch('http://localhost:4000/form_submissions', {
        method: 'post',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(formData)
    });
}