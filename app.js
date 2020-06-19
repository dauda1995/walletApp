$(document).ready(function(){

    async function getInfo(){
        let amount = $('#amount').val()
        let line = $('#network').val()
        let mobile = $('#phone').val()
        let errors = $('#errors').val()
        errors.innerText ="";

        if (isNaN(amount) || amount <100) {
            return false;
        }

        if(line == ""){
            return false;
        }

        let url = "https://sandbox.wallets.africa/bills/airtime/purchase";
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const data = {
            "Code": line,
            "Amount": amount,
            "PhoneNumber": mobile,
            "SecretKey": "hfucj5jatq8h"
          }

          const response = await fetch(`${proxyurl}${url}`, {
            method: 'POST', 
            cache: 'no-cache', 
            credentials: 'same-origin', // Bearer uvjqzm5xl6bw
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer uvjqzm5xl6bw"
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
    
        return response.json();
     

    }

    function showData(response) {
        
    
        if (response.ResponseCode = "400") {
            errors.innerText = response.Message;
        }else{
            success.innerText = response.Message;
        }
    }

    function runApp(){
        getInfo().then(response => {
            showData(response)
            $('#success').append("error")
        })
    }

    $('#submit').click(runApp);
    

    
  

})