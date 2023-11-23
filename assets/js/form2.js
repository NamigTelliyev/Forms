const form=document.getElementById("form");
const btn=document.getElementById("btn");
const input1=document.getElementById("inp1");
const input2=document.getElementById("inp2");
const input3=document.getElementById("inp3");
const input4=document.getElementById("inp4");
const input5=document.getElementById("inp5");




form.addEventListener("submit",function(event){
    event.preventDefault();

    axios.post("https://655c846525b76d9884fd70e4.mockapi.io/profile", {
        name: input1.value,
        email: input2.value,
        password: input3.value,
        address: input4.value,
        country: input5.value,
        
    })
        .then(response => {
            console.log(response.data);
            form.reset();
        })
});


var inputs = document.querySelectorAll('input');

    inputs.forEach(function(input) {
      input.addEventListener('mouseenter', function() {
        input.setAttribute('placeholder', 'daxil edin...');
      });

      input.addEventListener('mouseleave', function() {
        input.setAttribute('placeholder', input.getAttribute('data-original'));
      });
    });











