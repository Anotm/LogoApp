import './style.css';

const Adidas = ({ showText }) => {
	return (
		<div class="container">
      <div class="bars">
        <div class="b one"></div>
        <div class="b two"></div>
        <div class="b three"></div>
      </div>
      {showText ? <div class="writing">adidas</div> : <div></div>}
    </div>
	)
}

export default Adidas