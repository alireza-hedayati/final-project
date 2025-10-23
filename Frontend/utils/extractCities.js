function extractUniqueCities(data, key) {
  const citiesMap = new Map();
  data.forEach((tour) => {
    const city = tour[key];
    if (!citiesMap.has(city.id)) {
      citiesMap.set(city.id, city);
    }
  });
  return Array.from(citiesMap.values());
}

export default extractUniqueCities