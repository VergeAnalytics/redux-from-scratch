const person = {name:"John",
          address:
          {
            city:"SF",country:"USA"}
          }
// const updated = Object.assign({},person,{name:"Bob", age:"30"})
// const updated = {...person,name:"Bob", age:"30"} //spread operator shallow copy
const updated = {...person,
  address:{
    ...person.address,
    city:"SF"

  },
  name:"Bob", age:"30"} //spread operator deep copy
// updated.address.city = "NY"
console.log(updated)
// console.log(person)



const numbers =[1,2,3]
const added = [4,...numbers]
console.log(added)
const index = numbers.indexOf(2)
const added1  = [
  ...numbers.slice(0,index),
  4,
  ...numbers.slice(index)
]
console.log(added1)

//filter for removing
console.log(numbers.filter(n => n !==2))
//updating map
console.log(numbers.map(n => n==2 ?20:n))

