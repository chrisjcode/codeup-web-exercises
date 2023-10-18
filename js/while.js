let num = 2;

while (num < 65536){
    num *= 2;
    console.log(num);
}

//Ice cream Cones

let totalCustomerSalesAttempts = 0;
let customerSales = 0
let failedCustomerSails = 0;

let startingInventory = Math.floor(Math.random() * 50) + 50;
let allCones = startingInventory;
do{
   let customerConeOrder = Math.floor(Math.random() * 5) + 1;
    totalCustomerSalesAttempts++;

    if(allCones >= customerConeOrder){
        customerSales++;
        console.log(`I have ${allCones} cones left, so I can sell you ${customerConeOrder}. Enjoy.`);
        allCones -= customerConeOrder;
    }else{
        failedCustomerSails++;
        console.log(`I'm sorry I don't have ${customerConeOrder} cones left to sell you.`)
    }

}while(allCones)

failedCustomerSails = totalCustomerSalesAttempts - customerSales;
console.log(`Starting Cone Inventory: ${startingInventory} cones have been sold.`);
console.log(`Total Customers Sold: ${customerSales}`);
console.log(`Total Customers Not Getting Ice Cream: ${failedCustomerSails}`);
console.log(`All Sale Attempts: ${totalCustomerSalesAttempts}`);
