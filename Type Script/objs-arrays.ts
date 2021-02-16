// const person: {
//     name: string;
//     age: number; 
// } = {
    enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
    name: 'Antoshef',
    age: 34,
    hobbies: ['Cooking', 'Sports'],
    role: Role.ADMIN,
}

let favoriteActivities: string[];
favoriteActivities = ['sports',];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby);
}