export const URL_SERVER = 'http://localhost:8080'
export async function getFile() {
    try {
        const response = await axios.get(`${URL_SERVER}/profile`);
        return response
      } catch (error) {
        console.error(error);
      }

}