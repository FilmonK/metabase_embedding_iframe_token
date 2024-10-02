import { useEffect, useState } from "react";
import MetabaseEmbed from './components/MetabaseEmbed'; 
import { fetchMetabaseToken } from "./helpers/metabaseFetch";     

export default function App() {
  const [token, setToken] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch the token
  useEffect(() => {
    const fetchToken = async () => {
      try {
        const fetchedToken = await fetchMetabaseToken();
        setToken(fetchedToken);  
        setLoading(false);
      } catch (error) {
        console.error("Error fetching token:", error);
        setError('Failed to load token');
        setLoading(false);
      }
    };

    fetchToken();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h2>Metabase Dashboard</h2>
      <MetabaseEmbed token={token} />
    </div>
  );
}
