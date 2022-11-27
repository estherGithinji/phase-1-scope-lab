var customerName = 'bob'
// var bestCustomer = 'not bob'

function upperCaseCustomerName(){
    return customerName = customerName.toUpperCase();
}

 var setBestCustomer = function(){
    return bestCustomer = 'not bob'
 }
 
function overwriteBestCustomer(){
    return bestCustomer = 'maybe bob'
}

const LeastFavoriteCustomer = 'Jasper'

function changeLeastFavoriteCustomer(){
    return LeastFavoriteCustomer = 'not Jasper'
}
//       it('unsuccessfully tries to reassign the least favorite customer', function() {
//         expect(changeLeastFavoriteCustomer).to.throw('Assignment to constant variable.');
//       });
//     });
//   });
  
 