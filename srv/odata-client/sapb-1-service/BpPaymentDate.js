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
exports.BpPaymentDate = exports.BpPaymentDateField = exports.createBpPaymentDate = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BpPaymentDate.build]] instead.
 */
function createBpPaymentDate(json) {
    return BpPaymentDate.build(json);
}
exports.createBpPaymentDate = createBpPaymentDate;
/**
 * BpPaymentDateField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpPaymentDateField = /** @class */ (function (_super) {
    __extends(BpPaymentDateField, _super);
    /**
     * Creates an instance of BpPaymentDateField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BpPaymentDateField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BpPaymentDate) || this;
        /**
         * Representation of the [[BpPaymentDate.paymentDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentDate = new core_1.ComplexTypeStringPropertyField('PaymentDate', _this, 'Edm.String');
        /**
         * Representation of the [[BpPaymentDate.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        return _this;
    }
    return BpPaymentDateField;
}(core_1.ComplexTypeField));
exports.BpPaymentDateField = BpPaymentDateField;
var BpPaymentDate;
(function (BpPaymentDate) {
    /**
     * Metadata information on all properties of the `BpPaymentDate` complex type.
     */
    BpPaymentDate._propertyMetadata = [{
            originalName: 'PaymentDate',
            name: 'paymentDate',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPCode',
            name: 'bpCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BpPaymentDate);
    }
    BpPaymentDate.build = build;
})(BpPaymentDate = exports.BpPaymentDate || (exports.BpPaymentDate = {}));
//# sourceMappingURL=BpPaymentDate.js.map