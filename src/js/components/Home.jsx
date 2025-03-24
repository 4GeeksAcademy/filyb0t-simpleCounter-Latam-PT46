import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import {Digit} from "./Digit.jsx"
import '@fortawesome/fontawesome-free/css/all.min.css';
//create your first component
const Home = () => {


const [timer, setTimer] = useState(0)

useEffect (()=> {

setTimeout (()=> {
	setTimer(value => value+1)
}, 1000)

}, [timer] )

	return (
		<main className="text-center">
			<section className="contador-caja">
           <Digit number={<span className="fa-solid fa-clock"></span>}/>
		   <Digit number={Math. floor (timer/10000)%10}/>
		   <Digit number={Math. floor (timer/10000)%10}/>
		   <Digit number={Math. floor (timer/1000)%10}/>
		   <Digit number={Math. floor (timer/100)%10}/>
		   <Digit number={Math. floor (timer/10)%10}/>
		   <Digit number={Math.floor(timer%10) }/>

		</section>
		</main>
	);
};

export default Home;