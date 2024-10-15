const tempObj = {
    id: 1,
    name: "John Doe",
    age: 35,
    email: "johndoe@example.com",
    address: {
        street: "123 Main St",
        city: "Springfield",
        state: "IL",
        postalCode: "62704",
        country: "USA",
    },
    phoneNumbers: [
        { type: "home", number: "555-1234" },
        { type: "work", number: "555-5678" },
        { type: "mobile", number: "555-8765" },
    ],
    isActive: true,
    lastLogin: "2024-08-27T10:15:30Z",
    preferences: {
        language: "en",
        theme: "dark",
        notifications: {
            email: true,
            sms: false,
            push: true,
        },
    },
    orderHistory: [
        {
            orderId: 101,
            date: "2024-06-14",
            total: 99.99,
            items: [
                { productId: "A001", name: "Widget", quantity: 2, price: 19.99 },
                { productId: "B002", name: "Gadget", quantity: 1, price: 59.99 },
            ],
        },
        {
            orderId: 102,
            date: "2024-07-22",
            total: 149.49,
            items: [
                { productId: "C003", name: "Doohickey", quantity: 3, price: 49.83 },
            ],
        },
    ],
    favorites: {
        colors: ["blue", "green", "red"],
        foods: ["pizza", "sushi", "tacos"],
        movies: [
            { title: "Inception", year: 2010 },
            { title: "The Matrix", year: 1999 },
            { title: "Interstellar", year: 2014 },
        ],
    },
    socialMedia: {
        twitter: "@johndoe",
        facebook: "facebook.com/johndoe",
        instagram: "@johndoe_insta",
    },
    company: {
        name: "Tech Solutions Inc.",
        role: "Software Engineer",
        startDate: "2021-05-10",
        department: "Development",
        colleagues: [
            { name: "Jane Smith", role: "Project Manager" },
            { name: "Mike Johnson", role: "UI/UX Designer" },
            { name: "Sara Lee", role: "QA Engineer" },
        ],
    },
    certifications: [
        { name: "AWS Certified Developer", year: 2023 },
        { name: "Certified Scrum Master", year: 2022 },
    ],
    project: {
        title: "Next-Gen Web App",
        description: "A cutting-edge web application leveraging modern technologies.",
        status: "In Progress",
        contributors: [
            { name: "Alice", role: "Backend Developer" },
            { name: "Bob", role: "Frontend Developer" },
        ],
    },
    hobbies: ["photography", "hiking", "coding", "gaming"],
    createdAt: "2023-01-15T12:00:00Z",
    updatedAt: "2024-08-27T10:00:00Z",
};

export { tempObj };