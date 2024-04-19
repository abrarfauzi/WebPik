
import React from 'react'
import { useSelector } from 'react-redux'
import { useGetEstatesQuery } from '../store/slices/estatesApiSlice'
import { useGetFavouriteIdQuery } from '../store/slices/favouriteSlice';
import Loader from '../components/Loader';
import EstateCard from '../components/EstateCard';
import { Row, Col } from 'react-bootstrap';

const Favorite = () => {

    const { data: estates, isLoading, error } = useGetEstatesQuery();
    const { data: favo_ids, isLoading: favoLoading, error: favo_error } = useGetFavouriteIdQuery();
    const { userInfo } = useSelector((state) => state.auth);
    console.log(estates)
    console.log(favo_ids)
   
    return (
        <>
            {isLoading  ? (<Loader />) : (
                <>
                    <section id="Favorite"
                        className="w3-animate-zoom widescreen:section-min-height tallscreen:section-min-height scroll-mt-16 p-6">
                        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
                            My Favorite
                        </h2>
                        <Row className="container mx-auto my-8">
                            { estates.map((estate, index) => (
                                favo_ids.map((fav)=> (
                                 estate._id === fav.id && (
                                    <Col key={fav._id} sm={12} md={6} lg={4} xl={3}>
                                        <EstateCard item={estate} />
                                    </Col>
                                 ) 
                                ))
                            ))}
                        </Row>


                    </section>
                </>
            )}
        </>
    )
}

export default Favorite