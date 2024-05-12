import HotelBookingDetailsCard from '../hotel-booking-details-card/HotelBookingDetailsCard';



import ReactImageGallery from 'react-image-gallery';

const HotelDetailsViewCard = ({ hotelDetails }) => {
  const images = hotelDetails.images.map((image) => ({
    original: image.imageUrl,
    thumbnail: image.imageUrl,
    thumbnailClass: 'h-[80px]',
    thumbnailLoading: 'lazy',
  }));

 
 




  return (
    <div
      className="flex items-start justify-center flex-wrap md:flex-nowrap container mx-auto p-4"
      style={{ marginTop: '20px' }}
    >
      <div className="w-[800px] bg-white shadow-lg rounded-lg overflow-hidden">
        <div>
          <div className="relative w-full">
            <ReactImageGallery
              items={images}
              showPlayButton={false}
              showFullscreenButton={false}
            />
            {hotelDetails.discount && (
              <div className="absolute top-0 right-0 m-4 px-2 py-1 bg-yellow-500 text-white font-semibold text-xs rounded">
                {hotelDetails.discount} OFF
              </div>
            )}
          </div>
          <div className="p-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
              {hotelDetails.title}
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              {hotelDetails.subtitle}
            </p>
            <div className="mt-2 space-y-2">
              {hotelDetails.description.map((line, index) => (
                <p key={index} className="text-gray-700">
                  {line}
                </p>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <div>
                <p className="text-sm text-gray-600">
                  {hotelDetails.benefits.join(' | ')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HotelBookingDetailsCard hotelCode={hotelDetails.hotelCode} />
    </div>
  );
};

export default HotelDetailsViewCard;
