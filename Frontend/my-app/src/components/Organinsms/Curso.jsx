import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
const Curso = ({ id, titulo, imagen, precio, profesor }) => (
  <article>
    <div>
      <img src={imagen} alt={titulo} />
    </div>
    <div>
      <h3>
        {titulo}, {precio}
      </h3>
      <div>{profesor}</div>
      <div>
        <Link to={`/curso/${id}`}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Link>
      </div>
    </div>
  </article>
);

export default Curso;
