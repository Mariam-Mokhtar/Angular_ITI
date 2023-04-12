class Account {
    constructor(acc_no, Balance) {
        this.acc_no = acc_no;
        this.Balance = Balance;
    }
    debitAmount() { }
    creditAmount() { }
    getBalance() { }
}
class saving_Account extends Account {
    constructor(acc_no, Balance, Date_of_opening, Min_Balance) {
        super(acc_no, Balance);
        this.Date_of_opening = Date_of_opening;
        this.Min_Balance = Min_Balance;
    }
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
class Current_Account extends Account {
    constructor(acc_no, Balance, Date_of_opening, Interest_rate) {
        super(acc_no, Balance);
        this.Date_of_opening = Date_of_opening;
        this.Interest_rate = Interest_rate;
    }
    ;
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}
