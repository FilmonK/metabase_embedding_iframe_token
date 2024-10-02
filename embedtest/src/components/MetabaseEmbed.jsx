import { useEffect, useState } from "react";
import { fetchMetabaseToken } from "../helpers/metabaseFetch";  
const apiUrl = import.meta.env.VITE_API_URL;


export default function MetabaseEmbed() {
  const [token, setToken] = useState('');
  const [iframeSrc, setIframeSrc] = useState(''); 
  const [isVisible, setIsVisible] = useState(true); 

  useEffect(() => {
    // Fetch the signed token from the backend
    fetchMetabaseToken().then((fetchedToken) => {
      setToken(fetchedToken);
      // hardcoded dashboard and parameter values for testing
      setIframeSrc(`${apiUrl}auth/sso?jwt=${fetchedToken}&return_to=%2Fdashboard%2F20%3Fside_nav%3Dtrue%26header%3Dtrue%26action_buttons%3Dtrue%26breadcrumbs%3Dtrue%26top_nav%3Dtrue%26search%3Dtrue%26new_button%3Dtrue`);
    });
  }, []);

  // toggle iframe visibility
  const toggleIframeVisibility = () => {
    setIsVisible(!isVisible); 
  };

  if (!token) return <p>Loading...</p>;

  return (
    <div>
      <h4>Token Being Used: {token}</h4>

      {/* Button to toggle iframe visibility */}
      <button onClick={toggleIframeVisibility}>
        {isVisible ? 'Hide iFrame' : 'Show iFrame'}
      </button> 
      
      {isVisible ? (
        <iframe
          src={iframeSrc}
          style={{ border: "none", width: "100%", height: '100vh' }}
          onLoad={() => console.log('iFrame loaded')}
        />
      ) : (
        <p>iFrame is hidden. Click the button to show it again.</p>
      )}
    </div>
  );
}
