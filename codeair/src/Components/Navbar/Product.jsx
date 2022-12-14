import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Image, Text, useDisclosure } from "@chakra-ui/react"

export const Product = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  

  return (
    <>
      <Text display={"flex"} alignItems={"center"} justifyContent={"center"} h={"100%"} onClick={onOpen}>Product <span>&#8250;</span></Text>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen} size={"md"}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>

            <Box w={"100px"} m={"5px"}>
              <Image src='/Images/codeair_logo.png' alt='logo' />
            </Box>


          </DrawerHeader>
          <DrawerBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consequat nisl vel pretium lectus quam id. Semper quis lectus
              nulla at volutpat diam ut venenatis. Dolor morbi non arcu risus
              quis varius quam quisque. Massa ultricies mi quis hendrerit dolor
              magna eget est lorem. Erat imperdiet sed euismod nisi porta.
              Lectus vestibulum mattis ullamcorper velit.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}