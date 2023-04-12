class Account {
    constructor(acc_no, Balance) {
        this.acc_no = acc_no;
        this.Balance = Balance;
    }
    debitAmount(amount) { }
    creditAmount(amount) { }
    getBalance() { }
}
class saving_Account extends Account {
    constructor(acc_no, Balance, Date_of_opening, Min_Balance) {
        super(acc_no, Balance);
        this.Date_of_opening = Date_of_opening;
        this.Min_Balance = Min_Balance;
    }
    addCustomer(name) {
        console.log(name);
    }
    removeCustomer(name) {
        console.log(name);
    }
}
class Current_Account extends Account {
    constructor(acc_no, Balance, Date_of_opening, Interest_rate) {
        super(acc_no, Balance);
        this.Date_of_opening = Date_of_opening;
        this.Interest_rate = Interest_rate;
    }
    addCustomer(name) {
        console.log(name);
    }
    removeCustomer(name) {
        console.log(name);
    }
}
var savingAccount = new saving_Account(55, 10, new Date("2023-04-12"), 5);
var currentAccount = new Current_Account(1, 1000, new Date("2023-12-01"), 10);
console.log(savingAccount.Date_of_opening);
savingAccount.addCustomer("customer1");
savingAccount.removeCustomer("customer2");
console.log(currentAccount.Date_of_opening);
currentAccount.addCustomer("customer1");
currentAccount.removeCustomer("customer2");
