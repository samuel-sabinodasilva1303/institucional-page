async function fetchProperties() {
  const API_URL = 'https://api.bridgedataoutput.com/api/v2/OData/test/Property';
  const ACCESS_TOKEN = '6baca547742c6f96a6ff71b138424f21';

  try {
    const response = await fetch(`${API_URL}?access_token=${ACCESS_TOKEN}`);
    const data = await response.json();
    return data.value;
  } catch (error) {
    console.error('Error fetching properties:', error);
    return [];
  }
}

export default async function Residence() {
  const properties = await fetchProperties();

  return (
    <section>
      <ul>
        {properties.map((property) => (
          <div key={property.ListingKey}>
            <h3>{property.PublicRemarks}</h3>
            <p><strong>Preço:</strong> ${property.ListPrice}</p>
            <p><strong>Localização:</strong> {property.City}, {property.StateOrProvince}</p>
            <p><strong>Área:</strong> {property.LivingArea} {property.LivingAreaUnits}</p>
            <p><strong>Quartos:</strong> {property.BedroomsTotal}</p>
            <p><strong>Banheiros:</strong> {property.BathroomsTotalInteger}</p>
            <p><strong>Descrição:</strong> {property.PublicRemarks}</p>
            {property.Media && property.Media.length > 0 && (
              <div>
                {property.Media.map((media) => (
                  <img key={media.MediaURL} src={media.MediaURL} alt={property.PublicRemarks} />
                ))}
              </div>
            )}
          </div>
        ))}
      </ul>
    </section>
  );
}
