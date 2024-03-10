import { Box } from '@chakra-ui/react'
import MapComponent from '../components/map.component'

const HomePage = () => {  
  return (
    <Box minH="100vh" w="100vw" display="flex" alignItems="center" justifyContent="center">
      <MapComponent/>
    </Box>
  )
}

export default HomePage