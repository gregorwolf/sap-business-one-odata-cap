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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerEquipmentCards = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustomerEquipmentCardsRequestBuilder_1 = require("./CustomerEquipmentCardsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CustomerEquipmentCards" of service "SAPB1".
 */
var CustomerEquipmentCards = /** @class */ (function (_super) {
    __extends(CustomerEquipmentCards, _super);
    function CustomerEquipmentCards() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CustomerEquipmentCards`.
     * @returns A builder that constructs instances of entity type `CustomerEquipmentCards`.
     */
    CustomerEquipmentCards.builder = function () {
        return core_1.EntityV4.entityBuilder(CustomerEquipmentCards);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustomerEquipmentCards` entity type.
     * @returns A `CustomerEquipmentCards` request builder.
     */
    CustomerEquipmentCards.requestBuilder = function () {
        return new CustomerEquipmentCardsRequestBuilder_1.CustomerEquipmentCardsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomerEquipmentCards`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomerEquipmentCards`.
     */
    CustomerEquipmentCards.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, CustomerEquipmentCards);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustomerEquipmentCards.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustomerEquipmentCards.
     */
    CustomerEquipmentCards._entityName = 'CustomerEquipmentCards';
    /**
     * Default url path for the according service.
     */
    CustomerEquipmentCards._defaultServicePath = '/b1s/v2/';
    return CustomerEquipmentCards;
}(core_1.EntityV4));
exports.CustomerEquipmentCards = CustomerEquipmentCards;
var BusinessPartners_1 = require("./BusinessPartners");
var Items_1 = require("./Items");
var Countries_1 = require("./Countries");
var EmployeesInfo_1 = require("./EmployeesInfo");
var Territories_1 = require("./Territories");
var Attachments2_1 = require("./Attachments2");
(function (CustomerEquipmentCards) {
    /**
     * Static representation of the [[equipmentCardNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.EQUIPMENT_CARD_NUM = new core_1.NumberField('EquipmentCardNum', CustomerEquipmentCards, 'Edm.Int32');
    /**
     * Static representation of the [[customerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.CUSTOMER_CODE = new core_1.StringField('CustomerCode', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[customerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.CUSTOMER_NAME = new core_1.StringField('CustomerName', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[contactEmployeeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.CONTACT_EMPLOYEE_CODE = new core_1.EnumField('ContactEmployeeCode', CustomerEquipmentCards);
    /**
     * Static representation of the [[directCustomerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.DIRECT_CUSTOMER_CODE = new core_1.EnumField('DirectCustomerCode', CustomerEquipmentCards);
    /**
     * Static representation of the [[directCustomerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.DIRECT_CUSTOMER_NAME = new core_1.StringField('DirectCustomerName', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[manufacturerSerialNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.MANUFACTURER_SERIAL_NUM = new core_1.StringField('ManufacturerSerialNum', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[internalSerialNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.INTERNAL_SERIAL_NUM = new core_1.StringField('InternalSerialNum', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.ITEM_CODE = new core_1.StringField('ItemCode', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[itemDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.ITEM_DESCRIPTION = new core_1.StringField('ItemDescription', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[invoiceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.INVOICE_CODE = new core_1.NumberField('InvoiceCode', CustomerEquipmentCards, 'Edm.Int32');
    /**
     * Static representation of the [[invoiceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.INVOICE_NUMBER = new core_1.NumberField('InvoiceNumber', CustomerEquipmentCards, 'Edm.Int32');
    /**
     * Static representation of the [[deliveryDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.DELIVERY_DATE = new core_1.DateField('DeliveryDate', CustomerEquipmentCards, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[contactPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.CONTACT_PHONE = new core_1.StringField('ContactPhone', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[street]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.STREET = new core_1.StringField('Street', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[block]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.BLOCK = new core_1.StringField('Block', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.ZIP_CODE = new core_1.StringField('ZipCode', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.CITY = new core_1.StringField('City', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[county]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.COUNTY = new core_1.StringField('County', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.COUNTRY_CODE = new core_1.StringField('CountryCode', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[stateCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.STATE_CODE = new core_1.StringField('StateCode', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[installLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.INSTALL_LOCATION = new core_1.StringField('InstallLocation', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[deliveryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.DELIVERY_CODE = new core_1.NumberField('DeliveryCode', CustomerEquipmentCards, 'Edm.Int32');
    /**
     * Static representation of the [[deliveryNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.DELIVERY_NUMBER = new core_1.NumberField('DeliveryNumber', CustomerEquipmentCards, 'Edm.Int32');
    /**
     * Static representation of the [[statusOfSerialNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.STATUS_OF_SERIAL_NUMBER = new core_1.EnumField('StatusOfSerialNumber', CustomerEquipmentCards);
    /**
     * Static representation of the [[replaceSn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.REPLACE_SN = new core_1.NumberField('ReplaceSN', CustomerEquipmentCards, 'Edm.Int32');
    /**
     * Static representation of the [[defaultTechnician]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.DEFAULT_TECHNICIAN = new core_1.NumberField('DefaultTechnician', CustomerEquipmentCards, 'Edm.Int32');
    /**
     * Static representation of the [[replacedBySn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.REPLACED_BY_SN = new core_1.NumberField('ReplacedBySN', CustomerEquipmentCards, 'Edm.Int32');
    /**
     * Static representation of the [[defaultterritory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.DEFAULTTERRITORY = new core_1.NumberField('Defaultterritory', CustomerEquipmentCards, 'Edm.Int32');
    /**
     * Static representation of the [[buildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.BUILDING_FLOOR_ROOM = new core_1.StringField('BuildingFloorRoom', CustomerEquipmentCards, 'Edm.String');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', CustomerEquipmentCards, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', CustomerEquipmentCards, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.ITEM = new core_1.OneToOneLink('Item', CustomerEquipmentCards, Items_1.Items);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.COUNTRY = new core_1.OneToOneLink('Country', CustomerEquipmentCards, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', CustomerEquipmentCards, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[territory]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.TERRITORY = new core_1.OneToOneLink('Territory', CustomerEquipmentCards, Territories_1.Territories);
    /**
     * Static representation of the one-to-one navigation property [[attachments2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomerEquipmentCards.ATTACHMENTS_2 = new core_1.OneToOneLink('Attachments2', CustomerEquipmentCards, Attachments2_1.Attachments2);
    /**
     * All fields of the CustomerEquipmentCards entity.
     */
    CustomerEquipmentCards._allFields = [
        CustomerEquipmentCards.EQUIPMENT_CARD_NUM,
        CustomerEquipmentCards.CUSTOMER_CODE,
        CustomerEquipmentCards.CUSTOMER_NAME,
        CustomerEquipmentCards.CONTACT_EMPLOYEE_CODE,
        CustomerEquipmentCards.DIRECT_CUSTOMER_CODE,
        CustomerEquipmentCards.DIRECT_CUSTOMER_NAME,
        CustomerEquipmentCards.MANUFACTURER_SERIAL_NUM,
        CustomerEquipmentCards.INTERNAL_SERIAL_NUM,
        CustomerEquipmentCards.ITEM_CODE,
        CustomerEquipmentCards.ITEM_DESCRIPTION,
        CustomerEquipmentCards.INVOICE_CODE,
        CustomerEquipmentCards.INVOICE_NUMBER,
        CustomerEquipmentCards.DELIVERY_DATE,
        CustomerEquipmentCards.CONTACT_PHONE,
        CustomerEquipmentCards.STREET,
        CustomerEquipmentCards.BLOCK,
        CustomerEquipmentCards.ZIP_CODE,
        CustomerEquipmentCards.CITY,
        CustomerEquipmentCards.COUNTY,
        CustomerEquipmentCards.COUNTRY_CODE,
        CustomerEquipmentCards.STATE_CODE,
        CustomerEquipmentCards.INSTALL_LOCATION,
        CustomerEquipmentCards.DELIVERY_CODE,
        CustomerEquipmentCards.DELIVERY_NUMBER,
        CustomerEquipmentCards.STATUS_OF_SERIAL_NUMBER,
        CustomerEquipmentCards.REPLACE_SN,
        CustomerEquipmentCards.DEFAULT_TECHNICIAN,
        CustomerEquipmentCards.REPLACED_BY_SN,
        CustomerEquipmentCards.DEFAULTTERRITORY,
        CustomerEquipmentCards.BUILDING_FLOOR_ROOM,
        CustomerEquipmentCards.ATTACHMENT_ENTRY,
        CustomerEquipmentCards.BUSINESS_PARTNER,
        CustomerEquipmentCards.ITEM,
        CustomerEquipmentCards.COUNTRY,
        CustomerEquipmentCards.EMPLOYEE_INFO,
        CustomerEquipmentCards.TERRITORY,
        CustomerEquipmentCards.ATTACHMENTS_2
    ];
    /**
     * All fields selector.
     */
    CustomerEquipmentCards.ALL_FIELDS = new core_1.AllFields('*', CustomerEquipmentCards);
    /**
     * All key fields of the CustomerEquipmentCards entity.
     */
    CustomerEquipmentCards._keyFields = [CustomerEquipmentCards.EQUIPMENT_CARD_NUM];
    /**
     * Mapping of all key field names to the respective static field property CustomerEquipmentCards.
     */
    CustomerEquipmentCards._keys = CustomerEquipmentCards._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustomerEquipmentCards = exports.CustomerEquipmentCards || (exports.CustomerEquipmentCards = {}));
exports.CustomerEquipmentCards = CustomerEquipmentCards;
//# sourceMappingURL=CustomerEquipmentCards.js.map