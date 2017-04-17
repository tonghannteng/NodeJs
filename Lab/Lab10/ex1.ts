type BankAccount = {
    money: number,
    deposit: (a: number) => void
}

let bankAccount: BankAccount = {
    money: 2000,
    deposit(value){
        this.money += value;
    }
};

type PersonInfo = {
    name: String,
    bankAccount: BankAccount,
    hobbies: [string, string]
}

let myself : PersonInfo = {
    name: "Asaad",
    bankAccount: bankAccount,
    hobbies: ["Violin", "Cooking"]
};

myself.bankAccount.deposit(3000);
console.log(myself);