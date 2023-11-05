export async function getOfficer() {
    try {
        const response = await axios.get(`${URL_SERVER}/officer`);
        return response
      } catch (error) {
        console.error(error);
      }

}