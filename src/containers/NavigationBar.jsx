import { Flex, Box, Spacer, Link,Image } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import logo from '../assets/logo.png';


function NavigationBar() {
  const { t, i18n } = useTranslation();

  function changeLanguage(language) {
    i18n.changeLanguage(language);
  }

  return (
    <Flex bg="#f7fff0" p={3} color="black">
      <Image src={logo} alt="Logo" h={10} mr={4} /> 
      <Box p="2">
        <Link href="/home">{t('home')}</Link>
      </Box>
      <Spacer />
      <Box p="2">
        <Link href="/bookspace">{t('bookspace')}</Link>
      </Box>
      <Box p="2">
        <Link href="/history">{t('history')}</Link>
      </Box>
      <Box p="2">
        <Link onClick={() => changeLanguage('en')}>EN</Link>
      </Box>
      <Box p="2">
        <Link onClick={() => changeLanguage('et')}>ET</Link>
      </Box>
    </Flex>
  );
}

export default NavigationBar;
