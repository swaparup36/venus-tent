export interface AppointmentFormData {
    name: string;
    email: string;
    phone: string;
    date: string;
    time: string;
    eventType: string;
    services: string[];
}

export interface ReviewInterFace {
    author_name: string,
    author_url: string,
    language: string,
    original_language: string,
    profile_photo_url: string,
    rating: number,
    relative_time_description: string,
    text: string,
    time: number,
    translated: boolean
}