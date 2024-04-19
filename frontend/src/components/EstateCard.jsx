import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Ratings'
import { useSelector } from 'react-redux'
import { FaEye, FaHeart,FaPhone, FaEnvelope } from 'react-icons/fa'
import { useAddFavouriteMutation, useGetFavouriteIdQuery } from '../store/slices/favouriteSlice'
import { toast } from 'react-toastify'

const EstateCard = ({ item }) => {

  const [addFavourite] = useAddFavouriteMutation();
  const { refetch } = useGetFavouriteIdQuery();
  const { userInfo } = useSelector((state) => state.auth);
  
  const addFavouriteHandler = async () => {
    try {
      await addFavourite({
        userId: userInfo._id,
        id: item._id,
      });
      refetch();
      toast.success("Added item Successfully")
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <Card className='my-3 py-3 rounded hover:scale-105 cursor-pointer transition shadow-lg dark:bg-black'>
        <Link to={`/estates/${item._id}`}>
          <Card.Img src={item.image} alt={item.image} variant='top' className='h-32 dark:border-gray-300' />
        </Link>

        <Card.Body>
          <Link to={`/estates/${item._id}`}>
            <Card.Title as='div' className='product-title text-info'>
              <strong>{item.type} {item.city}, {item.firstName} {item.lastName}</strong>
            </Card.Title>
          </Link>
          <Card.Text as='h3' className='text-primary'
          style={{minHeight: "40px"}}
          >
             {item.description}
          </Card.Text>
          <Card.Text as='div'>
            <Rating value={item.rating} />
          </Card.Text>
          <div className='flex justify-content-between mt-2 text-black'>
            <Card.Text as='h3' className='dark:text-gray-700'>
              city : {item.city}
            </Card.Text>
            <Card.Text as='h3' className='dark:text-gray-700'>
              price : {item.price}₪
            </Card.Text>
          </div>
          <div className='flex justify-content-between mt-2'>
          <Card.Text as='h3' className='dark:text-gray-700'>
            <FaEnvelope className='inline t-color'/> : <span>{item.userEmail}</span>
          </Card.Text>
          <Card.Text as='h3' className='dark:text-gray-700'>
            <FaPhone className='inline t-color' /> : <span> {item.phoneNumber}</span>
          </Card.Text>
          </div>
          
        </Card.Body>
        <Card.Footer className='flex justify-content-between t-color' >
          <Link to={`/estates/${item._id}`}>
            <span className='mt-7'> <FaEye className='inline' /> Seeing</span>
          </Link>
          <Link onClick={addFavouriteHandler}>
          <span className='mt-3'><FaHeart className='inline' /> To My Favourite</span>
          </Link>
        </Card.Footer>
      </Card>

    </>
  )
}

export default EstateCard;