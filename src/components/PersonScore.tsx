import { getPerson } from "../getPerson";
import { useEffect, useState } from "react";

export function PersonScore() {
  const [name, setName] = useState<string | undefined>();
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPerson().then((person) => {
      getPerson().then((person) => {
        setLoading(false);
        setName(person.name);
        console.log("State values", loading, name);
      });
    });
  }, []);

  if (loading) {
    return <div className="pre_loader">Loading....</div>;
  }
  return (
    <div>
      <h3>
        {name}, {score}
      </h3>
      <div className="box">
        <button onClick={() => setScore(score + 1)}>Add</button>
        <button onClick={() => setScore(score - 1)}>Subtract</button>
        <button onClick={() => setScore(0)}>Reset</button>
      </div>
    </div>
  );
}
