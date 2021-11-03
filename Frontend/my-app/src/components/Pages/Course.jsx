const cursos = [
  {
    id: 1,
    titulo: "Curso 1",
    precio: "22,45",
    profesor: "Juan Carlos Bodoque",
  },
  {
    id: 2,
    titulo: "Curso 2",
    precio: "23,15",
    profesor: "Cristhian Willy Bodoque",
  }, 
  {
    id: 3,
    titulo: "Curso 3",
    precio: "32,75",
    profesor: "Gustavo Aldahir Bodoque",
  },
  {
    id: 4,
    titulo: "Curso 4",
    precio: "42,65",
    profesor: "Joel Alesandro Bodoque",
  },
];

const Course = ({ match }) => {
  const cursoActual = cursos.filter(
    (c) => c.id === parseInt(match.params.id)
  )[0];

  return cursoActual ? (
    <div>
      <h1>{cursoActual.titulo}</h1>
      <span>{cursoActual.profesor}</span>
      <p>
        <strong>{cursoActual.precio}</strong>
      </p>
    </div>
  ) : (
    <div>
      <h1>El curso no existe</h1>
    </div>
  );
};

export default Course;
