import {React} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Me from './Me';
import Work from './Work';
import Visual from './Visual';
import Thought from './Thought';
import Arch from './Projects/Arch'
import RRMC from './Projects/RRMC'
import LittleJoshuaTree from './Projects/LittleJoshuaTree'
import Podcasts from './Projects/Podcasts'
import Sensorium from './Projects/Sensorium'
import SpatialLabs from './Projects/SpatialLabs';

function AnimatedRoutes() {

    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location = {location} key = {location.pathname}>       
            <Route path="/" element={<Me />} />
            <Route path="/me" element={<Me />} />
            <Route path="/work" element={<Work />} />
            <Route path="/visual" element={<Visual />} />
            <Route path="/thought" element={<Thought />} />
            <Route path="/" element={<Me />} />
            <Route path="/me" element={<Me />} />
            <Route path="/work" element={<Work />} />
            <Route path="/visual" element={<Visual />} />
            <Route path="/thought" element={<Thought />} />
            <Route path="/arch" element={<Arch />} />
            <Route path="/rrmc" element={<RRMC />} />
            <Route path="/liljosh" element={<LittleJoshuaTree />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/sensorium" element={<Sensorium />} />
            <Route path="/slabs" element={<SpatialLabs />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes;