// abcd1234: $2b$04$QigLqDCBEiWdWmFoZiOMyuCcU1RUqwgS08gDtX23FMykgqDAXZCcK / sort: 3 / bcrypt.hashSync(password, 3);
let users = [
  {
    id: '1',
    username: 'bob',
    password: '$2b$04$QigLqDCBEiWdWmFoZiOMyuCcU1RUqwgS08gDtX23FMykgqDAXZCcK',
    name: 'Bob',
    email: 'bob@gmail.com',
    url: ''
  }
]

export async function findByUsername(username) {
  return users.find( (user) => user.username === username );
};

export async function findById(id) {
  return users.find((user) => user.id === id);
}

export async function createUser( user ) {
  const created = { ...user, id: Date.now().toString() };
  user.push(created);
  return created.id;
}
