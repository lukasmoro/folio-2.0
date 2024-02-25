import {React} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Me from './Me';
import Work from './Work';
import Visual from './Visual';
import Thought from './Thought';
import Arch from './Arch'
import RRMC from './RRMC'
import Presence from './Presence'
import Podcasts from './Podcasts'
import Sensorium from './Sensorium'
import SpatialLabs from './SpatialLabs';

function AllRoutes() {

    const location = useLocation();

  return (
        <Routes location = {location} key = {location.pathname}>       
            <Route path="/" element={<Me />} />
            <Route path="/me" element={<Me />} />
            <Route path="/work" element={<Work />} />
            <Route path="/play" element={<Visual />} />
            <Route path="/write" element={<Thought />} />
            <Route path="/arch" element={<Arch />} />
            <Route path="/rrmc" element={<RRMC />} />
            <Route path="/presence" element={<Presence />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/sensorium" element={<Sensorium />} />
            <Route path="/slabs" element={<SpatialLabs />} />
        </Routes>
  )
}

export default AllRoutes;