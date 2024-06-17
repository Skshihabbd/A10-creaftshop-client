import { useLoaderData } from "react-router-dom";
import CategoriCard from "./CategoriCard";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Footer from "../../sharedcomponent/footer/Footer";


const Allcategory = () => {
    const datas=useLoaderData()
    console.log(datas)
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 my-6">
            
            {datas.map(data=><CategoriCard key={data._id} data={data}></CategoriCard>)} 
          </div> 
          <Footer></Footer>
        </div>
    );
};

export default Allcategory;