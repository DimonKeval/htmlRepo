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


 const licznik = function liczenie(age, emAge){
       for( ; age <= emAge; age++){
                console.log('w wieku ' + age + ' lat zostaje do emeretury '+ (emAge - age) +' lat');
       }
}

//emAge = emeretalnyWiek(gender);
//
//licznik(emAge);

class Person  {
    constructor (name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.emAge = emeretalnyWiek(this.gender);
        this.pensionStatus =  null;
    }

    get isPensioner(){
        if (this.age >= this.emAge){
            console.log(this.name + ' is already on pension.');
            this.pensionStatus = true;
        } else{
            console.log(this.name + ' has to work, cannot to go on pension.');
            this.pensionStatus = false;
        }
    }

    get whenPension(){
        if (!this.pensionStatus){
        licznik(this.age, this.emAge);}
        else{
            console.log('Is on pension, can\'t to count remains years to pension.')
        }
    }
}

const person = new Person('Julia', 65, 'female');
person.isPensioner;
person.whenPension;