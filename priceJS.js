const calculate =document.querySelector('.btn');
const reset = document.querySelector('.reset');
 // DL Gamoso
   calculate.addEventListener('click' , (e) =>{
      e.preventDefault();

    let kilo = document.getElementById('weight').value;
    let service = document.getElementById('service').value;
    let workType = document.getElementById('type').value;
    let discount = document.getElementById('privelege').value;

    let total = document.getElementById('total');
    let totalDisc = document.getElementById('disc');
    let finalPay = document.getElementById('pay');
     
   // Calculation Formula...
    total.value = ((kilo * service) + ( workType * kilo));
    totalDisc.value = total.value * discount;
    finalPay.value = total.value  - totalDisc.value;

   // Printing The Output...
    document.getElementById('total').innerHTML = total.value;
    document.getElementById('disc').innerHTML = totalDisc.value;
    document.getElementById('pay').innerHTML = finalPay.value;
    
   });

   reset.addEventListener('click', () => {
      window.location.reload();
   })
    
