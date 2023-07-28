const update = document.querySelector('#update-button')

update.addEventListener('click', _ =>{
    fetch('foodMacros', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: 'darth vadar',
            macros: 'I find your lack of faith'
        })
    })
})