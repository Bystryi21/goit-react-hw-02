import css from "./Feedback.module.css";
export default function Feedback({
  valueGood,
  valueNeutral,
  valueBad,
  totalValue,
  percentFeedback,
}) {
  return (
    <>
      <ul className={css.list}>
        <li>
          <div>Good: {valueGood}</div>
        </li>
        <li>
          <div>Neutral: {valueNeutral}</div>
        </li>
        <li>
          <div>Bad: {valueBad}</div>
        </li>
        <li>
          <div>Total: {totalValue}</div>
        </li>
        <li>
          <div>Positive:{percentFeedback}%</div>
        </li>
      </ul>
    </>
  );
}
