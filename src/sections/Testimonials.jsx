import testimonials from "../data/testimonials";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function Testimonials() {
  return (
    <section className="py-32 px-6 bg-[#080808]">

      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold uppercase">
          Customer <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">Reviews</span>
        </h1>

        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Trusted by car enthusiasts and premium automotive customers.
        </p>
      </div>

      {/* Slider */}
      <div className="max-w-6xl mx-auto">

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >

          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-full backdrop-blur-lg hover:border-red-500/40 transition duration-300">

                {/* Stars */}
                <div className="flex gap-1 text-red-500 text-xl mb-6">
                  ★★★★★
                </div>

                {/* Review */}
                <p className="text-gray-300 leading-relaxed mb-8">
                  "{item.review}"
                </p>

                {/* User */}
                <h3 className="text-xl font-bold">
                  {item.name}
                </h3>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  );
}

export default Testimonials;