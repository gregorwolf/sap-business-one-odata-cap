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
exports.CampaignBusinessPartner = exports.CampaignBusinessPartnerField = exports.createCampaignBusinessPartner = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of CampaignBusinessPartnerField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CampaignBusinessPartnerField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CampaignBusinessPartner) || this;
        /**
         * Representation of the [[CampaignBusinessPartner.campaignNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.campaignNumber = new core_1.ComplexTypeNumberPropertyField('CampaignNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignBusinessPartner.campaignLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.campaignLineNumber = new core_1.ComplexTypeNumberPropertyField('CampaignLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignBusinessPartner.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.bpName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpName = new core_1.ComplexTypeStringPropertyField('BPName', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.bpGroupName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpGroupName = new core_1.ComplexTypeStringPropertyField('BPGroupName', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.bpIndustryName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpIndustryName = new core_1.ComplexTypeStringPropertyField('BPIndustryName', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.bpStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpStatus = new core_1.ComplexTypeStringPropertyField('BPStatus', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactCode = new core_1.ComplexTypeStringPropertyField('ContactCode', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactTitle]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactTitle = new core_1.ComplexTypeStringPropertyField('ContactTitle', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactPosition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactPosition = new core_1.ComplexTypeStringPropertyField('ContactPosition', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactEmail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactEmail = new core_1.ComplexTypeStringPropertyField('ContactEmail', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactTelephone]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactTelephone = new core_1.ComplexTypeStringPropertyField('ContactTelephone', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactMobile]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactMobile = new core_1.ComplexTypeStringPropertyField('ContactMobile', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactFax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactFax = new core_1.ComplexTypeStringPropertyField('ContactFax', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.contactAddress]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contactAddress = new core_1.ComplexTypeStringPropertyField('ContactAddress', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.response]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.response = new core_1.ComplexTypeEnumPropertyField('Response', _this);
        /**
         * Representation of the [[CampaignBusinessPartner.relatedSalesOpportunity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.relatedSalesOpportunity = new core_1.ComplexTypeNumberPropertyField('RelatedSalesOpportunity', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignBusinessPartner.street]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.street = new core_1.ComplexTypeStringPropertyField('Street', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.block]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.block = new core_1.ComplexTypeStringPropertyField('Block', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.city]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.city = new core_1.ComplexTypeStringPropertyField('City', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.zipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.zipCode = new core_1.ComplexTypeStringPropertyField('ZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.county]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.county = new core_1.ComplexTypeStringPropertyField('County', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new core_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new core_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.building]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.building = new core_1.ComplexTypeStringPropertyField('Building', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.docType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docType = new core_1.ComplexTypeEnumPropertyField('DocType', _this);
        /**
         * Representation of the [[CampaignBusinessPartner.isShowLinkedDoc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isShowLinkedDoc = new core_1.ComplexTypeEnumPropertyField('IsShowLinkedDoc', _this);
        /**
         * Representation of the [[CampaignBusinessPartner.docNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docNumber = new core_1.ComplexTypeNumberPropertyField('DocNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignBusinessPartner.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignBusinessPartner.firstName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.firstName = new core_1.ComplexTypeStringPropertyField('FirstName', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.middleName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.middleName = new core_1.ComplexTypeStringPropertyField('MiddleName', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.lastName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastName = new core_1.ComplexTypeStringPropertyField('LastName', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.addressId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressId = new core_1.ComplexTypeStringPropertyField('AddressID', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.addressType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressType = new core_1.ComplexTypeStringPropertyField('AddressType', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.addressName2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressName2 = new core_1.ComplexTypeStringPropertyField('AddressName2', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.addressName3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressName3 = new core_1.ComplexTypeStringPropertyField('AddressName3', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.federalTaxId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId = new core_1.ComplexTypeStringPropertyField('FederalTaxID', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.streetNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.streetNo = new core_1.ComplexTypeStringPropertyField('StreetNo', _this, 'Edm.String');
        /**
         * Representation of the [[CampaignBusinessPartner.createActivity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.createActivity = new core_1.ComplexTypeEnumPropertyField('CreateActivity', _this);
        /**
         * Representation of the [[CampaignBusinessPartner.assignTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.assignTo = new core_1.ComplexTypeEnumPropertyField('AssignTo', _this);
        /**
         * Representation of the [[CampaignBusinessPartner.assignName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.assignName = new core_1.ComplexTypeNumberPropertyField('AssignName', _this, 'Edm.Int32');
        /**
         * Representation of the [[CampaignBusinessPartner.responseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.responseType = new core_1.ComplexTypeStringPropertyField('ResponseType', _this, 'Edm.String');
        return _this;
    }
    return CampaignBusinessPartnerField;
}(core_1.ComplexTypeField));
exports.CampaignBusinessPartnerField = CampaignBusinessPartnerField;
var CampaignBusinessPartner;
(function (CampaignBusinessPartner) {
    /**
     * Metadata information on all properties of the `CampaignBusinessPartner` complex type.
     */
    CampaignBusinessPartner._propertyMetadata = [{
            originalName: 'CampaignNumber',
            name: 'campaignNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CampaignLineNumber',
            name: 'campaignLineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BPCode',
            name: 'bpCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPName',
            name: 'bpName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPGroupName',
            name: 'bpGroupName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPIndustryName',
            name: 'bpIndustryName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPStatus',
            name: 'bpStatus',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ContactCode',
            name: 'contactCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ContactTitle',
            name: 'contactTitle',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ContactPosition',
            name: 'contactPosition',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ContactEmail',
            name: 'contactEmail',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ContactTelephone',
            name: 'contactTelephone',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ContactMobile',
            name: 'contactMobile',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ContactFax',
            name: 'contactFax',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ContactAddress',
            name: 'contactAddress',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Response',
            name: 'response',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'RelatedSalesOpportunity',
            name: 'relatedSalesOpportunity',
            type: 'Edm.Int32',
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
            originalName: 'City',
            name: 'city',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ZipCode',
            name: 'zipCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'County',
            name: 'county',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'State',
            name: 'state',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Country',
            name: 'country',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Building',
            name: 'building',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocType',
            name: 'docType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'IsShowLinkedDoc',
            name: 'isShowLinkedDoc',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DocNumber',
            name: 'docNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'FirstName',
            name: 'firstName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'MiddleName',
            name: 'middleName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LastName',
            name: 'lastName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AddressID',
            name: 'addressId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AddressType',
            name: 'addressType',
            type: 'Edm.String',
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
            originalName: 'FederalTaxID',
            name: 'federalTaxId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StreetNo',
            name: 'streetNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CreateActivity',
            name: 'createActivity',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AssignTo',
            name: 'assignTo',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AssignName',
            name: 'assignName',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ResponseType',
            name: 'responseType',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CampaignBusinessPartner);
    }
    CampaignBusinessPartner.build = build;
})(CampaignBusinessPartner = exports.CampaignBusinessPartner || (exports.CampaignBusinessPartner = {}));
//# sourceMappingURL=CampaignBusinessPartner.js.map