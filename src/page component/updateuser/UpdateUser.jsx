import Swal from "sweetalert2";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import { useState } from "react";

import Footer from "../../sharedcomponent/footer/Footer";
import TiTleMenu from "../../sharedcomponent/menu title/TiTleMenu";
import { useLoaderData } from "react-router-dom";
const UpdateUser = () => {
  const userUpdate = useLoaderData();
  console.log(userUpdate);

  const { _id, name } = userUpdate;

  const [categories, setdata] = useState();
  const [customize, setnewData] = useState();
  const [stocks, setStocks] = useState();
  const newdatasubmit = (e) => {
    setnewData(e.target.value);
  };

  const handlestock = (e) => {
    setStocks(e.target.value);
  };

  const newsubmit = (e) => {
    const data = e.target.value;
    console.log(data);
    setdata(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    console.log(form);
    const name = form.names.value;
    const rating = form.rating.value;
    const price = form.price.value;
    const processingtime = form.processingtime.value;

    const details = form.details.value;
    const photourl = form.photourl.value;
    // const username=form.username.value
    // const useremail=form.useremail.value

    console.log(
      name,
      rating,
      categories,
      price,
      processingtime,
      stocks,
      details,
      photourl
    );
    const craftinfo = {
      name,
      rating,
      price,
      processingtime,
      stocks,
      details,
      photourl,
      categories,
      customize,
    };
    console.log(craftinfo);
    fetch(`https://server-site-wine.vercel.app/usersenddata/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(craftinfo),
    })
      .then((res) => res.json())
      .then((info) => {
        if (info.acknowledged) {
          Swal.fire({
            title: "success!",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Cool",
          });
          form.reset();
        }
      });
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <TiTleMenu></TiTleMenu>
      </div>
      <div className="bg-[#F4F3F0]  ">
        <h1 className="text-center mb-10 text-3xl">
          Add User data to DataBase
        </h1>
        <p className="text-center w-4/6 mx-auto">
          It is a long established fact that a reader will be distraceted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>
        <section className="p-6  mx-auto    dark:bg-gray-100 dark:text-gray-900">
          <form
            onSubmit={handleSubmit}
            className=" w-full   flex flex-col mx-auto space-y-12"
          >
            <fieldset className=" border-2 w-full gap-6 p-6  mx-auto rounded-md shadow-sm dark:bg-gray-50">
              <div className="grid grid-cols-6  gap-10 col-span-full  lg:col-span-full">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstnames" className="text-sm">
                    item_name
                  </label>
                  <input
                    id="firstnames"
                    type="text"
                    name="names"
                    defaultValue={name}
                    placeholder="Enter craft name"
                    className="w-full h-full  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                {/* <div className="col-span-full  sm:col-span-3">
                  <label htmlFor="useremail" className="text-sm">
                 user eamil
                  </label>
                  <input
                  readOnly
                    id="useremail"
                    type="email"
                    defaultValue={users?.email}

                    name="name"
                    placeholder="Enter user email"
                    className="w-full h-full  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="username" className="text-sm">
                 User name
                  </label>
                  <input
                   readOnly
                   defaultValue={users?.displayName}
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Enter user name"
                    className="w-full h-full  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div> */}
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm">
                    price
                  </label>

                  <input
                    id="lastname"
                    type="number"
                    name="price"
                    placeholder="Enter price Taka"
                    className="w-full h-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 ">
                  <label htmlFor="email" className="text-sm">
                    rating
                  </label>
                  <input
                    id="email"
                    type="text"
                    name="rating"
                    placeholder="Enter rating"
                    className="w-full h-full  rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 ">
                  <label htmlFor="email" className="text-sm">
                    processing_time
                  </label>

                  <input
                    id="email"
                    type="number"
                    name="processingtime"
                    placeholder="Enter processing_time in days"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 h-full focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 ">
                  <select
                    onChange={handlestock}
                    required
                    className="select select-primary w-full max-w-xs"
                  >
                    <option disabled selected>
                      stockStatus
                    </option>
                    <option value={"In stock"}>- In stock</option>
                    <option value={"Made to Order"}>Made to Order</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3 ">
                  <label htmlFor="email" className="text-sm">
                    short description
                  </label>
                  <input
                    required
                    id="email"
                    type="text"
                    name="details"
                    placeholder="Enter description"
                    className="w-full rounded-md focus:ring  h-full  focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full  ">
                  <label htmlFor="email" className="text-sm">
                    PhotoUrl
                  </label>
                  <input
                    id="text"
                    type="text"
                    name="photourl"
                    placeholder="Enter photo URL"
                    className="w-full rounded-md focus:ring  h-full  focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3  ">
                  <select
                    onChange={newsubmit}
                    className="select select-primary w-full max-w-xs"
                  >
                    <option disabled selected>
                      Select a Category
                    </option>
                    <option value={"CardMaking"}>Card Making</option>
                    <option value={"Scrapbooking"}>Scrapbooking</option>
                    <option value={"PaperQuillingorigami"}>
                      Paper Quilling & origami
                    </option>
                    <option value={"GlassPainting"}>Glass Painting</option>
                    <option value={"Lampworking"}>Lampworking</option>
                    <option value={"GlassDyingStaining"}>
                      Glass Dying & Staining
                    </option>
                  </select>
                </div>
                <div className="col-span-full  ">
                  <div className="col-span-full">
                    <select
                      onChange={newdatasubmit}
                      required
                      className="select select-primary w-full max-w-xs"
                    >
                      <option disabled selected>
                        customization
                      </option>
                      <option value={"yes"}>Yes</option>
                      <option value={"no"}>No</option>
                    </select>
                  </div>
                </div>
              </div>
            </fieldset>
            <button className="btn btn-block bg-black text-yellow-500">
              Add Coffee
            </button>
          </form>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default UpdateUser;
