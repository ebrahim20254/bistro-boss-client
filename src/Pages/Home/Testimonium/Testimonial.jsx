import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5003/review')
            .then(res => res.json())
            .then(data => {

                setReviews(data);
            })
    }, [])
    return (
        <div className=' my-12'>
            <SectionTitle
                heading={'---What Our Clients Say---'}
                subHeading={'TESTIMONIALS'}
            >
            </SectionTitle>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review =>
                        <SwiperSlide
                            key={review._id}
                            review={review}
                        >
                            <div className=' flex flex-col items-center '>
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={3}
                                    readOnly
                                />
                                <h2 className=' py-8'>{review.details}</h2>
                                <p className=' text-2xl text-orange-600'>{review.name}</p>
                            </div>
                        </SwiperSlide>)
                }

            </Swiper>

        </div>
    );
};

export default Testimonial;