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
exports.ServiceGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ServiceGroupsRequestBuilder_1 = require("./ServiceGroupsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ServiceGroups" of service "SAPB1".
 */
var ServiceGroups = /** @class */ (function (_super) {
    __extends(ServiceGroups, _super);
    function ServiceGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ServiceGroups`.
     * @returns A builder that constructs instances of entity type `ServiceGroups`.
     */
    ServiceGroups.builder = function () {
        return core_1.EntityV4.entityBuilder(ServiceGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ServiceGroups` entity type.
     * @returns A `ServiceGroups` request builder.
     */
    ServiceGroups.requestBuilder = function () {
        return new ServiceGroupsRequestBuilder_1.ServiceGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceGroups`.
     */
    ServiceGroups.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ServiceGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ServiceGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ServiceGroups.
     */
    ServiceGroups._entityName = 'ServiceGroups';
    /**
     * Default url path for the according service.
     */
    ServiceGroups._defaultServicePath = '/b1s/v2/';
    return ServiceGroups;
}(core_1.EntityV4));
exports.ServiceGroups = ServiceGroups;
var Items_1 = require("./Items");
(function (ServiceGroups) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceGroups.ABS_ENTRY = new core_1.NumberField('AbsEntry', ServiceGroups, 'Edm.Int32');
    /**
     * Static representation of the [[serviceGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceGroups.SERVICE_GROUP_CODE = new core_1.StringField('ServiceGroupCode', ServiceGroups, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceGroups.DESCRIPTION = new core_1.StringField('Description', ServiceGroups, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceGroups.ITEMS = new core_1.OneToManyLink('Items', ServiceGroups, Items_1.Items);
    /**
     * All fields of the ServiceGroups entity.
     */
    ServiceGroups._allFields = [
        ServiceGroups.ABS_ENTRY,
        ServiceGroups.SERVICE_GROUP_CODE,
        ServiceGroups.DESCRIPTION,
        ServiceGroups.ITEMS
    ];
    /**
     * All fields selector.
     */
    ServiceGroups.ALL_FIELDS = new core_1.AllFields('*', ServiceGroups);
    /**
     * All key fields of the ServiceGroups entity.
     */
    ServiceGroups._keyFields = [ServiceGroups.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property ServiceGroups.
     */
    ServiceGroups._keys = ServiceGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ServiceGroups = exports.ServiceGroups || (exports.ServiceGroups = {}));
exports.ServiceGroups = ServiceGroups;
//# sourceMappingURL=ServiceGroups.js.map