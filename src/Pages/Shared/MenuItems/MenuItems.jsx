

const MenuItems = ({item}) => {
    const {image, name,recipe, price } = item;
    return (
        <div className=" flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" />
            <div>
                <h3 className=" uppercase">{name}</h3>
                <p className=" text-yellow-500">{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItems;