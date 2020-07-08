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
exports.AlertManagements = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AlertManagementsRequestBuilder_1 = require("./AlertManagementsRequestBuilder");
var AlertManagementRecipient_1 = require("./AlertManagementRecipient");
var AlertManagementDocument_1 = require("./AlertManagementDocument");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "AlertManagements" of service "SAPB1".
 */
var AlertManagements = /** @class */ (function (_super) {
    __extends(AlertManagements, _super);
    function AlertManagements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AlertManagements`.
     * @returns A builder that constructs instances of entity type `AlertManagements`.
     */
    AlertManagements.builder = function () {
        return v4_1.Entity.entityBuilder(AlertManagements);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AlertManagements` entity type.
     * @returns A `AlertManagements` request builder.
     */
    AlertManagements.requestBuilder = function () {
        return new AlertManagementsRequestBuilder_1.AlertManagementsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AlertManagements`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AlertManagements`.
     */
    AlertManagements.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, AlertManagements);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AlertManagements.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AlertManagements.
     */
    AlertManagements._entityName = 'AlertManagements';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AlertManagements.
     */
    AlertManagements._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    AlertManagements._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AlertManagements;
}(v4_1.Entity));
exports.AlertManagements = AlertManagements;
(function (AlertManagements) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertManagements.CODE = new v4_1.NumberField('Code', AlertManagements, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertManagements.NAME = new v4_1.StringField('Name', AlertManagements, 'Edm.String');
    /**
     * Static representation of the [[param]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertManagements.PARAM = new v4_1.StringField('Param', AlertManagements, 'Edm.String');
    /**
     * Static representation of the [[queryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertManagements.QUERY_ID = new v4_1.NumberField('QueryID', AlertManagements, 'Edm.Int32');
    /**
     * Static representation of the [[dayOfExecution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertManagements.DAY_OF_EXECUTION = new v4_1.NumberField('DayOfExecution', AlertManagements, 'Edm.Int32');
    /**
     * Static representation of the [[executionTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertManagements.EXECUTION_TIME = new v4_1.TimeField('ExecutionTime', AlertManagements, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[lastExecutionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertManagements.LAST_EXECUTION_DATE = new v4_1.DateField('LastExecutionDate', AlertManagements, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastExecutionTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertManagements.LAST_EXECUTION_TIME = new v4_1.NumberField('LastExecutionTime', AlertManagements, 'Edm.Int32');
    /**
     * Static representation of the [[nextExecutionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertManagements.NEXT_EXECUTION_DATE = new v4_1.DateField('NextExecutionDate', AlertManagements, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[nextExecutionTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertManagements.NEXT_EXECUTION_TIME = new v4_1.TimeField('NextExecutionTime', AlertManagements, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[frequencyInterval]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertManagements.FREQUENCY_INTERVAL = new v4_1.NumberField('FrequencyInterval', AlertManagements, 'Edm.Int32');
    /**
     * Static representation of the [[alertManagementRecipients]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertManagements.ALERT_MANAGEMENT_RECIPIENTS = new v4_1.CollectionField('AlertManagementRecipients', AlertManagements, new AlertManagementRecipient_1.AlertManagementRecipientField('', AlertManagements));
    /**
     * Static representation of the [[alertManagementDocuments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AlertManagements.ALERT_MANAGEMENT_DOCUMENTS = new v4_1.CollectionField('AlertManagementDocuments', AlertManagements, new AlertManagementDocument_1.AlertManagementDocumentField('', AlertManagements));
    /**
     * All fields of the AlertManagements entity.
     */
    AlertManagements._allFields = [
        AlertManagements.CODE,
        AlertManagements.NAME,
        AlertManagements.PARAM,
        AlertManagements.QUERY_ID,
        AlertManagements.DAY_OF_EXECUTION,
        AlertManagements.EXECUTION_TIME,
        AlertManagements.LAST_EXECUTION_DATE,
        AlertManagements.LAST_EXECUTION_TIME,
        AlertManagements.NEXT_EXECUTION_DATE,
        AlertManagements.NEXT_EXECUTION_TIME,
        AlertManagements.FREQUENCY_INTERVAL,
        AlertManagements.ALERT_MANAGEMENT_RECIPIENTS,
        AlertManagements.ALERT_MANAGEMENT_DOCUMENTS
    ];
    /**
     * All fields selector.
     */
    AlertManagements.ALL_FIELDS = new v4_1.AllFields('*', AlertManagements);
    /**
     * All key fields of the AlertManagements entity.
     */
    AlertManagements._keyFields = [AlertManagements.CODE];
    /**
     * Mapping of all key field names to the respective static field property AlertManagements.
     */
    AlertManagements._keys = AlertManagements._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AlertManagements = exports.AlertManagements || (exports.AlertManagements = {}));
exports.AlertManagements = AlertManagements;
//# sourceMappingURL=AlertManagements.js.map