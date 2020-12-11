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
exports.ServiceCallStatus = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ServiceCallStatusRequestBuilder_1 = require("./ServiceCallStatusRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ServiceCallStatus" of service "SAPB1".
 */
var ServiceCallStatus = /** @class */ (function (_super) {
    __extends(ServiceCallStatus, _super);
    function ServiceCallStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ServiceCallStatus`.
     * @returns A builder that constructs instances of entity type `ServiceCallStatus`.
     */
    ServiceCallStatus.builder = function () {
        return core_1.EntityV4.entityBuilder(ServiceCallStatus);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ServiceCallStatus` entity type.
     * @returns A `ServiceCallStatus` request builder.
     */
    ServiceCallStatus.requestBuilder = function () {
        return new ServiceCallStatusRequestBuilder_1.ServiceCallStatusRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallStatus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceCallStatus`.
     */
    ServiceCallStatus.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ServiceCallStatus);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ServiceCallStatus.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ServiceCallStatus.
     */
    ServiceCallStatus._entityName = 'ServiceCallStatus';
    /**
     * Default url path for the according service.
     */
    ServiceCallStatus._defaultServicePath = '/b1s/v2/';
    return ServiceCallStatus;
}(core_1.EntityV4));
exports.ServiceCallStatus = ServiceCallStatus;
var ServiceCalls_1 = require("./ServiceCalls");
(function (ServiceCallStatus) {
    /**
     * Static representation of the [[statusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallStatus.STATUS_ID = new core_1.NumberField('StatusId', ServiceCallStatus, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallStatus.NAME = new core_1.StringField('Name', ServiceCallStatus, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallStatus.DESCRIPTION = new core_1.StringField('Description', ServiceCallStatus, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallStatus.SERVICE_CALLS = new core_1.OneToManyLink('ServiceCalls', ServiceCallStatus, ServiceCalls_1.ServiceCalls);
    /**
     * All fields of the ServiceCallStatus entity.
     */
    ServiceCallStatus._allFields = [
        ServiceCallStatus.STATUS_ID,
        ServiceCallStatus.NAME,
        ServiceCallStatus.DESCRIPTION,
        ServiceCallStatus.SERVICE_CALLS
    ];
    /**
     * All fields selector.
     */
    ServiceCallStatus.ALL_FIELDS = new core_1.AllFields('*', ServiceCallStatus);
    /**
     * All key fields of the ServiceCallStatus entity.
     */
    ServiceCallStatus._keyFields = [ServiceCallStatus.STATUS_ID];
    /**
     * Mapping of all key field names to the respective static field property ServiceCallStatus.
     */
    ServiceCallStatus._keys = ServiceCallStatus._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ServiceCallStatus = exports.ServiceCallStatus || (exports.ServiceCallStatus = {}));
exports.ServiceCallStatus = ServiceCallStatus;
//# sourceMappingURL=ServiceCallStatus.js.map