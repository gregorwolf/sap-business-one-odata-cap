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
exports.ServiceCallProblemTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ServiceCallProblemTypesRequestBuilder_1 = require("./ServiceCallProblemTypesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ServiceCallProblemTypes" of service "SAPB1".
 */
var ServiceCallProblemTypes = /** @class */ (function (_super) {
    __extends(ServiceCallProblemTypes, _super);
    function ServiceCallProblemTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ServiceCallProblemTypes`.
     * @returns A builder that constructs instances of entity type `ServiceCallProblemTypes`.
     */
    ServiceCallProblemTypes.builder = function () {
        return core_1.EntityV4.entityBuilder(ServiceCallProblemTypes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ServiceCallProblemTypes` entity type.
     * @returns A `ServiceCallProblemTypes` request builder.
     */
    ServiceCallProblemTypes.requestBuilder = function () {
        return new ServiceCallProblemTypesRequestBuilder_1.ServiceCallProblemTypesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallProblemTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceCallProblemTypes`.
     */
    ServiceCallProblemTypes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ServiceCallProblemTypes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ServiceCallProblemTypes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ServiceCallProblemTypes.
     */
    ServiceCallProblemTypes._entityName = 'ServiceCallProblemTypes';
    /**
     * Default url path for the according service.
     */
    ServiceCallProblemTypes._defaultServicePath = '/b1s/v2/';
    return ServiceCallProblemTypes;
}(core_1.EntityV4));
exports.ServiceCallProblemTypes = ServiceCallProblemTypes;
var ServiceCalls_1 = require("./ServiceCalls");
(function (ServiceCallProblemTypes) {
    /**
     * Static representation of the [[problemTypeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallProblemTypes.PROBLEM_TYPE_ID = new core_1.NumberField('ProblemTypeID', ServiceCallProblemTypes, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallProblemTypes.NAME = new core_1.StringField('Name', ServiceCallProblemTypes, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallProblemTypes.DESCRIPTION = new core_1.StringField('Description', ServiceCallProblemTypes, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallProblemTypes.SERVICE_CALLS = new core_1.OneToManyLink('ServiceCalls', ServiceCallProblemTypes, ServiceCalls_1.ServiceCalls);
    /**
     * All fields of the ServiceCallProblemTypes entity.
     */
    ServiceCallProblemTypes._allFields = [
        ServiceCallProblemTypes.PROBLEM_TYPE_ID,
        ServiceCallProblemTypes.NAME,
        ServiceCallProblemTypes.DESCRIPTION,
        ServiceCallProblemTypes.SERVICE_CALLS
    ];
    /**
     * All fields selector.
     */
    ServiceCallProblemTypes.ALL_FIELDS = new core_1.AllFields('*', ServiceCallProblemTypes);
    /**
     * All key fields of the ServiceCallProblemTypes entity.
     */
    ServiceCallProblemTypes._keyFields = [ServiceCallProblemTypes.PROBLEM_TYPE_ID];
    /**
     * Mapping of all key field names to the respective static field property ServiceCallProblemTypes.
     */
    ServiceCallProblemTypes._keys = ServiceCallProblemTypes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ServiceCallProblemTypes = exports.ServiceCallProblemTypes || (exports.ServiceCallProblemTypes = {}));
exports.ServiceCallProblemTypes = ServiceCallProblemTypes;
//# sourceMappingURL=ServiceCallProblemTypes.js.map