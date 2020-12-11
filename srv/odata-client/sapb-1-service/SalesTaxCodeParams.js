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
exports.SalesTaxCodeParams = exports.SalesTaxCodeParamsField = exports.createSalesTaxCodeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SalesTaxCodeParams.build]] instead.
 */
function createSalesTaxCodeParams(json) {
    return SalesTaxCodeParams.build(json);
}
exports.createSalesTaxCodeParams = createSalesTaxCodeParams;
/**
 * SalesTaxCodeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesTaxCodeParamsField = /** @class */ (function (_super) {
    __extends(SalesTaxCodeParamsField, _super);
    /**
     * Creates an instance of SalesTaxCodeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SalesTaxCodeParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SalesTaxCodeParams) || this;
        /**
         * Representation of the [[SalesTaxCodeParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        return _this;
    }
    return SalesTaxCodeParamsField;
}(core_1.ComplexTypeField));
exports.SalesTaxCodeParamsField = SalesTaxCodeParamsField;
var SalesTaxCodeParams;
(function (SalesTaxCodeParams) {
    /**
     * Metadata information on all properties of the `SalesTaxCodeParams` complex type.
     */
    SalesTaxCodeParams._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SalesTaxCodeParams);
    }
    SalesTaxCodeParams.build = build;
})(SalesTaxCodeParams = exports.SalesTaxCodeParams || (exports.SalesTaxCodeParams = {}));
//# sourceMappingURL=SalesTaxCodeParams.js.map