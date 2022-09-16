import { useEffect, useState } from "react";
import Input from "./Input";
import Reply from "./Reply";

function App() {
  const [input, setInput] = useState("");
  const [reply, setReply] = useState([]);
  const [names, setNames] = useState([]);
  const clicked = (e) => {
    e.preventDefault();
    setReply([...reply, input]);
    setInput("");
  };
  useEffect(() => {
    fetch("/mock/Mock.json")
      .then((res) => res.json())
      .then((res) => setNames(res));
  }, []);

  return (
    <div>
      <Input input={input} setInput={setInput} clicked={clicked} />
      {names.map((e) => {
        return <p key={e.id}>{e.name}</p>;
      })}

      <Reply reply={reply} />
    </div>
  );
}

export default App;
