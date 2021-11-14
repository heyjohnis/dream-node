let tweets = [
  {
    id:'1',
    text: '화이팅!!!',
    createdAt: Date.now().toString(),
    name: 'Bob',
    username: 'bob',
    url: 'http://abc.com'
  },
  {
    id:'2',
    text: '안녕',
    createdAt: Date.now().toString(),
    name: 'John',
    username: 'john',
    url: 'http://abc.com'
  },
  {
    id:'3',
    text: '안녕2',
    createdAt: Date.now().toString(),
    name: 'John',
    username: 'john',
    url: 'http://abc.com'
  },
];

export function getAll() {
  return tweets;
}

export function getAllByUsername(username) {
  return tweets.filter(t => t.username === username);
}

export function getById(id) {
  return tweets.find(t => t.id === id);
}

export function create(text, name, username) {
  const tweet = {
    id: Date.now().toString(),
    text,
    createdAt: new Date(),
    name,
    username,
  };
  tweets = [tweet, ...tweets];
  return tweets;
}

export function update(id, text) {
  const tweet = tweets.find(t => t.id === id)
  if(tweet)
    tweet.text = text;
  return tweet;
}

export function remove(id) {
  tweets = tweets.filter(t => t.id !== id);
}