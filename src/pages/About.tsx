import { motion } from "framer-motion";
import { Code, Palette, Rocket, Users, Award, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useTheme } from "@/hooks/useTheme";

const About = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "TypeScript",
        "Next.js",
        "Vue.js",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "PostgreSQL",
        "MongoDB",
      ],
    },
    {
      category: "Tools & Cloud",
      items: ["Git", "Docker", "AWS", "Netlify", "Figma", "VS Code"],
    },
    {
      category: "Mobile",
      items: ["React Native", "Flutter", "Ionic", "PWA Development"],
    },
  ];

  const values = [
    {
      icon: Code,
      title: "Clean Code",
      description:
        "I believe in writing maintainable, readable code that stands the test of time.",
    },
    {
      icon: Palette,
      title: "Design-First",
      description:
        "Every project begins with thoughtful design and user experience considerations.",
    },
    {
      icon: Rocket,
      title: "Performance",
      description:
        "Optimizing for speed and efficiency is at the core of every application I build.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Great products are built by great teams working together towards common goals.",
    },
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <main className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 mx-auto mb-8 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">SK</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Sathish Developer
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate full-stack developer with 5+ years of experience
              creating digital solutions that make a difference. I specialize in
              modern web technologies and love turning complex problems into
              simple, beautiful designs.
            </p>
          </motion.div>

          {/* Values Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              What Drives Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-primary/10 mx-auto mb-4 flex items-center justify-center">
                        <value.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        {skillGroup.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <Badge key={skill} variant="secondary">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Experience Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-8">
                {[
                  {
                    year: "2024",
                    title: "Senior Full-Stack Developer",
                    company: "Tech Innovations Inc.",
                    description:
                      "Leading development of modern web applications using React, TypeScript, and cloud technologies.",
                  },
                  {
                    year: "2022",
                    title: "Full-Stack Developer",
                    company: "Digital Solutions Co.",
                    description:
                      "Developed and maintained multiple client projects, focusing on performance and user experience.",
                  },
                  {
                    year: "2020",
                    title: "Frontend Developer",
                    company: "Creative Agency",
                    description:
                      "Specialized in creating responsive, interactive websites and web applications.",
                  },
                  {
                    year: "2019",
                    title: "Started Coding Journey",
                    company: "Self-Taught",
                    description:
                      "Began learning web development through online courses and personal projects.",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.year}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 rounded-full bg-primary"></div>
                      {index < 3 && (
                        <div className="w-px h-16 bg-border mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-primary">
                          {item.year}
                        </span>
                        <Badge variant="outline">{item.company}</Badge>
                      </div>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Achievements */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              Achievements & Learning
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Award className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                  <CardTitle>50+ Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Successfully delivered projects ranging from simple websites
                    to complex web applications.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <BookOpen className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                  <CardTitle>Continuous Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Always staying updated with the latest technologies and best
                    practices in web development.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <CardTitle>Team Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Experience working with cross-functional teams and mentoring
                    junior developers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.section>

          {/* Contact CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-center bg-muted/20 rounded-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects.
              Let's connect and discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="mailto:developer@example.com" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors"
                >
                  Get In Touch
                </motion.button>
              </a>
              <a href="/resume.pdf" target="_blank" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-border px-6 py-3 rounded-md font-medium hover:bg-muted transition-colors"
                >
                  Download Resume
                </motion.button>
              </a>
            </div>
          </motion.section>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default About;
