let gender = 'female';
let age = 59;
let emAge;

 const emeretalnyWiek = (gender) =>{
        if (gender === 'male'){
            console.log('Wiek emerytalny dla mężczyzny wynosi 65 lat.');
            return 65;
        } else if (gender === 'female'){
            console.log('Wiek emerytalny dla kobiety wynosi 60 lat.');
            return 60;
        }
   }


 const licznik = function liczenie(emAge){
       for( ; age <= emAge; age++){
           console.log('w wieku ' + age + ' lat zostaje do emeretury '+ (emAge - age) +' lat');
       }
}

emAge = emeretalnyWiek(gender);

licznik(emAge);