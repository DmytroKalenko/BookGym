

const customerName = document.querySelector('#customerName');
const choosedHours = document.querySelector('#choosedTime');
const sendBtn = document.querySelector('.btn');

// Send data to server
function sendDataToServer() {
    let request = {
        'name': customerName.value,
        'hours': choosedHours.value
    };
    const formData = new FormData();
    formData.append('person', JSON.stringify(request));

    fetch('backEnd/back.php', {
        method: 'post',
        body: formData,
    });
}

// sendHeandler
sendBtn.addEventListener("click", (event) => {
    event.preventDefault();
    sendDataToServer()
})






























