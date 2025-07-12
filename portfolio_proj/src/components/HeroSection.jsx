/*{" "} <-- this forcibly adds white space to the texts*/

export const HeroSection = () => {
 return (

    <section 
        id="hero" 
        className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'am</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">
                        {" "}Lio</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                        {" "}Apiado</span>
                </h1>

                <p className="animate-fade-in opacity-0 duration-100">this is my personal project which i will be using in future events</p>

            </div>
        </div>
    </section>
 );
};