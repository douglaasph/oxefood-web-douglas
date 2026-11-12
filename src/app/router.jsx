import { BrowserRouter, Route, Routes } from "react-router-dom";

import AuthenticationForm from "../features/authentication/page/AuthenticationForm";
import ClienteForm from "../features/cliente/page/ClienteForm";
import ClientePage from "../features/cliente/page/ClientePage";
import EmpresaForm from "../features/empresa/page/EmpresaForm";
import EmpresaPage from "../features/empresa/page/EmpresaPage";
import ProdutoForm from "../features/produto/page/ProdutoForm";
import ProdutoPage from "../features/produto/page/ProdutoPage";
import ProtectedRoute from "../shared/util/ProtectedRoute";


export default function Router() {

   return (

       <BrowserRouter>
           <Routes>
               <Route 
                    path="/cliente" 
                    element={
                        <ProtectedRoute>
                            <ClientePage />
                        </ProtectedRoute>
                    } 
                />
           </Routes>

           <Routes>
               <Route path="/cliente-form/:idCliente?" element={<ClienteForm />} />
           </Routes>

           <Routes>
               <Route path="/produto" element={<ProdutoPage />} />
           </Routes>

           <Routes>
               <Route path="/produto-form" element={<ProdutoForm />} />
           </Routes>

           <Routes>
               <Route path="/empresa" element={<EmpresaPage />} />
           </Routes>

            <Routes>
               <Route path="/empresa-form" element={<EmpresaForm />} />
           </Routes>

           <Routes>
                <Route
                    path="/home" 
                    element={
                        <ProtectedRoute>
                            <HomePage />
                        </ProtectedRoute>
                    } 
                />
           </Routes>
           
           <Routes>
                <Route path="/" element={<AuthenticationForm />} />
            </Routes>

            <Routes>

            </Routes>
       </BrowserRouter>

   );
}
