import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";


const DashBoard = () => {
  const [cart] = useCart();
    return (
        <div className=" flex">
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className=" menu space-y-4 p-4">

                    <li >
                        <NavLink
                      to="/dashboard/userHome">
                       <FaHome></FaHome>
                      UserHome</NavLink>
                     </li>
                    <li >
                        <NavLink
                      to="/dashboard/reservation">                     
                       <FaCalendar></FaCalendar>
                       reservation </NavLink>
                     </li>
                    <li >
                        <NavLink
                      to="/dashboard/cart">                       
                       <FaShoppingCart></FaShoppingCart>
                       My cart ({cart.length})</NavLink>
                     </li>
                    <li >
                        <NavLink
                      to="/dashboard/review">                     
                       <FaAd></FaAd>
                       review </NavLink>
                     </li>
                    <li >
                        <NavLink
                      to="/dashboard/booking">                    
                       <FaList></FaList>
                       My booking  </NavLink>
                     </li>
                     <div className="divider"></div>

                     <li>
                        <NavLink
                       to="/">
                       <FaHome></FaHome>
                       Home</NavLink>
                     </li>
                     <li>
                        <NavLink
                       to="/order/salad">
                       <FaSearch></FaSearch>
                       menu</NavLink>
                     </li>
                </ul>

            </div>
            <div className=" flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;