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
exports.ActivityLocations = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ActivityLocationsRequestBuilder_1 = require("./ActivityLocationsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "ActivityLocations" of service "SAPB1".
 */
var ActivityLocations = /** @class */ (function (_super) {
    __extends(ActivityLocations, _super);
    function ActivityLocations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ActivityLocations`.
     * @returns A builder that constructs instances of entity type `ActivityLocations`.
     */
    ActivityLocations.builder = function () {
        return v4_1.Entity.entityBuilder(ActivityLocations);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ActivityLocations` entity type.
     * @returns A `ActivityLocations` request builder.
     */
    ActivityLocations.requestBuilder = function () {
        return new ActivityLocationsRequestBuilder_1.ActivityLocationsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActivityLocations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ActivityLocations`.
     */
    ActivityLocations.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, ActivityLocations);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ActivityLocations.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ActivityLocations.
     */
    ActivityLocations._entityName = 'ActivityLocations';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ActivityLocations.
     */
    ActivityLocations._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    ActivityLocations._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ActivityLocations;
}(v4_1.Entity));
exports.ActivityLocations = ActivityLocations;
var Contacts_1 = require("./Contacts");
var Activities_1 = require("./Activities");
var ServiceCalls_1 = require("./ServiceCalls");
(function (ActivityLocations) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityLocations.CODE = new v4_1.NumberField('Code', ActivityLocations, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityLocations.NAME = new v4_1.StringField('Name', ActivityLocations, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[contacts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityLocations.CONTACTS = new v4_1.OneToManyLink('Contacts', ActivityLocations, Contacts_1.Contacts);
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityLocations.ACTIVITIES = new v4_1.OneToManyLink('Activities', ActivityLocations, Activities_1.Activities);
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ActivityLocations.SERVICE_CALLS = new v4_1.OneToManyLink('ServiceCalls', ActivityLocations, ServiceCalls_1.ServiceCalls);
    /**
     * All fields of the ActivityLocations entity.
     */
    ActivityLocations._allFields = [
        ActivityLocations.CODE,
        ActivityLocations.NAME,
        ActivityLocations.CONTACTS,
        ActivityLocations.ACTIVITIES,
        ActivityLocations.SERVICE_CALLS
    ];
    /**
     * All fields selector.
     */
    ActivityLocations.ALL_FIELDS = new v4_1.AllFields('*', ActivityLocations);
    /**
     * All key fields of the ActivityLocations entity.
     */
    ActivityLocations._keyFields = [ActivityLocations.CODE];
    /**
     * Mapping of all key field names to the respective static field property ActivityLocations.
     */
    ActivityLocations._keys = ActivityLocations._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ActivityLocations = exports.ActivityLocations || (exports.ActivityLocations = {}));
exports.ActivityLocations = ActivityLocations;
//# sourceMappingURL=ActivityLocations.js.map