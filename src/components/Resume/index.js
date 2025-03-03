import { Download, Briefcase, Code, GraduationCap } from "lucide-react";

export default function Resume() {
  return (
    <div id="resume" className="min-h-screen px-6 py-12 bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="text-5xl font-bold">Resume</h2>
        <p className="mt-3 text-gray-400 text-lg">My education, skills, and work experience</p>
      </div>

      {/* Resume Sections */}
      <div className="grid lg:grid-cols-2 gap-12 mt-12">
        {/* Left: Work Experience & Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Briefcase className="mr-2 text-blue-500" /> Work Experience
          </h3>
          <div className="space-y-6">
            {/* Experience Card */}
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold">Software Developer</h4>
              <p className="text-sm text-gray-400">Tech Company - Jan 2021 - Present</p>
              <p className="mt-3 text-gray-300">
                Developing modern web applications using React, .NET Core, and SQL Server.
              </p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl shadow-lg">
              <h4 className="text-xl font-bold">Frontend Developer</h4>
              <p className="text-sm text-gray-400">Startup X - 2019 - 2021</p>
              <p className="mt-3 text-gray-300">
                Created interactive UI components using React and Tailwind CSS.
              </p>
            </div>
          </div>

          {/* Skills */}
          <h3 className="text-2xl font-semibold mt-12 mb-6 flex items-center">
            <Code className="mr-2 text-green-500" /> Skills
          </h3>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <li className="bg-gray-800 px-4 py-2 rounded-lg text-center">C# & .NET</li>
            <li className="bg-gray-800 px-4 py-2 rounded-lg text-center">React & JavaScript</li>
            <li className="bg-gray-800 px-4 py-2 rounded-lg text-center">SQL & Databases</li>
            <li className="bg-gray-800 px-4 py-2 rounded-lg text-center">REST APIs</li>
            <li className="bg-gray-800 px-4 py-2 rounded-lg text-center">Tailwind CSS</li>
            <li className="bg-gray-800 px-4 py-2 rounded-lg text-center">Entity Framework</li>
          </ul>
        </div>

        {/* Right: Certifications Timeline */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <GraduationCap className="mr-2 text-yellow-500" /> Certifications
          </h3>
          <div className="relative border-l border-gray-700 ml-6">
            {/* Certification Item */}
            <div className="mb-8 ml-6">
              <span className="absolute -left-3 top-1 w-6 h-6 flex items-center justify-center bg-blue-600 rounded-full">
                🎓
              </span>
              <h4 className="text-lg font-semibold">C# Certification</h4>
              <p className="text-sm text-gray-400">Completed on Aug 9, 2022</p>
              <a
                href="https://www.sololearn.com/certificates/CT-8U8K4A9B"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-2 px-4 py-2 text-sm font-medium bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                Download Certificate
              </a>
            </div>

            <div className="mb-8 ml-6">
              <span className="absolute -left-3 top-1 w-6 h-6 flex items-center justify-center bg-blue-600 rounded-full">
                🎓
              </span>
              <h4 className="text-lg font-semibold">Java Certification</h4>
              <p className="text-sm text-gray-400">Completed on June 2, 2022</p>
              <a
                href="https://www.sololearn.com/certificates/CT-KPHEQ1VC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex mt-2 px-4 py-2 text-sm font-medium bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                Download Certificate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Download Resume Button */}
      <div className="text-center mt-12">
        <a
          href="/resume.pdf"
          download
          className="inline-flex items-center px-6 py-3 text-lg font-medium bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          <Download className="mr-2" />
          Download Resume
        </a>
      </div>
    </div>
  );
}
