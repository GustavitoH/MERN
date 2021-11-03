const UserCard = (props) => (
  <article>
    <div>
      <h3>{props.nombre}</h3>
      <div>{props.cedula}</div>
      <div>{props.edad}</div>
    </div>
  </article>
);

export default UserCard;
