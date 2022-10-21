
// test1 passed!


const formData ={
    name:"Steve",
    email:"steve@steve.com",
};

function submitData (name, email){
    return fetch ('http://localhost:3000/users',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),     
    })
    
    .then(function (response) {
        return response.json();
      })
    .then(function (object) {
        console.log(object);

    document.querySelector("body").innerHTML=object.id;
    
      })

    .catch(function (error) {
        alert('Unauthorized Access');
        console.log(error.message);
        document.querySelector("body").innerHTML=error.message;
    })
    
      
};


