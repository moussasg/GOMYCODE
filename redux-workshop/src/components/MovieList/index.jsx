import React from "react"

import { useSelector } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import MovieCard from "../MovieCard"

export default function MovieList({}) {
	const Movies = useSelector((state) => state.movies)
	return (
		<>
			<h1>Movies</h1>
			<Swiper slidesPerView={3} className="mySwiper">
				{Movies.map(
					(movie) =>
						movie.watched && (
							<SwiperSlide>
								<MovieCard {...movie} />
							</SwiperSlide>
						),
				)}
			</Swiper>
		</>
	)
}
