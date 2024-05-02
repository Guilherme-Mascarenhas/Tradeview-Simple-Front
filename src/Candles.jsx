
export class Candle {

	constructor(openTime, open, hight, low, close){
		this.x = new Date(openTime);
		this.y = [parseFloat(open),parseFloat(hight),parseFloat(low),parseFloat(close)];

	}
}