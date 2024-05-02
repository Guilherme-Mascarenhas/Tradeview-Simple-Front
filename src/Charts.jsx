import ApexCharts from "react-apexcharts";

export const Charts = (props)=>{

	const option = {
		xaxis:{
			type: 'datetime',

		},
		yaxis:{
			tooltip:{
				enable: true
			}
		}
	}

	const serie= [{
		data: props.data
	}]

	return(

		<ApexCharts options={option} series={serie} type="candlestick" width={640} height={480}/>

	);
}

