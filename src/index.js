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