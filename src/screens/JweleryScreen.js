import {useEffect} from 'react'
import { categoryProduct } from '../actions/productActions';
import {useDispatch,useSelector} from 'react-redux'
import { Heading,Grid } from "@chakra-ui/react";
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductCard from "../components/ProductCard";
const JweleryScreen=()=>{
    const dispatch= useDispatch();

    const categoryList=useSelector((state)=>state.categoryList);
    const {loading ,category,error}=categoryList;
    

    useEffect(()=>{
        dispatch(categoryProduct());
    },[])
    return(
        <>
            <Heading as='h2' mb='8' fontSize='3xl' paddingTop='10px'>
                Jwelery
            </Heading>

            {loading ?(
                <Loader/>
            ):error ?(
                <Message type='error'>{error}</Message>
            ):(
                <Grid templateColumns='1fr 1fr 1fr' gap='6' >
                {category.map((product)=>(
                    <ProductCard product={product}/>
                ))}

            </Grid>
            )}
        </>
    )
}
export default JweleryScreen;