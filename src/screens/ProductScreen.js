import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink, useParams, useNavigate } from "react-router-dom";
import {
  Flex,
  Divider,
  Grid,
  Image,
  Heading,
  Text,
  Button,
  HStack,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { listProductDetails } from "../actions/productActions";

const ProductScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const [qty, setQty] = useState("1");
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}?qty=${qty}`);
  };

  return (
    <Grid templateColumns="5fr 4fr 3fr" gap="10" paddingTop='40px'>
      {/* Column 1 */}
      <Image src={product.image} alt={product.name} borderRadius="md" border='2px' />

      {/* Column 2 */}
      <Flex direction="column">
        <Heading as="h6" fontSize="2xl" color="gray.500">
          {product.category}
        </Heading>

        <Heading as="h2" fontSize="4xl" mb="2">
          {product.title}
        </Heading>

        <Heading
          as="h5"
          my="5"
          fontSize="4xl"
          fontWeight="bold"
          color="teal.600"
        >
          ₹{product.price}
        </Heading>

        <Text>{product.description}</Text>
      </Flex>

      {/* Column 3 */}
      <Flex direction="column">
        <Flex justifyContent="space-between" py="2">
          <Text>Price: </Text>
          <Text fontWeight="bold">₹{product.price}</Text>
        </Flex>
        <Flex justifyContent="space-between" py="2">
          <Text>Qty: </Text>
          <HStack
            onChange={(e) => {
              setQty(e.target.value);
            }}
          >
            <PinInput defaultValue={qty}>
              <PinInputField></PinInputField>
            </PinInput>
          </HStack>
        </Flex>

        <Button
          bgColor="gray.800"
          colorScheme="teal"
          my="2"
          textTransform="uppercase"
          letterSpacing="wide"
          onClick={addToCartHandler}
        >
          Add To Cart
        </Button>
      </Flex>
    </Grid>
  );
};
export default ProductScreen;
