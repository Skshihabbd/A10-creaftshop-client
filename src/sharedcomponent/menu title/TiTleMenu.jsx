import { Link } from "react-router-dom";


const TiTleMenu = () => {
    return (
        <div className="bg-cover text-center bg-no-repeat shadow-inner  bg-[url('https://i.ibb.co/6RNb4mp/aditya-wardhana-2-Tnr1-FMHy2g-unsplash.jpg')] w-full h-[40vh]">
          <p className="text-3xl font-bold font text-white ">About</p>  
<ul className=" flex justify-center text-2xl font text-[#DBD7D2] "><li><Link>Home</Link></li> ||
<li>About</li>
</ul> 



        </div>
    );
};

export default TiTleMenu;