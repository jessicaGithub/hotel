import { Hotel } from '../model/Hotel';

// Define room type options
const primaryRoomTypes = [
  'Studio apartment (No housekeeping)',
  'Standard Room',
  'Deluxe King Room',
  'Family Suite',
  'Double Standard Room',
  'Twin Suite',
  'Junior Suite',
  'Grand Suite',
  'Double Deluxe Room',
  'Deluxe Queen Room',
  'Standard King Room',
  'Standard Queen Room'
];

const optionalRoomFeatures = [
  'No Smoking',
  null // To randomly have no optional feature
];

// Define image URLs from Pexels
const imageUrls: string[] = [
  'https://hotelimages.webjet.com.au/lodging/1000000/850000/845400/845390/e394a620_z.jpg',
  'https://hotelimages.webjet.com.au/lodging/1000000/570000/564500/564404/3398b9cd_z.jpg',
  'https://hotelimages.webjet.com.au/hotels/1000000/850000/845400/845390/0259fb01_z.jpg',
  'https://hotelimages.webjet.com.au/hotels/1000000/460000/451200/451160/a1830e51_z.jpg',
  'https://hotelimages.webjet.com.au/lodging/1000000/30000/23800/23775/0a626b13_z.jpg'
];

// Helper function to get a random element from an array
const getRandomElement = (array: (string | null)[]) =>
  array[Math.floor(Math.random() * array.length)];

// Generate the dataset
const generateHotelData = (count: number) => {
  const data = [];
  for (let i = 1; i <= count; i++) {
    const hotel = {
      id: i,
      image_url: getRandomElement(imageUrls) || imageUrls[0],
      hotel_name: `Hotel ${getRandomElement([
        'Vista',
        'Elegance',
        'Oasis',
        'Haven',
        'Serenity',
        'Majestic',
        'Aurora',
        'Cascade',
        'Zenith',
        'Bliss'
      ])} ${Math.floor(100 + Math.random() * 900)}`,
      hotel_rating: (Math.round((Math.random() * 4 + 1) * 2) / 2).toFixed(1), // Increment by 0.5
      room_type: [
        getRandomElement(primaryRoomTypes),
        getRandomElement(optionalRoomFeatures)
      ].filter(Boolean), // Remove null values
      price_per_night: Math.floor(50 + Math.random() * 450) // No decimals
    };
    data.push(hotel);
  }
  return data;
};

// Generate 550 hotel entries
export const hotelList: Hotel[] = generateHotelData(550);
