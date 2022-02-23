<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

class respostaPago extends Controller
{
    public function res(){
        $miObj = new RedsysAPI;


        if (!empty( $_GET ) ) {

        $version = $_GET["Ds_SignatureVersion"];
        $datos = $_GET["Ds_MerchantParameters"];
        $signatureRecibida = $_GET["Ds_Signature"];


        $decodec = $miObj->decodeMerchantParameters($datos);
        $kc = 'sq7HjrUOBfKmC576ILgskD5srU870gJ7'; //
        $firma = $miObj->createMerchantSignatureNotif($kc,$datos);

        if ($firma === $signatureRecibida){
            $data = $miObj->getParameter("Ds_Date");
            $hora = $miObj->getParameter("Ds_Hour");
            $pedido = $miObj->getParameter("Ds_Order");
            $import = $miObj->getParameter("Ds_Amount");


            $idProvisional = DB::select("select obres.id_obres from obres where obres.codi_ordre =" .$pedido);
            $idObra =  $idProvisional[0]->id_obres;

                if(!empty($idObra)){
                    DB::select("update obres set obres.venut = 1 where obres.id_obres =" .$idObra);

                }

                ?>
                <script>
                    window.location.href='http://www.artgalleryxisca.me/'
                </script>


<?php

        } else {
            echo "FIRMA KO";
        }
        }
    }

}
