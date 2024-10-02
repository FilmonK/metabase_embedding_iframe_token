// Call the backend API to get the signed JWT token
export const fetchMetabaseToken = async () => {
    const response = await fetch('http://localhost:3000/api/generate-token');
    const data = await response.json();
  
    return data.token;  
  };
  