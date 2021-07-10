export  const getToken = () => localStorage.getItem('token')

export const reauthenticate = async (token) => {
  const response = await fetch("http://localhost:5000/reauthenticate",{
    headers: {
      Authorization: "Bearer " + token
    }
  })
  const result = await response.json();
  return result;
}