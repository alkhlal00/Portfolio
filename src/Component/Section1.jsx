import { Link } from "react-scroll";
import { handleDownload } from "./script";

export const Section1 = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-screen-xl mx-auto min-h-screen px-6 py-12 gap-10" id="home">
      
      {/* Text Content */}
      <article className="flex-1 text-center md:text-left space-y-6">
        <span className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-full">
          Web Developer & UI/UX Enthusiast
        </span>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Crafting Beautiful <br /> Digital Experiences
        </h1>

        <p className="text-gray-500 text-base md:text-lg leading-relaxed">
          Hi, I'm Abderrazaq Moustaoui — passionate about building responsive, high-performance websites that blend creativity with technology.
        </p>

        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
          <button  onClick={handleDownload}
           className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full font-semibold transition">
              Download Resume
              </button>
          <Link to={"contact"} spy={true}
          smooth={true}
          duration={500}
          offset={-70} className="cursor-pointer px-6 py-3 border-2 border-purple-600 hover:bg-purple-600 hover:text-white text-purple-600 rounded-full font-semibold transition">
            Contact Me
          </Link>
        </div>
      </article>

      {/* Image */}
      <div className="flex-1 flex justify-center mt-9 lg:mt-0 md:mt-0">
        <img
          src="profil.jpg"
          alt="Hero Image"
          className="rounded-2xl w-full lg:h-[520px] max-w-sm md:max-w-md object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}
/*        <Link
          key={index}
          to={link.to}
          spy={true}
          smooth={true}
          duration={500}
          offset={-70}
          className="cursor-pointer text-slate-700 font-semibold hover:text-purple-600 transition-all duration-300"
          activeClass="text-purple-600"
        >
          {link.name}
        </Link>*/