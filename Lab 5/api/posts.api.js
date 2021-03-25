//15
//npm install uuid --save
const UUID = require('uuid');

//16 a
const posts = new Map();

//b,c
const createPost = obj => {
  const post = {
      id : UUID.v4(),
      date : new Date(),
      name : obj.name,
      description : obj.description
  };
  posts.set(post.id, post);
};

//d
const getPosts = () =>{
    return [...posts.values()]
};

//e
const getPost = id =>{
    return posts.get(id);
};

//f
module.exports = {createPost, getPost, getPosts};