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
exports.SalesTaxAuthorityParams = exports.SalesTaxAuthorityParamsField = exports.createSalesTaxAuthorityParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SalesTaxAuthorityParams.build]] instead.
 */
function createSalesTaxAuthorityParams(json) {
    return SalesTaxAuthorityParams.build(json);
}
exports.createSalesTaxAuthorityParams = createSalesTaxAuthorityParams;
/**
 * SalesTaxAuthorityParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesTaxAuthorityParamsField = /** @class */ (function (_super) {
    __extends(SalesTaxAuthorityParamsField, _super);
    /**
     * Creates an instance of SalesTaxAuthorityParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SalesTaxAuthorityParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SalesTaxAuthorityParams) || this;
        /**
         * Representation of the [[SalesTaxAuthorityParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[SalesTaxAuthorityParams.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeNumberPropertyField('Type', _this, 'Edm.Int32');
        return _this;
    }
    return SalesTaxAuthorityParamsField;
}(core_1.ComplexTypeField));
exports.SalesTaxAuthorityParamsField = SalesTaxAuthorityParamsField;
var SalesTaxAuthorityParams;
(function (SalesTaxAuthorityParams) {
    /**
     * Metadata information on all properties of the `SalesTaxAuthorityParams` complex type.
     */
    SalesTaxAuthorityParams._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Type',
            name: 'type',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SalesTaxAuthorityParams);
    }
    SalesTaxAuthorityParams.build = build;
})(SalesTaxAuthorityParams = exports.SalesTaxAuthorityParams || (exports.SalesTaxAuthorityParams = {}));
//# sourceMappingURL=SalesTaxAuthorityParams.js.map