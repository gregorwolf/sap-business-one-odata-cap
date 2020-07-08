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
exports.ServiceCallProblemSubTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ServiceCallProblemSubTypesRequestBuilder_1 = require("./ServiceCallProblemSubTypesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "ServiceCallProblemSubTypes" of service "SAPB1".
 */
var ServiceCallProblemSubTypes = /** @class */ (function (_super) {
    __extends(ServiceCallProblemSubTypes, _super);
    function ServiceCallProblemSubTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ServiceCallProblemSubTypes`.
     * @returns A builder that constructs instances of entity type `ServiceCallProblemSubTypes`.
     */
    ServiceCallProblemSubTypes.builder = function () {
        return v4_1.Entity.entityBuilder(ServiceCallProblemSubTypes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ServiceCallProblemSubTypes` entity type.
     * @returns A `ServiceCallProblemSubTypes` request builder.
     */
    ServiceCallProblemSubTypes.requestBuilder = function () {
        return new ServiceCallProblemSubTypesRequestBuilder_1.ServiceCallProblemSubTypesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallProblemSubTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceCallProblemSubTypes`.
     */
    ServiceCallProblemSubTypes.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, ServiceCallProblemSubTypes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ServiceCallProblemSubTypes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ServiceCallProblemSubTypes.
     */
    ServiceCallProblemSubTypes._entityName = 'ServiceCallProblemSubTypes';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ServiceCallProblemSubTypes.
     */
    ServiceCallProblemSubTypes._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    ServiceCallProblemSubTypes._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ServiceCallProblemSubTypes;
}(v4_1.Entity));
exports.ServiceCallProblemSubTypes = ServiceCallProblemSubTypes;
var ServiceCalls_1 = require("./ServiceCalls");
(function (ServiceCallProblemSubTypes) {
    /**
     * Static representation of the [[problemSubTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallProblemSubTypes.PROBLEM_SUB_TYPE_ID = new v4_1.NumberField('ProblemSubTypeID', ServiceCallProblemSubTypes, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallProblemSubTypes.NAME = new v4_1.StringField('Name', ServiceCallProblemSubTypes, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallProblemSubTypes.DESCRIPTION = new v4_1.StringField('Description', ServiceCallProblemSubTypes, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallProblemSubTypes.SERVICE_CALLS = new v4_1.OneToManyLink('ServiceCalls', ServiceCallProblemSubTypes, ServiceCalls_1.ServiceCalls);
    /**
     * All fields of the ServiceCallProblemSubTypes entity.
     */
    ServiceCallProblemSubTypes._allFields = [
        ServiceCallProblemSubTypes.PROBLEM_SUB_TYPE_ID,
        ServiceCallProblemSubTypes.NAME,
        ServiceCallProblemSubTypes.DESCRIPTION,
        ServiceCallProblemSubTypes.SERVICE_CALLS
    ];
    /**
     * All fields selector.
     */
    ServiceCallProblemSubTypes.ALL_FIELDS = new v4_1.AllFields('*', ServiceCallProblemSubTypes);
    /**
     * All key fields of the ServiceCallProblemSubTypes entity.
     */
    ServiceCallProblemSubTypes._keyFields = [ServiceCallProblemSubTypes.PROBLEM_SUB_TYPE_ID];
    /**
     * Mapping of all key field names to the respective static field property ServiceCallProblemSubTypes.
     */
    ServiceCallProblemSubTypes._keys = ServiceCallProblemSubTypes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ServiceCallProblemSubTypes = exports.ServiceCallProblemSubTypes || (exports.ServiceCallProblemSubTypes = {}));
exports.ServiceCallProblemSubTypes = ServiceCallProblemSubTypes;
//# sourceMappingURL=ServiceCallProblemSubTypes.js.map