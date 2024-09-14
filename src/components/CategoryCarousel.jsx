import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import { Button } from './ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';


const category = [
    {
        id: 1, 
        title: "Frontend Developer",
    },
    {
        id: 2, 
        title: "Backend Developer",
    },
    {
        id: 3, 
        title: "Data Science",
    },
    {
        id: 4, 
        title: "Graphic Designer",
    },
    {
        id: 5, 
        title: "FullStack Developer",
    }
]

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div>
            <Carousel className="w-full max-w-xl mx-auto my-20">
                <CarouselContent>
                    {
                        category.map((cat) => (
                            <CarouselItem className="md:basis-1/2 lg-basis-1/3" key={cat.id}>
                                <Button onClick={() => searchJobHandler(cat)} variant="outline" className="rounded-full bg-black text-[#fd2424]">{cat.title}</Button>
                            </CarouselItem>
                        ))
                    }
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default CategoryCarousel