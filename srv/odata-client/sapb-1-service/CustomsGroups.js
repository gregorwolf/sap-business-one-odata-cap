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
exports.CustomsGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CustomsGroupsRequestBuilder_1 = require("./CustomsGroupsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CustomsGroups" of service "SAPB1".
 */
var CustomsGroups = /** @class */ (function (_super) {
    __extends(CustomsGroups, _super);
    function CustomsGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CustomsGroups`.
     * @returns A builder that constructs instances of entity type `CustomsGroups`.
     */
    CustomsGroups.builder = function () {
        return core_1.EntityV4.entityBuilder(CustomsGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CustomsGroups` entity type.
     * @returns A `CustomsGroups` request builder.
     */
    CustomsGroups.requestBuilder = function () {
        return new CustomsGroupsRequestBuilder_1.CustomsGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomsGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CustomsGroups`.
     */
    CustomsGroups.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, CustomsGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CustomsGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CustomsGroups.
     */
    CustomsGroups._entityName = 'CustomsGroups';
    /**
     * Default url path for the according service.
     */
    CustomsGroups._defaultServicePath = '/b1s/v2/';
    return CustomsGroups;
}(core_1.EntityV4));
exports.CustomsGroups = CustomsGroups;
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var Items_1 = require("./Items");
(function (CustomsGroups) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsGroups.CODE = new core_1.NumberField('Code', CustomsGroups, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsGroups.NAME = new core_1.StringField('Name', CustomsGroups, 'Edm.String');
    /**
     * Static representation of the [[number]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsGroups.NUMBER = new core_1.StringField('Number', CustomsGroups, 'Edm.String');
    /**
     * Static representation of the [[customs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsGroups.CUSTOMS = new core_1.NumberField('Customs', CustomsGroups, 'Edm.Double');
    /**
     * Static representation of the [[purchase]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsGroups.PURCHASE = new core_1.NumberField('Purchase', CustomsGroups, 'Edm.Double');
    /**
     * Static representation of the [[other]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsGroups.OTHER = new core_1.NumberField('Other', CustomsGroups, 'Edm.Double');
    /**
     * Static representation of the [[total]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsGroups.TOTAL = new core_1.NumberField('Total', CustomsGroups, 'Edm.Double');
    /**
     * Static representation of the [[locked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsGroups.LOCKED = new core_1.EnumField('Locked', CustomsGroups);
    /**
     * Static representation of the [[customsAllocationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsGroups.CUSTOMS_ALLOCATION_ACCOUNT = new core_1.StringField('CustomsAllocationAccount', CustomsGroups, 'Edm.String');
    /**
     * Static representation of the [[customsExpenseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsGroups.CUSTOMS_EXPENSE_ACCOUNT = new core_1.StringField('CustomsExpenseAccount', CustomsGroups, 'Edm.String');
    /**
     * Static representation of the [[portAddress]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsGroups.PORT_ADDRESS = new core_1.StringField('PortAddress', CustomsGroups, 'Edm.String');
    /**
     * Static representation of the [[portState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsGroups.PORT_STATE = new core_1.StringField('PortState', CustomsGroups, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsGroups.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', CustomsGroups, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CustomsGroups.ITEMS = new core_1.OneToManyLink('Items', CustomsGroups, Items_1.Items);
    /**
     * All fields of the CustomsGroups entity.
     */
    CustomsGroups._allFields = [
        CustomsGroups.CODE,
        CustomsGroups.NAME,
        CustomsGroups.NUMBER,
        CustomsGroups.CUSTOMS,
        CustomsGroups.PURCHASE,
        CustomsGroups.OTHER,
        CustomsGroups.TOTAL,
        CustomsGroups.LOCKED,
        CustomsGroups.CUSTOMS_ALLOCATION_ACCOUNT,
        CustomsGroups.CUSTOMS_EXPENSE_ACCOUNT,
        CustomsGroups.PORT_ADDRESS,
        CustomsGroups.PORT_STATE,
        CustomsGroups.CHART_OF_ACCOUNT,
        CustomsGroups.ITEMS
    ];
    /**
     * All fields selector.
     */
    CustomsGroups.ALL_FIELDS = new core_1.AllFields('*', CustomsGroups);
    /**
     * All key fields of the CustomsGroups entity.
     */
    CustomsGroups._keyFields = [CustomsGroups.CODE];
    /**
     * Mapping of all key field names to the respective static field property CustomsGroups.
     */
    CustomsGroups._keys = CustomsGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CustomsGroups = exports.CustomsGroups || (exports.CustomsGroups = {}));
exports.CustomsGroups = CustomsGroups;
//# sourceMappingURL=CustomsGroups.js.map