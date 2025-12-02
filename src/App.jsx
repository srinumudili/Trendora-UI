import { GlobalStyles } from "@mui/material";
import Header from "./components/common/Header";
import UserLayout from "./Layout/UserLayout";

const App = () => {
  return (
    <>
      <GlobalStyles
        styles={{
          body: { margin: 0, padding: 0 },
          html: { margin: 0, padding: 0 },
          "#root": { margin: 0, padding: 0 },
        }}
      />
      <UserLayout />
    </>
  );
};

export default App;
