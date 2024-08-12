import { add,PI, person, table5, product, modulo} from "./script.js";
import defaultFunc from './module2.js';
console.log("getting result in module1 from written script in home file", add(2,4));
console.log(PI);
console.log(person);
const logInfo = person.getInfo();
console.log(logInfo);

console.log(table5());
console.log(product(25,46));
console.log(modulo(3,8));

console.log(defaultFunc());