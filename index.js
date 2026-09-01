let productId="555";
     let Product_name="pika";
     let price=15;
     let quantity=5;

     function total(){
        let Total_price=price*quantity;
    return Total_price;
}


function Update_Product_quantity( z){
    quantity=z;
    return quantity
}    
function display(){
console.log("Product id:",productId);
console.log("product_name:",Product_name);
console.log("price:",price);
console.log("quantity",Update_Product_quantity(2));

}
display();  