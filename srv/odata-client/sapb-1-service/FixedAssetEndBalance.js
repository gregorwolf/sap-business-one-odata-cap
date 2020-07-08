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
exports.FixedAssetEndBalance = exports.FixedAssetEndBalanceField = exports.createFixedAssetEndBalance = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function FixedAssetEndBalanceField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[FixedAssetEndBalance.historicalApc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.historicalApc = new v4_1.ComplexTypeNumberPropertyField('HistoricalAPC', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.acquisitionCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.acquisitionCost = new v4_1.ComplexTypeNumberPropertyField('AcquisitionCost', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.netBookValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.netBookValue = new v4_1.ComplexTypeNumberPropertyField('NetBookValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.historicalNbv]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.historicalNbv = new v4_1.ComplexTypeNumberPropertyField('HistoricalNBV', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.ordinaryDepreciationValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ordinaryDepreciationValue = new v4_1.ComplexTypeNumberPropertyField('OrdinaryDepreciationValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.unplanedDepreciationValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unplanedDepreciationValue = new v4_1.ComplexTypeNumberPropertyField('UnplanedDepreciationValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.specialDepreciationValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.specialDepreciationValue = new v4_1.ComplexTypeNumberPropertyField('SpecialDepreciationValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.writeUp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.writeUp = new v4_1.ComplexTypeNumberPropertyField('WriteUp', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.salvageValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salvageValue = new v4_1.ComplexTypeNumberPropertyField('SalvageValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetEndBalance.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        return _this;
    }
    return FixedAssetEndBalanceField;
}(v4_1.ComplexTypeField));
exports.FixedAssetEndBalanceField = FixedAssetEndBalanceField;
var FixedAssetEndBalance;
(function (FixedAssetEndBalance) {
    function build(json) {
        return v4_1.createComplexType(json, {
            HistoricalAPC: function (historicalApc) { return ({ historicalApc: v4_1.edmToTs(historicalApc, 'Edm.Double') }); },
            AcquisitionCost: function (acquisitionCost) { return ({ acquisitionCost: v4_1.edmToTs(acquisitionCost, 'Edm.Double') }); },
            NetBookValue: function (netBookValue) { return ({ netBookValue: v4_1.edmToTs(netBookValue, 'Edm.Double') }); },
            HistoricalNBV: function (historicalNbv) { return ({ historicalNbv: v4_1.edmToTs(historicalNbv, 'Edm.Double') }); },
            OrdinaryDepreciationValue: function (ordinaryDepreciationValue) { return ({ ordinaryDepreciationValue: v4_1.edmToTs(ordinaryDepreciationValue, 'Edm.Double') }); },
            UnplanedDepreciationValue: function (unplanedDepreciationValue) { return ({ unplanedDepreciationValue: v4_1.edmToTs(unplanedDepreciationValue, 'Edm.Double') }); },
            SpecialDepreciationValue: function (specialDepreciationValue) { return ({ specialDepreciationValue: v4_1.edmToTs(specialDepreciationValue, 'Edm.Double') }); },
            WriteUp: function (writeUp) { return ({ writeUp: v4_1.edmToTs(writeUp, 'Edm.Double') }); },
            SalvageValue: function (salvageValue) { return ({ salvageValue: v4_1.edmToTs(salvageValue, 'Edm.Double') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); }
        });
    }
    FixedAssetEndBalance.build = build;
})(FixedAssetEndBalance = exports.FixedAssetEndBalance || (exports.FixedAssetEndBalance = {}));
//# sourceMappingURL=FixedAssetEndBalance.js.map