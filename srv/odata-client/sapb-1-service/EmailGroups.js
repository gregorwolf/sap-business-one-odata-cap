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
exports.EmailGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmailGroupsRequestBuilder_1 = require("./EmailGroupsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "EmailGroups" of service "SAPB1".
 */
var EmailGroups = /** @class */ (function (_super) {
    __extends(EmailGroups, _super);
    function EmailGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmailGroups`.
     * @returns A builder that constructs instances of entity type `EmailGroups`.
     */
    EmailGroups.builder = function () {
        return v4_1.Entity.entityBuilder(EmailGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmailGroups` entity type.
     * @returns A `EmailGroups` request builder.
     */
    EmailGroups.requestBuilder = function () {
        return new EmailGroupsRequestBuilder_1.EmailGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmailGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmailGroups`.
     */
    EmailGroups.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, EmailGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmailGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmailGroups.
     */
    EmailGroups._entityName = 'EmailGroups';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmailGroups.
     */
    EmailGroups._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    EmailGroups._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmailGroups;
}(v4_1.Entity));
exports.EmailGroups = EmailGroups;
(function (EmailGroups) {
    /**
     * Static representation of the [[emailGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmailGroups.EMAIL_GROUP_CODE = new v4_1.StringField('EmailGroupCode', EmailGroups, 'Edm.String');
    /**
     * Static representation of the [[emailGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmailGroups.EMAIL_GROUP_NAME = new v4_1.StringField('EmailGroupName', EmailGroups, 'Edm.String');
    /**
     * All fields of the EmailGroups entity.
     */
    EmailGroups._allFields = [
        EmailGroups.EMAIL_GROUP_CODE,
        EmailGroups.EMAIL_GROUP_NAME
    ];
    /**
     * All fields selector.
     */
    EmailGroups.ALL_FIELDS = new v4_1.AllFields('*', EmailGroups);
    /**
     * All key fields of the EmailGroups entity.
     */
    EmailGroups._keyFields = [EmailGroups.EMAIL_GROUP_CODE];
    /**
     * Mapping of all key field names to the respective static field property EmailGroups.
     */
    EmailGroups._keys = EmailGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmailGroups = exports.EmailGroups || (exports.EmailGroups = {}));
exports.EmailGroups = EmailGroups;
//# sourceMappingURL=EmailGroups.js.map