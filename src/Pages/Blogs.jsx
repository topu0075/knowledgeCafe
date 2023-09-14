import { useEffect, useState } from "react";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blogData.json")
      .then((res) => res.json())
      .then((blogs) => setBlogs(blogs));
  }, []);
  console.log(blogs);
  return (
    <div className='w-full md:w-3/4 mx-auto'>
      <Blogs blogs={blogs} />
    </div>
  );
}

export default Blogs;
