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
exports.EmployeePosition = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmployeePositionRequestBuilder_1 = require("./EmployeePositionRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "EmployeePosition" of service "SAPB1".
 */
var EmployeePosition = /** @class */ (function (_super) {
    __extends(EmployeePosition, _super);
    function EmployeePosition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeePosition`.
     * @returns A builder that constructs instances of entity type `EmployeePosition`.
     */
    EmployeePosition.builder = function () {
        return v4_1.Entity.entityBuilder(EmployeePosition);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeePosition` entity type.
     * @returns A `EmployeePosition` request builder.
     */
    EmployeePosition.requestBuilder = function () {
        return new EmployeePositionRequestBuilder_1.EmployeePositionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeePosition`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeePosition`.
     */
    EmployeePosition.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, EmployeePosition);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeePosition.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeePosition.
     */
    EmployeePosition._entityName = 'EmployeePosition';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeePosition.
     */
    EmployeePosition._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    EmployeePosition._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeePosition;
}(v4_1.Entity));
exports.EmployeePosition = EmployeePosition;
var EmployeesInfo_1 = require("./EmployeesInfo");
(function (EmployeePosition) {
    /**
     * Static representation of the [[positionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePosition.POSITION_ID = new v4_1.NumberField('PositionID', EmployeePosition, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePosition.NAME = new v4_1.StringField('Name', EmployeePosition, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePosition.DESCRIPTION = new v4_1.StringField('Description', EmployeePosition, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeePosition.EMPLOYEES_INFO = new v4_1.OneToManyLink('EmployeesInfo', EmployeePosition, EmployeesInfo_1.EmployeesInfo);
    /**
     * All fields of the EmployeePosition entity.
     */
    EmployeePosition._allFields = [
        EmployeePosition.POSITION_ID,
        EmployeePosition.NAME,
        EmployeePosition.DESCRIPTION,
        EmployeePosition.EMPLOYEES_INFO
    ];
    /**
     * All fields selector.
     */
    EmployeePosition.ALL_FIELDS = new v4_1.AllFields('*', EmployeePosition);
    /**
     * All key fields of the EmployeePosition entity.
     */
    EmployeePosition._keyFields = [EmployeePosition.POSITION_ID];
    /**
     * Mapping of all key field names to the respective static field property EmployeePosition.
     */
    EmployeePosition._keys = EmployeePosition._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeePosition = exports.EmployeePosition || (exports.EmployeePosition = {}));
exports.EmployeePosition = EmployeePosition;
//# sourceMappingURL=EmployeePosition.js.map