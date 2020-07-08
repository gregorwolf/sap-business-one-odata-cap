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
exports.ServiceCallTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ServiceCallTypesRequestBuilder_1 = require("./ServiceCallTypesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "ServiceCallTypes" of service "SAPB1".
 */
var ServiceCallTypes = /** @class */ (function (_super) {
    __extends(ServiceCallTypes, _super);
    function ServiceCallTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ServiceCallTypes`.
     * @returns A builder that constructs instances of entity type `ServiceCallTypes`.
     */
    ServiceCallTypes.builder = function () {
        return v4_1.Entity.entityBuilder(ServiceCallTypes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ServiceCallTypes` entity type.
     * @returns A `ServiceCallTypes` request builder.
     */
    ServiceCallTypes.requestBuilder = function () {
        return new ServiceCallTypesRequestBuilder_1.ServiceCallTypesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceCallTypes`.
     */
    ServiceCallTypes.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, ServiceCallTypes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ServiceCallTypes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ServiceCallTypes.
     */
    ServiceCallTypes._entityName = 'ServiceCallTypes';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ServiceCallTypes.
     */
    ServiceCallTypes._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    ServiceCallTypes._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ServiceCallTypes;
}(v4_1.Entity));
exports.ServiceCallTypes = ServiceCallTypes;
var ServiceCalls_1 = require("./ServiceCalls");
(function (ServiceCallTypes) {
    /**
     * Static representation of the [[callTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallTypes.CALL_TYPE_ID = new v4_1.NumberField('CallTypeID', ServiceCallTypes, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallTypes.NAME = new v4_1.StringField('Name', ServiceCallTypes, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallTypes.DESCRIPTION = new v4_1.StringField('Description', ServiceCallTypes, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallTypes.SERVICE_CALLS = new v4_1.OneToManyLink('ServiceCalls', ServiceCallTypes, ServiceCalls_1.ServiceCalls);
    /**
     * All fields of the ServiceCallTypes entity.
     */
    ServiceCallTypes._allFields = [
        ServiceCallTypes.CALL_TYPE_ID,
        ServiceCallTypes.NAME,
        ServiceCallTypes.DESCRIPTION,
        ServiceCallTypes.SERVICE_CALLS
    ];
    /**
     * All fields selector.
     */
    ServiceCallTypes.ALL_FIELDS = new v4_1.AllFields('*', ServiceCallTypes);
    /**
     * All key fields of the ServiceCallTypes entity.
     */
    ServiceCallTypes._keyFields = [ServiceCallTypes.CALL_TYPE_ID];
    /**
     * Mapping of all key field names to the respective static field property ServiceCallTypes.
     */
    ServiceCallTypes._keys = ServiceCallTypes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ServiceCallTypes = exports.ServiceCallTypes || (exports.ServiceCallTypes = {}));
exports.ServiceCallTypes = ServiceCallTypes;
//# sourceMappingURL=ServiceCallTypes.js.map