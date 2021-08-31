/*
 * Liskov substitution principle (Princípio da substituição de Liskov) -
 * Se ϕ(x) é uma propriedade demonstrável dos objetos x de tipo T. Então ϕ(y)
 * deve ser verdadeiro para objetos y de tipo S onde S é um subtipo de T.
 *
 * Mais simples: Subtipos precisam ser substituíveis por seus tipos de base.
 * Mais simples ainda: Se meu programa espera um Animal, algo do tipo
 * Cachorro (que herda de Animal) deve servir como qualquer outro Animal.
 *
 * Se tenho comportamentos diferentes em subtipos de um mesmo tipo, provavelmente
 * não estou seguindo o LSP.
 */
import { Messaging } from './services/messasing';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { FiftyPercentDiscount } from './classes/discount';

const fiftyPercentDiscount = new FiftyPercentDiscount();
// const tenPercentDiscount = new TenPercentDiscount();
// const noDiscount = new NoDiscount();
const shoppingCart = new ShoppingCart(fiftyPercentDiscount);
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shoppingCart, messaging, persistency);

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
