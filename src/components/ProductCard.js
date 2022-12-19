import {Link as RouterLink} from 'react-router-dom'
import {Link,Box,Image,Heading,Flex,Text} from '@chakra-ui/react'


const ProductCard=({product})=>{
    return(
        <Link as={RouterLink} 
        to={`/product/${product.id}`}
        _hover={{textDecor:'none',boxShadow:'dark-lg'}}
        width='383px' 
        >

            <Box maxW='sm'
            bgColor='white'
            overflow='hidden'
            boxshadow='dark-lg'
            w={['full','md']}
            alignItems="center"
            
            objectFit="cover"
           
            >
                <Box  height='200'
                    width='383px'
                    textAlign='center'
                    border='2px'>
                    <Image src={product.image} 
                    alt={product.name}
                    height='100'
                    width='100'
                    objectFit='cover'
                    marginLeft='90px'
                    marginTop='20px'
                
                
                
                /></Box>
                
                <Flex py='5' px='4' direction='column' justifyContent='space-between' height='120'
                border='1px solid black'  >
                    <Heading as='h4' fontSize="sm" mb='3'>
                        {product.title}
                    </Heading>
                    <Flex alignItems='center' justifyContent='space-between'>
                        
                        <Text fontSize='2xl' fontWeight='bold' color='blue.600'>
                            ₹{product.price}
                        </Text>
                    </Flex>
                </Flex>

            </Box>
        </Link>
    )
}
export default ProductCard