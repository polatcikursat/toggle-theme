import { MainProvider } from "./Context";
import ToggleTheme from "./ToggleTheme";

function App() {
  return (
    <>
      <MainProvider>
        <ToggleTheme />
      </MainProvider>
    </>
  );
}

export default App;
