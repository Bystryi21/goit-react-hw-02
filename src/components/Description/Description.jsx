import css from "./Description.module.css";

export default function Descriptions() {
  return (
    <>
      <h1 className={css.headName}>Sip Happens Café</h1>
      <p className={css.headText}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </>
  );
}
