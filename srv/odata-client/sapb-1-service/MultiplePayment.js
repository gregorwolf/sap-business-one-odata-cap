"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiplePayment = exports.MultiplePaymentField = exports.createMultiplePayment = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[MultiplePayment.build]] instead.
 */
function createMultiplePayment(json) {
    return MultiplePayment.build(json);
}
exports.createMultiplePayment = createMultiplePayment;
/**
 * MultiplePaymentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MultiplePaymentField = /** @class */ (function (_super) {
    __extends(MultiplePaymentField, _super);
    function MultiplePaymentField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[MultiplePayment.bankStatmentLineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankStatmentLineId = new v4_1.ComplexTypeNumberPropertyField('BankStatmentLineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[MultiplePayment.listLineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.listLineId = new v4_1.ComplexTypeNumberPropertyField('ListLineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[MultiplePayment.documentIdentifier]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentIdentifier = new v4_1.ComplexTypeStringPropertyField('DocumentIdentifier', _this, 'Edm.String');
        /**
         * Representation of the [[MultiplePayment.amountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountLc = new v4_1.ComplexTypeNumberPropertyField('AmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[MultiplePayment.amountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountFc = new v4_1.ComplexTypeNumberPropertyField('AmountFC', _this, 'Edm.Double');
        return _this;
    }
    return MultiplePaymentField;
}(v4_1.ComplexTypeField));
exports.MultiplePaymentField = MultiplePaymentField;
var MultiplePayment;
(function (MultiplePayment) {
    function build(json) {
        return v4_1.createComplexType(json, {
            BankStatmentLineID: function (bankStatmentLineId) { return ({ bankStatmentLineId: v4_1.edmToTs(bankStatmentLineId, 'Edm.Int32') }); },
            ListLineID: function (listLineId) { return ({ listLineId: v4_1.edmToTs(listLineId, 'Edm.Int32') }); },
            DocumentIdentifier: function (documentIdentifier) { return ({ documentIdentifier: v4_1.edmToTs(documentIdentifier, 'Edm.String') }); },
            AmountLC: function (amountLc) { return ({ amountLc: v4_1.edmToTs(amountLc, 'Edm.Double') }); },
            AmountFC: function (amountFc) { return ({ amountFc: v4_1.edmToTs(amountFc, 'Edm.Double') }); }
        });
    }
    MultiplePayment.build = build;
})(MultiplePayment = exports.MultiplePayment || (exports.MultiplePayment = {}));
//# sourceMappingURL=MultiplePayment.js.map