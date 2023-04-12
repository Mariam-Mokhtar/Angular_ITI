class Account {
  constructor(private acc_no: number, private Balance: number) {}
  debitAmount(amount: number) {}
  creditAmount(amount: number) {}
  getBalance() {}
}

interface IAccount {
  Date_of_opening: Date;
  addCustomer(name: string): void;
  removeCustomer(name: string): void;
}

class saving_Account extends Account implements IAccount {
  constructor(
    acc_no,
    Balance,
    public Date_of_opening: Date,
    private Min_Balance: number
  ) {
    super(acc_no, Balance);
  }
  addCustomer(name: string): void {
    console.log(name);
  }
  removeCustomer(name: string): void {
    console.log(name);  }
}

class Current_Account extends Account implements IAccount {
  constructor(
    acc_no,
    Balance,
    public Date_of_opening: Date,
    private Interest_rate: number
  ) {
    super(acc_no, Balance);
  }
  addCustomer(name: string): void {
    console.log(name);
  }
  removeCustomer(name: string): void {
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
