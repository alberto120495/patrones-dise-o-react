import { useAppContext } from "../store/store";
function Todo({ id, title, completed }) {
  const { onComplete } = useAppContext();
  return (
    <div>
      <div>
        <input
          type="checkbox"
          checked={completed}
          value={completed}
          onChange={(e) => onComplete(id)}
        />
        {title}
      </div>
    </div>
  );
}

export default Todo;
