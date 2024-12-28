interface Service {
    id: string;
    label: string;
}  

export const AVAILABLE_SERVICES: Service[] = [
    { id: 'tent', label: 'Tent' },
    { id: 'lighting', label: 'Lighting' },
    { id: 'sound', label: 'Sound System' },
    { id: 'catering', label: 'Catering' },
    { id: 'flowers', label: 'Flowers' },
    { id: 'band', label: 'Live Band' },
    { id: 'photography and videography', label: 'Photography and Videography' },
];