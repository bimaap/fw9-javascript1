let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "bima.armedianto@gmail.com",
    address:{
        street: "Kulas Ligth",
        suite: "Apt. 556",
        city: "Gwenborugh",
        zipcode: "92998-3874"
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

let changeData = {...data, name: "Bima Armedianto", hobbies: ["Main Game", "Berenang", "Kuliner"]}
let {street, city} = data.address

console.log(changeData)
console.log(`Street = ${street}
City = ${city}`);