import "./App.css";
import Descriptions from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import Options from "./components/Options/Options";
import { useState, useEffect } from "react";

function App() {
  const [values, setValues] = useState(() => {
    const savedClicks = window.localStorage.getItem("key");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    window.localStorage.setItem("key", JSON.stringify(values));
  }),
    [values];

  const onLeaveFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const resetValues = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const positiveFeedback = Math.round((values.good / totalFeedback) * 100);

  return (
    <>
      <Descriptions />
      <Options
        updateValue={onLeaveFeedback}
        onReset={resetValues}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          valueGood={values.good}
          valueNeutral={values.neutral}
          valueBad={values.bad}
          totalValue={totalFeedback}
          percentFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
