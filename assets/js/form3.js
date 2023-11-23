const form=document.getElementById("form");
const btn=document.getElementById("btn");
const input1=document.getElementById("inp1");
const input2=document.getElementById("inp2");
const input3=document.getElementById("inp3");
const input4=document.getElementById("inp4");
const input5=document.getElementById("inp5");
const input6=document.getElementById("inp6");
const input7=document.getElementById("inp7");
const input8=document.getElementById("inp8");
const input9=document.getElementById("inp9");
const input10=document.getElementById("inp10");




form.addEventListener("submit",function(event){
    event.preventDefault();

    axios.post("https://655c846525b76d9884fd70e4.mockapi.io/profile", {
        title: input1.value,
        price: input2.value,
        desctiption: input3.value,
        discount: input4.value,
        stock: input5.value,
        qualıty: input6.value,
        country: input7.value,
        customerCount: input8.value,
        category: input9.value,
        cıty: input10.value,
        
        
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












