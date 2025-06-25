function Hero() {
    return (
        <section class="min-h-screen flex flex-col items-center justify-center bg-gray-200 text-center px-4">
            <h1 class="text-5xl sm:text-6xl font-bold text-slate-800 mb-4 opacity-0 animate-fadeInUp">
            Hi, I'm Chantel
            </h1>
            <p class="text-lg sm:text-xl text-slate-600 max-w-xl opacity-0 animate-fadeInUp [animation-delay:0.2s]">
            A curious coder crafting clean, creative projects. Welcome to my portfolio!
            </p>
            <a href="#projects" class="mt-8 inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-6 rounded-full opacity-0 animate-fadeInUp [animation-delay:0.4s] transition-all duration-300">
            View My Work
            </a>
        </section> 
    )
}

export default Hero
