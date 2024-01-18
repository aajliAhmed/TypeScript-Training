class Customer2 {

    private _firstName: string;
    private _lastName: string;
    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }
    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public get firstName(): string{
        return this._firstName;
    }

    public set firtstName(value : string){
        this._firstName = value;
    }
 
}

let myCustomer2 = new Customer2("Ahmed","AAJLI");

//myCustomer.firstName = "Ahmed";
//myCustomer.lastName = "AAJLI";

console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);

