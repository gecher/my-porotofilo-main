import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function About() {
  const getDate = () => {
    var dob = new Date("08/08/1998");
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
  };

  return (
    <div id="about" className="min-h-screen bg-[#111828] flex flex-col items-center text-gray-100 text-lg font-normal p-5">
      {/* Header */}
      <div className="text-4xl md:text-5xl font-bold mt-12 text-center text-yellow-500" data-aos="slide-down">
        About Me
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row gap-8 items-center w-full max-w-5xl mt-10 bg-[#1E293B] p-8 rounded-lg shadow-lg">
        
        {/* Left: Text Content */}
        <div className="flex flex-col gap-6 text-center md:text-left w-full md:w-1/2">
          <h3 className="text-2xl md:text-3xl font-medium text-yellow-400" data-aos="fade-left">
            I'm <span className="text-yellow-500">Getacher Ashebir,</span> a Web Enthusiast
          </h3>
          <p className="leading-7 text-gray-300 text-justify" data-aos="fade-left">
            I love playing music, reading comics, and playing games. I am currently working at Ethiopian Airlines as a Full Stack Developer. I am {getDate()} years old. I love exploring new technologies.
          </p>
          <p className="leading-7 text-gray-300 text-justify" data-aos="fade-right">
            I am currently looking for jobs. I have experience with .NET, React.js, Next.js, TypeScript, Java, and more. I'm also looking to collaborate on open-source projects.
          </p>
        </div>

        {/* Right: Animation & Download Button */}
        <div className="flex flex-col items-center w-full md:w-1/2" data-aos="slide-left">
          <div className="motion-safe:animate-zoomy w-72 sm:w-80 md:w-96">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
            />
          </div>

          {/* Download Button */}
          <button className="py-3 mt-5 text-white px-9 bg-blue-600 border-2 border-blue-500 rounded-3xl hover:bg-blue-700 hover:scale-105 transition duration-300">
            <a href={require("../../assets/files/Getachercv.pdf")} download={"Getacher Resume.pdf"} className="flex items-center gap-2">
              Download CV <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
