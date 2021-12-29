import React, { useEffect, useState } from 'react';
import './Nimo.scss';
import nimoService from '../../services/nimo.service';
function Nimo(props) {
    const [streamer, setStreamer] = useState([]);
    const [loop, setLoop] = useState();
  
    useEffect(() => {
        clearInterval(loop);
        const getNimoStreamer = async () => {
            let response = await nimoService.get(props.type);
            if (!response || !response.result) return;
            setStreamer(response.result);
            setLoop(
            setInterval(async() => {
                let response = await nimoService.get(props.type);
                if (!response || !response.result) return;
                setStreamer(response.result);
            }, 10000)
            );
            return function cleanup() {
                clearInterval(loop);
            };
        }
        getNimoStreamer();
    }, [props.type]);
    
    return (
        <div>
            <h1>{props.header}(cập nhật sau 10s)</h1>
            <table className="rwd-table">
                <thead>
                    <tr>
                        <th>Tên</th>
                        <th>Số vote</th>
                        <th>Hạng</th>
                    </tr>
                </thead>
                { streamer && streamer.length ? streamer.map((item, i) => {
                    return(
                        <tbody key={i}>
                            <tr>
                                <td data-th="Tên">{item.name}</td>
                                <td data-th="Số vote">{item.votes}</td>
                                <td data-th="Hạng">{item.rank}</td>
                            </tr>
                        </tbody>
                    )
                }) : null}
            </table>
        </div>
    );
}

export default Nimo;