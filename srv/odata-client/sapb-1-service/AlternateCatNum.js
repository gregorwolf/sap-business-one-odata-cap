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
exports.AlternateCatNum = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AlternateCatNumRequestBuilder_1 = require("./AlternateCatNumRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AlternateCatNum" of service "SAPB1".
 */
var AlternateCatNum = /** @class */ (function (_super) {
    __extends(AlternateCatNum, _super);
    function AlternateCatNum() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `AlternateCatNum`.
     * @returns A builder that constructs instances of entity type `AlternateCatNum`.
     */
    AlternateCatNum.builder = function () {
        return core_1.EntityV4.entityBuilder(AlternateCatNum);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AlternateCatNum` entity type.
     * @returns A `AlternateCatNum` request builder.
     */
    AlternateCatNum.requestBuilder = function () {
        return new AlternateCatNumRequestBuilder_1.AlternateCatNumRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AlternateCatNum`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AlternateCatNum`.
     */
    AlternateCatNum.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, AlternateCatNum);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AlternateCatNum.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AlternateCatNum.
     */
    AlternateCatNum._entityName = 'AlternateCatNum';
    /**
     * Default url path for the according service.
     */
    AlternateCatNum._defaultServicePath = '/b1s/v2/';
    return AlternateCatNum;
}(core_1.EntityV4));
exports.AlternateCatNum = AlternateCatNum;
var Items_1 = require("./Items");
var BusinessPartners_1 = require("./BusinessPartners");
(function (AlternateCatNum) {
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlternateCatNum.ITEM_CODE = new core_1.StringField('ItemCode', AlternateCatNum, 'Edm.String');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlternateCatNum.CARD_CODE = new core_1.StringField('CardCode', AlternateCatNum, 'Edm.String');
    /**
     * Static representation of the [[substitute]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlternateCatNum.SUBSTITUTE = new core_1.StringField('Substitute', AlternateCatNum, 'Edm.String');
    /**
     * Static representation of the [[displayBpCatalogNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlternateCatNum.DISPLAY_BP_CATALOG_NUMBER = new core_1.EnumField('DisplayBPCatalogNumber', AlternateCatNum);
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlternateCatNum.ITEM = new core_1.OneToOneLink('Item', AlternateCatNum, Items_1.Items);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlternateCatNum.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', AlternateCatNum, BusinessPartners_1.BusinessPartners);
    /**
     * All fields of the AlternateCatNum entity.
     */
    AlternateCatNum._allFields = [
        AlternateCatNum.ITEM_CODE,
        AlternateCatNum.CARD_CODE,
        AlternateCatNum.SUBSTITUTE,
        AlternateCatNum.DISPLAY_BP_CATALOG_NUMBER,
        AlternateCatNum.ITEM,
        AlternateCatNum.BUSINESS_PARTNER
    ];
    /**
     * All fields selector.
     */
    AlternateCatNum.ALL_FIELDS = new core_1.AllFields('*', AlternateCatNum);
    /**
     * All key fields of the AlternateCatNum entity.
     */
    AlternateCatNum._keyFields = [AlternateCatNum.ITEM_CODE, AlternateCatNum.CARD_CODE, AlternateCatNum.SUBSTITUTE];
    /**
     * Mapping of all key field names to the respective static field property AlternateCatNum.
     */
    AlternateCatNum._keys = AlternateCatNum._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AlternateCatNum = exports.AlternateCatNum || (exports.AlternateCatNum = {}));
exports.AlternateCatNum = AlternateCatNum;
//# sourceMappingURL=AlternateCatNum.js.map