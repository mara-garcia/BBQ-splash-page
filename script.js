let emailCollectorForm = document.getElementById('email-collector')
emailCollectorForm.addEventListener('submit', event => {
event.preventDefault() //avoids any conflict with default behaviors

let ourFormData = new FormData(event.target)

let userFirstName = ourFormData.get('firstName')

let updateHtmlContent = 
        `<h2>Congratulations, ${userFirstName}!</h2>
        <p>You're on your way to becoming a BBQ Master!</p>

        <p class="bottom-text">We'll never share your information<br>without your permission</p>`

        let ourMainContent = document.getElementById('mainContent')
        ourMainContent.innerHTML = updateHtmlContent

})

