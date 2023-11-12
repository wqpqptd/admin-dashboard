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

//LicenseClass
export async function getLicenseClass() {
  try {
      const response = await axios.get(`${URL_SERVER}/driverlicenseclass`);
      return response
    } catch (error) {
      console.error(error);
    }

}

//LicenseDuration

export async function getLicenseDuration() {
  try {
      const response = await axios.get(`${URL_SERVER}/driverlicenseduration`);
      return response
    } catch (error) {
      console.error(error);
    }

}
//FileDetail

export async function getFileDetail() {
  try {
      const response = await axios.get(`${URL_SERVER}/detailprofile`);
      return response
    } catch (error) {
      console.error(error);
    }

}
//ExaminationDetail

export async function getExaminationsDetail() {
  try {
      const response = await axios.get(`${URL_SERVER}/detailexminations`);
      return response
    } catch (error) {
      console.error(error);
    }

}