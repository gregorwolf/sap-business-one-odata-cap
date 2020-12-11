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
exports.FixedAssetValues = exports.FixedAssetValuesField = exports.createFixedAssetValues = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[FixedAssetValues.build]] instead.
 */
function createFixedAssetValues(json) {
    return FixedAssetValues.build(json);
}
exports.createFixedAssetValues = createFixedAssetValues;
/**
 * FixedAssetValuesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var FixedAssetValuesField = /** @class */ (function (_super) {
    __extends(FixedAssetValuesField, _super);
    /**
     * Creates an instance of FixedAssetValuesField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function FixedAssetValuesField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, FixedAssetValues) || this;
        /**
         * Representation of the [[FixedAssetValues.transactionType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transactionType = new core_1.ComplexTypeEnumPropertyField('TransactionType', _this);
        /**
         * Representation of the [[FixedAssetValues.acquisitionCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.acquisitionCost = new core_1.ComplexTypeNumberPropertyField('AcquisitionCost', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.depreciationValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationValue = new core_1.ComplexTypeNumberPropertyField('DepreciationValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.netBookValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.netBookValue = new core_1.ComplexTypeNumberPropertyField('NetBookValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.ordinaryDepreciationValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ordinaryDepreciationValue = new core_1.ComplexTypeNumberPropertyField('OrdinaryDepreciationValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.unplanedDepreciationValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unplanedDepreciationValue = new core_1.ComplexTypeNumberPropertyField('UnplanedDepreciationValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.specialDepreciationValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.specialDepreciationValue = new core_1.ComplexTypeNumberPropertyField('SpecialDepreciationValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.writeUp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.writeUp = new core_1.ComplexTypeNumberPropertyField('WriteUp', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.appreciation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appreciation = new core_1.ComplexTypeNumberPropertyField('Appreciation', _this, 'Edm.Double');
        return _this;
    }
    return FixedAssetValuesField;
}(core_1.ComplexTypeField));
exports.FixedAssetValuesField = FixedAssetValuesField;
var FixedAssetValues;
(function (FixedAssetValues) {
    /**
     * Metadata information on all properties of the `FixedAssetValues` complex type.
     */
    FixedAssetValues._propertyMetadata = [{
            originalName: 'TransactionType',
            name: 'transactionType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AcquisitionCost',
            name: 'acquisitionCost',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DepreciationValue',
            name: 'depreciationValue',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'NetBookValue',
            name: 'netBookValue',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'OrdinaryDepreciationValue',
            name: 'ordinaryDepreciationValue',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'UnplanedDepreciationValue',
            name: 'unplanedDepreciationValue',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SpecialDepreciationValue',
            name: 'specialDepreciationValue',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WriteUp',
            name: 'writeUp',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Appreciation',
            name: 'appreciation',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, FixedAssetValues);
    }
    FixedAssetValues.build = build;
})(FixedAssetValues = exports.FixedAssetValues || (exports.FixedAssetValues = {}));
//# sourceMappingURL=FixedAssetValues.js.map