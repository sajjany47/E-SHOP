import {useEffect} from 'react'
import { mensProduct } from '../actions/productActions';
import {useDispatch,useSelector} from 'react-redux'
import { Heading,Grid } from "@chakra-ui/react";
import Loader from '../components/Loader';
import Message from '../components/Message';
import ProductCard from "../components/ProductCard";
const MensScreen=()=>{
    const dispatch= useDispatch();

    const mensList=useSelector((state)=>state.mensList);
    const {loading ,mens,error}=mensList;
    

    useEffect(()=>{
        dispatch(mensProduct());
    },[])
    return(
        <>
            <Heading as='h2' mb='8' fontSize='3xl' paddingTop='10px'>
                Electronics
            </Heading>

            {loading ?(
                <Loader/>
            ):error ?(
                <Message type='error'>{error}</Message>
            ):(
                <Grid templateColumns='1fr 1fr 1fr' gap='6' >
                {mens.map((product)=>(
                    <ProductCard product={product}/>
                ))}

            </Grid>
            )}
        </>
    )
}
export default MensScreen;