interface IPerson{
    name: string;
    age: number;

    getName(): string;
}

class Person implements IPerson{
    name: string;
    age: number;

    constructor(public name: string, public age: number){
        this.name = name;
        this.age = age;
    }
    
    getName(): string {
        throw new Error("Method not implemented.");
    }

}