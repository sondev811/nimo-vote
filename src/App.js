import { useEffect, useState } from 'react';
import './App.scss';
import nimoService from './services/nimo.service';
function App() {
  const [streamer, setStreamer] = useState([]);
  const [loop, setLoop] = useState();
  useEffect(() => {
    const getNimoStreamer = async () => {
      let response = await nimoService.get();
      if (!response || !response.result) return;
      setStreamer(response.result);
      setLoop(
        setInterval(async() => {
          let response = await nimoService.get();
          if (!response || !response.result) return;
          setStreamer(response.result);
        }, 10000)
      );
      return function cleanup() {
        console.log("cleaning up");
        clearInterval(loop);
      };
    }
    getNimoStreamer();
}, []);
  return (
    <div className="nimo-vote">
      <h1>Giải streamer mới nhú(cập nhật sau 10s)</h1>
      <table className="rwd-table">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Số vote</th>
            <th>Hạng</th>
          </tr>
        </thead>
        <tbody>
          { streamer.map((item, i) => {
            return(
              <tr key={i}>
                <td data-th="Tên">{item.name}</td>
                <td data-th="Số vote">{item.votes}</td>
                <td data-th="Hạng">{item.rank}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
