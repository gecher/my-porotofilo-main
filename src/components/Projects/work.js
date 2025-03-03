import Tilt from "react-parallax-tilt";

export default function Work({ title, desc, tags, link, code, img }) {
  return (
    <Tilt
      className="rounded-2xl shadow-lg overflow-hidden bg-gradient-to-r from-green-700 to-pink-800 p-[1px] hover:scale-[1.02] transition-all duration-300"
    >
      <div className="bg-[#0b212d] w-full h-full rounded-2xl p-5 flex flex-col">
        {/* Image Section */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-48 object-cover border border-secondary"
          />
          <div className="absolute top-3 right-3 flex gap-2">
            <button
              onClick={() => window.open(link, "_blank")}
              className="bg-slate-800 w-10 h-10 rounded-full flex items-center justify-center border border-secondary hover:bg-slate-700 transition"
            >
              <img
                src={require("../../assets/images/gotosite.webp")}
                alt="Visit Site"
                className="w-3/4 h-3/4"
              />
            </button>
            <button
              onClick={() => window.open(code, "_blank")}
              className="bg-slate-800 w-10 h-10 rounded-full flex items-center justify-center border border-secondary hover:bg-slate-700 transition"
            >
              <img
                src={require("../../assets/images/github.webp")}
                alt="GitHub"
                className="w-3/4 h-3/4"
              />
            </button>
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-5">
          <h3 className="text-white font-bold text-xl">{title}</h3>
          <p className="mt-2 text-gray-400 text-sm">{desc}</p>
        </div>

        {/* Tags Section */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.name}
              className={`px-2 py-1 text-xs font-semibold text-${tag.color} bg-slate-800 rounded-md`}
            >
              {tag.name}
            </span>
          ))}
        </div>
      </div>
    </Tilt>
  );
}
