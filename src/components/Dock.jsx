import React from "react";
import "./Dock.css";
import { NavLink, useLocation } from "react-router-dom"; 
import { motion } from "framer-motion";
import BehaviourClick from "./BehaviourClick";

function Dock() {

  const location = useLocation();
  
  const isHomeActive = location.pathname === '/' || location.pathname === '/about';
  const isWorkActive = location.pathname === '/work';
  const isWriteActive = location.pathname === '/write';
  const isProjectActive = location.pathname === '/presence' || location.pathname === '/sensorium' || location.pathname === '/podcasts' || location.pathname === '/rrmc' || location.pathname === '/slabs' || location.pathname === '/arch' || location.pathname === '/play' || location.pathname === '/cvkit' || location.pathname === '/paper';
  
  const Placeholder = () => <div style={{ flex: 1 }}></div>;

  const navVariants = {normal: { width: 300, height: 60 }, project: { width: 60, height: 60 }};

  return (
    
    <motion.nav className="nav" variants={navVariants} animate={isProjectActive ? "project" : "normal"} initial={false} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
      
      <ul className="nav-links" >

        {!isProjectActive &&(
          <BehaviourClick>
            <NavLink to="/about" className={isHomeActive ? "active-link" : ""}>
              <li>About</li>
            </NavLink>
        </BehaviourClick>)}

        {isProjectActive && <Placeholder />}
        <BehaviourClick>
          <NavLink to={"/work"} className={`${isProjectActive ? "" : isWorkActive ? "active-link" : ""}`}>
              <li className={isProjectActive ? "center-link" : ""}>
                  {isProjectActive ? "←" : "Work"}
              </li>
            </NavLink>
        </BehaviourClick>
        
        {isProjectActive && <Placeholder />}

        {!isProjectActive &&(
        <BehaviourClick>
          <NavLink to="/write" className={isWriteActive ? "active-link" : ""}>
            <li>Write</li>
          </NavLink>
        </BehaviourClick>)}
      
      </ul>
    
    </motion.nav>
  );
}

export default Dock;