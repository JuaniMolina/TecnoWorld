
"use client";

import { Carousel } from "flowbite-react";

export function Carrusel() {
    return (
        <div className="flex w-[90%] h-60 my-2">
            <Carousel className="w-full h-full">
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src="https://images.fravega.com/f300/afb99ce7e8386d7fe350f8896d255fc0.png.webp" alt="" />
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src="https://images.fravega.com/f300/73eac26c45deedb15fbd416fff639d28.jpg.webp" alt="" />
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src="https://images.fravega.com/f300/e1463c2f45bc6a19949d09b9d2abbf73.png.webp" alt="" />
                </div>
                <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
                    <img src="https://images.fravega.com/f300/40d1de62e868482c67f0ab766ebe979d.jpg.webp" alt="" />
                </div>
            </Carousel>
        </div>
    );
}
