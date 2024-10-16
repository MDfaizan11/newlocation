import Header from "./component/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Practice from "./Practice";
import One from "./component/One";
import Two from "./component/Two";
import Three from "./component/Three";

function App() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Practice data={data} />} />
        <Route path="/one" element={<One />} />
        <Route path="/two" element={<Two />} />
        <Route path="/three" element={<Three />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
