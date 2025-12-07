import { LinkedList } from "./classes.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");
console.log(list.toString());

list.pop()
console.log(list.toString())

console.log(`List contains dog? ${list.contains("dog")}`)
console.log(`List contains monkey? ${list.contains("monkey")}`)
console.log(`Where is dog? ${list.find('dog')}`)
console.log(`Where is monkey? ${list.find('monkey')}`)
console.log(list.toString())
console.log(`First node: ${list.head.value}`)
console.log(`Last node: ${list.tail.value}`)
list.insertAt("tiger", 2)
console.log(list.toString())
list.removeAt(3)
console.log(list.toString())