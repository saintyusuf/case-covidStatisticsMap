import { Box, Spinner, Text } from '@chakra-ui/react'
import { ComposableMap, Geographies, Geography, Sphere, ZoomableGroup, Graticule, Marker } from "react-simple-maps"
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { getMapData } from '../redux/slices/map.slice'

const MapComponent = () => {

  const navigate = useNavigate()

  const mapState = useSelector((state:RootState)=>state.map)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(!mapState.data){
      dispatch(getMapData())
    }
  },[dispatch])
  
  return mapState.data && !mapState.isLoading ? (
    <Box w="100%" h="100%">
      <ComposableMap style={{height: "100vh", width: "100vw"}}>
        <ZoomableGroup>
          <Sphere id="1" stroke="#555" strokeWidth={0.1} fill="#004999" />
          <Graticule strokeWidth={0.1} stroke="#aaa" />
          <Geographies geography={mapState.data}>
            {({ geographies, projection }) =>
              geographies.map((geo) => (
                <Box as={Geography} key={geo.id} geography={geo} fill="#fff" stroke="#555" strokeWidth={0.3} outline="none" onClick={()=>navigate(`/detail?countryIsoCode=${geo.id}`)} sx={{
                  "&:hover": {
                    fill: "#eee",
                    cursor: "pointer"
                  },
                    "&:active": {
                    fill: "#ddd"
                    }
                }}/>
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </Box>
  ) : mapState.isLoading ? (
    <Box display="flex" justifyContent="center" alignItems="center" minH="100vh">
      <Spinner size="xl" ml="10px"/>
    </Box>
  ) : (
    <Box display="flex" flexDir="column" justifyContent="center" alignItems="center" minH="100vh">
      <Text fontSize="20px" fontWeight="600">No Data Found</Text>
    </Box>
  )
}

export default MapComponent