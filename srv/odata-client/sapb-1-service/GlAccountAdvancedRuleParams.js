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
exports.GlAccountAdvancedRuleParams = exports.GlAccountAdvancedRuleParamsField = exports.createGlAccountAdvancedRuleParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of GlAccountAdvancedRuleParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function GlAccountAdvancedRuleParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, GlAccountAdvancedRuleParams) || this;
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.absoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absoluteEntry = new core_1.ComplexTypeNumberPropertyField('AbsoluteEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.period]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.period = new core_1.ComplexTypeStringPropertyField('Period', _this, 'Edm.String');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeStringPropertyField('Code', _this, 'Edm.String');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.itemGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemGroup = new core_1.ComplexTypeNumberPropertyField('ItemGroup', _this, 'Edm.Int32');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new core_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.bpGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpGroup = new core_1.ComplexTypeNumberPropertyField('BPGroup', _this, 'Edm.Int32');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.federalTaxId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId = new core_1.ComplexTypeStringPropertyField('FederalTaxID', _this, 'Edm.String');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.shipToCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToCountry = new core_1.ComplexTypeStringPropertyField('ShipToCountry', _this, 'Edm.String');
        /**
         * Representation of the [[GlAccountAdvancedRuleParams.shipToState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToState = new core_1.ComplexTypeStringPropertyField('ShipToState', _this, 'Edm.String');
        return _this;
    }
    return GlAccountAdvancedRuleParamsField;
}(core_1.ComplexTypeField));
exports.GlAccountAdvancedRuleParamsField = GlAccountAdvancedRuleParamsField;
var GlAccountAdvancedRuleParams;
(function (GlAccountAdvancedRuleParams) {
    /**
     * Metadata information on all properties of the `GlAccountAdvancedRuleParams` complex type.
     */
    GlAccountAdvancedRuleParams._propertyMetadata = [{
            originalName: 'AbsoluteEntry',
            name: 'absoluteEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Period',
            name: 'period',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Code',
            name: 'code',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemGroup',
            name: 'itemGroup',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Warehouse',
            name: 'warehouse',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPGroup',
            name: 'bpGroup',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'FederalTaxID',
            name: 'federalTaxId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipToCountry',
            name: 'shipToCountry',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShipToState',
            name: 'shipToState',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, GlAccountAdvancedRuleParams);
    }
    GlAccountAdvancedRuleParams.build = build;
})(GlAccountAdvancedRuleParams = exports.GlAccountAdvancedRuleParams || (exports.GlAccountAdvancedRuleParams = {}));
//# sourceMappingURL=GlAccountAdvancedRuleParams.js.map