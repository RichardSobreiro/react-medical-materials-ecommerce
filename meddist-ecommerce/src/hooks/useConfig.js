/** @format */
import { useEffect, useState } from "react";

const configFile = "../../public/config.json";

const useConfig = () => {
  const [config, setConfig] = useState("");

  useEffect(() => {
    (async function fetchConfig() {
      try {
        const response = await (await fetch(configFile)).json();
        setConfig(response);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return config;
};

export default useConfig;
