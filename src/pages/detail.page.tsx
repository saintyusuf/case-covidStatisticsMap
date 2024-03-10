import { Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { HiOutlineArrowLeft as IconLeft } from "react-icons/hi2"
import { Spinner } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { getCovidData } from '../redux/slices/covid.slice'

const DetailPage = () => {

  const [params, setParams] = useSearchParams()
  const [countryIsoCode, setCountryIsoCode] = useState<string>(params.get("countryIsoCode") || "")

  const covidState = useSelector((state:RootState)=>state.covid)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCovidData(countryIsoCode))
  },[dispatch])
  
  return covidState.data && !covidState.isLoading ? (
    <Box minH="100vh">

      <Box pos={{mobile: "relative", desktop: "absolute"}} left={{mobile: "auto", desktop: "50%"}} top={{mobile: "auto", desktop: "50%"}} transform={{mobile: "auto", desktop: "translate(-50%,-50%)"}} p="10px">
        <Box as={Link} to="/" ml="20px" mb="10px" display="flex" alignItems="center" w="fit-content">
          <Box as={IconLeft} size="21" mr="5px"/>
          <Text fontSize="20px" fontWeight="400">Back to Map</Text>
        </Box>
        <Box border="1px solid #555" p="20px" borderRadius="25px">
          <Text fontSize="22px" fontWeight="700" textAlign="center" mb="10px" lineHeight="1">Details of {covidState.data.region.name}</Text>
          <Box display="flex" alignItems="baseline">
            <Text fontSize="20px" fontWeight="600" minW="150px">date:</Text>
            <Text fontSize="18px" fontWeight="300">{covidState.data.date}</Text>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Text fontSize="20px" fontWeight="600" minW="150px">confirmed:</Text>
            <Text fontSize="18px" fontWeight="300">{covidState.data.confirmed}</Text>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Text fontSize="20px" fontWeight="600" minW="150px">deaths:</Text>
            <Text fontSize="18px" fontWeight="300">{covidState.data.deaths}</Text>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Text fontSize="20px" fontWeight="600" minW="150px">recovered:</Text>
            <Text fontSize="18px" fontWeight="300">{covidState.data.recovered}</Text>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Text fontSize="20px" fontWeight="600" minW="150px">confirmed_diff:</Text>
            <Text fontSize="18px" fontWeight="300">{covidState.data.confirmed_diff}</Text>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Text fontSize="20px" fontWeight="600" minW="150px">deaths_diff:</Text>
            <Text fontSize="18px" fontWeight="300">{covidState.data.deaths_diff}</Text>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Text fontSize="20px" fontWeight="600" minW="150px">recovered_diff:</Text>
            <Text fontSize="18px" fontWeight="300">{covidState.data.recovered_diff}</Text>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Text fontSize="20px" fontWeight="600" minW="150px">last_update:</Text>
            <Text fontSize="18px" fontWeight="300">{covidState.data.last_update}</Text>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Text fontSize="20px" fontWeight="600" minW="150px">active:</Text>
            <Text fontSize="18px" fontWeight="300">{covidState.data.active}</Text>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Text fontSize="20px" fontWeight="600" minW="150px">active_diff:</Text>
            <Text fontSize="18px" fontWeight="300">{covidState.data.active_diff}</Text>
          </Box>
          <Box display="flex" alignItems="baseline">
            <Text fontSize="20px" fontWeight="600" minW="150px">fatality_rate:</Text>
            <Text fontSize="18px" fontWeight="300">{covidState.data.fatality_rate}</Text>
          </Box>
        </Box>
      </Box>
      
    </Box>
  ) : covidState.isLoading ? (
    <Box display="flex" justifyContent="center" alignItems="center" minH="100vh">
      <Spinner size="xl" ml="10px"/>
    </Box>
  ) : (
    <Box display="flex" flexDir="column" justifyContent="center" alignItems="center" minH="100vh">
      <Text fontSize="20px" fontWeight="600">No Data Found</Text>
      <Box as={Link} to="/" mb="10px" display="flex" alignItems="center">
        <Box as={IconLeft} size="21" mr="5px"/>
        <Text fontSize="20px" fontWeight="400">Back to Map</Text>
      </Box>
    </Box>
  )
}

export default DetailPage