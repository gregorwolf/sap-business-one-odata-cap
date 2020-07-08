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
exports.EmployeeRolesSetup = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmployeeRolesSetupRequestBuilder_1 = require("./EmployeeRolesSetupRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "EmployeeRolesSetup" of service "SAPB1".
 */
var EmployeeRolesSetup = /** @class */ (function (_super) {
    __extends(EmployeeRolesSetup, _super);
    function EmployeeRolesSetup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeRolesSetup`.
     * @returns A builder that constructs instances of entity type `EmployeeRolesSetup`.
     */
    EmployeeRolesSetup.builder = function () {
        return v4_1.Entity.entityBuilder(EmployeeRolesSetup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeRolesSetup` entity type.
     * @returns A `EmployeeRolesSetup` request builder.
     */
    EmployeeRolesSetup.requestBuilder = function () {
        return new EmployeeRolesSetupRequestBuilder_1.EmployeeRolesSetupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeRolesSetup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeRolesSetup`.
     */
    EmployeeRolesSetup.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, EmployeeRolesSetup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeRolesSetup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeRolesSetup.
     */
    EmployeeRolesSetup._entityName = 'EmployeeRolesSetup';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeRolesSetup.
     */
    EmployeeRolesSetup._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    EmployeeRolesSetup._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeRolesSetup;
}(v4_1.Entity));
exports.EmployeeRolesSetup = EmployeeRolesSetup;
var EmployeesInfo_1 = require("./EmployeesInfo");
(function (EmployeeRolesSetup) {
    /**
     * Static representation of the [[typeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeRolesSetup.TYPE_ID = new v4_1.NumberField('TypeID', EmployeeRolesSetup, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeRolesSetup.NAME = new v4_1.StringField('Name', EmployeeRolesSetup, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeRolesSetup.DESCRIPTION = new v4_1.StringField('Description', EmployeeRolesSetup, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeRolesSetup.EMPLOYEES_INFO = new v4_1.OneToManyLink('EmployeesInfo', EmployeeRolesSetup, EmployeesInfo_1.EmployeesInfo);
    /**
     * All fields of the EmployeeRolesSetup entity.
     */
    EmployeeRolesSetup._allFields = [
        EmployeeRolesSetup.TYPE_ID,
        EmployeeRolesSetup.NAME,
        EmployeeRolesSetup.DESCRIPTION,
        EmployeeRolesSetup.EMPLOYEES_INFO
    ];
    /**
     * All fields selector.
     */
    EmployeeRolesSetup.ALL_FIELDS = new v4_1.AllFields('*', EmployeeRolesSetup);
    /**
     * All key fields of the EmployeeRolesSetup entity.
     */
    EmployeeRolesSetup._keyFields = [EmployeeRolesSetup.TYPE_ID];
    /**
     * Mapping of all key field names to the respective static field property EmployeeRolesSetup.
     */
    EmployeeRolesSetup._keys = EmployeeRolesSetup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeRolesSetup = exports.EmployeeRolesSetup || (exports.EmployeeRolesSetup = {}));
exports.EmployeeRolesSetup = EmployeeRolesSetup;
//# sourceMappingURL=EmployeeRolesSetup.js.map