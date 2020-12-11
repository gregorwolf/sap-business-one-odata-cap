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
exports.EmployeeStatus = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmployeeStatusRequestBuilder_1 = require("./EmployeeStatusRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeeStatus" of service "SAPB1".
 */
var EmployeeStatus = /** @class */ (function (_super) {
    __extends(EmployeeStatus, _super);
    function EmployeeStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `EmployeeStatus`.
     * @returns A builder that constructs instances of entity type `EmployeeStatus`.
     */
    EmployeeStatus.builder = function () {
        return core_1.EntityV4.entityBuilder(EmployeeStatus);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeStatus` entity type.
     * @returns A `EmployeeStatus` request builder.
     */
    EmployeeStatus.requestBuilder = function () {
        return new EmployeeStatusRequestBuilder_1.EmployeeStatusRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeStatus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeStatus`.
     */
    EmployeeStatus.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, EmployeeStatus);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeStatus.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeStatus.
     */
    EmployeeStatus._entityName = 'EmployeeStatus';
    /**
     * Default url path for the according service.
     */
    EmployeeStatus._defaultServicePath = '/b1s/v2/';
    return EmployeeStatus;
}(core_1.EntityV4));
exports.EmployeeStatus = EmployeeStatus;
var EmployeesInfo_1 = require("./EmployeesInfo");
(function (EmployeeStatus) {
    /**
     * Static representation of the [[statusId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeStatus.STATUS_ID = new core_1.NumberField('StatusId', EmployeeStatus, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeStatus.NAME = new core_1.StringField('Name', EmployeeStatus, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeStatus.DESCRIPTION = new core_1.StringField('Description', EmployeeStatus, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeStatus.EMPLOYEES_INFO = new core_1.OneToManyLink('EmployeesInfo', EmployeeStatus, EmployeesInfo_1.EmployeesInfo);
    /**
     * All fields of the EmployeeStatus entity.
     */
    EmployeeStatus._allFields = [
        EmployeeStatus.STATUS_ID,
        EmployeeStatus.NAME,
        EmployeeStatus.DESCRIPTION,
        EmployeeStatus.EMPLOYEES_INFO
    ];
    /**
     * All fields selector.
     */
    EmployeeStatus.ALL_FIELDS = new core_1.AllFields('*', EmployeeStatus);
    /**
     * All key fields of the EmployeeStatus entity.
     */
    EmployeeStatus._keyFields = [EmployeeStatus.STATUS_ID];
    /**
     * Mapping of all key field names to the respective static field property EmployeeStatus.
     */
    EmployeeStatus._keys = EmployeeStatus._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeStatus = exports.EmployeeStatus || (exports.EmployeeStatus = {}));
exports.EmployeeStatus = EmployeeStatus;
//# sourceMappingURL=EmployeeStatus.js.map