import { useEffect, useState } from "react";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Custom from "../../sharedcomponent/custom/Custom";
import MyartandcraftCard from "./MyartandcraftCard";
import Swal from "sweetalert2";

const MyartsandCraftList = () => {
  const { users } = Custom();
  const [state, setState] = useState([]);
  // const [change,setChange]=useState(state)
  // console.log(change)
  console.log(state);
  useEffect(() => {
    fetch(
      `https://server-site-wine.vercel.app/usersendcollection?email=${users?.email}`
    )
      .then((res) => res.json())
      .then((data) => setState(data));
  }, []);

  const handleDelete = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://server-site-wine.vercel.app/usersenddata/${id}`,

          { method: "DELETE" }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const remain = state.filter((crafs) => crafs._id !== id);
              setState(remain);
            }
          });
      }
    });
  };

  const handleFilter = (category) => {
    if (category === "CardMaking") {
      const cardMake = state.filter((card) => card.categories === "CardMaking");
      setState(cardMake);
      
    }
    else if(category === "Scrapbooking"){
      const cardMake = state.filter((card) => card.categories === "Scrapbooking");
      setState(cardMake);}
    else if(category === "PaperQuillingorigami"){
      const cardMake = state.filter((card) => card.categories === "PaperQuillingorigami");
      setState(cardMake);}
    else if(category === "GlassPainting"){
      const cardMake = state.filter((card) => card.categories === "GlassPainting");
      setState(cardMake);}
    else if(category === "Lampworking"){
      const cardMake = state.filter((card) => card.categories === "Lampworking");
      setState(cardMake);}
    else if(category === "GlassDyingStaining"){
      const cardMake = state.filter((card) => card.categories === "GlassDyingStaining");
      setState(cardMake);
    }
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <details className="dropdown">
          <summary className="m-1 btn">filter</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li
              onClick={() => {
                handleFilter("CardMaking");
              }}
            >
              <a>Card Making</a>
            </li>
            <li
              onClick={() => {
                handleFilter("Scrapbooking");
              }}
            >
              <a>Scrapbooking</a>
            </li>
            <li
              onClick={() => {
                handleFilter("PaperQuillingorigami");
              }}
            >
              <a>Paper Quilling &origami</a>
            </li>
            <li
              onClick={() => {
                handleFilter("GlassPainting");
              }}
            >
              <a>GlassPainting</a>
            </li>
            <li
              onClick={() => {
                handleFilter("Lampworking");
              }}
            >
              <a>Lampworking</a>
            </li>
            <li
              onClick={() => {
                handleFilter("GlassDyingStaining");
              }}
            >
              <a>Glass Dying &Staining</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid lg:grid-cols-4 gap-3 w-10/12 mx-auto ">
        {state.map((data) => (
          <MyartandcraftCard
            handleDelete={handleDelete}
            key={data._id}
            data={data}
          ></MyartandcraftCard>
        ))}
      </div>
    </div>
  );
};

export default MyartsandCraftList;
