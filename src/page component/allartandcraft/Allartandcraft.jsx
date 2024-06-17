
import { useLoaderData } from "react-router-dom";
import Allartandcraftcard from "./Allartandcraftcard";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Footer from "../../sharedcomponent/footer/Footer";


const Allartandcraft = () => {
const loadedData=useLoaderData()
console.log(loadedData)



    return (
        <div>
          <Navbar></Navbar>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Stock</th>
        <th>Category</th>
      </tr>
    </thead>
  {loadedData.map(datas=><Allartandcraftcard key={datas._id} datas={datas}></Allartandcraftcard>)}
   
   
    
  </table>
</div> 
<Footer></Footer>
        </div>
    );
};

export default Allartandcraft;