import { useEffect, useState } from "react";

//custom hook for service component

const useService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("./fakeData.Json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [services, setServices];
};

export default useService;
