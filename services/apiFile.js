export const URL_SERVER = 'http://localhost:8000'
export async function getFile() {
    try {
        const response = await axios.get(`${URL_SERVER}/hoso`);
        return response
      } catch (error) {
        console.error(error);
      }

}