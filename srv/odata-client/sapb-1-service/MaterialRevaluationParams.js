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
exports.MaterialRevaluationParams = exports.MaterialRevaluationParamsField = exports.createMaterialRevaluationParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationParams.build]] instead.
 */
function createMaterialRevaluationParams(json) {
    return MaterialRevaluationParams.build(json);
}
exports.createMaterialRevaluationParams = createMaterialRevaluationParams;
/**
 * MaterialRevaluationParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MaterialRevaluationParamsField = /** @class */ (function (_super) {
    __extends(MaterialRevaluationParamsField, _super);
    /**
     * Creates an instance of MaterialRevaluationParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function MaterialRevaluationParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, MaterialRevaluationParams) || this;
        /**
         * Representation of the [[MaterialRevaluationParams.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        return _this;
    }
    return MaterialRevaluationParamsField;
}(core_1.ComplexTypeField));
exports.MaterialRevaluationParamsField = MaterialRevaluationParamsField;
var MaterialRevaluationParams;
(function (MaterialRevaluationParams) {
    /**
     * Metadata information on all properties of the `MaterialRevaluationParams` complex type.
     */
    MaterialRevaluationParams._propertyMetadata = [{
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, MaterialRevaluationParams);
    }
    MaterialRevaluationParams.build = build;
})(MaterialRevaluationParams = exports.MaterialRevaluationParams || (exports.MaterialRevaluationParams = {}));
//# sourceMappingURL=MaterialRevaluationParams.js.map