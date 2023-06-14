// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]


function destructivelyAppendCat(name) {
    return cats.push(name)
}

function destructivelyPrependCat(name) {
    return cats.unshift(name)
}

function destructivelyRemoveLastCat(name) {
    return cats.pop(name)
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift(name)
}

function appendCat(name) {
    const newCats = [...cats, name]
    return newCats
}

function prependCat(name) {
    const newCats = [name, ...cats]
    return newCats
}

function removeLastCat() {
    const copyCats = [...cats]
    const newCats = copyCats.slice(0, - 1)
    return newCats
}

function removeFirstCat() {
    const copyCats = [...cats]
    const newCats = copyCats.slice(1)
    return newCats
}