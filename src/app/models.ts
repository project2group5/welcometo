export class Recommendation {
    name: string;
    description?: string;
}

export class Person {
    id: number;
    name: string;
    profile?: string;
    recommendations: {
        restaurants: Recommendation[],
        events: Recommendation[]
    };
}