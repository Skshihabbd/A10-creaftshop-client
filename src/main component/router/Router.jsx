import { createBrowserRouter } from "react-router-dom";
import Errorpage from "../../page component/errorpage/Errorpage";
import Root from "./root/Root";
import Navbar from "../../sharedcomponent/navbar/Navbar";
import Home from "../../page component/home/Home";
import SignIn from "../SignIn/SignIn";
import SignUP from "../SignUp/SignUP";
import UpdateUser from "../../page component/updateuser/UpdateUser";
import UserAddData from "../../page component/useradd/UserAddData";
import Homecard from "../../page component/homesectioncard/Homecard";
import HomepostData from "../../page component/homepostdata/HomepostData";
import Cradviewdetailsmake from "../../page component/card and view details/Cradviewdetailsmake";
import Allartandcraft from "../../page component/allartandcraft/Allartandcraft";
import MyartsandCraftList from "../../page component/myartandcraft/MyartsandCraftList";
import PrivetRoute from "../../sharedcomponent/PrivetRoute";
import Allcategory from "../../page component/Allcategory/Allcategory";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/navbar",
        element: <Navbar></Navbar>,
      },
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:5020/adminsenddata'),
      },
      {
        path: "/homecard",
        element: <Homecard></Homecard>,
       
      },
      {
        path: "/homepost",
        element: <HomepostData></HomepostData>,
      },
      {
        path:'/cardview/:id',
        element:<Cradviewdetailsmake></Cradviewdetailsmake>,
        loader:({params})=>fetch(`http://localhost:5020/usersenddata/${params.id}`)
      },

      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
      {
        path: "/signup",
        element: <SignUP></SignUP>,
      },
      {
        path: "/update/:id",
        element: <UpdateUser></UpdateUser>,
        loader:({params})=>fetch(`http://localhost:5020/usersenddata/${params.id}`)
      },
      {
        path: "/useradddata",
        element: <UserAddData></UserAddData>,
      },
      {
        path:"/allart",
        element:<Allartandcraft></Allartandcraft>,
        loader: ()=>fetch("http://localhost:5020/usersenddata")
      },
      {
        path:"/myarts",
        element:<PrivetRoute>
          <MyartsandCraftList></MyartsandCraftList>
        </PrivetRoute>
      },
      {
        path:'/allcategory/:categori',
        element:<Allcategory></Allcategory>,
        loader:({params})=>fetch(`http://localhost:5020/adminsendcollection?category=${params.categori}`)
      }
    ],
  },
]);
export default router;
