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
exports.ActivityRecipientLists = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ActivityRecipientListsRequestBuilder_1 = require("./ActivityRecipientListsRequestBuilder");
var ActivityRecipient_1 = require("./ActivityRecipient");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ActivityRecipientLists" of service "SAPB1".
 */
var ActivityRecipientLists = /** @class */ (function (_super) {
    __extends(ActivityRecipientLists, _super);
    function ActivityRecipientLists() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ActivityRecipientLists`.
     * @returns A builder that constructs instances of entity type `ActivityRecipientLists`.
     */
    ActivityRecipientLists.builder = function () {
        return core_1.EntityV4.entityBuilder(ActivityRecipientLists);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ActivityRecipientLists` entity type.
     * @returns A `ActivityRecipientLists` request builder.
     */
    ActivityRecipientLists.requestBuilder = function () {
        return new ActivityRecipientListsRequestBuilder_1.ActivityRecipientListsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityRecipientLists`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ActivityRecipientLists`.
     */
    ActivityRecipientLists.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ActivityRecipientLists);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ActivityRecipientLists.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ActivityRecipientLists.
     */
    ActivityRecipientLists._entityName = 'ActivityRecipientLists';
    /**
     * Default url path for the according service.
     */
    ActivityRecipientLists._defaultServicePath = '/b1s/v2/';
    return ActivityRecipientLists;
}(core_1.EntityV4));
exports.ActivityRecipientLists = ActivityRecipientLists;
var Activities_1 = require("./Activities");
(function (ActivityRecipientLists) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityRecipientLists.CODE = new core_1.NumberField('Code', ActivityRecipientLists, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityRecipientLists.NAME = new core_1.StringField('Name', ActivityRecipientLists, 'Edm.String');
    /**
     * Static representation of the [[active]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityRecipientLists.ACTIVE = new core_1.EnumField('Active', ActivityRecipientLists);
    /**
     * Static representation of the [[isMultiple]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityRecipientLists.IS_MULTIPLE = new core_1.EnumField('IsMultiple', ActivityRecipientLists);
    /**
     * Static representation of the [[activityRecipientCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityRecipientLists.ACTIVITY_RECIPIENT_COLLECTION = new core_1.CollectionField('ActivityRecipientCollection', ActivityRecipientLists, ActivityRecipient_1.ActivityRecipient);
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityRecipientLists.ACTIVITIES = new core_1.OneToManyLink('Activities', ActivityRecipientLists, Activities_1.Activities);
    /**
     * All fields of the ActivityRecipientLists entity.
     */
    ActivityRecipientLists._allFields = [
        ActivityRecipientLists.CODE,
        ActivityRecipientLists.NAME,
        ActivityRecipientLists.ACTIVE,
        ActivityRecipientLists.IS_MULTIPLE,
        ActivityRecipientLists.ACTIVITY_RECIPIENT_COLLECTION,
        ActivityRecipientLists.ACTIVITIES
    ];
    /**
     * All fields selector.
     */
    ActivityRecipientLists.ALL_FIELDS = new core_1.AllFields('*', ActivityRecipientLists);
    /**
     * All key fields of the ActivityRecipientLists entity.
     */
    ActivityRecipientLists._keyFields = [ActivityRecipientLists.CODE];
    /**
     * Mapping of all key field names to the respective static field property ActivityRecipientLists.
     */
    ActivityRecipientLists._keys = ActivityRecipientLists._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ActivityRecipientLists = exports.ActivityRecipientLists || (exports.ActivityRecipientLists = {}));
exports.ActivityRecipientLists = ActivityRecipientLists;
//# sourceMappingURL=ActivityRecipientLists.js.map