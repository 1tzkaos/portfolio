import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  FileText,
  Maximize2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PatentPreview from "../assets/Patent-Preview.png";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Just for debugging - remove this later
  useEffect(() => {
    console.log("Portfolio component mounted");
  }, []);

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const skills = [
    "Full Stack Development (MERN)",
    "Java",
    "Python",
    "JavaScript",
    "Software Architecture",
    "API Integration",
    "Technical Problem Solving",
    "Project Management",
  ];

  const projects = [
    {
      title: "Blockchain Patent",
      description:
        "U.S. Patent #11244308 - Developed a method for a blockchain-based system managing tangible product records, demonstrating technical innovation and intellectual property development capabilities.",
      tech: ["Blockchain", "System Architecture", "Innovation"],
      image: PatentPreview,
    },
    {
      title: "Software Solutions",
      description:
        "Developed and launched profitable software solutions generating $3,000 monthly revenue through innovative API integrations using MERN stack.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "/api/placeholder/400/300",
    },
  ];

  const education = [
    {
      school: "Michigan Technology University",
      degree: "BS Computer Science, BS Finance",
      period: "August 2023 - Present",
      details:
        "Pursuing concurrent degrees with a 3.5 GPA. Coursework includes Quantitative Problem Solving, Multivariable Calculus, Risk Management, Data & Discrete Structures.",
    },
    {
      school: "St. Croix Preparatory Academy",
      degree: "High School Diploma",
      period: "August 2019 - June 2023",
      details:
        "Graduated with 3.92 GPA, completed 10 AP courses. Orchestra Concertmaster and Varsity Archery Team Captain.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-10 transition-all duration-300 ${
          scrolled ? "bg-gray-900/95 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Nicholas Stankiewicz
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="about"
        className="pt-32 pb-16 px-4 bg-gradient-to-b from-gray-900 to-gray-800"
      >
        <div className="max-w-7xl mx-auto text-center">
          <img
            src="/api/placeholder/150/150"
            alt="Profile"
            className="w-32 h-32 mx-auto rounded-full mb-8 border-2 border-blue-400 p-1"
          />
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Nicholas Stankiewicz
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Finance & Computer Science Student | Patent Holder | Full Stack
            Developer
          </p>
          <p className="max-w-2xl mx-auto text-gray-400">
            Sophomore at Michigan Technology University pursuing dual degrees in
            Finance and Computer Science. Independent software developer with
            experience in creating profitable solutions and holding a U.S.
            patent for blockchain innovation.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill) => (
              <div
                key={skill}
                className="p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg text-center hover:bg-gray-700 transition-all duration-300 border border-gray-700"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-900/50 rounded-full text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.title === "Blockchain Patent" && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <button className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300">
                          <FileText size={18} className="mr-2" />
                          View Patent Document
                        </button>
                      </DialogTrigger>
                      <DialogContent className="h-[95vh]">
                        <DialogHeader>
                          <DialogTitle>U.S. Patent #11244308</DialogTitle>
                        </DialogHeader>
                        <div className="h-[calc(95vh-120px)]">
                          <embed
                            src="/US11244308.pdf"
                            type="application/pdf"
                            className="w-full h-full rounded-lg"
                          />
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-colors duration-300"
              >
                <h3 className="text-xl font-semibold text-blue-400">
                  {edu.school}
                </h3>
                <p className="text-gray-300 font-medium">{edu.degree}</p>
                <p className="text-gray-400">{edu.period}</p>
                <p className="text-gray-300 mt-2">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-300 mb-8">
            104 Wildwood Beach Rd, Mahtomedi, MN
            <br />
            (651) 706-7556 • Nbstanki@mtu.edu
          </p>
          <div className="flex justify-center space-x-8">
            {[
              { icon: Github, href: "https://github.com" },
              { icon: Linkedin, href: "https://linkedin.com" },
              { icon: Mail, href: "mailto:Nbstanki@mtu.edu" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Nicholas Stankiewicz. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
