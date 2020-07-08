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
exports.ResourceProperties = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ResourcePropertiesRequestBuilder_1 = require("./ResourcePropertiesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "ResourceProperties" of service "SAPB1".
 */
var ResourceProperties = /** @class */ (function (_super) {
    __extends(ResourceProperties, _super);
    function ResourceProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ResourceProperties`.
     * @returns A builder that constructs instances of entity type `ResourceProperties`.
     */
    ResourceProperties.builder = function () {
        return v4_1.Entity.entityBuilder(ResourceProperties);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ResourceProperties` entity type.
     * @returns A `ResourceProperties` request builder.
     */
    ResourceProperties.requestBuilder = function () {
        return new ResourcePropertiesRequestBuilder_1.ResourcePropertiesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ResourceProperties`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ResourceProperties`.
     */
    ResourceProperties.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, ResourceProperties);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ResourceProperties.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ResourceProperties.
     */
    ResourceProperties._entityName = 'ResourceProperties';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ResourceProperties.
     */
    ResourceProperties._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    ResourceProperties._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ResourceProperties;
}(v4_1.Entity));
exports.ResourceProperties = ResourceProperties;
(function (ResourceProperties) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceProperties.CODE = new v4_1.NumberField('Code', ResourceProperties, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceProperties.NAME = new v4_1.StringField('Name', ResourceProperties, 'Edm.String');
    /**
     * All fields of the ResourceProperties entity.
     */
    ResourceProperties._allFields = [
        ResourceProperties.CODE,
        ResourceProperties.NAME
    ];
    /**
     * All fields selector.
     */
    ResourceProperties.ALL_FIELDS = new v4_1.AllFields('*', ResourceProperties);
    /**
     * All key fields of the ResourceProperties entity.
     */
    ResourceProperties._keyFields = [ResourceProperties.CODE];
    /**
     * Mapping of all key field names to the respective static field property ResourceProperties.
     */
    ResourceProperties._keys = ResourceProperties._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ResourceProperties = exports.ResourceProperties || (exports.ResourceProperties = {}));
exports.ResourceProperties = ResourceProperties;
//# sourceMappingURL=ResourceProperties.js.map