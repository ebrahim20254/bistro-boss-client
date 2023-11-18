import SectionTitle from "../../components/SectionTitle/SectionTitle";
import featuredImg  from '../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <section className="featured-item pt-8 text-white bg-fixed">
            <SectionTitle 
            heading={"---Check it out---"}
            subHeading={"FROM OUR MENU"}
            >
            </SectionTitle>
            <div className=" md:flex items-center justify-center pb-20 pt-12 px-36 bg-slate-500 opacity-60">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10  text-white">
                    <p>November 11 2023</p>
                    <p>Pizza is a popular dish consisting of a flat, round dough topped with tomato sauce, cheese, and various toppings such as pepperoni, mushrooms, and vegetables. It is typically baked in an oven and enjoyed worldwide as a versatile and delicious meal, often associated with Italian cuisine.</p>
                    <button className="btn btn-primary">Order Now</button>
                </div>
            </div>
            
        </section>
    );
};

export default Featured;