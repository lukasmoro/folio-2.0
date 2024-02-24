import React from "react";
import "./Dock.css";
import { NavLink, useLocation } from "react-router-dom"; 
import { motion } from "framer-motion";
import BehaviourClick from "./BehaviourClick";



function Dock() {

  const location = useLocation();
  const isHomeActive = location.pathname === '/' || location.pathname === '/me';
  const isWorkActive = location.pathname === '/work';
  const isWriteActive = location.pathname === '/write';
  const isProjectActive = location.pathname === '/presence' || location.pathname === '/sensorium' || location.pathname === '/podcasts' || location.pathname === '/rrmc' || location.pathname === '/slabs' || location.pathname === '/arch' || location.pathname === '/play';
  
  const Placeholder = () => <div style={{ flex: 1 }}></div>;

  const navVariants = {
    normal: { width: 300, height: 60 },
    project: { width: 60, height: 60 }
  };

  return (
    <motion.nav className="nav"
    variants={navVariants}
    animate={isProjectActive ? "project" : "normal"}
    initial={false}
    transition={{ type: "spring", stiffness: 550, damping: 30 }} >
      <ul className="nav-links" >
      {!isProjectActive &&(<BehaviourClick jumpHeight={8} timing={200}>
          <NavLink 
            to="/me"
            className={isHomeActive ? "active-link" : ""} 
          >
            <li>About</li>
          </NavLink>
        </BehaviourClick>)}

        {isProjectActive && <Placeholder />}
        <BehaviourClick jumpHeight={8} timing={200}>
        <NavLink to={"/work"} 
          className={`${isProjectActive ? "" : isWorkActive ? "active-link" : ""}`}
          >
              <li className={isProjectActive ? "center-link" : ""}>
                  {isProjectActive ? "←" : "Work"}
              </li>
          </NavLink>

        </BehaviourClick>
        {isProjectActive && <Placeholder />}

        {!isProjectActive &&(<BehaviourClick jumpHeight={8} timing={200}>
        <NavLink to="/write" 
            className={isWriteActive ? "active-link" : ""} 
            >
          <li>Write</li>
        </NavLink>
        </BehaviourClick>)}
      </ul>
    </motion.nav>
  );
}

export default Dock;