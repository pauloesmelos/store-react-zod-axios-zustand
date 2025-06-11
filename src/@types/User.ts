type Geolocation = {
    lat: string;
    long: string;
}
type Addres = {
    geolocation: Geolocation;
    city: string;
    street: string;
    number: number | null;
    zipcode: string;
}
type Name = {
    firstname: string;
    lastname: string;
}
export interface User {
    address: Addres;
    id: number | null;
    email: string;
    username: string;
    password: string;
    name: Name;
    phone: string;
    __v: number | null;
}