export async function getProducts(name, budget, category){
    const response = await fetch('/api/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))
    return response;
}

export async function setProduct(product){
    const response = await fetch('/api/products', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))
    return response;
}

export async function postProduct(product){
    const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product),
    })
    .then((res) => res.json())
    .catch((err) => console.log(err))

    return response
}