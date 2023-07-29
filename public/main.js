const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

update.addEventListener('click', _ =>{
    fetch('/foodMacros', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'darth vadar',
            macros: 'I find your lack of faith'
        })
    })
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(response => {
        window.location.reload(true)
    })
})
    deleteButton.addEventListener('click', _ =>{
        fetch('/foodMacros', {
            method:'delete',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: "darth vadar"
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
    
        