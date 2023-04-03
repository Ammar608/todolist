export const Task = (props) => {
  return (
    <div className="listItem">
      <h2>{props.taskName}</h2>
      <div className="button">
        <button className="edit"> Edit </button>
        <button onClick={() => props.deleteTask(props.id)}>X</button>
      </div>
    </div>
  );
};
