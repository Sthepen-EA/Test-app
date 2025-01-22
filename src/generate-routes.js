const fs = require("fs");
const path = require("path");

// Esta función debería obtener los IDs de tus cursos
// Podrías obtenerlos de tu API o de un archivo de datos
async function getCourseIds() {
  try {
    const response = await fetch(
      "https://webcoursesback-26hk.onrender.com/secondarycourses"
    );
    const courses = await response.json();
    return courses.map((course) => course.seccourseId);
  } catch (error) {
    console.error("Error fetching course IDs:", error);
    return [];
  }
}

async function generateRoutes() {
  const courseIds = await getCourseIds();
  const routes = [];

  // Agrega la ruta base
  routes.push("/course-list");
  routes.push("/course-list/course");

  // Genera las rutas para cada curso
  courseIds.forEach((id) => {
    routes.push(`/course-list/course/${id}`);
  });

  // Escribe las rutas en un archivo
  const routesFile = path.join(__dirname, "routes.txt");
  fs.writeFileSync(routesFile, routes.join("\n"));

  console.log(`Routes generated in ${routesFile}`);
}

generateRoutes().catch(console.error);
