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
exports.LocalEra = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var LocalEraRequestBuilder_1 = require("./LocalEraRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "LocalEra" of service "SAPB1".
 */
var LocalEra = /** @class */ (function (_super) {
    __extends(LocalEra, _super);
    function LocalEra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `LocalEra`.
     * @returns A builder that constructs instances of entity type `LocalEra`.
     */
    LocalEra.builder = function () {
        return v4_1.Entity.entityBuilder(LocalEra);
    };
    /**
     * Returns a request builder to construct requests for operations on the `LocalEra` entity type.
     * @returns A `LocalEra` request builder.
     */
    LocalEra.requestBuilder = function () {
        return new LocalEraRequestBuilder_1.LocalEraRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LocalEra`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LocalEra`.
     */
    LocalEra.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, LocalEra);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    LocalEra.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for LocalEra.
     */
    LocalEra._entityName = 'LocalEra';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LocalEra.
     */
    LocalEra._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    LocalEra._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return LocalEra;
}(v4_1.Entity));
exports.LocalEra = LocalEra;
(function (LocalEra) {
    /**
     * Static representation of the [[eraName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LocalEra.ERA_NAME = new v4_1.StringField('EraName', LocalEra, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LocalEra.START_DATE = new v4_1.DateField('StartDate', LocalEra, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LocalEra.CODE = new v4_1.StringField('Code', LocalEra, 'Edm.String');
    /**
     * All fields of the LocalEra entity.
     */
    LocalEra._allFields = [
        LocalEra.ERA_NAME,
        LocalEra.START_DATE,
        LocalEra.CODE
    ];
    /**
     * All fields selector.
     */
    LocalEra.ALL_FIELDS = new v4_1.AllFields('*', LocalEra);
    /**
     * All key fields of the LocalEra entity.
     */
    LocalEra._keyFields = [LocalEra.CODE];
    /**
     * Mapping of all key field names to the respective static field property LocalEra.
     */
    LocalEra._keys = LocalEra._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(LocalEra = exports.LocalEra || (exports.LocalEra = {}));
exports.LocalEra = LocalEra;
//# sourceMappingURL=LocalEra.js.map