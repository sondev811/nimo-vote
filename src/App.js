
import './App.scss';
import {api, headers} from './constants/api.constant';
import { useState } from 'react';
import Nimo from './component/nimo/Nimo';
function App() {
  const [type, setType] = useState(api.rising);
  const [header, setHeader] = useState(headers[3].header);
  const setHeaders = (header, type) => {
    setHeader(header);
    setType(type);
  }
  return (
    <div className='nimo-vote'>
      <ul className='menu'>
        {
          headers.map((item, i) => {
            return(
              <li key={i} className={type === item.type ? 'active' : ''} onClick={() => setHeaders(item.header, item.type)}>{item.header}</li>
            )
          })
        }
      </ul>
      <Nimo type={type} header={header}/>
    </div>
  );
}

export default App;
