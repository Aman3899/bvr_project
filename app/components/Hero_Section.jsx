"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero_Section = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, []);

    return (
        <div className="px-4 sm:px-6 lg:px-16 py-8">
            <div className={`
                relative 
                transform transition-all duration-1000 ease-out
                ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
            `}>
                <div className="relative overflow-hidden rounded-3xl border-2 border-black shadow-2xl">
                    <Image
                        src="/marketplace-hero.jpeg"
                        alt="Marketplace Hero"
                        width={1920}
                        height={1080}
                        className={`
                            w-full h-[500px] max-sm:h-[300px] 
                            object-cover 
                            transform transition-transform duration-700
                            hover:scale-105
                        `}
                        priority
                        onLoadingComplete={() => setIsLoaded(true)}
                    />
                    
                    <div className="
                        absolute inset-0 
                        flex flex-col justify-center items-center 
                        bg-gradient-to-r from-black/50 to-black/30
                        text-white 
                        px-6 
                        backdrop-blur-sm
                    ">
                        
                        <p className={`
                            text-xl max-sm:text-base 
                            mb-8 
                            text-center
                            transform transition-all duration-700 delay-500
                            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                            text-gray-100
                        `}>
                            Explore the vibrant markets of Malawi
                        </p>
                        
                        <div className={`
                            flex gap-6 
                            transform transition-all duration-700 delay-700
                            ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                        `}>
                            <Link
                                href="/post_request"
                                className="
                                    bg-white text-blue-600 
                                    px-8 py-3 
                                    rounded-lg
                                    font-semibold 
                                    transition-all duration-300
                                    hover:bg-gray-100 
                                    hover:shadow-lg
                                    hover:scale-105
                                    active:scale-95
                                    max-sm:px-3
                                    max-sm:py-2
                                    max-sm:text-sm
                                "
                            >
                                Post Request
                            </Link>
                            
                            <Link
                                href="/market_management"
                                className="
                                    bg-blue-600 text-white 
                                    px-8 py-3 
                                    rounded-lg
                                    font-semibold 
                                    transition-all duration-300
                                    hover:bg-blue-700 
                                    hover:shadow-lg
                                    hover:scale-105
                                    active:scale-95
                                    max-sm:px-4
                                    max-sm:py-2
                                    max-sm:text-sm
                                "
                            >
                                List Market
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero_Section;