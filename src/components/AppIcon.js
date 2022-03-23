import Adidas from './adidas/Adidas'
import Instagram from './instagram/Instagram'
import Grid from './grid/Grid'

const AppIcon = (props) => {		

	const divStyle = {
		margin: '5%', 
		textAlign:'center',
		color:'white',
		fontSize:'3vh',
		maxWidth:'15vh'
	}
	const pStyle = {
		margin: '0px', 
		width:'100%'
	}

	function SwitchCase({value}) {
		switch (value){
			case "Adidas":
				return (<><Adidas showText={false}/> <p style={pStyle}>Adidas</p></>)
			case "Instagram":
				return (<><Instagram /><p style={pStyle}>Instagram</p></>)
			default:
				return (<Grid />)
		}
	}

	return (
		<>
			<div style={divStyle}>
				<SwitchCase value={props.name} />
			</div>
		</>
	)
}

export default AppIcon