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
exports.B1Sessions = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var B1SessionsRequestBuilder_1 = require("./B1SessionsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "B1Sessions" of service "SAPB1".
 */
var B1Sessions = /** @class */ (function (_super) {
    __extends(B1Sessions, _super);
    function B1Sessions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `B1Sessions`.
     * @returns A builder that constructs instances of entity type `B1Sessions`.
     */
    B1Sessions.builder = function () {
        return core_1.EntityV4.entityBuilder(B1Sessions);
    };
    /**
     * Returns a request builder to construct requests for operations on the `B1Sessions` entity type.
     * @returns A `B1Sessions` request builder.
     */
    B1Sessions.requestBuilder = function () {
        return new B1SessionsRequestBuilder_1.B1SessionsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `B1Sessions`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `B1Sessions`.
     */
    B1Sessions.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, B1Sessions);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    B1Sessions.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for B1Sessions.
     */
    B1Sessions._entityName = 'B1Sessions';
    /**
     * Default url path for the according service.
     */
    B1Sessions._defaultServicePath = '/b1s/v2/';
    return B1Sessions;
}(core_1.EntityV4));
exports.B1Sessions = B1Sessions;
(function (B1Sessions) {
    /**
     * Static representation of the [[version]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    B1Sessions.VERSION = new core_1.StringField('Version', B1Sessions, 'Edm.String');
    /**
     * Static representation of the [[sessionTimeout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    B1Sessions.SESSION_TIMEOUT = new core_1.NumberField('SessionTimeout', B1Sessions, 'Edm.Int32');
    /**
     * Static representation of the [[sessionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    B1Sessions.SESSION_ID = new core_1.StringField('SessionId', B1Sessions, 'Edm.String');
    /**
     * All fields of the B1Sessions entity.
     */
    B1Sessions._allFields = [
        B1Sessions.VERSION,
        B1Sessions.SESSION_TIMEOUT,
        B1Sessions.SESSION_ID
    ];
    /**
     * All fields selector.
     */
    B1Sessions.ALL_FIELDS = new core_1.AllFields('*', B1Sessions);
    /**
     * All key fields of the B1Sessions entity.
     */
    B1Sessions._keyFields = [B1Sessions.SESSION_ID];
    /**
     * Mapping of all key field names to the respective static field property B1Sessions.
     */
    B1Sessions._keys = B1Sessions._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(B1Sessions = exports.B1Sessions || (exports.B1Sessions = {}));
exports.B1Sessions = B1Sessions;
//# sourceMappingURL=B1Sessions.js.map