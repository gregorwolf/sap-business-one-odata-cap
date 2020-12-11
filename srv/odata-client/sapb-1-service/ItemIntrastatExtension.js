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
exports.ItemIntrastatExtension = exports.ItemIntrastatExtensionField = exports.createItemIntrastatExtension = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ItemIntrastatExtension.build]] instead.
 */
function createItemIntrastatExtension(json) {
    return ItemIntrastatExtension.build(json);
}
exports.createItemIntrastatExtension = createItemIntrastatExtension;
/**
 * ItemIntrastatExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemIntrastatExtensionField = /** @class */ (function (_super) {
    __extends(ItemIntrastatExtensionField, _super);
    /**
     * Creates an instance of ItemIntrastatExtensionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ItemIntrastatExtensionField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ItemIntrastatExtension) || this;
        /**
         * Representation of the [[ItemIntrastatExtension.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[ItemIntrastatExtension.commodityCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.commodityCode = new core_1.ComplexTypeNumberPropertyField('CommodityCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.supplementaryUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.supplementaryUnit = new core_1.ComplexTypeNumberPropertyField('SupplementaryUnit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.factorOfSupplementaryUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factorOfSupplementaryUnit = new core_1.ComplexTypeNumberPropertyField('FactorOfSupplementaryUnit', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemIntrastatExtension.importRegionState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importRegionState = new core_1.ComplexTypeNumberPropertyField('ImportRegionState', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.exportRegionState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportRegionState = new core_1.ComplexTypeNumberPropertyField('ExportRegionState', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.importNatureOfTransaction]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importNatureOfTransaction = new core_1.ComplexTypeNumberPropertyField('ImportNatureOfTransaction', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.exportNatureOfTransaction]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportNatureOfTransaction = new core_1.ComplexTypeNumberPropertyField('ExportNatureOfTransaction', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.importStatisticalProcedure]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importStatisticalProcedure = new core_1.ComplexTypeNumberPropertyField('ImportStatisticalProcedure', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.exportStatisticalProcedure]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportStatisticalProcedure = new core_1.ComplexTypeNumberPropertyField('ExportStatisticalProcedure', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.countryOfOrigin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countryOfOrigin = new core_1.ComplexTypeStringPropertyField('CountryOfOrigin', _this, 'Edm.String');
        /**
         * Representation of the [[ItemIntrastatExtension.serviceCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serviceCode = new core_1.ComplexTypeNumberPropertyField('ServiceCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.type = new core_1.ComplexTypeEnumPropertyField('Type', _this);
        /**
         * Representation of the [[ItemIntrastatExtension.serviceSupplyMethod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serviceSupplyMethod = new core_1.ComplexTypeEnumPropertyField('ServiceSupplyMethod', _this);
        /**
         * Representation of the [[ItemIntrastatExtension.servicePaymentMethod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.servicePaymentMethod = new core_1.ComplexTypeEnumPropertyField('ServicePaymentMethod', _this);
        /**
         * Representation of the [[ItemIntrastatExtension.importRegionCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importRegionCountry = new core_1.ComplexTypeStringPropertyField('ImportRegionCountry', _this, 'Edm.String');
        /**
         * Representation of the [[ItemIntrastatExtension.exportRegionCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportRegionCountry = new core_1.ComplexTypeStringPropertyField('ExportRegionCountry', _this, 'Edm.String');
        /**
         * Representation of the [[ItemIntrastatExtension.useWeightInCalculation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useWeightInCalculation = new core_1.ComplexTypeEnumPropertyField('UseWeightInCalculation', _this);
        /**
         * Representation of the [[ItemIntrastatExtension.intrastatRelevant]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.intrastatRelevant = new core_1.ComplexTypeEnumPropertyField('IntrastatRelevant', _this);
        /**
         * Representation of the [[ItemIntrastatExtension.statisticalCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statisticalCode = new core_1.ComplexTypeStringPropertyField('StatisticalCode', _this, 'Edm.String');
        return _this;
    }
    return ItemIntrastatExtensionField;
}(core_1.ComplexTypeField));
exports.ItemIntrastatExtensionField = ItemIntrastatExtensionField;
var ItemIntrastatExtension;
(function (ItemIntrastatExtension) {
    /**
     * Metadata information on all properties of the `ItemIntrastatExtension` complex type.
     */
    ItemIntrastatExtension._propertyMetadata = [{
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CommodityCode',
            name: 'commodityCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SupplementaryUnit',
            name: 'supplementaryUnit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'FactorOfSupplementaryUnit',
            name: 'factorOfSupplementaryUnit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ImportRegionState',
            name: 'importRegionState',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ExportRegionState',
            name: 'exportRegionState',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ImportNatureOfTransaction',
            name: 'importNatureOfTransaction',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ExportNatureOfTransaction',
            name: 'exportNatureOfTransaction',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ImportStatisticalProcedure',
            name: 'importStatisticalProcedure',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ExportStatisticalProcedure',
            name: 'exportStatisticalProcedure',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CountryOfOrigin',
            name: 'countryOfOrigin',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ServiceCode',
            name: 'serviceCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Type',
            name: 'type',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ServiceSupplyMethod',
            name: 'serviceSupplyMethod',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ServicePaymentMethod',
            name: 'servicePaymentMethod',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ImportRegionCountry',
            name: 'importRegionCountry',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExportRegionCountry',
            name: 'exportRegionCountry',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UseWeightInCalculation',
            name: 'useWeightInCalculation',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'IntrastatRelevant',
            name: 'intrastatRelevant',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'StatisticalCode',
            name: 'statisticalCode',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ItemIntrastatExtension);
    }
    ItemIntrastatExtension.build = build;
})(ItemIntrastatExtension = exports.ItemIntrastatExtension || (exports.ItemIntrastatExtension = {}));
//# sourceMappingURL=ItemIntrastatExtension.js.map