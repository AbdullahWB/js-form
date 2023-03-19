function sendMail() {
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    };
    const serviceId = "service_xlkew89";
    const templateId = "template_fst9u7i";

    emailjs.send(serviceId, templateId, params)
        .then(
            (res) => {
                document.getElementById('name').value = ""
                document.getElementById('email').value = ""
                document.getElementById('phone').value = ""
                document.getElementById('message').value = ""
                console.log(res);
                swal({
                    title: "Done",
                    text: "Your massage is sent",
                    icon: "success",
                    button: "Ok",
                });
            }

        )
        .catch((err) => console.log(err));
}
