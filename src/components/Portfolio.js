import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Menu,
  X,
  FileText,
  Code,
  LineChart,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import PatentPreview from "../assets/Patent-Preview.png";
import WorkoutPreview from "../assets/workout-app-screenshot.png";

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

  const navigation = [
    { name: "About", href: "#about" },
    { name: "Computer Science", href: "#cs" },
    { name: "Finance", href: "#finance" },
    { name: "Patent", href: "#patent" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  const csSkills = [
    "Full Stack Development (MERN)",
    "Java",
    "Python",
    "JavaScript",
    "Software Architecture",
    "API Integration",
    "Technical Problem Solving",
  ];

  const financeSkills = [
    "Quantitative Analysis",
    "Risk Management",
    "Financial Modeling",
    "Market Analysis",
    "Business Strategy",
    "Accounting Principles",
  ];

  const csProjects = [
    {
      title: "Fitness & Nutrition Tracker",
      image: WorkoutPreview,
      description:
        "Developed a comprehensive workout tracking application using React Native. Features include customizable workout plans, progress tracking, and exercise logging with real-time updates.",
      tech: [
        "React Native",
        "JavaScript",
        "Mobile Development",
        "UI/UX Design",
      ],
      link: "https://github.com/1tzkaos/Workout-App",
    },
    {
      title: "Software Solutions",
      description:
        "Developed and launched profitable software solutions generating $3,000 monthly revenue through innovative API integrations using MERN stack.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
    },
    {
      title: "Technical Innovation",
      description:
        "Developed multiple full-stack applications demonstrating proficiency in modern web development technologies and best practices.",
      tech: ["Full Stack", "Web Development", "API Design"],
    },
  ];

  const financeProjects = [
    {
      title: "Investment Analysis",
      description:
        "Applied quantitative problem-solving skills to analyze market trends and develop investment strategies through coursework in Risk Management and Financial Analysis.",
      tech: ["Risk Analysis", "Market Research", "Financial Modeling"],
    },
    {
      title: "Business Development",
      description:
        "Successfully managed and grew independent software development business, handling all aspects of financial planning, pricing strategy, and revenue optimization.",
      tech: ["Business Strategy", "Revenue Optimization", "Financial Planning"],
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
            patent for blockchain innovation. Combining technical expertise with
            financial acumen.
          </p>
        </div>
      </section>

      {/* Patent Section */}
      <section id="patent" className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            U.S. Patent #11244308
          </h2>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl border border-gray-700 max-w-3xl mx-auto">
            <img
              src={PatentPreview}
              alt="Patent Preview"
              className="w-full h-64 object-cover object-top"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-400">
                Blockchain-Based System for Managing Tangible Product Records
              </h3>
              <p className="text-gray-300 mb-6">
                Developed an innovative method for creating and managing
                tangible product records using blockchain technology. The patent
                covers a system that generates unique physical tags with
                optically readable indicia, associates them with tangible
                objects, and maintains an immutable record of ownership and
                authenticity.
              </p>
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
            </div>
          </div>
        </div>
      </section>

      {/* Computer Science Section */}
      <section id="cs" className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <Code size={32} className="text-blue-400" />
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Computer Science
            </h2>
          </div>

          <h3 className="text-xl font-semibold mb-6 text-gray-300">
            Technical Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {csSkills.map((skill) => (
              <div
                key={skill}
                className="p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg text-center hover:bg-gray-700 transition-all duration-300 border border-gray-700"
              >
                {skill}
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-6 text-gray-300">Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {csProjects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
              >
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-900/50 rounded-full text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.link && (
                    <div className="mt-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
                      >
                        <Github size={18} className="mr-2" />
                        View on GitHub
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finance Section */}
      <section id="finance" className="py-16 px-4 bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-12">
            <LineChart size={32} className="text-blue-400" />
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Finance
            </h2>
          </div>

          <h3 className="text-xl font-semibold mb-6 text-gray-300">
            Financial Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {financeSkills.map((skill) => (
              <div
                key={skill}
                className="p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg text-center hover:bg-gray-700 transition-all duration-300 border border-gray-700"
              >
                {skill}
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-6 text-gray-300">
            Financial Projects & Experience
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {financeProjects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-900/50 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-700"
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gray-800/50 rounded-full text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.school}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 hover:border-blue-400 transition-colors duration-300"
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
      <section id="contact" className="py-16 px-4 bg-gray-800">
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
