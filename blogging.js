function getAllBlogs() {
  return blogs;
}

let blogs = {
  1: { title: "NodeJS Tutorial", content: "xyz" },
  2: { title: "NodeJS Tutorial Advance", content: "abc" },
};

module.exports=getAllBlogs()