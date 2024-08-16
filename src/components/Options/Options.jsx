import css from "./Options.module.css";
export default function Options() {
  return (
    <>
      <ul className={css.list}>
        <li>
          <p>Good</p>
        </li>
        <li>
          <p>Neutral</p>
        </li>
        <li>
          <p>Bad</p>
        </li>
        <li>
          <button type="button">Reset</button>
        </li>
      </ul>
    </>
  );
}
