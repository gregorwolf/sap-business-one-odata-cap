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
exports.EmployeeTransfers = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmployeeTransfersRequestBuilder_1 = require("./EmployeeTransfersRequestBuilder");
var EmployeeTransferDetail_1 = require("./EmployeeTransferDetail");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "EmployeeTransfers" of service "SAPB1".
 */
var EmployeeTransfers = /** @class */ (function (_super) {
    __extends(EmployeeTransfers, _super);
    function EmployeeTransfers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `EmployeeTransfers`.
     * @returns A builder that constructs instances of entity type `EmployeeTransfers`.
     */
    EmployeeTransfers.builder = function () {
        return v4_1.Entity.entityBuilder(EmployeeTransfers);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTransfers` entity type.
     * @returns A `EmployeeTransfers` request builder.
     */
    EmployeeTransfers.requestBuilder = function () {
        return new EmployeeTransfersRequestBuilder_1.EmployeeTransfersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTransfers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTransfers`.
     */
    EmployeeTransfers.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, EmployeeTransfers);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeeTransfers.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeeTransfers.
     */
    EmployeeTransfers._entityName = 'EmployeeTransfers';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTransfers.
     */
    EmployeeTransfers._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    EmployeeTransfers._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return EmployeeTransfers;
}(v4_1.Entity));
exports.EmployeeTransfers = EmployeeTransfers;
(function (EmployeeTransfers) {
    /**
     * Static representation of the [[transferId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTransfers.TRANSFER_ID = new v4_1.NumberField('TransferID', EmployeeTransfers, 'Edm.Int32');
    /**
     * Static representation of the [[transStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTransfers.TRANS_START_DATE = new v4_1.DateField('TransStartDate', EmployeeTransfers, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[transStartTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTransfers.TRANS_START_TIME = new v4_1.TimeField('TransStartTime', EmployeeTransfers, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[transEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTransfers.TRANS_END_DATE = new v4_1.DateField('TransEndDate', EmployeeTransfers, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[transEndTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTransfers.TRANS_END_TIME = new v4_1.TimeField('TransEndTime', EmployeeTransfers, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTransfers.COMMENT = new v4_1.StringField('Comment', EmployeeTransfers, 'Edm.String');
    /**
     * Static representation of the [[employeeTransferDetails]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeeTransfers.EMPLOYEE_TRANSFER_DETAILS = new v4_1.CollectionField('EmployeeTransferDetails', EmployeeTransfers, new EmployeeTransferDetail_1.EmployeeTransferDetailField('', EmployeeTransfers));
    /**
     * All fields of the EmployeeTransfers entity.
     */
    EmployeeTransfers._allFields = [
        EmployeeTransfers.TRANSFER_ID,
        EmployeeTransfers.TRANS_START_DATE,
        EmployeeTransfers.TRANS_START_TIME,
        EmployeeTransfers.TRANS_END_DATE,
        EmployeeTransfers.TRANS_END_TIME,
        EmployeeTransfers.COMMENT,
        EmployeeTransfers.EMPLOYEE_TRANSFER_DETAILS
    ];
    /**
     * All fields selector.
     */
    EmployeeTransfers.ALL_FIELDS = new v4_1.AllFields('*', EmployeeTransfers);
    /**
     * All key fields of the EmployeeTransfers entity.
     */
    EmployeeTransfers._keyFields = [EmployeeTransfers.TRANSFER_ID];
    /**
     * Mapping of all key field names to the respective static field property EmployeeTransfers.
     */
    EmployeeTransfers._keys = EmployeeTransfers._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeeTransfers = exports.EmployeeTransfers || (exports.EmployeeTransfers = {}));
exports.EmployeeTransfers = EmployeeTransfers;
//# sourceMappingURL=EmployeeTransfers.js.map