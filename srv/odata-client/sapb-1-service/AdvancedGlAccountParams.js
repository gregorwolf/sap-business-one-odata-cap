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
exports.AdvancedGlAccountParams = exports.AdvancedGlAccountParamsField = exports.createAdvancedGlAccountParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[AdvancedGlAccountParams.build]] instead.
 */
function createAdvancedGlAccountParams(json) {
    return AdvancedGlAccountParams.build(json);
}
exports.createAdvancedGlAccountParams = createAdvancedGlAccountParams;
/**
 * AdvancedGlAccountParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AdvancedGlAccountParamsField = /** @class */ (function (_super) {
    __extends(AdvancedGlAccountParamsField, _super);
    /**
     * Creates an instance of AdvancedGlAccountParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function AdvancedGlAccountParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, AdvancedGlAccountParams) || this;
        /**
         * Representation of the [[AdvancedGlAccountParams.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new core_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.federalTaxId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId = new core_1.ComplexTypeStringPropertyField('FederalTaxID', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.shipToCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToCountry = new core_1.ComplexTypeStringPropertyField('ShipToCountry', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.shipToState]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToState = new core_1.ComplexTypeStringPropertyField('ShipToState', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.vatGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatGroup = new core_1.ComplexTypeStringPropertyField('VatGroup', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.postingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postingDate = new core_1.ComplexTypeDatePropertyField('PostingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[AdvancedGlAccountParams.accountType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountType = new core_1.ComplexTypeEnumPropertyField('AccountType', _this);
        /**
         * Representation of the [[AdvancedGlAccountParams.usage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.usage = new core_1.ComplexTypeNumberPropertyField('Usage', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdvancedGlAccountParams.udf1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udf1 = new core_1.ComplexTypeStringPropertyField('UDF1', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.udf2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udf2 = new core_1.ComplexTypeStringPropertyField('UDF2', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.udf3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udf3 = new core_1.ComplexTypeStringPropertyField('UDF3', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.udf4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udf4 = new core_1.ComplexTypeStringPropertyField('UDF4', _this, 'Edm.String');
        /**
         * Representation of the [[AdvancedGlAccountParams.udf5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.udf5 = new core_1.ComplexTypeStringPropertyField('UDF5', _this, 'Edm.String');
        return _this;
    }
    return AdvancedGlAccountParamsField;
}(core_1.ComplexTypeField));
exports.AdvancedGlAccountParamsField = AdvancedGlAccountParamsField;
var AdvancedGlAccountParams;
(function (AdvancedGlAccountParams) {
    /**
     * Metadata information on all properties of the `AdvancedGlAccountParams` complex type.
     */
    AdvancedGlAccountParams._propertyMetadata = [{
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Warehouse',
            name: 'warehouse',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPCode',
            name: 'bpCode',
            type: 'Edm.String',
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
        }, {
            originalName: 'VatGroup',
            name: 'vatGroup',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PostingDate',
            name: 'postingDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'AccountType',
            name: 'accountType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Usage',
            name: 'usage',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UDF1',
            name: 'udf1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UDF2',
            name: 'udf2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UDF3',
            name: 'udf3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UDF4',
            name: 'udf4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UDF5',
            name: 'udf5',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, AdvancedGlAccountParams);
    }
    AdvancedGlAccountParams.build = build;
})(AdvancedGlAccountParams = exports.AdvancedGlAccountParams || (exports.AdvancedGlAccountParams = {}));
//# sourceMappingURL=AdvancedGlAccountParams.js.map