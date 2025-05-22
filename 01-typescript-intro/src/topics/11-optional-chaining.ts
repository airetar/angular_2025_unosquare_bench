export interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Andrés'
}

const passenger2: Passenger = {
    name: 'Melissa',
    children: [
        'Natalia',
        'Elizabeth'
    ]
} 

const returnChildren = ( passenger: Passenger ) => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name, howManyChildren);
}

returnChildren(passenger1);
returnChildren(passenger2);