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
exports.IndiaSacCode = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var IndiaSacCodeRequestBuilder_1 = require("./IndiaSacCodeRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "IndiaSacCode" of service "SAPB1".
 */
var IndiaSacCode = /** @class */ (function (_super) {
    __extends(IndiaSacCode, _super);
    function IndiaSacCode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `IndiaSacCode`.
     * @returns A builder that constructs instances of entity type `IndiaSacCode`.
     */
    IndiaSacCode.builder = function () {
        return v4_1.Entity.entityBuilder(IndiaSacCode);
    };
    /**
     * Returns a request builder to construct requests for operations on the `IndiaSacCode` entity type.
     * @returns A `IndiaSacCode` request builder.
     */
    IndiaSacCode.requestBuilder = function () {
        return new IndiaSacCodeRequestBuilder_1.IndiaSacCodeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `IndiaSacCode`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `IndiaSacCode`.
     */
    IndiaSacCode.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, IndiaSacCode);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    IndiaSacCode.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for IndiaSacCode.
     */
    IndiaSacCode._entityName = 'IndiaSacCode';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for IndiaSacCode.
     */
    IndiaSacCode._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    IndiaSacCode._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return IndiaSacCode;
}(v4_1.Entity));
exports.IndiaSacCode = IndiaSacCode;
var Items_1 = require("./Items");
(function (IndiaSacCode) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IndiaSacCode.ABS_ENTRY = new v4_1.NumberField('AbsEntry', IndiaSacCode, 'Edm.Int32');
    /**
     * Static representation of the [[serviceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IndiaSacCode.SERVICE_CODE = new v4_1.StringField('ServiceCode', IndiaSacCode, 'Edm.String');
    /**
     * Static representation of the [[serviceName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IndiaSacCode.SERVICE_NAME = new v4_1.StringField('ServiceName', IndiaSacCode, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IndiaSacCode.ITEMS = new v4_1.OneToManyLink('Items', IndiaSacCode, Items_1.Items);
    /**
     * All fields of the IndiaSacCode entity.
     */
    IndiaSacCode._allFields = [
        IndiaSacCode.ABS_ENTRY,
        IndiaSacCode.SERVICE_CODE,
        IndiaSacCode.SERVICE_NAME,
        IndiaSacCode.ITEMS
    ];
    /**
     * All fields selector.
     */
    IndiaSacCode.ALL_FIELDS = new v4_1.AllFields('*', IndiaSacCode);
    /**
     * All key fields of the IndiaSacCode entity.
     */
    IndiaSacCode._keyFields = [IndiaSacCode.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property IndiaSacCode.
     */
    IndiaSacCode._keys = IndiaSacCode._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(IndiaSacCode = exports.IndiaSacCode || (exports.IndiaSacCode = {}));
exports.IndiaSacCode = IndiaSacCode;
//# sourceMappingURL=IndiaSacCode.js.map