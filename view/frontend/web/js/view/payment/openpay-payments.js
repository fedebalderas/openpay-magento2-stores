/**
 * Openpay_Stores Magento JS component
 *
 * @category    Openpay
 * @package     Openpay_Stores
 * @author      Federico Balderas
 * @copyright   Openpay (http://openpay.mx)
 * @license     http://www.apache.org/licenses/LICENSE-2.0  Apache License Version 2.0
 */
/*browser:true*/
/*global define*/
define(
    [
        'uiComponent',
        'Magento_Checkout/js/model/payment/renderer-list'
    ],
    function (
        Component,
        rendererList
    ) {
        'use strict';
        rendererList.push(            
            {
                type: 'openpay_stores',
                component: 'Openpay_Stores/js/view/payment/method-renderer/cc-form'
            }
        );
        /** Add view logic here if needed */
        return Component.extend({});
    }
);