import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const placeId = searchParams.get('placeId');

  // Récupérer la clé API depuis les variables d'environnement
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'API Key non configurée' },
      { status: 500 }
    );
  }

  if (!placeId) {
    return NextResponse.json(
      { error: 'Place ID requis' },
      { status: 400 }
    );
  }

  try {
    // Appel à l'API Google Places
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}&language=fr`
    );

    if (!response.ok) {
      throw new Error('Erreur API Google Places');
    }

    const data = await response.json();

    if (data.status !== 'OK') {
      throw new Error(`Erreur Google Places: ${data.status}`);
    }

    // Retourner uniquement les données nécessaires
    return NextResponse.json({
      rating: data.result.rating,
      user_ratings_total: data.result.user_ratings_total,
      reviews: data.result.reviews || [],
    });
  } catch (error) {
    console.error('Erreur lors de la récupération des avis Google:', error);
    return NextResponse.json(
      { error: 'Impossible de récupérer les avis' },
      { status: 500 }
    );
  }
}