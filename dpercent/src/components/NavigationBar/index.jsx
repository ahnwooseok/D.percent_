import { useRouter } from 'next/router';
import NavigationBarButton from '../NavigationBarButton';
import Logo from '../Logo';
import {Wrapper, Wrapper2} from './styles';
import {useEffect, useState} from "react";
import * as PropTypes from "prop-types";
import useIsMobile from "../../hooks/useIsMobile";
import Hamburger from "../Hamburger";

const routes = [
  { path: '/about', name: 'About' },
  { path: '/project', name: 'Project' },
  { path: '/recruitment', name: 'Recruitment' },
  { path: '/contact', name: 'Contact' },
];


function NavigationBar() {
    const [test,setTest]=useState(false);
    let mob = useIsMobile();

    const handleHamburger=()=>{
        document.getElementById("body").style.overflow=test==false ? "scroll" : "hidden";
        if(test){
            setTest(false);
        }else{
            setTest(true);
        }
    }

    useEffect(()=>{
        console.log(mob);
    },[mob]);



  const router = useRouter();




    return (

        mob?
            <div style={{overflowX : "hidden"}}>
                <div style={{right: 0,position: "absolute", padding: "4px",zIndex: 2}}>
                    <div onClick={handleHamburger}>
                        <Hamburger isActive={test} />
                    </div>
                </div>
                <div style={{display: 'flex',zIndex: 1,right: "0%",top: 0,position: "absolute", height: "100%", width: "100%",transform:  test==false ? "translateX(100%)" : "translateX(0)",transition: "all linear 0.25s 0s"}}>
                    <div style={{width: "15%",height: "100%",backgroundColor: "gray",opacity: 0.1}} onClick={handleHamburger}></div>
                    <div style={{width: "85%",backgroundColor: "red"}}>
                        ijsdjgjdlfk
                    </div>
                </div>
            </div>
            :

        <Wrapper>
            <Wrapper2>
                <Logo />
                {routes.map(({ path, name }) => (
                    <NavigationBarButton selected={router.pathname === path} href={path} key={path}>
                        {name}
                    </NavigationBarButton>
                ))}
            </Wrapper2>
        </Wrapper>

    );

}

export default NavigationBar;
