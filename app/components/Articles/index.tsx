"use client"
import Slider from "react-slick";
import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

// CAROUSEL DATA

interface DataType {
    time: string;
    heading: string;
        imgSrc: string;
    
}

{/*const postData: DataType[] = [
    {
        time: "Join",
        heading: 'We Launch Delia',
        imgSrc: '/images/articles/mcl3.jpg',
    },
    {
        time: "Join",
        heading: 'We Launch Delia',
        imgSrc: '/images/articles/pic4.jpeg',
    },
    {
        time: "Join",
        heading: 'We Launch Delia',
        imgSrc: '/images/articles/pic6.jpeg',
    },
    {
        time: "Join",
        heading: 'We Launch Delia',
        imgSrc: '/images/articles/pic7.jpg',
    },
    {
        time: "Join",
        heading: 'We Launch Delia',
        imgSrc: '/images/articles/pic02.jpg',
    },
    {
        time: "Join",
        heading: 'We Launch Delia',
        imgSrc: '/images/articles/pic8.jpg',
    },
]*/}

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 2,
            arrows: false,
            autoplay: false,
            speed: 500,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };


        return (
            <div className="bg-lightgrey py-20" id="blog-section">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 '>

                    <div className="text-center">
                        <h3 className="text-blue text-lg font-normal tracking-widest">Gallery</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold">Graders</h3>
                    </div>
                    <div className="container grid grid-cols-3 gap-2 mx-auto">
                        <div className="w-full rounded">
                            <img src="./images/articles/class1.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./images/articles/class2.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./images/articles/class3.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./images/articles/class4.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./images/articles/class5.jpg"
                                alt="image" />
                        </div>
                      
                    </div>
                    <div className="text-center">
                        <h3 className="text-blue text-lg font-normal tracking-widest">Gallery</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold">Toddlers</h3>
                    </div>
                    <div className="container grid grid-cols-3 gap-2 mx-auto">
                        <div className="w-full rounded">
                            <img src="./images/articles/toddler1.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./images/articles/toddler2.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./images/articles/toddler3.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./images/articles/toddler4.jpg"
                                alt="image" />
                        </div>
                      
                    </div>
                    <div className="text-center">
                        <h3 className="text-blue text-lg font-normal tracking-widest">Gallery</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold">Club</h3>
                    </div>
                    <div className="container grid grid-cols-3 gap-2 mx-auto">
                        <div className="w-full rounded">
                            <img src="./images/articles/club1.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./images/articles/club4.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./images/articles/club7.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./images/articles/club9.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./images/articles/club10.jpg"
                                alt="image" />
                        </div>
                        
                      
                    </div>
                    <div className="text-center">
                        <h3 className="text-blue text-lg font-normal tracking-widest">Gallery</h3>
                        <h3 className="text-4xl sm:text-6xl font-bold">Events</h3>
                    </div>
                    <div className="container grid grid-cols-3 gap-2 mx-auto">
                        <div className="w-full rounded">
                            <img src="./images/articles/event1.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./images/articles/event3.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./images/articles/event6.jpg"
                                alt="image" />
                        </div>
                        <div className="w-full rounded">
                            <img src="./images/articles/event11.jpg"
                                alt="image" />
                        </div>
                                              
                      
                    </div>


                    {/*<Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i} >

                                <div className='bg-white m-3 px-3 pt-3 pb-12 my-10 shadow-lg rounded-3xl relative'>
                                    <Image src={items.imgSrc} alt="gaby" width={389} height={262} className="inline-block m-auto" />

                                    <Link href="/">
                                        <h3 className="absolute bg-blue text-white hover:bg-black hover:shadow-xl py-3 px-6 rounded-full article-img">{items.time} Us</h3>
                                    </Link>
                                    

                                </div>

                            </div>
                        ))}
                        </Slider>*/}
                </div>
            </div>

        );
    }
}
