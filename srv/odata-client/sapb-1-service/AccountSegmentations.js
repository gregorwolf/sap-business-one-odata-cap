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
exports.AccountSegmentations = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AccountSegmentationsRequestBuilder_1 = require("./AccountSegmentationsRequestBuilder");
var AccountSegmentationsCategory_1 = require("./AccountSegmentationsCategory");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AccountSegmentations" of service "SAPB1".
 */
var AccountSegmentations = /** @class */ (function (_super) {
    __extends(AccountSegmentations, _super);
    function AccountSegmentations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `AccountSegmentations`.
     * @returns A builder that constructs instances of entity type `AccountSegmentations`.
     */
    AccountSegmentations.builder = function () {
        return core_1.EntityV4.entityBuilder(AccountSegmentations);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AccountSegmentations` entity type.
     * @returns A `AccountSegmentations` request builder.
     */
    AccountSegmentations.requestBuilder = function () {
        return new AccountSegmentationsRequestBuilder_1.AccountSegmentationsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AccountSegmentations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AccountSegmentations`.
     */
    AccountSegmentations.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, AccountSegmentations);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AccountSegmentations.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AccountSegmentations.
     */
    AccountSegmentations._entityName = 'AccountSegmentations';
    /**
     * Default url path for the according service.
     */
    AccountSegmentations._defaultServicePath = '/b1s/v2/';
    return AccountSegmentations;
}(core_1.EntityV4));
exports.AccountSegmentations = AccountSegmentations;
var AccountSegmentationCategories_1 = require("./AccountSegmentationCategories");
(function (AccountSegmentations) {
    /**
     * Static representation of the [[numerator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccountSegmentations.NUMERATOR = new core_1.NumberField('Numerator', AccountSegmentations, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccountSegmentations.NAME = new core_1.StringField('Name', AccountSegmentations, 'Edm.String');
    /**
     * Static representation of the [[size]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccountSegmentations.SIZE = new core_1.NumberField('Size', AccountSegmentations, 'Edm.Int32');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccountSegmentations.TYPE = new core_1.EnumField('Type', AccountSegmentations);
    /**
     * Static representation of the [[accountSegmentationsCategories]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccountSegmentations.ACCOUNT_SEGMENTATIONS_CATEGORIES = new core_1.CollectionField('AccountSegmentationsCategories', AccountSegmentations, AccountSegmentationsCategory_1.AccountSegmentationsCategory);
    /**
     * Static representation of the one-to-many navigation property [[accountSegmentationCategories]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccountSegmentations.ACCOUNT_SEGMENTATION_CATEGORIES = new core_1.OneToManyLink('AccountSegmentationCategories', AccountSegmentations, AccountSegmentationCategories_1.AccountSegmentationCategories);
    /**
     * All fields of the AccountSegmentations entity.
     */
    AccountSegmentations._allFields = [
        AccountSegmentations.NUMERATOR,
        AccountSegmentations.NAME,
        AccountSegmentations.SIZE,
        AccountSegmentations.TYPE,
        AccountSegmentations.ACCOUNT_SEGMENTATIONS_CATEGORIES,
        AccountSegmentations.ACCOUNT_SEGMENTATION_CATEGORIES
    ];
    /**
     * All fields selector.
     */
    AccountSegmentations.ALL_FIELDS = new core_1.AllFields('*', AccountSegmentations);
    /**
     * All key fields of the AccountSegmentations entity.
     */
    AccountSegmentations._keyFields = [AccountSegmentations.NUMERATOR];
    /**
     * Mapping of all key field names to the respective static field property AccountSegmentations.
     */
    AccountSegmentations._keys = AccountSegmentations._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AccountSegmentations = exports.AccountSegmentations || (exports.AccountSegmentations = {}));
exports.AccountSegmentations = AccountSegmentations;
//# sourceMappingURL=AccountSegmentations.js.map