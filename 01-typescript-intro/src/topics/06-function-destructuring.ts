
export interface Product {
    description: string;
    price: number;

}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'Ipad Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[]
}

export function taxCalculation( options: TaxCalculationOptions ): [number, number] {
    const { tax, products } = options;
    const total = products.reduce((accumulator, { price }) => {
        return accumulator + price;
    }, 0);

    return [
        total,
        total * tax
    ];
}

/* const shopingCart = [phone, tablet];
const taxDef = 0.15

const [ total, tax ] = taxCalculation({
    tax: taxDef,
    products: [...shopingCart]
});

console.log(`Total: ${ total }`);
console.log(`Tax: ${ tax }`); */

