<?php

    include "apiRedsys.php";
    $miObj = new RedsysAPI;

    $amount = 1000;
    //$amount = $_GET['amount'];
    $url_tpv = 'https://sis.redsys.es/sis/realizarPago';
    $version = "HMAC_SHA256_V1";
    $clave = "sq7HjrUOBfKmC576ILgskD5srU870gJ7"; //poner la clave SHA-256 facilitada por el banco
    $name = 'Art Gallery';
    $code = "999008881";
    $terminal = '1';
    $order = date('ymdHis');
    $amount = $amount * 100;
    $currency = '978';
    $consumerlng = '001';
    $transactionType = '0';
    $urlMerchant = 'http://www.artgalleryadria.me';
    $urlweb_ok = 'https://www.google.com/';
    $urlweb_ko = 'https://www.youtube.com/';

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
    ?>
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

?>
