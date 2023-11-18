
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuItems from "../Shared/MenuItems/MenuItems";
import UseMenu from "../../hooks/UseMenu";


const PopularMenu = () => {
    const [menu]= UseMenu();
    const popular = menu.filter(item => item.category === "popular")
    // const [menu , setMenu] = useState([]);

    // useEffect(()=>{
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         const popularItem =  data.filter(item => item.category === "popular")
    //         setMenu(popularItem);
    //     })
    // },[])
    return (
        <section className=" mb-12">
            <SectionTitle
            heading={'---Check it out---'}
            subHeading={'FROM OUR MENU'}
            >              
            </SectionTitle>

            <div className=" grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
            
        </section>
    );
};

export default PopularMenu;