export async function getExamination() {
    try {
        const response = await axios.get(`${URL_SERVER}/examination`);
        return response
      } catch (error) {
        console.error(error);
      }

}