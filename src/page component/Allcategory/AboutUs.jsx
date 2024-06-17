import Footer from "../../sharedcomponent/footer/Footer";
import Navbar from "../../sharedcomponent/navbar/Navbar";

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center items-center  h-screen bg-[url('https://i.ytimg.com/vi/6vl0KTwWtX0/maxresdefault.jpg')]">
             <h1 className="text-center text-white text-7xl font-bold bg-black w-3/6 bg-opacity-25 ">We are committed to <br /> give you best service</h1>
            </div>
          
           <Footer></Footer>
        </div>
    );
};

export default AboutUs;