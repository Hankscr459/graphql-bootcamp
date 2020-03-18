// Demo user data
const users = [{
    id: '1',
    name: 'Hank',
    email: 'Hank@gmail.com',
    age: 26
}, {
    id: '2',
    name: 'Sarah',
    email: 'sarah@gmail.com',
    age: 16
}, {
    id: '3',
    name: 'Mike',
    email: 'Mike@gmail.com'
}]

const posts = [{
    id: '10',
    title:'GraphQL 101',
    body: 'This is how to use GraphQL...',
    published: true,
    author: '1'
}, {
    id: '11',
    title: 'GraphQL 201',
    body: 'This is how to use avdenced GraphQL post...',
    published: false,
    author: '1'
}, {
    id: '12',
    title: 'Programing Music',
    body: '',
    published: true,
    author: '2'
}]

const comments = [{
    id: '102',
    text: 'This worked well for me. Thanks!',
    author: '3',
    post: '10'
}, {
    id: '103',
    text: 'Gald you enjoyed it.',
    author: '1',
    post: '10'
}, {
    id: '104',
    text: 'This did no work.',
    author: '2',
    post: '11'
}, {
    id: '105',
    text: 'Nevermind. I got to work',
    author: '1',
    post: '12'
}]

const db = {
    users,
    posts,
    comments
}

export { db as default }