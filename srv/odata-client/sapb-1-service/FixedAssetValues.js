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
exports.FixedAssetValues = exports.FixedAssetValuesField = exports.createFixedAssetValues = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function FixedAssetValuesField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[FixedAssetValues.acquisitionCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.acquisitionCost = new v4_1.ComplexTypeNumberPropertyField('AcquisitionCost', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.depreciationValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depreciationValue = new v4_1.ComplexTypeNumberPropertyField('DepreciationValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.netBookValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.netBookValue = new v4_1.ComplexTypeNumberPropertyField('NetBookValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.ordinaryDepreciationValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ordinaryDepreciationValue = new v4_1.ComplexTypeNumberPropertyField('OrdinaryDepreciationValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.unplanedDepreciationValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unplanedDepreciationValue = new v4_1.ComplexTypeNumberPropertyField('UnplanedDepreciationValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.specialDepreciationValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.specialDepreciationValue = new v4_1.ComplexTypeNumberPropertyField('SpecialDepreciationValue', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.writeUp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.writeUp = new v4_1.ComplexTypeNumberPropertyField('WriteUp', _this, 'Edm.Double');
        /**
         * Representation of the [[FixedAssetValues.appreciation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appreciation = new v4_1.ComplexTypeNumberPropertyField('Appreciation', _this, 'Edm.Double');
        return _this;
    }
    return FixedAssetValuesField;
}(v4_1.ComplexTypeField));
exports.FixedAssetValuesField = FixedAssetValuesField;
var FixedAssetValues;
(function (FixedAssetValues) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AcquisitionCost: function (acquisitionCost) { return ({ acquisitionCost: v4_1.edmToTs(acquisitionCost, 'Edm.Double') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            DepreciationValue: function (depreciationValue) { return ({ depreciationValue: v4_1.edmToTs(depreciationValue, 'Edm.Double') }); },
            NetBookValue: function (netBookValue) { return ({ netBookValue: v4_1.edmToTs(netBookValue, 'Edm.Double') }); },
            OrdinaryDepreciationValue: function (ordinaryDepreciationValue) { return ({ ordinaryDepreciationValue: v4_1.edmToTs(ordinaryDepreciationValue, 'Edm.Double') }); },
            UnplanedDepreciationValue: function (unplanedDepreciationValue) { return ({ unplanedDepreciationValue: v4_1.edmToTs(unplanedDepreciationValue, 'Edm.Double') }); },
            SpecialDepreciationValue: function (specialDepreciationValue) { return ({ specialDepreciationValue: v4_1.edmToTs(specialDepreciationValue, 'Edm.Double') }); },
            WriteUp: function (writeUp) { return ({ writeUp: v4_1.edmToTs(writeUp, 'Edm.Double') }); },
            Appreciation: function (appreciation) { return ({ appreciation: v4_1.edmToTs(appreciation, 'Edm.Double') }); }
        });
    }
    FixedAssetValues.build = build;
})(FixedAssetValues = exports.FixedAssetValues || (exports.FixedAssetValues = {}));
//# sourceMappingURL=FixedAssetValues.js.map