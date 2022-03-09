import React from "react";

export let getGradientString=()=>"linear-gradient(167deg, rgba(255,182,17,1) 0%, rgba(183,255,0,1) 69%, rgba(211,244,0,1) 100%)";

function Hamburger({isActive}){
    const hamburgerStyle={
        notActive: {
            width: "100%",
            height: 2,
            borderRadius: 6,
            background: getGradientString(),
            transition: "all linear 0.2s 0s"
        },
        middleActive: {
            width: "100%",
            height: 2,
            borderRadius: 6,
            transform: "scaleX(0.6) translateY(0.2px)",
            background: getGradientString(),
            transition: "all linear 0.2s 0s"
        },
        topActive: {
            width: "100%",
            height: 2,
            borderRadius: 6,
            transform: "rotate(45deg) scaleX(0.5) translate(9px,0px)",
            background: getGradientString(),
            transition: "all linear 0.2s 0s"
        },
        bottomActive: {
            width: "100%",
            height: 2,
            borderRadius: 6,
            transform: "rotate(-45deg) scaleX(0.5) translate(9px,0px)",
            background: getGradientString(),
            transition: "all linear 0.2s 0s"
        }
    }
    return <div style={{width: "20px", height: "20px",display: 'flex', justifyContent: "space-around", alignItems: "center", flexDirection: "column"}}>
        <div style={hamburgerStyle[isActive===true ? "topActive" : "notActive"]}>

        </div>
        <div style={hamburgerStyle[isActive===true ? "middleActive" : "notActive"]}>

        </div>
        <div style={hamburgerStyle[isActive===true ? "bottomActive" : "notActive"]}>

        </div>
    </div>
}
export default Hamburger;