export async function getLicense() {
    try {
        const response = await axios.get(`${URL_SERVER}/driverlicense`);
        return response
      } catch (error) {
        console.error(error);
      }

}