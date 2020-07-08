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
exports.ServiceCallSolutionStatus = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ServiceCallSolutionStatusRequestBuilder_1 = require("./ServiceCallSolutionStatusRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "ServiceCallSolutionStatus" of service "SAPB1".
 */
var ServiceCallSolutionStatus = /** @class */ (function (_super) {
    __extends(ServiceCallSolutionStatus, _super);
    function ServiceCallSolutionStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ServiceCallSolutionStatus`.
     * @returns A builder that constructs instances of entity type `ServiceCallSolutionStatus`.
     */
    ServiceCallSolutionStatus.builder = function () {
        return v4_1.Entity.entityBuilder(ServiceCallSolutionStatus);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ServiceCallSolutionStatus` entity type.
     * @returns A `ServiceCallSolutionStatus` request builder.
     */
    ServiceCallSolutionStatus.requestBuilder = function () {
        return new ServiceCallSolutionStatusRequestBuilder_1.ServiceCallSolutionStatusRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallSolutionStatus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceCallSolutionStatus`.
     */
    ServiceCallSolutionStatus.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, ServiceCallSolutionStatus);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ServiceCallSolutionStatus.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ServiceCallSolutionStatus.
     */
    ServiceCallSolutionStatus._entityName = 'ServiceCallSolutionStatus';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ServiceCallSolutionStatus.
     */
    ServiceCallSolutionStatus._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    ServiceCallSolutionStatus._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ServiceCallSolutionStatus;
}(v4_1.Entity));
exports.ServiceCallSolutionStatus = ServiceCallSolutionStatus;
var KnowledgeBaseSolutions_1 = require("./KnowledgeBaseSolutions");
(function (ServiceCallSolutionStatus) {
    /**
     * Static representation of the [[statusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallSolutionStatus.STATUS_ID = new v4_1.NumberField('StatusId', ServiceCallSolutionStatus, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallSolutionStatus.NAME = new v4_1.StringField('Name', ServiceCallSolutionStatus, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallSolutionStatus.DESCRIPTION = new v4_1.StringField('Description', ServiceCallSolutionStatus, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[knowledgeBaseSolutions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallSolutionStatus.KNOWLEDGE_BASE_SOLUTIONS = new v4_1.OneToManyLink('KnowledgeBaseSolutions', ServiceCallSolutionStatus, KnowledgeBaseSolutions_1.KnowledgeBaseSolutions);
    /**
     * All fields of the ServiceCallSolutionStatus entity.
     */
    ServiceCallSolutionStatus._allFields = [
        ServiceCallSolutionStatus.STATUS_ID,
        ServiceCallSolutionStatus.NAME,
        ServiceCallSolutionStatus.DESCRIPTION,
        ServiceCallSolutionStatus.KNOWLEDGE_BASE_SOLUTIONS
    ];
    /**
     * All fields selector.
     */
    ServiceCallSolutionStatus.ALL_FIELDS = new v4_1.AllFields('*', ServiceCallSolutionStatus);
    /**
     * All key fields of the ServiceCallSolutionStatus entity.
     */
    ServiceCallSolutionStatus._keyFields = [ServiceCallSolutionStatus.STATUS_ID];
    /**
     * Mapping of all key field names to the respective static field property ServiceCallSolutionStatus.
     */
    ServiceCallSolutionStatus._keys = ServiceCallSolutionStatus._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ServiceCallSolutionStatus = exports.ServiceCallSolutionStatus || (exports.ServiceCallSolutionStatus = {}));
exports.ServiceCallSolutionStatus = ServiceCallSolutionStatus;
//# sourceMappingURL=ServiceCallSolutionStatus.js.map