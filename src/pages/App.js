import gitLog from '../assets/github_log_icon.png';
import Input from '../components/input';
import ItemRepo from '../components/ItemRepo';

import {Container} from '../pages/styles';


function App() {
  return (
    <Container>
        <img src={gitLog} width={72} height={72} />
        <Input />
        <ItemRepo />
    </Container>
  );
}

export default App;
