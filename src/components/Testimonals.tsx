import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar, FaRegStar } from "react-icons/fa";
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
            review: `A lovely experience from booking on the app so easy and then a very fast response. When we arrived our request for a private booth was accommodated. Came on a Sunday afternoon for Mother's Day and was seated quickly. We were a pretty big party of 12 but the staff managed us well`
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
    
    // Responsive reviews per page
    const getReviewsPerPage = () => {
        if (typeof window !== 'undefined') {
            if (window.innerWidth < 640) return 1; // Mobile
            if (window.innerWidth < 1024) return 2; // Tablet
            return 2; // Desktop
        }
        return 2;
    };

    const [reviewsPerPage, setReviewsPerPage] = useState(getReviewsPerPage());

    // Update reviews per page on resize
    useState(() => {
        const handleResize = () => {
            setReviewsPerPage(getReviewsPerPage());
            setCurrentIndex(0); // Reset to first page on resize
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    });

    const handleNext = () => {
        if (currentIndex + reviewsPerPage < reviews.length) {
            setCurrentIndex(prev => prev + reviewsPerPage);
        }
    };

    const handlePrev = () => {
        if (currentIndex - reviewsPerPage >= 0) {
            setCurrentIndex(prev => prev - reviewsPerPage);
        }
    };

    const visibleReviews = reviews.slice(currentIndex, currentIndex + reviewsPerPage);

    return (
        <div className="relative px-4 sm:px-8 lg:px-20 xl:px-40 py-8 sm:py-12 lg:py-20 flex-1">
            <div className="font-medium mb-8 sm:mb-12 lg:mb-16">
                <h3 className="font-semibold text-xl sm:text-2xl lg:text-3xl text-red-800 mb-2">OUR TESTIMONIALS</h3>
                <h4 className="font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">What Our Visitors Say</h4>
            </div>

            <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-6 sm:mb-8">
                    {visibleReviews.map((review, index) => {
                        return (
                            <div key={index} className="bg-gray-900 w-full min-h-[16rem] sm:min-h-[18rem] lg:min-h-[20rem] flex flex-col gap-3 p-4 sm:p-5 rounded-xl">
                                {/* First section */}
                                <div className="flex items-center gap-2">
                                    {review.img && <img src={review.img} alt="user image" className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover" />}

                                    <div className="flex flex-col gap-1">
                                        <p className="text-sm sm:text-md lg:text-md font-medium">{review.name}</p>
                                        <p className="text-xs sm:text-sm text-red-600">
                                            {review.account ? review.account : 'VISITOR'}
                                        </p>
                                    </div>
                                </div>

                                {/* Second Section - Star Rating */}
                                <div className="text-[#f9d71c] flex gap-1">
                                    <FaStar className="text-sm sm:text-base" />
                                    <FaStar className="text-sm sm:text-base" />
                                    <FaStar className="text-sm sm:text-base" />
                                    <FaStar className="text-sm sm:text-base" />
                                    <FaRegStar className="text-sm sm:text-base" />
                                </div>

                                {/* Third Section */}
                                <p className="text-xs sm:text-sm text-gray-500 flex-1 leading-relaxed line-clamp-6">{review.review}</p>
                            </div>
                        )
                    })}
                </div>

                {/* Buttons */}
                <div className="text-xs sm:text-sm flex gap-4 sm:gap-5 justify-center">
                    {/* Previous Button */}
                    <button 
                        onClick={handlePrev} 
                        disabled={currentIndex === 0} 
                        className={`flex gap-2 items-center transition-colors duration-200 ${
                            currentIndex === 0 
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'hover:text-red-400'
                        }`}
                    >
                        <FaArrowLeftLong className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                        <span>PREVIOUS</span>
                    </button>

                    {/* Next Button */}
                    <button 
                        onClick={handleNext} 
                        disabled={currentIndex + reviewsPerPage >= reviews.length} 
                        className={`flex gap-2 items-center transition-colors duration-200 ${
                            currentIndex + reviewsPerPage >= reviews.length 
                                ? 'opacity-50 cursor-not-allowed' 
                                : 'hover:text-red-400'
                        }`}
                    >
                        <span>NEXT</span>
                        <FaArrowRightLong className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                    </button>
                </div>
            </div>      
        </div>
    )
}

const Index = () => {
    // Placeholder for background image - replace with your actual image
    const bgImageUrl = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

    return (
        <section className="text-white bg-black flex flex-col lg:flex-row min-h-screen">
            {/* Background Image */}
            <div className="w-full lg:w-auto lg:flex-shrink-0">
                <img 
                    src={bgImageUrl} 
                    alt="restaurant background" 
                    className="w-full h-64 sm:h-80 lg:h-full lg:w-[30rem] xl:w-[40rem] object-cover"
                />
            </div>
            
            {/* Testimonials Section */}
            <Testimonials />
        </section>
    )
}

export default Index