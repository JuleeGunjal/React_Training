export const TodoFilter = ({ showCompleted, setShowCompleted }) => {
  return (
    <div className="d-flex d-gap">
      <input
        type="checkbox"
        id="filter"
        checked={showCompleted}
        onChange={(e) => setShowCompleted(e.target.checked)}
      />
      <label htmlFor="filter">Show Completed</label>
    </div>
  );
};
