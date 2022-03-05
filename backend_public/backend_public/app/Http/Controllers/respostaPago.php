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
            $pedido = $miObj->getParameter("Ds_Order");



            $idProvisional = DB::select("select obres.id_obres from obres where obres.codi_ordre =" .$pedido);
            $idObra =  $idProvisional[0]->id_obres;
            $nom = DB::select("select obres.nom from obres where obres.id_obres =" .$idObra);
            $nomObra =  $nom[0]->nom;
            $preu = DB::select("select obres.preu from obres where obres.id_obres =" .$idObra);
            $preuObra =  $preu[0]->preu;

                if(!empty($idObra)){
                    DB::select("update obres set obres.venut = 1 where obres.id_obres =" .$idObra);

                }
                    return \redirect('https://www.artgalleryxisca.me/valid/'.$nomObra.'/'.$preuObra.'/'.$pedido);

        } else {
                echo "FIRMA KO";
            }
        }
    }

}
