import { Link } from "react-router-dom";
import profilePic from "../../assets/image.png";
import { FaYoutube, FaTelegram, FaLinkedin,FaGithub } from "react-icons/fa";
const Home = () => {
   return (
    <div className="home container pt-[120px] pr-6 flex flex-col">

     <div className="flex flex-col gap-[30px]">

      <div className="flex items-center gap-[30px]">
      <img src={profilePic} alt="profile picture" className="w-44 h-44 rounded-full object-cover" />
      <div className="flex flex-col gap-[15px]">
        <h1 className="font-bold text-4xl text-gray-900">Fazliddin Khayrullaev</h1>
        <h2 className=" text-3xl text-gray-400">Sofware Engineer</h2>
        <div className="flex space-x-4">
      <a href="https://www.youtube.com/@fazliddinkhayrullaev" target="_blank" rel="noopener noreferrer">
        <FaYoutube className="w-6 h-6 text-red-500 hover:text-red-700" />
      </a>
      <a href="https://t.me/fazliddinkhayrullaev" target="_blank" rel="noopener noreferrer">
        <FaTelegram className="w-6 h-6 text-blue-500 hover:text-blue-700" />
      </a>
      <a href="https://www.linkedin.com/in/fazliddin-khayrullaev-3a3b34228/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="w-6 h-6 text-blue-600 hover:text-blue-800" />
      </a>
      <a href="https://github.com/khayrullaevf" target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-6 h-6 text-black-600 hover:text-blue-800" />
      </a>
    </div>
      </div>
       
      </div>
      <h3 className="text-2xl text-gray-500"> Passionate Full-Stack Developer with expertise in JavaScript and TypeScript. Dedicated to building scalable and efficient software solutions.</h3>
      
        <div className="flex gap-[40px]">
        <button className="bg-blue-500 text-white py-2 px-8 rounded-sm text-[17px] border border-blue-500 
                     hover:bg-white hover:text-blue-500">
        <a href="https://t.me/s/khayrullaevfazliddin" target="_blank" rel="noopener noreferrer">Read Blog</a>
        </button>
  
         <button className="text-blue-500 bg-white py-2 px-8 rounded-sm text-[17px] border border-blue-500
                     hover:bg-blue-500 hover:text-white">
           <Link to="/about">About me</Link>
        </button>
        </div>

     </div>


     <div className="pt-[100px] flex justify-center">
      <h3 className="text-gray-400 text-sm">© 2025 fazliddinkhayrullaev-official.vercel.app</h3>
     </div>
    </div>
   )
  };
  
  export default Home;
  