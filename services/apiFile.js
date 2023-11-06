export const URL_SERVER = 'http://localhost:8080'
export async function getFile() {
    try {
        const response = await axios.get(`${URL_SERVER}/profile`);
        return response
      } catch (error) {
        console.error(error);
      }

}

// Exxamination
export async function getExamination() {
  try {
      const response = await axios.get(`${URL_SERVER}/examination`);
      return response
    } catch (error) {
      console.error(error);
    }

}

// Officer
export async function getOfficer() {
  try {
      const response = await axios.get(`${URL_SERVER}/officer`);
      return response
    } catch (error) {
      console.error(error);
    }

}

// License
export async function getLicense() {
  try {
      const response = await axios.get(`${URL_SERVER}/driverlicense`);
      return response
    } catch (error) {
      console.error(error);
    }

}