import React from "react"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
import { useSelector } from "react-redux"
import MovieCard from "../MovieCard"
// import required modules

export default function MoviesToWatch() {
	const Movies = useSelector((state) => state.movies)
	return (
		<>
			<h1>Your list</h1>
			<Swiper slidesPerView={3} className="mySwiper">
				{Movies.map(
					(movie, i) =>
						!movie.watched && (
							<SwiperSlide key={i}>
								<MovieCard {...movie} type="mylist" />
							</SwiperSlide>
						),
				)}
			</Swiper>
		</>
	)
}
