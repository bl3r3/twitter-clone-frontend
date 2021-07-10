export  const getToken = () => localStorage.getItem('token')

export const reauthenticate = async (token) => {
  const response = await fetch("https://clone-tw-bl3r3.herokuapp.com/reauthenticate",{
    headers: {
      Authorization: "Bearer " + token
    }
  })
  const result = await response.json();
  return result;
}