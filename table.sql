create table pizzaOrder(
	orderId serial not null primary key,
	status text not null,
    amount decimal(10,2)
);