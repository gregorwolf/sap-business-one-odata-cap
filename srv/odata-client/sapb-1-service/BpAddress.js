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
exports.BpAddress = exports.BpAddressField = exports.createBpAddress = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BpAddress.build]] instead.
 */
function createBpAddress(json) {
    return BpAddress.build(json);
}
exports.createBpAddress = createBpAddress;
/**
 * BpAddressField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpAddressField = /** @class */ (function (_super) {
    __extends(BpAddressField, _super);
    /**
     * Creates an instance of BpAddressField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BpAddressField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BpAddress) || this;
        /**
         * Representation of the [[BpAddress.addressName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressName = new core_1.ComplexTypeStringPropertyField('AddressName', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.street]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.street = new core_1.ComplexTypeStringPropertyField('Street', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.block]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.block = new core_1.ComplexTypeStringPropertyField('Block', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.zipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.zipCode = new core_1.ComplexTypeStringPropertyField('ZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.city]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.city = new core_1.ComplexTypeStringPropertyField('City', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.county]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.county = new core_1.ComplexTypeStringPropertyField('County', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new core_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new core_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.federalTaxId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId = new core_1.ComplexTypeStringPropertyField('FederalTaxID', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new core_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.buildingFloorRoom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.buildingFloorRoom = new core_1.ComplexTypeStringPropertyField('BuildingFloorRoom', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.addressType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressType = new core_1.ComplexTypeEnumPropertyField('AddressType', _this);
        /**
         * Representation of the [[BpAddress.addressName2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressName2 = new core_1.ComplexTypeStringPropertyField('AddressName2', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.addressName3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressName3 = new core_1.ComplexTypeStringPropertyField('AddressName3', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.typeOfAddress]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.typeOfAddress = new core_1.ComplexTypeStringPropertyField('TypeOfAddress', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.streetNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.streetNo = new core_1.ComplexTypeStringPropertyField('StreetNo', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.rowNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNum = new core_1.ComplexTypeNumberPropertyField('RowNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpAddress.globalLocationNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.globalLocationNumber = new core_1.ComplexTypeStringPropertyField('GlobalLocationNumber', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.nationality]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nationality = new core_1.ComplexTypeStringPropertyField('Nationality', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.taxOffice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxOffice = new core_1.ComplexTypeStringPropertyField('TaxOffice', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.gstin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gstin = new core_1.ComplexTypeStringPropertyField('GSTIN', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.gstType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gstType = new core_1.ComplexTypeEnumPropertyField('GstType', _this);
        return _this;
    }
    return BpAddressField;
}(core_1.ComplexTypeField));
exports.BpAddressField = BpAddressField;
var BpAddress;
(function (BpAddress) {
    /**
     * Metadata information on all properties of the `BpAddress` complex type.
     */
    BpAddress._propertyMetadata = [{
            originalName: 'AddressName',
            name: 'addressName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Street',
            name: 'street',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Block',
            name: 'block',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ZipCode',
            name: 'zipCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'City',
            name: 'city',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'County',
            name: 'county',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Country',
            name: 'country',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'State',
            name: 'state',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FederalTaxID',
            name: 'federalTaxId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxCode',
            name: 'taxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BuildingFloorRoom',
            name: 'buildingFloorRoom',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AddressType',
            name: 'addressType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AddressName2',
            name: 'addressName2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AddressName3',
            name: 'addressName3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TypeOfAddress',
            name: 'typeOfAddress',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StreetNo',
            name: 'streetNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPCode',
            name: 'bpCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RowNum',
            name: 'rowNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'GlobalLocationNumber',
            name: 'globalLocationNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Nationality',
            name: 'nationality',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxOffice',
            name: 'taxOffice',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GSTIN',
            name: 'gstin',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GstType',
            name: 'gstType',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BpAddress);
    }
    BpAddress.build = build;
})(BpAddress = exports.BpAddress || (exports.BpAddress = {}));
//# sourceMappingURL=BpAddress.js.map