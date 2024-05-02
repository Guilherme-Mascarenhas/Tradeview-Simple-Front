
import { useState, useEffect } from 'react'
import { Charts } from './Charts'
import { GetCandle } from './DataService';
import  useWebSocket from 'react-use-websocket';
import { Candle } from './Candles';

export const AppSocket = () =>{

	const [symbol, setSymbol] = useState('BTCUSDT');
	const [interval, setInterval] = useState('1m');
	const [data, setData] = useState([]);
	useEffect(() =>{

		GetCandle(symbol, interval)
			.then(data => setData(data))
			.catch(err => alert(err.response ? err.response.data : err.message))

	},[symbol,interval]);

	const { lastJsonMessage } = useWebSocket(`wss://stream.binance.com:9443/ws/${symbol.toLowerCase()}@kline_${interval}`,{
		onOpen: ()=> console.log('connect to Binance'),
		onError: (err)=> console.log(err),
		shouldReconnect: ()=> true,
		reconnectInterval: 3000,
		onClose: () => console.log('disconnect to Binance'),
		onMessage: () =>{
			if(lastJsonMessage){
				console.log(lastJsonMessage);
				const newCandle = new Candle(lastJsonMessage.k.t, lastJsonMessage.k.o, lastJsonMessage.k.h, lastJsonMessage.k.l, lastJsonMessage.k.c );
				const newData = [...data];

				if(lastJsonMessage.k.x === false){
					newData[newData.length - 1] = newCandle;
				}else{
					newData.splice(0,1);
					newData.push(newCandle);
				}

				setData(newData);
			}
		}
	});

	function changeSymbol(event) {
		setSymbol(event.target.value);
	}

	function changeInterval(event) {
		setInterval(event.target.value);
	}

  return(
	<div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px'}}>
		<div>
			<select style={{ textAlign: 'center', marginBottom: '10px', marginRight: '10px' }} onChange={changeSymbol}>
				<option value="BTCUSDT">BTC/USDT</option>
				<option value="ethusdt">ETH/USDT</option>
				<option value="solusdt">SOL/USDT</option>
			</select>
			<select style={{ textAlign: 'center', marginBottom: '10px' }} onChange={changeInterval}>
				<option value="1m">1 minuto</option>
				<option value="1d">1 dia</option>
				<option value="1w">1 semana</option>
			</select>
		</div>
		<div>
			<Charts data={data}/>
		</div>
	</div>
  )
}
