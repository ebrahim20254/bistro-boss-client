import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";


const MenuCategory = ({items, title, img}) => {
    return (
        <div className=" mt-8">
            { title && <Cover img={img} title={title}></Cover>}
            <div className=" grid md:grid-cols-2 gap-10 mt-16">
                {
                    items.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            <Link to={`/order/${title}`}><button className="btn btn-primary mt-12 text-center">Order Now</button></Link>
        </div>
    );
};

export default MenuCategory;