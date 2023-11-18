import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/pizza-bg.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg';
import soupImg from '../../../assets/menu//soup-bg.jpg';
import saladImg from '../../../assets/menu/salad-bg.jpg';
import UseMenu from '../../../hooks/UseMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = UseMenu();
    const desserts = menu.filter(item => item.category === "dessert")
    const soup = menu.filter(item => item.category === "soup")
    const salad = menu.filter(item => item.category === "salad")
    const pizza = menu.filter(item => item.category === "pizza")
    const offered = menu.filter(item => item.category === "offered")
    return (
        <div>
            <Helmet>
                <title>Bistro Boss| Menu</title>
            </Helmet>
            {/* Main cover */}
            <Cover img={menuImg} title="Our Menu"></Cover>
            <SectionTitle subHeading={"TODAY'S OFFER"} heading={"---Don't miss---"}></SectionTitle>
            {/* offered cover */}
            <MenuCategory items={offered}></MenuCategory>
            {/* dessert */}
            <MenuCategory 
            items={desserts}
            title="dessert"
            img={dessertImg}
            >
            </MenuCategory>
            <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
            <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
            <MenuCategory items={salad} title={"salad"} img={saladImg}></MenuCategory>

        </div>
    );
};

export default Menu;