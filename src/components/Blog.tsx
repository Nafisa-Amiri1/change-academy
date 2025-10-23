'use client'

import { useState } from 'react';
import Image from 'next/image';
import image1 from '@/images/photos/image-1.jpg';
import image2 from '@/images/photos/image-2.jpg';
import image3 from '@/images/photos/image-3.jpg';
import image4 from '@/images/photos/image-4.jpg';
import image5 from '@/images/photos/image-5.jpg';

const images = [image1, image2, image3, image4, image5];

export default function BlogSlider() {
    const [startIndex, setStartIndex] = useState(0);

    const prev = () => {
        setStartIndex((prev) => Math.max(prev - 1, 0));
    };

    const next = () => {
        setStartIndex((prev) => Math.min(prev + 1, images.length - 3));
    };

    return (
        <div className="w-full max-w-5xl mx-auto mt-10 overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${(100 / 3) * startIndex}%)` }}>
                {images.map((img, index) => (
                    <div key={index} className="w-1/3 px-1 flex-shrink-0">
                        <Image
                            src={img}
                            alt={`Photo ${index}`}
                            className="object-cover rounded-lg"
                            width={500}
                            height={300}
                        />
                    </div>
                ))}
            </div>

            <div className="flex justify-end gap-2 mt-4">
                <button
                    onClick={prev}
                    className="px-4 py-2 rounded hover:opacity-90 transition text-white bg-[#68d2bc]"
                    disabled={startIndex === 0}
                >
                    ‹ Prev
                </button>
                <button
                    onClick={next}
                    className="px-4 py-2 rounded hover:opacity-90 text-white transition bg-[#68d2bc]"
                    disabled={startIndex === images.length - 3}
                >
                    Next ›
                </button>
            </div>
        </div>
    );
}
