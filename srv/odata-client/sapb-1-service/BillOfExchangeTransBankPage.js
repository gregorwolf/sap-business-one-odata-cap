"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillOfExchangeTransBankPage = exports.BillOfExchangeTransBankPageField = exports.createBillOfExchangeTransBankPage = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransBankPage.build]] instead.
 */
function createBillOfExchangeTransBankPage(json) {
    return BillOfExchangeTransBankPage.build(json);
}
exports.createBillOfExchangeTransBankPage = createBillOfExchangeTransBankPage;
/**
 * BillOfExchangeTransBankPageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BillOfExchangeTransBankPageField = /** @class */ (function (_super) {
    __extends(BillOfExchangeTransBankPageField, _super);
    /**
     * Creates an instance of BillOfExchangeTransBankPageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BillOfExchangeTransBankPageField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BillOfExchangeTransBankPage) || this;
        /**
         * Representation of the [[BillOfExchangeTransBankPage.accountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCode = new core_1.ComplexTypeStringPropertyField('AccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchangeTransBankPage.sequence]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequence = new core_1.ComplexTypeNumberPropertyField('Sequence', _this, 'Edm.Int32');
        return _this;
    }
    return BillOfExchangeTransBankPageField;
}(core_1.ComplexTypeField));
exports.BillOfExchangeTransBankPageField = BillOfExchangeTransBankPageField;
var BillOfExchangeTransBankPage;
(function (BillOfExchangeTransBankPage) {
    /**
     * Metadata information on all properties of the `BillOfExchangeTransBankPage` complex type.
     */
    BillOfExchangeTransBankPage._propertyMetadata = [{
            originalName: 'AccountCode',
            name: 'accountCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Sequence',
            name: 'sequence',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BillOfExchangeTransBankPage);
    }
    BillOfExchangeTransBankPage.build = build;
})(BillOfExchangeTransBankPage = exports.BillOfExchangeTransBankPage || (exports.BillOfExchangeTransBankPage = {}));
//# sourceMappingURL=BillOfExchangeTransBankPage.js.map