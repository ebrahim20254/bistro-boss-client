import FoodOrderCard from "../../../components/FoodOrderCard/FoodOrderCard";


const OrderTab = ({items}) => {
    return (
        <div>
             <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {
                            items.map(item =>
                                <FoodOrderCard
                                    key={item._id}
                                    item={item}
                                ></FoodOrderCard>)
                        }
                    </div>
        </div>
    );
};

export default OrderTab;