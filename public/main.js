const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

update.addEventListener('click', () =>{
    const updateName = document.getElementById('update-name').value;
    const newCalories = document.getElementById('new-calories').value;
    const newMacros = document.getElementById('new-macros').value;
    const newCategory = document.getElementById('new-category').value;

    fetch('/foodMacros', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: updateName,
            calories: newCalories,
            macros: newMacros,
            category: newCategory
        })
    })
    .then(res => {
        if (res.ok) return res.json();
    })
    .then(response => {
        window.location.reload(true);
    })
});
    deleteButton.addEventListener('click', _ =>{
        fetch('/foodMacros', {
            method:'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: document.getElementById('delete-name').value
            })
        })
        .then(res => {
            if (res.ok) return res.json()
        })
        .then(response => {
            if (response === 'No quote to delete') {
                messageDiv.textContent = 'No darth vadar quote to delete'
            }else{
                window.location.reload(true)
            }
            
        })
})
    
        