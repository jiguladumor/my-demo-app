import './App.css';
import Login from './components/login/Login';
import { useEffect, useState } from "react";
import Login2 from './components/login/Login2';
import Header from './components/products/Header';
import ProductList from './components/products/product-list';
import Basket from './components/products/Basket';

function App() {
    // const [isE, setIsE] = useState(true);
    

    // const loadLogin = () => {
    //     if (isE) {
    //         return (
    //             <Login/>
    //         );
    //     }
    // }
    // const onclickHide = () => {
    //     setIsE(false)
    // }

    return (
        <>
            {/*<List/>*/}
            {/*<AddMovie/>*/}
            {/*<EditMovie/> */}
            {/* <button type="button" className="mt-5 btn btn-primary"
                    onClick={() => onclickHide()}>Hide</button>
            {loadLogin()} */}
            {/* <Login2/> */}
            <Header />
            <div>
                <ProductList />
                <Basket
                   
                 />
                
            </div>
        </>
    );
}

export default App;
