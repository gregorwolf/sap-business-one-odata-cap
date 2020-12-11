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
exports.DeductionTaxHierarchiesLine = exports.DeductionTaxHierarchiesLineField = exports.createDeductionTaxHierarchiesLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DeductionTaxHierarchiesLine.build]] instead.
 */
function createDeductionTaxHierarchiesLine(json) {
    return DeductionTaxHierarchiesLine.build(json);
}
exports.createDeductionTaxHierarchiesLine = createDeductionTaxHierarchiesLine;
/**
 * DeductionTaxHierarchiesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DeductionTaxHierarchiesLineField = /** @class */ (function (_super) {
    __extends(DeductionTaxHierarchiesLineField, _super);
    /**
     * Creates an instance of DeductionTaxHierarchiesLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DeductionTaxHierarchiesLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DeductionTaxHierarchiesLine) || this;
        /**
         * Representation of the [[DeductionTaxHierarchiesLine.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new core_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DeductionTaxHierarchiesLine.deductionPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductionPercent = new core_1.ComplexTypeNumberPropertyField('DeductionPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DeductionTaxHierarchiesLine.maximumTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maximumTotal = new core_1.ComplexTypeNumberPropertyField('MaximumTotal', _this, 'Edm.Double');
        return _this;
    }
    return DeductionTaxHierarchiesLineField;
}(core_1.ComplexTypeField));
exports.DeductionTaxHierarchiesLineField = DeductionTaxHierarchiesLineField;
var DeductionTaxHierarchiesLine;
(function (DeductionTaxHierarchiesLine) {
    /**
     * Metadata information on all properties of the `DeductionTaxHierarchiesLine` complex type.
     */
    DeductionTaxHierarchiesLine._propertyMetadata = [{
            originalName: 'RowNumber',
            name: 'rowNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DeductionPercent',
            name: 'deductionPercent',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'MaximumTotal',
            name: 'maximumTotal',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DeductionTaxHierarchiesLine);
    }
    DeductionTaxHierarchiesLine.build = build;
})(DeductionTaxHierarchiesLine = exports.DeductionTaxHierarchiesLine || (exports.DeductionTaxHierarchiesLine = {}));
//# sourceMappingURL=DeductionTaxHierarchiesLine.js.map