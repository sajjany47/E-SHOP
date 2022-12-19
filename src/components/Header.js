import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
  Flex,
  Heading,
  Link,
  Box,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Input,
} from "@chakra-ui/react";

import { HiShoppingCart, HiMenuAlt3, HiUser } from "react-icons/hi";
import { IoChevronDown } from "react-icons/io5";
import { logout } from "../actions/userActions";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [text, setText] = useState();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
    console.log(userInfo);
  };

  const submitHandler=(e)=>{
    e.preventDefault();
    
    if(text.startsWith("el") || text.startsWith("lap")){
      navigate('/mens')
    }
    else if(text.startsWith('jw')){
      navigate('/jwelery')
    }
    else{
      console.log("not found")
    }
    setText(null)
  }

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      py="6"
      px="6"
      bgColor="gray.800"
      w="100%"
      top="0"
      pos="fixed"
      zIndex="2"
    >
      <Flex align="center" mr="5">
        <Heading
          as="h1"
          color="whiteAlpha.800"
          fontWeight="bold"
          size="md"
          letterSpacing="md"
        >
          <Link href="/" _hover={{ color: "gray.500", textDecor: "none" }}>
            E-SHOP
          </Link>
        </Heading>
      </Flex>
      <Box>
        <form onSubmit={submitHandler}>
          <Input
            placeholder="Search"
            width="400px"
            color="white"
            onChange={(e) => setText(e.target.value)}
           
          />
          <Button type="submit" colorScheme="teal" ml="5px" height="50px">
            Search
          </Button>
        </form>
      </Box>

      <Box
        display={{ md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
      >
        <Link
          href="/cart"
          fontSize="sm"
          letterSpacing="wide"
          color="whiteAlpha.600"
          fontWeight="bold"
          textTransform="uppercase"
          mr="5"
          display="flex"
          alignItems="center"
          _hover={{ color: "whiteAlpha.800" }}
          mt={{ base: 4, md: 0 }}
        >
          <Icon as={HiShoppingCart} mr="1" w="4" h="4" />
          Cart
        </Link>
        {userInfo ? (
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<IoChevronDown />}
              _hover={{ textDecoration: "none", opacity: "0.7" }}
            >
              {userInfo.username}
            </MenuButton>
            <MenuList>
              <MenuItem as={RouterLink} to="/profile">
                Profile
              </MenuItem>
              <MenuItem onClick={logoutHandler}>Logout</MenuItem>
            </MenuList>
          </Menu>
        ) : (
          <Link
            as={RouterLink}
            to="/login"
            fontSize="sm"
            letterSpacing="wide"
            color="whiteAlpha.600"
            fontWeight="bold"
            textTransform="uppercase"
            mr="5"
            display="flex"
            alignItems="center"
            _hover={{ color: "whiteAlpha.800" }}
            mt={{ base: 4, md: 0 }}
          >
            <Icon as={HiUser} mr="1" w="4" h="4" />
            Login
          </Link>
        )}
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<IoChevronDown />}
            _hover={{ textDecoration: "none", opacity: "0.7" }}
            marginLeft="10px"
          >
            filter
          </MenuButton>
          <MenuList>
            <MenuItem as={RouterLink} to="/jwelery">
              Jwelery
            </MenuItem>
            <MenuItem as={RouterLink} to="/mens">
              Electronics
            </MenuItem>
            <MenuItem as={RouterLink} to="/sort">
              Sorting
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
export default Header;
