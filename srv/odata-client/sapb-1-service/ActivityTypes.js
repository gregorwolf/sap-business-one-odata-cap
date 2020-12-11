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
exports.ActivityTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ActivityTypesRequestBuilder_1 = require("./ActivityTypesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ActivityTypes" of service "SAPB1".
 */
var ActivityTypes = /** @class */ (function (_super) {
    __extends(ActivityTypes, _super);
    function ActivityTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ActivityTypes`.
     * @returns A builder that constructs instances of entity type `ActivityTypes`.
     */
    ActivityTypes.builder = function () {
        return core_1.EntityV4.entityBuilder(ActivityTypes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ActivityTypes` entity type.
     * @returns A `ActivityTypes` request builder.
     */
    ActivityTypes.requestBuilder = function () {
        return new ActivityTypesRequestBuilder_1.ActivityTypesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ActivityTypes`.
     */
    ActivityTypes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ActivityTypes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ActivityTypes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ActivityTypes.
     */
    ActivityTypes._entityName = 'ActivityTypes';
    /**
     * Default url path for the according service.
     */
    ActivityTypes._defaultServicePath = '/b1s/v2/';
    return ActivityTypes;
}(core_1.EntityV4));
exports.ActivityTypes = ActivityTypes;
var Contacts_1 = require("./Contacts");
var Activities_1 = require("./Activities");
(function (ActivityTypes) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityTypes.CODE = new core_1.NumberField('Code', ActivityTypes, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityTypes.NAME = new core_1.StringField('Name', ActivityTypes, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[contacts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityTypes.CONTACTS = new core_1.OneToManyLink('Contacts', ActivityTypes, Contacts_1.Contacts);
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityTypes.ACTIVITIES = new core_1.OneToManyLink('Activities', ActivityTypes, Activities_1.Activities);
    /**
     * All fields of the ActivityTypes entity.
     */
    ActivityTypes._allFields = [
        ActivityTypes.CODE,
        ActivityTypes.NAME,
        ActivityTypes.CONTACTS,
        ActivityTypes.ACTIVITIES
    ];
    /**
     * All fields selector.
     */
    ActivityTypes.ALL_FIELDS = new core_1.AllFields('*', ActivityTypes);
    /**
     * All key fields of the ActivityTypes entity.
     */
    ActivityTypes._keyFields = [ActivityTypes.CODE];
    /**
     * Mapping of all key field names to the respective static field property ActivityTypes.
     */
    ActivityTypes._keys = ActivityTypes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ActivityTypes = exports.ActivityTypes || (exports.ActivityTypes = {}));
exports.ActivityTypes = ActivityTypes;
//# sourceMappingURL=ActivityTypes.js.map