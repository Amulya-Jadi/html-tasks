let n1 = 0, n2 = 1
console.log(n1)
console.log(n2)

function doFebanocci(n) {
    if ((n - 2) > 0) { //(n-2) is for I already printing n1 and n2 so I need Remianing 8 numbers only
        let n3 = n1 + n2
        console.log(n3)
        n1 = n2
        n2 = n3
        doFebanocci(n - 1)
    }
}

let n = 10
doFebanocci(n)