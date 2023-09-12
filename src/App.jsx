import AppLayout from "./ui/AppLayout";
import GlobalStyle from "./assets/styles/GlobalStyles";
import { ImagesProvider } from "./context/contextImages";
export default function App() {
  return (
    <ImagesProvider>
      <GlobalStyle />
      <AppLayout />
    </ImagesProvider>
  );
}
