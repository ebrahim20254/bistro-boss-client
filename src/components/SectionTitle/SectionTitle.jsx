

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" mx-auto text-center md:w-3/12 my-8">
            <p className=" text-yellow-600 mb-4">--- {heading} ---</p>
            <h2 className=" uppercase border-y-4 py-4">{subHeading}</h2>
        </div>
    );
};

export default SectionTitle;