import { Link } from "react-router-dom";


const MyartandcraftCard = ({data,handleDelete}) => {
    const{photourl,_id}=data
    return (
        <div>
            <div className="border-2 lg:w-52 h-96">
          <img
            className="p-5 h-1/3"
            src={photourl}
            alt=""
          />
          <div className="mt-2 space-y-4 font w-5/6 h-3/6 mx-auto  ">
            <p className="text-xl">Plus Women Cotton </p>
            <p className="text-lg">rating:4.6</p>
            <p>BDT 1000</p>
           <div className="flex flex-row ">
           <Link to={`/update/${_id}`}><button className="bg-[#F2F2F2] hover:scale-105 duration-200 rounded-3xl  hover:bg-[#9EA18E] text-lg  text-center px-1 py-1 ">update </button></Link>
           <button onClick={()=>{handleDelete(_id)}} className="bg-[#F2F2F2] hover:scale-105 duration-200 rounded-3xl  hover:bg-[#9EA18E] text-lg  text-center px-1 py-1 ">delete </button>
           </div>
          </div>
        </div>
        </div>
    );
};

export default MyartandcraftCard;