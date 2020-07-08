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
exports.GlAccountAdvancedRuleParams = exports.GlAccountAdvancedRuleParamsField = exports.createGlAccountAdvancedRuleParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[GlAccountAdvancedRuleParams.build]] instead.
 */
function createGlAccountAdvancedRuleParams(json) {
    return GlAccountAdvancedRuleParams.build(json);
}
exports.createGlAccountAdvancedRuleParams = createGlAccountAdvancedRuleParams;
/**
 * GlAccountAdvancedRuleParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var GlAccountAdvancedRuleParamsField = /** @class */ (function (_super) {
    __extends(GlAccountAdvancedRuleParamsField, _super);
    function GlAccountAdvancedRuleParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.absoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absoluteEntry = new v4_1.ComplexTypeNumberPropertyField('AbsoluteEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.period]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.period = new v4_1.ComplexTypeStringPropertyField('Period', _this, 'Edm.String');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.itemGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemGroup = new v4_1.ComplexTypeNumberPropertyField('ItemGroup', _this, 'Edm.Int32');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new v4_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.bpGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpGroup = new v4_1.ComplexTypeNumberPropertyField('BPGroup', _this, 'Edm.Int32');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.federalTaxId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId = new v4_1.ComplexTypeStringPropertyField('FederalTaxID', _this, 'Edm.String');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.shipToCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToCountry = new v4_1.ComplexTypeStringPropertyField('ShipToCountry', _this, 'Edm.String');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.shipToState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToState = new v4_1.ComplexTypeStringPropertyField('ShipToState', _this, 'Edm.String');
        return _this;
    }
    return GlAccountAdvancedRuleParamsField;
}(v4_1.ComplexTypeField));
exports.GlAccountAdvancedRuleParamsField = GlAccountAdvancedRuleParamsField;
var GlAccountAdvancedRuleParams;
(function (GlAccountAdvancedRuleParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsoluteEntry: function (absoluteEntry) { return ({ absoluteEntry: v4_1.edmToTs(absoluteEntry, 'Edm.Int32') }); },
            Period: function (period) { return ({ period: v4_1.edmToTs(period, 'Edm.String') }); },
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.String') }); },
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            ItemGroup: function (itemGroup) { return ({ itemGroup: v4_1.edmToTs(itemGroup, 'Edm.Int32') }); },
            Warehouse: function (warehouse) { return ({ warehouse: v4_1.edmToTs(warehouse, 'Edm.String') }); },
            BPGroup: function (bpGroup) { return ({ bpGroup: v4_1.edmToTs(bpGroup, 'Edm.Int32') }); },
            FederalTaxID: function (federalTaxId) { return ({ federalTaxId: v4_1.edmToTs(federalTaxId, 'Edm.String') }); },
            ShipToCountry: function (shipToCountry) { return ({ shipToCountry: v4_1.edmToTs(shipToCountry, 'Edm.String') }); },
            ShipToState: function (shipToState) { return ({ shipToState: v4_1.edmToTs(shipToState, 'Edm.String') }); }
        });
    }
    GlAccountAdvancedRuleParams.build = build;
})(GlAccountAdvancedRuleParams = exports.GlAccountAdvancedRuleParams || (exports.GlAccountAdvancedRuleParams = {}));
//# sourceMappingURL=GlAccountAdvancedRuleParams.js.map