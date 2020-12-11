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
exports.ItemDepreciationParameter = exports.ItemDepreciationParameterField = exports.createItemDepreciationParameter = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ItemDepreciationParameter.build]] instead.
 */
function createItemDepreciationParameter(json) {
    return ItemDepreciationParameter.build(json);
}
exports.createItemDepreciationParameter = createItemDepreciationParameter;
/**
 * ItemDepreciationParameterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemDepreciationParameterField = /** @class */ (function (_super) {
    __extends(ItemDepreciationParameterField, _super);
    /**
     * Creates an instance of ItemDepreciationParameterField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ItemDepreciationParameterField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ItemDepreciationParameter) || this;
        /**
         * Representation of the [[ItemDepreciationParameter.fiscalYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fiscalYear = new core_1.ComplexTypeStringPropertyField('FiscalYear', _this, 'Edm.String');
        /**
         * Representation of the [[ItemDepreciationParameter.depreciationArea]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationArea = new core_1.ComplexTypeStringPropertyField('DepreciationArea', _this, 'Edm.String');
        /**
         * Representation of the [[ItemDepreciationParameter.depreciationStartDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationStartDate = new core_1.ComplexTypeDatePropertyField('DepreciationStartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemDepreciationParameter.depreciationEndDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationEndDate = new core_1.ComplexTypeDatePropertyField('DepreciationEndDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemDepreciationParameter.usefulLife]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.usefulLife = new core_1.ComplexTypeNumberPropertyField('UsefulLife', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemDepreciationParameter.remainingLife]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remainingLife = new core_1.ComplexTypeNumberPropertyField('RemainingLife', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemDepreciationParameter.depreciationType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationType = new core_1.ComplexTypeStringPropertyField('DepreciationType', _this, 'Edm.String');
        /**
         * Representation of the [[ItemDepreciationParameter.totalUnitsInUsefulLife]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalUnitsInUsefulLife = new core_1.ComplexTypeNumberPropertyField('TotalUnitsInUsefulLife', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemDepreciationParameter.remainingUnits]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remainingUnits = new core_1.ComplexTypeNumberPropertyField('RemainingUnits', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemDepreciationParameter.standardUnits]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.standardUnits = new core_1.ComplexTypeNumberPropertyField('StandardUnits', _this, 'Edm.Int32');
        return _this;
    }
    return ItemDepreciationParameterField;
}(core_1.ComplexTypeField));
exports.ItemDepreciationParameterField = ItemDepreciationParameterField;
var ItemDepreciationParameter;
(function (ItemDepreciationParameter) {
    /**
     * Metadata information on all properties of the `ItemDepreciationParameter` complex type.
     */
    ItemDepreciationParameter._propertyMetadata = [{
            originalName: 'FiscalYear',
            name: 'fiscalYear',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DepreciationArea',
            name: 'depreciationArea',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DepreciationStartDate',
            name: 'depreciationStartDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'DepreciationEndDate',
            name: 'depreciationEndDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'UsefulLife',
            name: 'usefulLife',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RemainingLife',
            name: 'remainingLife',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DepreciationType',
            name: 'depreciationType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TotalUnitsInUsefulLife',
            name: 'totalUnitsInUsefulLife',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RemainingUnits',
            name: 'remainingUnits',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StandardUnits',
            name: 'standardUnits',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ItemDepreciationParameter);
    }
    ItemDepreciationParameter.build = build;
})(ItemDepreciationParameter = exports.ItemDepreciationParameter || (exports.ItemDepreciationParameter = {}));
//# sourceMappingURL=ItemDepreciationParameter.js.map