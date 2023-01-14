import { RatingStar } from "rating-star";
import React from "react"

export default function App() {
  const [rating, setRating] = React.useState(30);

  const onRatingChange = (score) => {
    setRating(score);
  };

  return (
    <div className="App">
      <RatingStar
        clickable
        maxScore={100}
        id="1"
        rating={rating}
        onRatingChange={onRatingChange}
      />
    </div>
  );
}
