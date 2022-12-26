import { v4 as uuid } from 'uuid'
export default function sayHello(name) {
    alert(`Hello ${name} ${uuid()}`)
}