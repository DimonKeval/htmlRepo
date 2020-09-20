let gender = 'female';
let age = 33;
let emAge;
if (gender === 'male'){
console.log('Wiek emerytalny dla mężczyzny wynosi 65 lat.');
emAge = 65;
} else if (gender === 'female'){
console.log('Wiek emerytalny dla kobiety wynosi 60 lat.');
emAge = 60;
}
for( ; age <= emAge; age++){
    console.log('w wieku ' + age + ' lat zostaje do emeretury '+ (emAge - age) +' lat');
}