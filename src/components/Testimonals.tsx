import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import bgImage from "../assets/bgimg.png"
import { useState } from "react";

const Testimonials = () => {
    const reviews = [
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUdPpaElrlGHhuJLw8HX-J4mMMq_NrL6VTvg&s',
            name: 'Liam mendes',
            account: '@liammendes',
            ratings: '',
            review: 'This restaurant has such a cozy and charming atmosphere! From the moment you walk in, you feel right at home. The warm lighting, rustic decor, and comfortable seating make it an ideal place for a relaxed meal. Considering the fresh ingredients and flavorful dishes, you really get more than what you pay for. Highly recommended for those who want a quality meal without breaking the bank.'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0yYAiPdNDUOLGGSox0KXPhPza5rId77VZqcUHa3B2-lbmnGPB-bKom1D8BUTn_cVgHjQ&usqp=CAU',
            name: 'Noah Wood',
            account: '@noahwood',
            ratings: '',
            review: 'A lovely experience from booking on the app so easy and then a very fast response. When we arrived our request for a private booth was accommodated. Came on a Sunday afternoon for Mother’s Day and was seated quickly. We were a pretty big party of 12 but the staff managed us well'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-OtCp1YSpRh2DOBRkuls3Mmxn-6R7QJ9zvazaMpX_4ana52wrD89GK8jMKEbstHuHLQ&usqp=CAU',
            name: 'Oliver Queen',
            account: '@oliverqueen',
            ratings: '',
            review: 'It was super delicious! Mine was a takeout order so I was pretty happy with the quick service. We had a lovely meal here last night, with personal recommendations right for us. Got to try new flavours, and even walked away with a jar of our own freebie as a gift from the head chef'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC4qAtqo1Wl7S5UaU63FPkg15Y5sDxeMGLgw&s',
            name: 'Barry Allen',
            account: '@barryallen',
            ratings: '',
            review: 'Good food and acceptable price. With good seating arrangement and a place to visit with family,business meeting and friends. Good food with North Indian, Chinese and intercontinental Service is superb they take care.'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const REVIEWS_PER_PAGE = 3;

    const handleNext = () => {
        if (currentIndex + REVIEWS_PER_PAGE < reviews.length) {
            setCurrentIndex(prev => prev + REVIEWS_PER_PAGE);
        }
    };

    const handlePrev = () => {
        if (currentIndex - REVIEWS_PER_PAGE >= 0) {
            setCurrentIndex(prev => prev - REVIEWS_PER_PAGE);
        }
    };

    const visibleReviews = reviews.slice(currentIndex, currentIndex + REVIEWS_PER_PAGE);

    return (
        <div className="relative px-40 py-20">
            <div className="font-medium font-playfair">
                <h3 className="font-semibold text-3xl text-red-800">OUR TESTIMONIALS</h3>
                <h4 className="font-semibold text-5xl">What Our Visitors Say</h4>
            </div>

            <div className="absolute -left-40 top-[50%] -translate-y-32 flex flex-col gap-5">
                <div className="flex gap-5">
                    {visibleReviews.map((review, index: number) => {
                        return (
                            <div key={index} className="bg-gray-900 size-[20rem] flex flex-col gap-3 p-5 rounded-xl">
                                {/* First section */}
                                <div className="flex items-center gap-2">
                                    {review.img && <img src={review.img} alt="user image" className="size-12 rounded-full" />}

                                    <div className="flex flex-col gap-1">
                                        <p className="text-2xl">{review.name}</p>
                                        <p className="text-sm text-red-600">
                                            {review.account ? review.account : 'VISITOR'}
                                        </p>
                                    </div>
                                </div>

                                {/* Second Section */}
                                <div className="text-[#f9d71c]">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>

                                {/* Third Section */}
                                <p className="text-sm text-gray-500">{review.review}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Buttons */}
                <div className="text-sm flex gap-5 mx-auto">
                    {/* Left */}
                    <button onClick={handlePrev} disabled={currentIndex === 0} className="flex gap-2 items-center">
                        <FaArrowLeftLong className="size-5 text-red-600" />
                        <span>PREVIOUS</span>
                    </button>

                    {/* Right */}
                    <button onClick={handleNext} disabled={currentIndex + REVIEWS_PER_PAGE >= reviews.length} className="flex gap-2 items-center">
                        <span>NEXT</span>
                        <FaArrowRightLong className="size-5 text-red-600" />
                    </button>
                </div>
            </div>      
        </div>
    )
}

const Index = () => {
  return (
    <section className="text-white bg-black flex">
        <img src={bgImage} alt="bg img" className="size-[40rem]" />
        
        <Testimonials />
    </section>
  )
}

export default Index
