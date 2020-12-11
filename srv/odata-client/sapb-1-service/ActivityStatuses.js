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
exports.ActivityStatuses = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ActivityStatusesRequestBuilder_1 = require("./ActivityStatusesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ActivityStatuses" of service "SAPB1".
 */
var ActivityStatuses = /** @class */ (function (_super) {
    __extends(ActivityStatuses, _super);
    function ActivityStatuses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ActivityStatuses`.
     * @returns A builder that constructs instances of entity type `ActivityStatuses`.
     */
    ActivityStatuses.builder = function () {
        return core_1.EntityV4.entityBuilder(ActivityStatuses);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ActivityStatuses` entity type.
     * @returns A `ActivityStatuses` request builder.
     */
    ActivityStatuses.requestBuilder = function () {
        return new ActivityStatusesRequestBuilder_1.ActivityStatusesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityStatuses`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ActivityStatuses`.
     */
    ActivityStatuses.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ActivityStatuses);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ActivityStatuses.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ActivityStatuses.
     */
    ActivityStatuses._entityName = 'ActivityStatuses';
    /**
     * Default url path for the according service.
     */
    ActivityStatuses._defaultServicePath = '/b1s/v2/';
    return ActivityStatuses;
}(core_1.EntityV4));
exports.ActivityStatuses = ActivityStatuses;
var Contacts_1 = require("./Contacts");
var Activities_1 = require("./Activities");
(function (ActivityStatuses) {
    /**
     * Static representation of the [[statusDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatuses.STATUS_DESCRIPTION = new core_1.StringField('StatusDescription', ActivityStatuses, 'Edm.String');
    /**
     * Static representation of the [[statusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatuses.STATUS_ID = new core_1.NumberField('StatusId', ActivityStatuses, 'Edm.Int32');
    /**
     * Static representation of the [[statusName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatuses.STATUS_NAME = new core_1.StringField('StatusName', ActivityStatuses, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[contacts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatuses.CONTACTS = new core_1.OneToManyLink('Contacts', ActivityStatuses, Contacts_1.Contacts);
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityStatuses.ACTIVITIES = new core_1.OneToManyLink('Activities', ActivityStatuses, Activities_1.Activities);
    /**
     * All fields of the ActivityStatuses entity.
     */
    ActivityStatuses._allFields = [
        ActivityStatuses.STATUS_DESCRIPTION,
        ActivityStatuses.STATUS_ID,
        ActivityStatuses.STATUS_NAME,
        ActivityStatuses.CONTACTS,
        ActivityStatuses.ACTIVITIES
    ];
    /**
     * All fields selector.
     */
    ActivityStatuses.ALL_FIELDS = new core_1.AllFields('*', ActivityStatuses);
    /**
     * All key fields of the ActivityStatuses entity.
     */
    ActivityStatuses._keyFields = [ActivityStatuses.STATUS_ID];
    /**
     * Mapping of all key field names to the respective static field property ActivityStatuses.
     */
    ActivityStatuses._keys = ActivityStatuses._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ActivityStatuses = exports.ActivityStatuses || (exports.ActivityStatuses = {}));
exports.ActivityStatuses = ActivityStatuses;
//# sourceMappingURL=ActivityStatuses.js.map