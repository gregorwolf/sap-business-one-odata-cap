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
exports.BpWithholdingTax = exports.BpWithholdingTaxField = exports.createBpWithholdingTax = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BpWithholdingTax.build]] instead.
 */
function createBpWithholdingTax(json) {
    return BpWithholdingTax.build(json);
}
exports.createBpWithholdingTax = createBpWithholdingTax;
/**
 * BpWithholdingTaxField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpWithholdingTaxField = /** @class */ (function (_super) {
    __extends(BpWithholdingTaxField, _super);
    /**
     * Creates an instance of BpWithholdingTaxField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BpWithholdingTaxField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BpWithholdingTax) || this;
        /**
         * Representation of the [[BpWithholdingTax.wtCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtCode = new core_1.ComplexTypeStringPropertyField('WTCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpWithholdingTax.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        return _this;
    }
    return BpWithholdingTaxField;
}(core_1.ComplexTypeField));
exports.BpWithholdingTaxField = BpWithholdingTaxField;
var BpWithholdingTax;
(function (BpWithholdingTax) {
    /**
     * Metadata information on all properties of the `BpWithholdingTax` complex type.
     */
    BpWithholdingTax._propertyMetadata = [{
            originalName: 'WTCode',
            name: 'wtCode',
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
        return core_1.deserializeComplexTypeV4(json, BpWithholdingTax);
    }
    BpWithholdingTax.build = build;
})(BpWithholdingTax = exports.BpWithholdingTax || (exports.BpWithholdingTax = {}));
//# sourceMappingURL=BpWithholdingTax.js.map