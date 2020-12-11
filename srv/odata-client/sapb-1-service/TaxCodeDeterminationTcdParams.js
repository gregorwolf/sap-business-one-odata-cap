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
exports.TaxCodeDeterminationTcdParams = exports.TaxCodeDeterminationTcdParamsField = exports.createTaxCodeDeterminationTcdParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TaxCodeDeterminationTcdParams.build]] instead.
 */
function createTaxCodeDeterminationTcdParams(json) {
    return TaxCodeDeterminationTcdParams.build(json);
}
exports.createTaxCodeDeterminationTcdParams = createTaxCodeDeterminationTcdParams;
/**
 * TaxCodeDeterminationTcdParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxCodeDeterminationTcdParamsField = /** @class */ (function (_super) {
    __extends(TaxCodeDeterminationTcdParamsField, _super);
    /**
     * Creates an instance of TaxCodeDeterminationTcdParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TaxCodeDeterminationTcdParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TaxCodeDeterminationTcdParams) || this;
        /**
         * Representation of the [[TaxCodeDeterminationTcdParams.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new core_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        return _this;
    }
    return TaxCodeDeterminationTcdParamsField;
}(core_1.ComplexTypeField));
exports.TaxCodeDeterminationTcdParamsField = TaxCodeDeterminationTcdParamsField;
var TaxCodeDeterminationTcdParams;
(function (TaxCodeDeterminationTcdParams) {
    /**
     * Metadata information on all properties of the `TaxCodeDeterminationTcdParams` complex type.
     */
    TaxCodeDeterminationTcdParams._propertyMetadata = [{
            originalName: 'AbsId',
            name: 'absId',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TaxCodeDeterminationTcdParams);
    }
    TaxCodeDeterminationTcdParams.build = build;
})(TaxCodeDeterminationTcdParams = exports.TaxCodeDeterminationTcdParams || (exports.TaxCodeDeterminationTcdParams = {}));
//# sourceMappingURL=TaxCodeDeterminationTcdParams.js.map