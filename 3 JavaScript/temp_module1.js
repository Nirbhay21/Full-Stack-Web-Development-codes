export const user = {
    firstName: "Nirbhay",
    lastName: "Marde",
    age: 20
}

export const displayUser = () => {
    // for (let i = 0; i < Object.keys(user).length; i++) {
    //     console.log(`${Object.keys(user)[i]} : ${user[Object.keys(user)[i]]}`);
    // }

    for (const key in user) {
        console.log(`${key} : ${user[key]}`);
    }
}

const displayObject = (obj) => {
    if (obj) {
        for (let i = 0; i < Object.keys(obj).length; i++) {
            console.log(`Key = ${Object.keys(obj)[i]},  Value = ${obj[Object.keys(obj)[i]]}`);
        }
    }
}

export default displayObject;