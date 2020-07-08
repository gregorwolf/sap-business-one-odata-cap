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
exports.IntegrationPackagesConfigure = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var IntegrationPackagesConfigureRequestBuilder_1 = require("./IntegrationPackagesConfigureRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "IntegrationPackagesConfigure" of service "SAPB1".
 */
var IntegrationPackagesConfigure = /** @class */ (function (_super) {
    __extends(IntegrationPackagesConfigure, _super);
    function IntegrationPackagesConfigure() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `IntegrationPackagesConfigure`.
     * @returns A builder that constructs instances of entity type `IntegrationPackagesConfigure`.
     */
    IntegrationPackagesConfigure.builder = function () {
        return v4_1.Entity.entityBuilder(IntegrationPackagesConfigure);
    };
    /**
     * Returns a request builder to construct requests for operations on the `IntegrationPackagesConfigure` entity type.
     * @returns A `IntegrationPackagesConfigure` request builder.
     */
    IntegrationPackagesConfigure.requestBuilder = function () {
        return new IntegrationPackagesConfigureRequestBuilder_1.IntegrationPackagesConfigureRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `IntegrationPackagesConfigure`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `IntegrationPackagesConfigure`.
     */
    IntegrationPackagesConfigure.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, IntegrationPackagesConfigure);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    IntegrationPackagesConfigure.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for IntegrationPackagesConfigure.
     */
    IntegrationPackagesConfigure._entityName = 'IntegrationPackagesConfigure';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for IntegrationPackagesConfigure.
     */
    IntegrationPackagesConfigure._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    IntegrationPackagesConfigure._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return IntegrationPackagesConfigure;
}(v4_1.Entity));
exports.IntegrationPackagesConfigure = IntegrationPackagesConfigure;
(function (IntegrationPackagesConfigure) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntegrationPackagesConfigure.ABS_ENTRY = new v4_1.NumberField('AbsEntry', IntegrationPackagesConfigure, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntegrationPackagesConfigure.CODE = new v4_1.StringField('Code', IntegrationPackagesConfigure, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntegrationPackagesConfigure.NAME = new v4_1.StringField('Name', IntegrationPackagesConfigure, 'Edm.String');
    /**
     * All fields of the IntegrationPackagesConfigure entity.
     */
    IntegrationPackagesConfigure._allFields = [
        IntegrationPackagesConfigure.ABS_ENTRY,
        IntegrationPackagesConfigure.CODE,
        IntegrationPackagesConfigure.NAME
    ];
    /**
     * All fields selector.
     */
    IntegrationPackagesConfigure.ALL_FIELDS = new v4_1.AllFields('*', IntegrationPackagesConfigure);
    /**
     * All key fields of the IntegrationPackagesConfigure entity.
     */
    IntegrationPackagesConfigure._keyFields = [IntegrationPackagesConfigure.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property IntegrationPackagesConfigure.
     */
    IntegrationPackagesConfigure._keys = IntegrationPackagesConfigure._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(IntegrationPackagesConfigure = exports.IntegrationPackagesConfigure || (exports.IntegrationPackagesConfigure = {}));
exports.IntegrationPackagesConfigure = IntegrationPackagesConfigure;
//# sourceMappingURL=IntegrationPackagesConfigure.js.map