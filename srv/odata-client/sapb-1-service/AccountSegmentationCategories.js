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
exports.AccountSegmentationCategories = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AccountSegmentationCategoriesRequestBuilder_1 = require("./AccountSegmentationCategoriesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AccountSegmentationCategories" of service "SAPB1".
 */
var AccountSegmentationCategories = /** @class */ (function (_super) {
    __extends(AccountSegmentationCategories, _super);
    function AccountSegmentationCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `AccountSegmentationCategories`.
     * @returns A builder that constructs instances of entity type `AccountSegmentationCategories`.
     */
    AccountSegmentationCategories.builder = function () {
        return core_1.EntityV4.entityBuilder(AccountSegmentationCategories);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AccountSegmentationCategories` entity type.
     * @returns A `AccountSegmentationCategories` request builder.
     */
    AccountSegmentationCategories.requestBuilder = function () {
        return new AccountSegmentationCategoriesRequestBuilder_1.AccountSegmentationCategoriesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AccountSegmentationCategories`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AccountSegmentationCategories`.
     */
    AccountSegmentationCategories.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, AccountSegmentationCategories);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AccountSegmentationCategories.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AccountSegmentationCategories.
     */
    AccountSegmentationCategories._entityName = 'AccountSegmentationCategories';
    /**
     * Default url path for the according service.
     */
    AccountSegmentationCategories._defaultServicePath = '/b1s/v2/';
    return AccountSegmentationCategories;
}(core_1.EntityV4));
exports.AccountSegmentationCategories = AccountSegmentationCategories;
var AccountSegmentations_1 = require("./AccountSegmentations");
(function (AccountSegmentationCategories) {
    /**
     * Static representation of the [[segmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccountSegmentationCategories.SEGMENT_ID = new core_1.NumberField('SegmentID', AccountSegmentationCategories, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccountSegmentationCategories.CODE = new core_1.StringField('Code', AccountSegmentationCategories, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccountSegmentationCategories.NAME = new core_1.StringField('Name', AccountSegmentationCategories, 'Edm.String');
    /**
     * Static representation of the [[shortName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccountSegmentationCategories.SHORT_NAME = new core_1.StringField('ShortName', AccountSegmentationCategories, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[accountSegmentation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccountSegmentationCategories.ACCOUNT_SEGMENTATION = new core_1.OneToOneLink('AccountSegmentation', AccountSegmentationCategories, AccountSegmentations_1.AccountSegmentations);
    /**
     * All fields of the AccountSegmentationCategories entity.
     */
    AccountSegmentationCategories._allFields = [
        AccountSegmentationCategories.SEGMENT_ID,
        AccountSegmentationCategories.CODE,
        AccountSegmentationCategories.NAME,
        AccountSegmentationCategories.SHORT_NAME,
        AccountSegmentationCategories.ACCOUNT_SEGMENTATION
    ];
    /**
     * All fields selector.
     */
    AccountSegmentationCategories.ALL_FIELDS = new core_1.AllFields('*', AccountSegmentationCategories);
    /**
     * All key fields of the AccountSegmentationCategories entity.
     */
    AccountSegmentationCategories._keyFields = [AccountSegmentationCategories.SEGMENT_ID, AccountSegmentationCategories.CODE];
    /**
     * Mapping of all key field names to the respective static field property AccountSegmentationCategories.
     */
    AccountSegmentationCategories._keys = AccountSegmentationCategories._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AccountSegmentationCategories = exports.AccountSegmentationCategories || (exports.AccountSegmentationCategories = {}));
exports.AccountSegmentationCategories = AccountSegmentationCategories;
//# sourceMappingURL=AccountSegmentationCategories.js.map