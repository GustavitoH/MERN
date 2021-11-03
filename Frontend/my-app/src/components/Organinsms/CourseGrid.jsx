import Curso from "./Curso";

const cursos = [
  {
    id: 1,
    titulo: "Prueba 1",
    precio: "22,45",
    profesor: "Juan Carlos Bodoque",
  },
  {
    id: 2,
    titulo: "Prueba 2",
    precio: "23,15",
    profesor: "Cristhian Willy Bodoque",
  },
  {
    id: 3,
    titulo: "Prueba 3",
    precio: "32,75",
    profesor: "Gustavo Aldahir Bodoque",
  },
  {
    id: 4,
    titulo: "Prueba 4",
    precio: "42,65",
    profesor: "Joel Alesandro Bodoque",
  },
  {
    id: 5,
    titulo: "Prueba 5",
    precio: "52,55",
    profesor: "Dayan Polaco Bodoque",
  },
  {
    id: 6,
    titulo: "Prueba 6",
    precio: "62,45",
    profesor: "Bryan Ricardp Bodoque",
  },
  {
    id: 7,
    titulo: "Prueba 7",
    precio: "72,35",
    profesor: "Arely Cristhina Bodoque",
  },
  {
    id: 8,
    titulo: "Prueba 8",
    precio: "82,25",
    profesor: "Jorge Enrique Bodoque",
  },
  {
    id: 9,
    titulo: "Prueba 9",
    precio: "92,15",
    profesor: "Kevin Mario Bodoque",
  },
];
const CourseGrid = () => (
  <div className="ed-grid">
    {cursos.map((c) => (
      <Curso
        key={c.id}
        id={c.id}
        titulo={c.titulo}
        imagen={c.imagen}
        precio={c.precio}
        profesor={c.profesor}
      />
    ))}
  </div>
);

export default CourseGrid;
