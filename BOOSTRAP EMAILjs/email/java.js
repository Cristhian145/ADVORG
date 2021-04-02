function sendMail(params) {
    alert("Correo Enviado Correctamente")
    var tempParams = {
        to_email:document.getElementById("toEmail").value,
        to_name:document.getElementById("toName").value,
        message:document.getElementById("msg").value,
        asunto:document.getElementById("asunto").value,
    };

     emailjs.send('gmail','template_skz5rkg',tempParams)
     .then(function(res) {
        console.log("sucess", res.status);})

}