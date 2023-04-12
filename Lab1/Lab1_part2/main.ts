class Account{
  constructor(private acc_no:number,private Balance:number){}
  debitAmount(){}
  creditAmount(){}
  getBalance(){}  
}

interface IAccount{
    Date_of_opening:Date;
    addCustomer();
    removeCustomer();
}

class saving_Account extends Account implements IAccount{

    constructor(acc_no, Balance,public Date_of_opening:Date, private Min_Balance:number ){
        super(acc_no, Balance);
    }
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}

class Current_Account extends Account implements IAccount{

    constructor(acc_no, Balance,public Date_of_opening:Date, private Interest_rate:number){
        super(acc_no, Balance);
    };
    addCustomer() {
        throw new Error("Method not implemented.");
    }
    removeCustomer() {
        throw new Error("Method not implemented.");
    }
}