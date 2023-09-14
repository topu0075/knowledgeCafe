import profilePic from "../../assets/avatar-1.jpeg";

function Navbar() {
  return (
    <div className='container mx-auto flex justify-between items-center mt-12 mb-10 border-b-2 px-10'>
      <div>
        <h1 className='text-4xl font-bold'>Knowledge Cafe</h1>
      </div>
      <div className='my-5'>
        <img className='w-16 h-16 rounded-full' src={profilePic} alt='' />
      </div>
    </div>
  );
}

export default Navbar;
