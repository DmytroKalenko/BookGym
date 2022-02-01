

// const customerName = document.querySelector('#customerName');
// const choosedHours = document.querySelector('#choosedTime');
// const sendBtn = document.querySelector('.btn');
//
// // Send data to server
// let requestCustomer = {
//     'name': customerName.value,
//     'hours': choosedHours.value
// };
// function sendDataToServer(request, parametr) {
//
//     const formData = new FormData();
//     formData.append(parametr, JSON.stringify(request));
//
//     fetch('backEnd/back.php', {
//         method: 'post',
//         body: formData,
//     });
// }
//
// // sendHeandler
// sendBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     sendDataToServer(requestCustomer, 'person')
// })





// send data-services to Data Base

const sendBtnService = document.querySelector(".service")

const serviceName = document.querySelector('#service'),
    servicePrise = document.querySelector('#servicePrice'),
    serviseMaster = document.querySelector('#serviceMaster');


let requestService = {
    serviceName: serviceName.value,
    servicePrise: servicePrise.value,
    serviseMaster: serviseMaster.value,
}


// sendHeandler
sendBtnService.addEventListener("click", (event) => {
    event.preventDefault();
    sendDataToServer(requestService, 'service')
})



























