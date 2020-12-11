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
exports.BpFiscalTaxId = exports.BpFiscalTaxIdField = exports.createBpFiscalTaxId = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BpFiscalTaxId.build]] instead.
 */
function createBpFiscalTaxId(json) {
    return BpFiscalTaxId.build(json);
}
exports.createBpFiscalTaxId = createBpFiscalTaxId;
/**
 * BpFiscalTaxIdField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpFiscalTaxIdField = /** @class */ (function (_super) {
    __extends(BpFiscalTaxIdField, _super);
    /**
     * Creates an instance of BpFiscalTaxIdField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BpFiscalTaxIdField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BpFiscalTaxId) || this;
        /**
         * Representation of the [[BpFiscalTaxId.address]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.address = new core_1.ComplexTypeStringPropertyField('Address', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.cnaeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cnaeCode = new core_1.ComplexTypeNumberPropertyField('CNAECode', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpFiscalTaxId.taxId0]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId0 = new core_1.ComplexTypeStringPropertyField('TaxId0', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId1 = new core_1.ComplexTypeStringPropertyField('TaxId1', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId2 = new core_1.ComplexTypeStringPropertyField('TaxId2', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId3 = new core_1.ComplexTypeStringPropertyField('TaxId3', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId4 = new core_1.ComplexTypeStringPropertyField('TaxId4', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId5 = new core_1.ComplexTypeStringPropertyField('TaxId5', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId6]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId6 = new core_1.ComplexTypeStringPropertyField('TaxId6', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId7]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId7 = new core_1.ComplexTypeStringPropertyField('TaxId7', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId8]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId8 = new core_1.ComplexTypeStringPropertyField('TaxId8', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId9]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId9 = new core_1.ComplexTypeStringPropertyField('TaxId9', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId10]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId10 = new core_1.ComplexTypeStringPropertyField('TaxId10', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId11]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId11 = new core_1.ComplexTypeStringPropertyField('TaxId11', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.addrType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addrType = new core_1.ComplexTypeEnumPropertyField('AddrType', _this);
        /**
         * Representation of the [[BpFiscalTaxId.taxId12]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId12 = new core_1.ComplexTypeStringPropertyField('TaxId12', _this, 'Edm.String');
        /**
         * Representation of the [[BpFiscalTaxId.taxId13]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxId13 = new core_1.ComplexTypeStringPropertyField('TaxId13', _this, 'Edm.String');
        return _this;
    }
    return BpFiscalTaxIdField;
}(core_1.ComplexTypeField));
exports.BpFiscalTaxIdField = BpFiscalTaxIdField;
var BpFiscalTaxId;
(function (BpFiscalTaxId) {
    /**
     * Metadata information on all properties of the `BpFiscalTaxId` complex type.
     */
    BpFiscalTaxId._propertyMetadata = [{
            originalName: 'Address',
            name: 'address',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CNAECode',
            name: 'cnaeCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TaxId0',
            name: 'taxId0',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId1',
            name: 'taxId1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId2',
            name: 'taxId2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId3',
            name: 'taxId3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId4',
            name: 'taxId4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId5',
            name: 'taxId5',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId6',
            name: 'taxId6',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId7',
            name: 'taxId7',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId8',
            name: 'taxId8',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId9',
            name: 'taxId9',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId10',
            name: 'taxId10',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId11',
            name: 'taxId11',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPCode',
            name: 'bpCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AddrType',
            name: 'addrType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'TaxId12',
            name: 'taxId12',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxId13',
            name: 'taxId13',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BpFiscalTaxId);
    }
    BpFiscalTaxId.build = build;
})(BpFiscalTaxId = exports.BpFiscalTaxId || (exports.BpFiscalTaxId = {}));
//# sourceMappingURL=BpFiscalTaxId.js.map