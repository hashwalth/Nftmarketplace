import '../styles/globals.css'
//INTERNAL IMPORT
import { NavBar, Fooder } from "../components/componentindex";
import {NFTMarketplaceProvider} from "../Context/NFTMarketplaceContext";


const MyApp = ({ Component, pageProps }) =>
  (
    <div >
    <NFTMarketplaceProvider>
    <NavBar />
    <Component {...pageProps }/> 
    <Fooder />
    </NFTMarketplaceProvider>
    
    </div>
  );

export default MyApp;