
const salary = 4000;
const lodging = 'apartment';
const size = 'large';


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    bracket_734: 3 ,
    bracket_234: 20 ,
    bracket_913: 12 ,
    bracket_415: 38 ,
    bracket_502: 42 ,
}



const rent = {
    none: 0,
    'small-room': 200,
    'large-room': 300,
    'small-apartment': 400,
    'large-apartment': 800,
    'small-house': 1200,
    'large-house': 2400,
}

const salary_after_tax = salary - (salary * (tax.bracket_913/100)) ; 

console.log(salary_after_tax)

const salary_minus_tax_and_expenses = (salary_after_tax) - (expenses.food) - (expenses.transport); 

console.log(salary_minus_tax_and_expenses) 

const salary_minus_tax_and_expenses_and_rent =  (salary_after_tax) - (expenses.food) - (expenses.transport) - (rent['large-apartment']); 

console.log(salary_minus_tax_and_expenses_and_rent)