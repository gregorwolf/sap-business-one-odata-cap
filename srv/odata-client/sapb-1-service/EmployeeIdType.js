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
exports.EmployeeIdType = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmployeeIdTypeRequestBuilder_1 = require("./EmployeeIdTypeRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "EmployeeIDType" of service "SAPB1".
 */
var EmployeeIdType = /** @class */ (function (_super) {
    __extends(EmployeeIdType, _super);
    function EmployeeIdType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeIdType`.
     * @returns A builder that constructs instances of entity type `EmployeeIdType`.
     */
    EmployeeIdType.builder = function () {
        return v4_1.Entity.entityBuilder(EmployeeIdType);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeIdType` entity type.
     * @returns A `EmployeeIdType` request builder.
     */
    EmployeeIdType.requestBuilder = function () {
        return new EmployeeIdTypeRequestBuilder_1.EmployeeIdTypeRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeIdType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeIdType`.
     */
    EmployeeIdType.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, EmployeeIdType);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeIdType.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeIdType.
     */
    EmployeeIdType._entityName = 'EmployeeIDType';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeIdType.
     */
    EmployeeIdType._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    EmployeeIdType._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeIdType;
}(v4_1.Entity));
exports.EmployeeIdType = EmployeeIdType;
var EmployeesInfo_1 = require("./EmployeesInfo");
(function (EmployeeIdType) {
    /**
     * Static representation of the [[idType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeIdType.ID_TYPE = new v4_1.StringField('IDType', EmployeeIdType, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeIdType.EMPLOYEES_INFO = new v4_1.OneToManyLink('EmployeesInfo', EmployeeIdType, EmployeesInfo_1.EmployeesInfo);
    /**
     * All fields of the EmployeeIdType entity.
     */
    EmployeeIdType._allFields = [
        EmployeeIdType.ID_TYPE,
        EmployeeIdType.EMPLOYEES_INFO
    ];
    /**
     * All fields selector.
     */
    EmployeeIdType.ALL_FIELDS = new v4_1.AllFields('*', EmployeeIdType);
    /**
     * All key fields of the EmployeeIdType entity.
     */
    EmployeeIdType._keyFields = [EmployeeIdType.ID_TYPE];
    /**
     * Mapping of all key field names to the respective static field property EmployeeIdType.
     */
    EmployeeIdType._keys = EmployeeIdType._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeIdType = exports.EmployeeIdType || (exports.EmployeeIdType = {}));
exports.EmployeeIdType = EmployeeIdType;
//# sourceMappingURL=EmployeeIdType.js.map