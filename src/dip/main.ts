/*
 * --- Dependency Inversion Principle (Princípio da Inversão de Dependências) ---
 * Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
 * depender de abstrações.
 * Dependa de abstrações, não de implementações.
 * Abstrações não devem depender de detalhes. Detalhes devem depender
 * de abstrações.
 *
 * Classes de baixo nível são classes que executam tarefas (os detalhes)
 * Classes de alto nível são classes que gerenciam as classes de baixo nível.
 */
import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';

const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
// const individualCustomer = new IndividualCustomer(
// 	'Lucas',
// 	'Andrade',
// 	'111.111.111-11',
// );
const enterpriseCustomer = new EnterpriseCustomer('Empresa', '11111111');

const order = new Order(
	shoppingCart,
	messaging,
	persistency,
	enterpriseCustomer,
);

shoppingCart.addItem(new Product('Camiseta', 49.9312));
shoppingCart.addItem(new Product('Caderno', 9.9661));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(order.orderStatus);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDiscount());

order.checkout();

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(order.orderStatus);
