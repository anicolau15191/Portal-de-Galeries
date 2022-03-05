<?php

namespace App\Http\Controllers;
use App\Models\Obres;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\RedsysAPI;

class Pago extends Controller
{

public function pago(){

        $id = $_GET['idObra'];
        $preuObra = DB::select("select obres.preu from obres where obres.id_obres =".$id);

        $amount = $preuObra[0]->preu;


       $miObj = new RedsysAPI;

        $url_tpv = 'https://sis-t.redsys.es:25443/sis/realizarPago';
        $version = "HMAC_SHA256_V1";
        $clave = "sq7HjrUOBfKmC576ILgskD5srU870gJ7";
        $name = 'Art Gallery';
        $code = "999008881";
        $terminal = '1';
        $order = date('ymdHis');
        $amount = $amount * 100;
        $currency = '978';
        $consumerlng = '001';
        $transactionType = '0';
        $urlMerchant = 'https://www.artgalleryxisca.me';
        $urlweb_ok = 'https://www.api.artgalleryxisca.me/resposta';
        $urlweb_ko = 'https://www.artgalleryxisca.me/';

        $miObj->setParameter("DS_MERCHANT_AMOUNT", $amount);
        $miObj->setParameter("DS_MERCHANT_CURRENCY", $currency);
        $miObj->setParameter("DS_MERCHANT_ORDER", $order);
        $miObj->setParameter("DS_MERCHANT_MERCHANTCODE", $code);
        $miObj->setParameter("DS_MERCHANT_TERMINAL", $terminal);
        $miObj->setParameter("DS_MERCHANT_TRANSACTIONTYPE", $transactionType);
        $miObj->setParameter("DS_MERCHANT_MERCHANTURL", $urlMerchant);
        $miObj->setParameter("DS_MERCHANT_URLOK", $urlweb_ok);
        $miObj->setParameter("DS_MERCHANT_URLKO", $urlweb_ko);
        $miObj->setParameter("DS_MERCHANT_CONSUMERLANGUAGE", $consumerlng);

        $params = $miObj->createMerchantParameters();
        $signature = $miObj->createMerchantSignature($clave);

        DB::select("update obres set obres.codi_ordre =". $order ." where obres.id_obres=".$id);

        ?>
        <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
        <form id="realizarPago" action="<?php echo $url_tpv; ?>" method="post">
            <input type='hidden' name='Ds_SignatureVersion' value='<?php echo $version; ?>'>
            <input type='hidden' name='Ds_MerchantParameters' value='<?php echo $params; ?>'>
            <input type='hidden' name='Ds_Signature' value='<?php echo $signature; ?>'>
        </form>
        <script>
            $(document).ready(function () {
                $("#realizarPago").submit();
            });
        </script>
        <?php



}

function update ($idObra){
    DB::table('obres')
    ->where('id_obres',$idObra)
        ->update(['venut' => 1]);
}

}
