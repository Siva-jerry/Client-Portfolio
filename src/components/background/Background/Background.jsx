import "./Background.css";

import Aurora from "../Aurora/Aurora";
import BlurOrbs from "../BlurOrbs/BlurOrbs";
import FloatingParticles from "../FloatingParticles/FloatingParticles";
import Stars from "../Stars/Stars";
import Snow from "../Snow/Snow";
import LightRays from "../LightRays/LightRays";
import Mist from "../Mist/Mist";

export default function Background(){

    return(

        <div className="background-wrapper">

            <Aurora/>
            <LightRays/>

            <BlurOrbs/>
            <Stars/>
            <Snow/>

            <FloatingParticles/>
            <Mist/>

        </div>

    );

}