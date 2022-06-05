import { useLoadScript } from "@react-google-maps/api";
import Map from "./components/map.tsx";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "",
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
