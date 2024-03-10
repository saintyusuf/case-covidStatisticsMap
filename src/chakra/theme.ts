import { extendTheme } from "@chakra-ui/react"

export default extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false
  },
  styles: {
    global: {
      body: {
        bg: "#fff",
        color: "black"
      }
    }
  },
  breakpoints: {
    mobile: "0px",
    desktop: "800px"
  }
})