import { useState } from "react";
import "./App.css";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const [isUnityLoaded, setIsUnityLoaded] = useState(false);
  const { unityProvider } = useUnityContext({
    loaderUrl: "/unity/auav-build-uncompressed.loader.js",
    dataUrl: "/unity/auav-build-uncompressed.data",
    frameworkUrl: "/unity/auav-build-uncompressed.framework.js",
    codeUrl: "/unity/auav-build-uncompressed.wasm",
  });

  // console.log(unityProvider)

  return isUnityLoaded ? (
    <Unity unityProvider={unityProvider} style={{ height: "90vh", width: "80vw" }}/>
  ) : (
    <main>
      <h1>Aerialogic Online UAV Simulator</h1>
      <a href="https://aerialogic.ca/"><img src="/auavlogo.png"/></a>
      <br />
      <button className="t-md" onClick={() => {setIsUnityLoaded(true)}}>Click to Load</button>
    </main>
  );
}

export default App;
