"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function ItemIntrastatExtensionField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemIntrastatExtension.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[ItemIntrastatExtension.commodityCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.commodityCode = new v4_1.ComplexTypeNumberPropertyField('CommodityCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.supplementaryUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.supplementaryUnit = new v4_1.ComplexTypeNumberPropertyField('SupplementaryUnit', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.factorOfSupplementaryUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factorOfSupplementaryUnit = new v4_1.ComplexTypeNumberPropertyField('FactorOfSupplementaryUnit', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemIntrastatExtension.importRegionState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importRegionState = new v4_1.ComplexTypeNumberPropertyField('ImportRegionState', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.exportRegionState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportRegionState = new v4_1.ComplexTypeNumberPropertyField('ExportRegionState', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.importNatureOfTransaction]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importNatureOfTransaction = new v4_1.ComplexTypeNumberPropertyField('ImportNatureOfTransaction', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.exportNatureOfTransaction]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportNatureOfTransaction = new v4_1.ComplexTypeNumberPropertyField('ExportNatureOfTransaction', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.importStatisticalProcedure]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importStatisticalProcedure = new v4_1.ComplexTypeNumberPropertyField('ImportStatisticalProcedure', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.exportStatisticalProcedure]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportStatisticalProcedure = new v4_1.ComplexTypeNumberPropertyField('ExportStatisticalProcedure', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.countryOfOrigin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countryOfOrigin = new v4_1.ComplexTypeStringPropertyField('CountryOfOrigin', _this, 'Edm.String');
        /**
         * Representation of the [[ItemIntrastatExtension.serviceCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serviceCode = new v4_1.ComplexTypeNumberPropertyField('ServiceCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemIntrastatExtension.importRegionCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importRegionCountry = new v4_1.ComplexTypeStringPropertyField('ImportRegionCountry', _this, 'Edm.String');
        /**
         * Representation of the [[ItemIntrastatExtension.exportRegionCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportRegionCountry = new v4_1.ComplexTypeStringPropertyField('ExportRegionCountry', _this, 'Edm.String');
        /**
         * Representation of the [[ItemIntrastatExtension.statisticalCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.statisticalCode = new v4_1.ComplexTypeStringPropertyField('StatisticalCode', _this, 'Edm.String');
        return _this;
    }
    return ItemIntrastatExtensionField;
}(v4_1.ComplexTypeField));
exports.ItemIntrastatExtensionField = ItemIntrastatExtensionField;
var ItemIntrastatExtension;
(function (ItemIntrastatExtension) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            CommodityCode: function (commodityCode) { return ({ commodityCode: v4_1.edmToTs(commodityCode, 'Edm.Int32') }); },
            SupplementaryUnit: function (supplementaryUnit) { return ({ supplementaryUnit: v4_1.edmToTs(supplementaryUnit, 'Edm.Int32') }); },
            FactorOfSupplementaryUnit: function (factorOfSupplementaryUnit) { return ({ factorOfSupplementaryUnit: v4_1.edmToTs(factorOfSupplementaryUnit, 'Edm.Double') }); },
            ImportRegionState: function (importRegionState) { return ({ importRegionState: v4_1.edmToTs(importRegionState, 'Edm.Int32') }); },
            ExportRegionState: function (exportRegionState) { return ({ exportRegionState: v4_1.edmToTs(exportRegionState, 'Edm.Int32') }); },
            ImportNatureOfTransaction: function (importNatureOfTransaction) { return ({ importNatureOfTransaction: v4_1.edmToTs(importNatureOfTransaction, 'Edm.Int32') }); },
            ExportNatureOfTransaction: function (exportNatureOfTransaction) { return ({ exportNatureOfTransaction: v4_1.edmToTs(exportNatureOfTransaction, 'Edm.Int32') }); },
            ImportStatisticalProcedure: function (importStatisticalProcedure) { return ({ importStatisticalProcedure: v4_1.edmToTs(importStatisticalProcedure, 'Edm.Int32') }); },
            ExportStatisticalProcedure: function (exportStatisticalProcedure) { return ({ exportStatisticalProcedure: v4_1.edmToTs(exportStatisticalProcedure, 'Edm.Int32') }); },
            CountryOfOrigin: function (countryOfOrigin) { return ({ countryOfOrigin: v4_1.edmToTs(countryOfOrigin, 'Edm.String') }); },
            ServiceCode: function (serviceCode) { return ({ serviceCode: v4_1.edmToTs(serviceCode, 'Edm.Int32') }); },
            ImportRegionCountry: function (importRegionCountry) { return ({ importRegionCountry: v4_1.edmToTs(importRegionCountry, 'Edm.String') }); },
            ExportRegionCountry: function (exportRegionCountry) { return ({ exportRegionCountry: v4_1.edmToTs(exportRegionCountry, 'Edm.String') }); },
            StatisticalCode: function (statisticalCode) { return ({ statisticalCode: v4_1.edmToTs(statisticalCode, 'Edm.String') }); }
        });
    }
    ItemIntrastatExtension.build = build;
})(ItemIntrastatExtension = exports.ItemIntrastatExtension || (exports.ItemIntrastatExtension = {}));
//# sourceMappingURL=ItemIntrastatExtension.js.map