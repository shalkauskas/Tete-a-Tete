import { GooglePlaceDetails } from '../types';

interface PlacesReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

const EMPTY: GooglePlaceDetails = { rating: 0, total: 0, reviews: [] };

export async function fetchGooglePlaceDetails(): Promise<GooglePlaceDetails> {
  const placeId = process.env.placeid ?? process.env.NEXT_PUBLIC_placeid;
  const apiKey =
    process.env.placesAPIkey ?? process.env.NEXT_PUBLIC_placesAPIkey;

  if (!placeId || !apiKey) {
    return EMPTY;
  }

  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${placeId}&fields=rating,user_ratings_total,reviews&language=en&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      return EMPTY;
    }

    const result = data.result ?? {};
    const reviews = Array.isArray(result.reviews)
      ? (result.reviews as PlacesReview[])
          .map(review => ({
            text: review.text,
            profile_photo_url: review.profile_photo_url,
            author_url: review.author_url,
            author_name: review.author_name,
            relative_time_description: review.relative_time_description,
            rating: review.rating
          }))
          .filter(r => r.rating > 3)
      : [];

    return {
      rating: typeof result.rating === 'number' ? result.rating : 0,
      total:
        typeof result.user_ratings_total === 'number'
          ? result.user_ratings_total
          : 0,
      reviews
    };
  } catch (error) {
    console.error('Failed to fetch Google place details:', error);
    return EMPTY;
  }
}
