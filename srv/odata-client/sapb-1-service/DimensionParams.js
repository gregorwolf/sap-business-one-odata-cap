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
exports.DimensionParams = exports.DimensionParamsField = exports.createDimensionParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DimensionParams.build]] instead.
 */
function createDimensionParams(json) {
    return DimensionParams.build(json);
}
exports.createDimensionParams = createDimensionParams;
/**
 * DimensionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DimensionParamsField = /** @class */ (function (_super) {
    __extends(DimensionParamsField, _super);
    /**
     * Creates an instance of DimensionParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DimensionParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DimensionParams) || this;
        /**
         * Representation of the [[DimensionParams.dimensionCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dimensionCode = new core_1.ComplexTypeNumberPropertyField('DimensionCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DimensionParams.dimensionName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dimensionName = new core_1.ComplexTypeStringPropertyField('DimensionName', _this, 'Edm.String');
        return _this;
    }
    return DimensionParamsField;
}(core_1.ComplexTypeField));
exports.DimensionParamsField = DimensionParamsField;
var DimensionParams;
(function (DimensionParams) {
    /**
     * Metadata information on all properties of the `DimensionParams` complex type.
     */
    DimensionParams._propertyMetadata = [{
            originalName: 'DimensionCode',
            name: 'dimensionCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DimensionName',
            name: 'dimensionName',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DimensionParams);
    }
    DimensionParams.build = build;
})(DimensionParams = exports.DimensionParams || (exports.DimensionParams = {}));
//# sourceMappingURL=DimensionParams.js.map