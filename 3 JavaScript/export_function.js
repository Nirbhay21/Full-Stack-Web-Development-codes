const greet = (username) => {
    alert("Hello " + username)
}

export { greet };

export function add(a, b) {
    return a + b;
}

const average = (...arr) => {
    return arr.reduce((acc, num) => acc + num) / arr.length;
}

export { average as avg };