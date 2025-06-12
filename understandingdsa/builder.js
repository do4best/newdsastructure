class Person{
    constructor(){
        this.addressSite = this.postCode = this.city = "";
        this.companyName = this.position = "";
        this.annualIncome = 0; 
    }
    toString(){
        return(` Person lives at ${this.addressSite} , ${this.city} , ${this.postCode} and works at ${this.companyName} and his position is ${this.position}
            and his annualIncome is ${this.annualIncome}`)
    }
}
class PersonBuilder{
    constructor(person = new Person()){
        this.person = person;
    }
    getLives(){
        return new AddressPersonBuilder(this.person)
    }
    getWorks(){
        return new WorkPersonBuilder(this.person)
    }
    build(){
        return this.person;
    }
}
class AddressPersonBuilder extends PersonBuilder{
    constructor(person){
        super(person)
    }
    at(addressSite){
        this.person.addressSite = addressSite;
        return this;
    }
    with(postalCode){
        this.person.postCode = postalCode;
        return this;
    }
    in(city){
        this.person.city = city;
        return this;
    }
}

class WorkPersonBuilder extends PersonBuilder{
    constructor(person){
        super(person)
    }
    at(companyName){
        this.person.companyName = companyName;
        return this;
    }
    position(position){
        this.person.position = position;
        return this;
    }
    earning(annualIncome){
        this.person.annualIncome = annualIncome;
        return this;
    }
}

let personBuilder = new PersonBuilder();
let person = personBuilder.getLives().at("Baghbanpura Station").in("Lahore").with("Postal Code is 54000").getWorks().at("Ravi Scientific Traders").position("IT In charge").earning(480000).build();
console.log(person)