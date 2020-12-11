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
exports.ServiceCallOrigins = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ServiceCallOriginsRequestBuilder_1 = require("./ServiceCallOriginsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ServiceCallOrigins" of service "SAPB1".
 */
var ServiceCallOrigins = /** @class */ (function (_super) {
    __extends(ServiceCallOrigins, _super);
    function ServiceCallOrigins() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ServiceCallOrigins`.
     * @returns A builder that constructs instances of entity type `ServiceCallOrigins`.
     */
    ServiceCallOrigins.builder = function () {
        return core_1.EntityV4.entityBuilder(ServiceCallOrigins);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ServiceCallOrigins` entity type.
     * @returns A `ServiceCallOrigins` request builder.
     */
    ServiceCallOrigins.requestBuilder = function () {
        return new ServiceCallOriginsRequestBuilder_1.ServiceCallOriginsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ServiceCallOrigins`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ServiceCallOrigins`.
     */
    ServiceCallOrigins.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ServiceCallOrigins);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ServiceCallOrigins.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ServiceCallOrigins.
     */
    ServiceCallOrigins._entityName = 'ServiceCallOrigins';
    /**
     * Default url path for the according service.
     */
    ServiceCallOrigins._defaultServicePath = '/b1s/v2/';
    return ServiceCallOrigins;
}(core_1.EntityV4));
exports.ServiceCallOrigins = ServiceCallOrigins;
var ServiceCalls_1 = require("./ServiceCalls");
(function (ServiceCallOrigins) {
    /**
     * Static representation of the [[originId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallOrigins.ORIGIN_ID = new core_1.NumberField('OriginID', ServiceCallOrigins, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallOrigins.NAME = new core_1.StringField('Name', ServiceCallOrigins, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallOrigins.DESCRIPTION = new core_1.StringField('Description', ServiceCallOrigins, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ServiceCallOrigins.SERVICE_CALLS = new core_1.OneToManyLink('ServiceCalls', ServiceCallOrigins, ServiceCalls_1.ServiceCalls);
    /**
     * All fields of the ServiceCallOrigins entity.
     */
    ServiceCallOrigins._allFields = [
        ServiceCallOrigins.ORIGIN_ID,
        ServiceCallOrigins.NAME,
        ServiceCallOrigins.DESCRIPTION,
        ServiceCallOrigins.SERVICE_CALLS
    ];
    /**
     * All fields selector.
     */
    ServiceCallOrigins.ALL_FIELDS = new core_1.AllFields('*', ServiceCallOrigins);
    /**
     * All key fields of the ServiceCallOrigins entity.
     */
    ServiceCallOrigins._keyFields = [ServiceCallOrigins.ORIGIN_ID];
    /**
     * Mapping of all key field names to the respective static field property ServiceCallOrigins.
     */
    ServiceCallOrigins._keys = ServiceCallOrigins._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ServiceCallOrigins = exports.ServiceCallOrigins || (exports.ServiceCallOrigins = {}));
exports.ServiceCallOrigins = ServiceCallOrigins;
//# sourceMappingURL=ServiceCallOrigins.js.map