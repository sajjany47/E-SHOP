import {useEffect} from 'react'
import { sortProductList } from '../actions/productActions';
import {useDispatch,useSelector} from 'react-redux'
import { Heading,Grid } from "@chakra-ui/react";
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductCard from "../components/ProductCard";
const SortScreen=()=>{
    const dispatch= useDispatch();

    const sortProducts=useSelector((state)=>state.sortProducts);
    const {loading ,sort,error}=sortProducts;
    

    useEffect(()=>{
        dispatch(sortProductList());
    },[])
    return(
        <>
            <Heading as='h2' mb='8' fontSize='3xl' paddingTop='10px'>
                Latest New Products
            </Heading>

            {loading ?(
                <Loader/>
            ):error ?(
                <Message type='error'>{error}</Message>
            ):(
                <Grid templateColumns='1fr 1fr 1fr' gap='6' >
                {sort.map((product)=>(
                    <ProductCard product={product}/>
                ))}

            </Grid>
            )}
        </>
    )
}
export default SortScreen;