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
exports.FixedAssetEndBalance = exports.FixedAssetEndBalanceField = exports.createFixedAssetEndBalance = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[FixedAssetEndBalance.build]] instead.
 */
function createFixedAssetEndBalance(json) {
    return FixedAssetEndBalance.build(json);
}
exports.createFixedAssetEndBalance = createFixedAssetEndBalance;
/**
 * FixedAssetEndBalanceField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var FixedAssetEndBalanceField = /** @class */ (function (_super) {
    __extends(FixedAssetEndBalanceField, _super);
    /**
     * Creates an instance of FixedAssetEndBalanceField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function FixedAssetEndBalanceField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, FixedAssetEndBalance) || this;
        /**
         * Representation of the [[FixedAssetEndBalance.historicalApc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.historicalApc = new core_1.ComplexTypeNumberPropertyField('HistoricalAPC', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.acquisitionCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.acquisitionCost = new core_1.ComplexTypeNumberPropertyField('AcquisitionCost', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.netBookValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.netBookValue = new core_1.ComplexTypeNumberPropertyField('NetBookValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.historicalNbv]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.historicalNbv = new core_1.ComplexTypeNumberPropertyField('HistoricalNBV', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.ordinaryDepreciationValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ordinaryDepreciationValue = new core_1.ComplexTypeNumberPropertyField('OrdinaryDepreciationValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.unplanedDepreciationValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unplanedDepreciationValue = new core_1.ComplexTypeNumberPropertyField('UnplanedDepreciationValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.specialDepreciationValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.specialDepreciationValue = new core_1.ComplexTypeNumberPropertyField('SpecialDepreciationValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.writeUp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.writeUp = new core_1.ComplexTypeNumberPropertyField('WriteUp', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.salvageValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salvageValue = new core_1.ComplexTypeNumberPropertyField('SalvageValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        return _this;
    }
    return FixedAssetEndBalanceField;
}(core_1.ComplexTypeField));
exports.FixedAssetEndBalanceField = FixedAssetEndBalanceField;
var FixedAssetEndBalance;
(function (FixedAssetEndBalance) {
    /**
     * Metadata information on all properties of the `FixedAssetEndBalance` complex type.
     */
    FixedAssetEndBalance._propertyMetadata = [{
            originalName: 'HistoricalAPC',
            name: 'historicalApc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AcquisitionCost',
            name: 'acquisitionCost',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'NetBookValue',
            name: 'netBookValue',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'HistoricalNBV',
            name: 'historicalNbv',
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
            originalName: 'SalvageValue',
            name: 'salvageValue',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, FixedAssetEndBalance);
    }
    FixedAssetEndBalance.build = build;
})(FixedAssetEndBalance = exports.FixedAssetEndBalance || (exports.FixedAssetEndBalance = {}));
//# sourceMappingURL=FixedAssetEndBalance.js.map