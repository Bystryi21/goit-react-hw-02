import css from "./Options.module.css";
export default function Options({ updateValue, onReset, totalFeedback }) {
  return (
    <>
      <div className={css.list}>
        <button type="button" onClick={() => updateValue("good")}>
          Good
        </button>

        <button type="button" onClick={() => updateValue("neutral")}>
          Neutral
        </button>

        <button type="button" onClick={() => updateValue("bad")}>
          Bad
        </button>
        {totalFeedback > 0 ? (
          <button type="button" onClick={onReset}>
            Reset
          </button>
        ) : (
          false
        )}
      </div>
    </>
  );
}
