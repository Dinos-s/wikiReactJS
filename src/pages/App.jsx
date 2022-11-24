import { useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { ItemRepo } from "../components/ItemRepo";
import githubLog  from "../images/githubLog.png";
import { Container } from "./styles";

function App() {
  const [respos, setRespos] = useState([])

  return (
    <Container className="App">
      <img src={githubLog} alt='logo do github' width={72} height={72}/>
      <Input/>
      <Button/>
      <ItemRepo/>
    </Container>
  );
}

export default App;
