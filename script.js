const projects = [
  {
    name: "Multibagger",
    description: "Jupyter Notebook project for analysis and experimentation.",
    url: "https://github.com/PC003/Multibagger",
    homepage: "",
    language: "Jupyter Notebook",
    updated: "2026-07-29",
  },
  {
    name: "PC003",
    description: "Config files for the GitHub profile.",
    url: "https://github.com/PC003/PC003",
    homepage: "https://github.com/PC003",
    language: "Other",
    updated: "2026-07-29",
  },
  {
    name: "Research_platform",
    description: "Python project focused on research-oriented workflows.",
    url: "https://github.com/PC003/Research_platform",
    homepage: "",
    language: "Python",
    updated: "2026-07-29",
  },
  {
    name: "SuyashLab",
    description: "Frontend page for a lab, deployed on Vercel.",
    url: "https://github.com/PC003/SuyashLab",
    homepage: "https://suyash-lab.vercel.app",
    language: "JavaScript",
    updated: "2026-07-19",
  },
  {
    name: "website",
    description: "JavaScript website project.",
    url: "https://github.com/PC003/website",
    homepage: "",
    language: "JavaScript",
    updated: "2026-07-09",
  },
  {
    name: "ParkPlus-Ai",
    description: "Python AI project inspired by parking and mobility workflows.",
    url: "https://github.com/PC003/ParkPlus-Ai",
    homepage: "",
    language: "Python",
    updated: "2026-06-20",
  },
  {
    name: "PYTHON",
    description: "Python practice and learning repository.",
    url: "https://github.com/PC003/PYTHON",
    homepage: "",
    language: "Python",
    updated: "2026-06-06",
  },
  {
    name: "Brain-Dump-Board",
    description: "Web development project for capturing and organizing ideas.",
    url: "https://github.com/PC003/Brain-Dump-Board",
    homepage: "https://pc003.github.io/Brain-Dump-Board/",
    language: "JavaScript",
    updated: "2026-04-07",
  },
  {
    name: "mlproject",
    description: "Python machine learning project.",
    url: "https://github.com/PC003/mlproject",
    homepage: "",
    language: "Python",
    updated: "2026-04-06",
  },
  {
    name: "DSA-Patterns-Roadmap",
    description: "Roadmap and notes for learning DSA patterns.",
    url: "https://github.com/PC003/DSA-Patterns-Roadmap",
    homepage: "",
    language: "Other",
    updated: "2026-02-26",
  },
  {
    name: "Regression-Model-Comparison",
    description: "Project for comparing regression model approaches.",
    url: "https://github.com/PC003/Regression-Model-Comparison",
    homepage: "",
    language: "Other",
    updated: "2026-02-14",
  },
  {
    name: "Portfolio",
    description: "A simple portfolio using Flask and Python.",
    url: "https://github.com/PC003/Portfolio",
    homepage: "",
    language: "Other",
    updated: "2026-01-17",
  },
  {
    name: "9Pointer",
    description: "JavaScript web project published with GitHub Pages enabled.",
    url: "https://github.com/PC003/9Pointer",
    homepage: "",
    language: "JavaScript",
    updated: "2025-12-19",
  },
  {
    name: "complete-pandas-tutorial",
    description: "Comprehensive tutorial on the Python Pandas library.",
    url: "https://github.com/PC003/complete-pandas-tutorial",
    homepage: "",
    language: "Other",
    updated: "2025-11-20",
  },
  {
    name: "Webprojects",
    description: "Collection of JavaScript web projects.",
    url: "https://github.com/PC003/Webprojects",
    homepage: "",
    language: "JavaScript",
    updated: "2025-09-16",
  },
  {
    name: "Simple-Feedback-Collection-App",
    description: "Feedback collection app built as a learning project.",
    url: "https://github.com/PC003/Simple-Feedback-Collection-App",
    homepage: "",
    language: "JavaScript",
    updated: "2025-07-30",
  },
  {
    name: "BackendChai",
    description: "Backend learning project.",
    url: "https://github.com/PC003/BackendChai",
    homepage: "",
    language: "JavaScript",
    updated: "2025-07-24",
  },
  {
    name: "Amazon",
    description: "Amazon clone built for frontend practice.",
    url: "https://github.com/PC003/Amazon",
    homepage: "",
    language: "JavaScript",
    updated: "2025-06-18",
  },
  {
    name: "backendL",
    description: "Backend learning project.",
    url: "https://github.com/PC003/backendL",
    homepage: "",
    language: "JavaScript",
    updated: "2025-06-15",
  },
  {
    name: "Javascript-repo",
    description: "JavaScript practice repository.",
    url: "https://github.com/PC003/Javascript-repo",
    homepage: "",
    language: "JavaScript",
    updated: "2025-04-16",
  },
  {
    name: "portfolio-website",
    description: "Portfolio website project using CSS.",
    url: "https://github.com/PC003/portfolio-website",
    homepage: "",
    language: "Other",
    updated: "2025-01-10",
  },
];

const projectGrid = document.querySelector("#projectGrid");
const filters = document.querySelectorAll(".filter");

function getCategory(language) {
  if (language === "JavaScript" || language === "Python") {
    return language;
  }

  return "Other";
}

function renderProjects(filter = "all") {
  const visibleProjects = projects.filter((project) => {
    return filter === "all" || getCategory(project.language) === filter;
  });

  projectGrid.innerHTML = visibleProjects
    .map((project) => {
      const liveLink = project.homepage
        ? `<a href="${project.homepage}" target="_blank" rel="noreferrer">Live</a>`
        : "";

      return `
        <article class="project-card" data-category="${getCategory(project.language)}">
          <div>
            <p class="project-meta">${project.language} | Updated ${project.updated}</p>
            <h3>${project.name}</h3>
            <p>${project.description}</p>
          </div>
          <div class="repo-footer">
            <span>${getCategory(project.language)}</span>
            <span>
              ${liveLink}
              <a href="${project.url}" target="_blank" rel="noreferrer">Code</a>
            </span>
          </div>
        </article>
      `;
    })
    .join("");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

renderProjects();
