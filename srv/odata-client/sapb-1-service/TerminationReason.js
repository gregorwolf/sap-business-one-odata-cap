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
exports.TerminationReason = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TerminationReasonRequestBuilder_1 = require("./TerminationReasonRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "TerminationReason" of service "SAPB1".
 */
var TerminationReason = /** @class */ (function (_super) {
    __extends(TerminationReason, _super);
    function TerminationReason() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TerminationReason`.
     * @returns A builder that constructs instances of entity type `TerminationReason`.
     */
    TerminationReason.builder = function () {
        return v4_1.Entity.entityBuilder(TerminationReason);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TerminationReason` entity type.
     * @returns A `TerminationReason` request builder.
     */
    TerminationReason.requestBuilder = function () {
        return new TerminationReasonRequestBuilder_1.TerminationReasonRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TerminationReason`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TerminationReason`.
     */
    TerminationReason.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, TerminationReason);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TerminationReason.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TerminationReason.
     */
    TerminationReason._entityName = 'TerminationReason';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TerminationReason.
     */
    TerminationReason._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    TerminationReason._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TerminationReason;
}(v4_1.Entity));
exports.TerminationReason = TerminationReason;
var EmployeesInfo_1 = require("./EmployeesInfo");
(function (TerminationReason) {
    /**
     * Static representation of the [[reasonId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TerminationReason.REASON_ID = new v4_1.NumberField('ReasonID', TerminationReason, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TerminationReason.NAME = new v4_1.StringField('Name', TerminationReason, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TerminationReason.DESCRIPTION = new v4_1.StringField('Description', TerminationReason, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TerminationReason.EMPLOYEES_INFO = new v4_1.OneToManyLink('EmployeesInfo', TerminationReason, EmployeesInfo_1.EmployeesInfo);
    /**
     * All fields of the TerminationReason entity.
     */
    TerminationReason._allFields = [
        TerminationReason.REASON_ID,
        TerminationReason.NAME,
        TerminationReason.DESCRIPTION,
        TerminationReason.EMPLOYEES_INFO
    ];
    /**
     * All fields selector.
     */
    TerminationReason.ALL_FIELDS = new v4_1.AllFields('*', TerminationReason);
    /**
     * All key fields of the TerminationReason entity.
     */
    TerminationReason._keyFields = [TerminationReason.REASON_ID];
    /**
     * Mapping of all key field names to the respective static field property TerminationReason.
     */
    TerminationReason._keys = TerminationReason._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TerminationReason = exports.TerminationReason || (exports.TerminationReason = {}));
exports.TerminationReason = TerminationReason;
//# sourceMappingURL=TerminationReason.js.map