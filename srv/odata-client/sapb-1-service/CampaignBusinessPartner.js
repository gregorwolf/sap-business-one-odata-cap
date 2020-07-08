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
exports.CampaignBusinessPartner = exports.CampaignBusinessPartnerField = exports.createCampaignBusinessPartner = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CampaignBusinessPartner.build]] instead.
 */
function createCampaignBusinessPartner(json) {
    return CampaignBusinessPartner.build(json);
}
exports.createCampaignBusinessPartner = createCampaignBusinessPartner;
/**
 * CampaignBusinessPartnerField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CampaignBusinessPartnerField = /** @class */ (function (_super) {
    __extends(CampaignBusinessPartnerField, _super);
    function CampaignBusinessPartnerField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CampaignBusinessPartner.campaignNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.campaignNumber = new v4_1.ComplexTypeNumberPropertyField('CampaignNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignBusinessPartner.campaignLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.campaignLineNumber = new v4_1.ComplexTypeNumberPropertyField('CampaignLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignBusinessPartner.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new v4_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.bpName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpName = new v4_1.ComplexTypeStringPropertyField('BPName', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.bpGroupName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpGroupName = new v4_1.ComplexTypeStringPropertyField('BPGroupName', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.bpIndustryName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpIndustryName = new v4_1.ComplexTypeStringPropertyField('BPIndustryName', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.bpStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpStatus = new v4_1.ComplexTypeStringPropertyField('BPStatus', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactCode = new v4_1.ComplexTypeStringPropertyField('ContactCode', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactTitle]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactTitle = new v4_1.ComplexTypeStringPropertyField('ContactTitle', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactPosition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactPosition = new v4_1.ComplexTypeStringPropertyField('ContactPosition', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactEmail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactEmail = new v4_1.ComplexTypeStringPropertyField('ContactEmail', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactTelephone]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactTelephone = new v4_1.ComplexTypeStringPropertyField('ContactTelephone', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactMobile]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactMobile = new v4_1.ComplexTypeStringPropertyField('ContactMobile', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactFax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactFax = new v4_1.ComplexTypeStringPropertyField('ContactFax', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactAddress]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactAddress = new v4_1.ComplexTypeStringPropertyField('ContactAddress', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.relatedSalesOpportunity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.relatedSalesOpportunity = new v4_1.ComplexTypeNumberPropertyField('RelatedSalesOpportunity', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignBusinessPartner.street]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.street = new v4_1.ComplexTypeStringPropertyField('Street', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.block]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.block = new v4_1.ComplexTypeStringPropertyField('Block', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.city]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.city = new v4_1.ComplexTypeStringPropertyField('City', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.zipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.zipCode = new v4_1.ComplexTypeStringPropertyField('ZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.county]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.county = new v4_1.ComplexTypeStringPropertyField('County', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new v4_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new v4_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.building]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.building = new v4_1.ComplexTypeStringPropertyField('Building', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.docNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docNumber = new v4_1.ComplexTypeNumberPropertyField('DocNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignBusinessPartner.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignBusinessPartner.firstName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.firstName = new v4_1.ComplexTypeStringPropertyField('FirstName', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.middleName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.middleName = new v4_1.ComplexTypeStringPropertyField('MiddleName', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.lastName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastName = new v4_1.ComplexTypeStringPropertyField('LastName', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.addressId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressId = new v4_1.ComplexTypeStringPropertyField('AddressID', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.addressType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressType = new v4_1.ComplexTypeStringPropertyField('AddressType', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.addressName2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressName2 = new v4_1.ComplexTypeStringPropertyField('AddressName2', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.addressName3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressName3 = new v4_1.ComplexTypeStringPropertyField('AddressName3', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.federalTaxId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId = new v4_1.ComplexTypeStringPropertyField('FederalTaxID', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.streetNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.streetNo = new v4_1.ComplexTypeStringPropertyField('StreetNo', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.assignName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.assignName = new v4_1.ComplexTypeNumberPropertyField('AssignName', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignBusinessPartner.responseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.responseType = new v4_1.ComplexTypeStringPropertyField('ResponseType', _this, 'Edm.String');
        return _this;
    }
    return CampaignBusinessPartnerField;
}(v4_1.ComplexTypeField));
exports.CampaignBusinessPartnerField = CampaignBusinessPartnerField;
var CampaignBusinessPartner;
(function (CampaignBusinessPartner) {
    function build(json) {
        return v4_1.createComplexType(json, {
            CampaignNumber: function (campaignNumber) { return ({ campaignNumber: v4_1.edmToTs(campaignNumber, 'Edm.Int32') }); },
            CampaignLineNumber: function (campaignLineNumber) { return ({ campaignLineNumber: v4_1.edmToTs(campaignLineNumber, 'Edm.Int32') }); },
            BPCode: function (bpCode) { return ({ bpCode: v4_1.edmToTs(bpCode, 'Edm.String') }); },
            BPName: function (bpName) { return ({ bpName: v4_1.edmToTs(bpName, 'Edm.String') }); },
            BPGroupName: function (bpGroupName) { return ({ bpGroupName: v4_1.edmToTs(bpGroupName, 'Edm.String') }); },
            BPIndustryName: function (bpIndustryName) { return ({ bpIndustryName: v4_1.edmToTs(bpIndustryName, 'Edm.String') }); },
            BPStatus: function (bpStatus) { return ({ bpStatus: v4_1.edmToTs(bpStatus, 'Edm.String') }); },
            ContactCode: function (contactCode) { return ({ contactCode: v4_1.edmToTs(contactCode, 'Edm.String') }); },
            ContactTitle: function (contactTitle) { return ({ contactTitle: v4_1.edmToTs(contactTitle, 'Edm.String') }); },
            ContactPosition: function (contactPosition) { return ({ contactPosition: v4_1.edmToTs(contactPosition, 'Edm.String') }); },
            ContactEmail: function (contactEmail) { return ({ contactEmail: v4_1.edmToTs(contactEmail, 'Edm.String') }); },
            ContactTelephone: function (contactTelephone) { return ({ contactTelephone: v4_1.edmToTs(contactTelephone, 'Edm.String') }); },
            ContactMobile: function (contactMobile) { return ({ contactMobile: v4_1.edmToTs(contactMobile, 'Edm.String') }); },
            ContactFax: function (contactFax) { return ({ contactFax: v4_1.edmToTs(contactFax, 'Edm.String') }); },
            ContactAddress: function (contactAddress) { return ({ contactAddress: v4_1.edmToTs(contactAddress, 'Edm.String') }); },
            RelatedSalesOpportunity: function (relatedSalesOpportunity) { return ({ relatedSalesOpportunity: v4_1.edmToTs(relatedSalesOpportunity, 'Edm.Int32') }); },
            Street: function (street) { return ({ street: v4_1.edmToTs(street, 'Edm.String') }); },
            Block: function (block) { return ({ block: v4_1.edmToTs(block, 'Edm.String') }); },
            City: function (city) { return ({ city: v4_1.edmToTs(city, 'Edm.String') }); },
            ZipCode: function (zipCode) { return ({ zipCode: v4_1.edmToTs(zipCode, 'Edm.String') }); },
            County: function (county) { return ({ county: v4_1.edmToTs(county, 'Edm.String') }); },
            State: function (state) { return ({ state: v4_1.edmToTs(state, 'Edm.String') }); },
            Country: function (country) { return ({ country: v4_1.edmToTs(country, 'Edm.String') }); },
            Building: function (building) { return ({ building: v4_1.edmToTs(building, 'Edm.String') }); },
            DocNumber: function (docNumber) { return ({ docNumber: v4_1.edmToTs(docNumber, 'Edm.Int32') }); },
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            FirstName: function (firstName) { return ({ firstName: v4_1.edmToTs(firstName, 'Edm.String') }); },
            MiddleName: function (middleName) { return ({ middleName: v4_1.edmToTs(middleName, 'Edm.String') }); },
            LastName: function (lastName) { return ({ lastName: v4_1.edmToTs(lastName, 'Edm.String') }); },
            AddressID: function (addressId) { return ({ addressId: v4_1.edmToTs(addressId, 'Edm.String') }); },
            AddressType: function (addressType) { return ({ addressType: v4_1.edmToTs(addressType, 'Edm.String') }); },
            AddressName2: function (addressName2) { return ({ addressName2: v4_1.edmToTs(addressName2, 'Edm.String') }); },
            AddressName3: function (addressName3) { return ({ addressName3: v4_1.edmToTs(addressName3, 'Edm.String') }); },
            FederalTaxID: function (federalTaxId) { return ({ federalTaxId: v4_1.edmToTs(federalTaxId, 'Edm.String') }); },
            StreetNo: function (streetNo) { return ({ streetNo: v4_1.edmToTs(streetNo, 'Edm.String') }); },
            AssignName: function (assignName) { return ({ assignName: v4_1.edmToTs(assignName, 'Edm.Int32') }); },
            ResponseType: function (responseType) { return ({ responseType: v4_1.edmToTs(responseType, 'Edm.String') }); }
        });
    }
    CampaignBusinessPartner.build = build;
})(CampaignBusinessPartner = exports.CampaignBusinessPartner || (exports.CampaignBusinessPartner = {}));
//# sourceMappingURL=CampaignBusinessPartner.js.map