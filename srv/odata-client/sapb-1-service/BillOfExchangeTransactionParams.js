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
exports.BillOfExchangeTransactionParams = exports.BillOfExchangeTransactionParamsField = exports.createBillOfExchangeTransactionParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransactionParams.build]] instead.
 */
function createBillOfExchangeTransactionParams(json) {
    return BillOfExchangeTransactionParams.build(json);
}
exports.createBillOfExchangeTransactionParams = createBillOfExchangeTransactionParams;
/**
 * BillOfExchangeTransactionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BillOfExchangeTransactionParamsField = /** @class */ (function (_super) {
    __extends(BillOfExchangeTransactionParamsField, _super);
    function BillOfExchangeTransactionParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BillOfExchangeTransactionParams.boeTransactionkey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boeTransactionkey = new v4_1.ComplexTypeNumberPropertyField('BOETransactionkey', _this, 'Edm.Int32');
        return _this;
    }
    return BillOfExchangeTransactionParamsField;
}(v4_1.ComplexTypeField));
exports.BillOfExchangeTransactionParamsField = BillOfExchangeTransactionParamsField;
var BillOfExchangeTransactionParams;
(function (BillOfExchangeTransactionParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            BOETransactionkey: function (boeTransactionkey) { return ({ boeTransactionkey: v4_1.edmToTs(boeTransactionkey, 'Edm.Int32') }); }
        });
    }
    BillOfExchangeTransactionParams.build = build;
})(BillOfExchangeTransactionParams = exports.BillOfExchangeTransactionParams || (exports.BillOfExchangeTransactionParams = {}));
//# sourceMappingURL=BillOfExchangeTransactionParams.js.map