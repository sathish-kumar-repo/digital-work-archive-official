import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import ProjectFilters from "@/components/ProjectFilters";
import Footer from "@/components/Footer";
import { projects, getCategories, getTechnologies } from "@/data/projects";
import { useTheme } from "@/hooks/useTheme";

const Index = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedTechnology, setSelectedTechnology] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const categories = getCategories();
  const technologies = getTechnologies();

  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" || project.category === selectedCategory;
      const matchesTechnology =
        selectedTechnology === "all" ||
        project.technologies.includes(selectedTechnology);

      return matchesSearch && matchesCategory && matchesTechnology;
    });

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return (
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
        case "oldest":
          return (
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
          );
        case "title":
          return a.title.localeCompare(b.title);
        case "title-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, selectedTechnology, sortBy]);

  const hasActiveFilters =
    searchTerm !== "" ||
    selectedCategory !== "all" ||
    selectedTechnology !== "all";

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedTechnology("all");
  };

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
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Dev Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my collection of projects, experiments, and creative
              solutions. Each project represents a journey of learning and
              innovation.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <div className="text-center p-6 rounded-lg bg-muted/20">
              <div className="text-3xl font-bold text-blue-600">
                {projects.length}
              </div>
              <div className="text-muted-foreground">Total Projects</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-muted/20">
              <div className="text-3xl font-bold text-green-600">
                {technologies.length}
              </div>
              <div className="text-muted-foreground">Technologies Used</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-muted/20">
              <div className="text-3xl font-bold text-purple-600">
                {categories.length}
              </div>
              <div className="text-muted-foreground">Categories</div>
            </div>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-8"
          >
            <ProjectFilters
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              selectedTechnology={selectedTechnology}
              onTechnologyChange={setSelectedTechnology}
              sortBy={sortBy}
              onSortChange={setSortBy}
              categories={categories}
              technologies={technologies}
              onClearFilters={clearFilters}
              hasActiveFilters={hasActiveFilters}
            />
          </motion.div>

          {/* Results */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-6"
          >
            <p className="text-muted-foreground">
              Showing {filteredAndSortedProjects.length} of {projects.length}{" "}
              projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredAndSortedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          {/* No Results */}
          {filteredAndSortedProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-muted-foreground text-lg mb-4">
                No projects found matching your criteria
              </p>
              <button
                onClick={clearFilters}
                className="text-primary hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default Index;
