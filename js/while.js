let num = 2;

while (num <= 65536){
    console.log(num)
    num *= 2;
}

//Ice cream Cones

let totalCustomerSalesAttempts = 0;
let customerSales = 0
let failedCustomerSails = 0;

let startingInventory = Math.floor(Math.random() * 50) + 50;
let coneInventory = startingInventory;
do{
   let customerConeOrder = Math.floor(Math.random() * 5) + 1;
    totalCustomerSalesAttempts++;

    if(coneInventory >= customerConeOrder){
        customerSales++;
        console.log(`I have ${coneInventory} cones left, so I can sell you ${customerConeOrder}. Enjoy.`);
        coneInventory -= customerConeOrder;
    }else{
        failedCustomerSails++;
        console.log(`I'm sorry I don't have ${customerConeOrder} cones left to sell you.`)
    }

}while(coneInventory)

failedCustomerSails = totalCustomerSalesAttempts - customerSales;
console.log(`Starting Cone Inventory: ${startingInventory}`);
console.log(`Total Customers Sold: ${customerSales}`);
console.log(`Total Customers Not Getting Ice Cream: ${failedCustomerSails}`);
console.log(`All Sale Attempts: ${totalCustomerSalesAttempts}`);
