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
exports.BpAddress = exports.BpAddressField = exports.createBpAddress = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function BpAddressField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BpAddress.addressName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressName = new v4_1.ComplexTypeStringPropertyField('AddressName', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.street]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.street = new v4_1.ComplexTypeStringPropertyField('Street', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.block]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.block = new v4_1.ComplexTypeStringPropertyField('Block', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.zipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.zipCode = new v4_1.ComplexTypeStringPropertyField('ZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.city]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.city = new v4_1.ComplexTypeStringPropertyField('City', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.county]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.county = new v4_1.ComplexTypeStringPropertyField('County', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new v4_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new v4_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.federalTaxId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId = new v4_1.ComplexTypeStringPropertyField('FederalTaxID', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new v4_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.buildingFloorRoom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.buildingFloorRoom = new v4_1.ComplexTypeStringPropertyField('BuildingFloorRoom', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.addressName2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressName2 = new v4_1.ComplexTypeStringPropertyField('AddressName2', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.addressName3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressName3 = new v4_1.ComplexTypeStringPropertyField('AddressName3', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.typeOfAddress]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.typeOfAddress = new v4_1.ComplexTypeStringPropertyField('TypeOfAddress', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.streetNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.streetNo = new v4_1.ComplexTypeStringPropertyField('StreetNo', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new v4_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.rowNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNum = new v4_1.ComplexTypeNumberPropertyField('RowNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpAddress.globalLocationNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.globalLocationNumber = new v4_1.ComplexTypeStringPropertyField('GlobalLocationNumber', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.nationality]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nationality = new v4_1.ComplexTypeStringPropertyField('Nationality', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.taxOffice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxOffice = new v4_1.ComplexTypeStringPropertyField('TaxOffice', _this, 'Edm.String');
        /**
         * Representation of the [[BpAddress.gstin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gstin = new v4_1.ComplexTypeStringPropertyField('GSTIN', _this, 'Edm.String');
        return _this;
    }
    return BpAddressField;
}(v4_1.ComplexTypeField));
exports.BpAddressField = BpAddressField;
var BpAddress;
(function (BpAddress) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AddressName: function (addressName) { return ({ addressName: v4_1.edmToTs(addressName, 'Edm.String') }); },
            Street: function (street) { return ({ street: v4_1.edmToTs(street, 'Edm.String') }); },
            Block: function (block) { return ({ block: v4_1.edmToTs(block, 'Edm.String') }); },
            ZipCode: function (zipCode) { return ({ zipCode: v4_1.edmToTs(zipCode, 'Edm.String') }); },
            City: function (city) { return ({ city: v4_1.edmToTs(city, 'Edm.String') }); },
            County: function (county) { return ({ county: v4_1.edmToTs(county, 'Edm.String') }); },
            Country: function (country) { return ({ country: v4_1.edmToTs(country, 'Edm.String') }); },
            State: function (state) { return ({ state: v4_1.edmToTs(state, 'Edm.String') }); },
            FederalTaxID: function (federalTaxId) { return ({ federalTaxId: v4_1.edmToTs(federalTaxId, 'Edm.String') }); },
            TaxCode: function (taxCode) { return ({ taxCode: v4_1.edmToTs(taxCode, 'Edm.String') }); },
            BuildingFloorRoom: function (buildingFloorRoom) { return ({ buildingFloorRoom: v4_1.edmToTs(buildingFloorRoom, 'Edm.String') }); },
            AddressName2: function (addressName2) { return ({ addressName2: v4_1.edmToTs(addressName2, 'Edm.String') }); },
            AddressName3: function (addressName3) { return ({ addressName3: v4_1.edmToTs(addressName3, 'Edm.String') }); },
            TypeOfAddress: function (typeOfAddress) { return ({ typeOfAddress: v4_1.edmToTs(typeOfAddress, 'Edm.String') }); },
            StreetNo: function (streetNo) { return ({ streetNo: v4_1.edmToTs(streetNo, 'Edm.String') }); },
            BPCode: function (bpCode) { return ({ bpCode: v4_1.edmToTs(bpCode, 'Edm.String') }); },
            RowNum: function (rowNum) { return ({ rowNum: v4_1.edmToTs(rowNum, 'Edm.Int32') }); },
            GlobalLocationNumber: function (globalLocationNumber) { return ({ globalLocationNumber: v4_1.edmToTs(globalLocationNumber, 'Edm.String') }); },
            Nationality: function (nationality) { return ({ nationality: v4_1.edmToTs(nationality, 'Edm.String') }); },
            TaxOffice: function (taxOffice) { return ({ taxOffice: v4_1.edmToTs(taxOffice, 'Edm.String') }); },
            GSTIN: function (gstin) { return ({ gstin: v4_1.edmToTs(gstin, 'Edm.String') }); }
        });
    }
    BpAddress.build = build;
})(BpAddress = exports.BpAddress || (exports.BpAddress = {}));
//# sourceMappingURL=BpAddress.js.map