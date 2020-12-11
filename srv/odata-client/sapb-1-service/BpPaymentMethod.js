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
exports.BpPaymentMethod = exports.BpPaymentMethodField = exports.createBpPaymentMethod = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BpPaymentMethod.build]] instead.
 */
function createBpPaymentMethod(json) {
    return BpPaymentMethod.build(json);
}
exports.createBpPaymentMethod = createBpPaymentMethod;
/**
 * BpPaymentMethodField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpPaymentMethodField = /** @class */ (function (_super) {
    __extends(BpPaymentMethodField, _super);
    /**
     * Creates an instance of BpPaymentMethodField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BpPaymentMethodField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BpPaymentMethod) || this;
        /**
         * Representation of the [[BpPaymentMethod.paymentMethodCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentMethodCode = new core_1.ComplexTypeStringPropertyField('PaymentMethodCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpPaymentMethod.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new core_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpPaymentMethod.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        return _this;
    }
    return BpPaymentMethodField;
}(core_1.ComplexTypeField));
exports.BpPaymentMethodField = BpPaymentMethodField;
var BpPaymentMethod;
(function (BpPaymentMethod) {
    /**
     * Metadata information on all properties of the `BpPaymentMethod` complex type.
     */
    BpPaymentMethod._propertyMetadata = [{
            originalName: 'PaymentMethodCode',
            name: 'paymentMethodCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RowNumber',
            name: 'rowNumber',
            type: 'Edm.Int32',
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
        return core_1.deserializeComplexTypeV4(json, BpPaymentMethod);
    }
    BpPaymentMethod.build = build;
})(BpPaymentMethod = exports.BpPaymentMethod || (exports.BpPaymentMethod = {}));
//# sourceMappingURL=BpPaymentMethod.js.map