import {React} from 'react';
import { Routes, Route} from 'react-router-dom';

import Work from './Work';
import Explorations from './Explorations';
import Write from './Write';
import Arch from './Arch'
import RRMC from './RRMC'
import Presence from './Presence'
import Podcasts from './Podcasts'
import Sensorium from './Sensorium'
import SpatialLabs from './SpatialLabs';
import Paper from './Paper'

function AllRoutes() {

  return (
        <Routes>       
            <Route path="/" element={<Work />} />
            <Route path="/work" element={<Work />} />
            <Route path="/play" element={<Explorations />} />
            <Route path="/write" element={<Write />} />
            <Route path="/arch" element={<Arch />} />
            <Route path="/rrmc" element={<RRMC />} />
            <Route path="/presence" element={<Presence />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/sensorium" element={<Sensorium />} />
            <Route path="/slabs" element={<SpatialLabs />} />
            <Route path="/paper" element={<Paper />} />
        </Routes>
  )
}

export default AllRoutes;