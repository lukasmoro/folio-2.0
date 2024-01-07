import {React} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Me from './Me';
import Work from './Work';
import Visual from './Visual';
import Thought from './Thought';
import Arch from './Arch'
import RRMC from './RRMC'
import LittleJoshuaTree from './LittleJoshuaTree'
import Podcasts from './Podcasts'
import Sensorium from './Sensorium'
import SpatialLabs from './SpatialLabs';

function AnimatedRoutes() {

    const location = useLocation();

  return (
    <AnimatePresence>
        <Routes location = {location} key = {location.pathname}>       
            <Route path="/" element={<Me />} />
            <Route path="/me" element={<Me />} />
            <Route path="/work" element={<Work />} />
            <Route path="/play" element={<Visual />} />
            <Route path="/mind" element={<Thought />} />
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