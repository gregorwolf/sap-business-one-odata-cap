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
exports.ContractTemplates = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ContractTemplatesRequestBuilder_1 = require("./ContractTemplatesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ContractTemplates" of service "SAPB1".
 */
var ContractTemplates = /** @class */ (function (_super) {
    __extends(ContractTemplates, _super);
    function ContractTemplates() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ContractTemplates`.
     * @returns A builder that constructs instances of entity type `ContractTemplates`.
     */
    ContractTemplates.builder = function () {
        return core_1.EntityV4.entityBuilder(ContractTemplates);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ContractTemplates` entity type.
     * @returns A `ContractTemplates` request builder.
     */
    ContractTemplates.requestBuilder = function () {
        return new ContractTemplatesRequestBuilder_1.ContractTemplatesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ContractTemplates`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ContractTemplates`.
     */
    ContractTemplates.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ContractTemplates);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ContractTemplates.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ContractTemplates.
     */
    ContractTemplates._entityName = 'ContractTemplates';
    /**
     * Default url path for the according service.
     */
    ContractTemplates._defaultServicePath = '/b1s/v2/';
    return ContractTemplates;
}(core_1.EntityV4));
exports.ContractTemplates = ContractTemplates;
var Items_1 = require("./Items");
var ServiceContracts_1 = require("./ServiceContracts");
(function (ContractTemplates) {
    /**
     * Static representation of the [[templateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.TEMPLATE_NAME = new core_1.StringField('TemplateName', ContractTemplates, 'Edm.String');
    /**
     * Static representation of the [[templateIsDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.TEMPLATE_IS_DELETED = new core_1.EnumField('TemplateIsDeleted', ContractTemplates);
    /**
     * Static representation of the [[templateIsRenewal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.TEMPLATE_IS_RENEWAL = new core_1.EnumField('TemplateIsRenewal', ContractTemplates);
    /**
     * Static representation of the [[remindBeforeRenewal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.REMIND_BEFORE_RENEWAL = new core_1.NumberField('RemindBeforeRenewal', ContractTemplates, 'Edm.Int32');
    /**
     * Static representation of the [[remindUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.REMIND_UNIT = new core_1.EnumField('RemindUnit', ContractTemplates);
    /**
     * Static representation of the [[durationOfCoverage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.DURATION_OF_COVERAGE = new core_1.NumberField('DurationOfCoverage', ContractTemplates, 'Edm.Int32');
    /**
     * Static representation of the [[responseValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.RESPONSE_VALUE = new core_1.NumberField('ResponseValue', ContractTemplates, 'Edm.Int32');
    /**
     * Static representation of the [[resolutionUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.RESOLUTION_UNIT = new core_1.EnumField('ResolutionUnit', ContractTemplates);
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.DESCRIPTION = new core_1.StringField('Description', ContractTemplates, 'Edm.String');
    /**
     * Static representation of the [[contractType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.CONTRACT_TYPE = new core_1.EnumField('ContractType', ContractTemplates);
    /**
     * Static representation of the [[mondayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.MONDAY_ENABLED = new core_1.EnumField('MondayEnabled', ContractTemplates);
    /**
     * Static representation of the [[tuesdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.TUESDAY_ENABLED = new core_1.EnumField('TuesdayEnabled', ContractTemplates);
    /**
     * Static representation of the [[wednesdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.WEDNESDAY_ENABLED = new core_1.EnumField('WednesdayEnabled', ContractTemplates);
    /**
     * Static representation of the [[thursdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.THURSDAY_ENABLED = new core_1.EnumField('ThursdayEnabled', ContractTemplates);
    /**
     * Static representation of the [[fridayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.FRIDAY_ENABLED = new core_1.EnumField('FridayEnabled', ContractTemplates);
    /**
     * Static representation of the [[saturdayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.SATURDAY_ENABLED = new core_1.EnumField('SaturdayEnabled', ContractTemplates);
    /**
     * Static representation of the [[sundayEnabled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.SUNDAY_ENABLED = new core_1.EnumField('SundayEnabled', ContractTemplates);
    /**
     * Static representation of the [[mondayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.MONDAY_START = new core_1.TimeField('MondayStart', ContractTemplates, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[mondayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.MONDAY_END = new core_1.TimeField('MondayEnd', ContractTemplates, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[tuesdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.TUESDAY_START = new core_1.TimeField('TuesdayStart', ContractTemplates, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[tuesdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.TUESDAY_END = new core_1.TimeField('TuesdayEnd', ContractTemplates, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[wednesdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.WEDNESDAY_START = new core_1.TimeField('WednesdayStart', ContractTemplates, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[wednesdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.WEDNESDAY_END = new core_1.TimeField('WednesdayEnd', ContractTemplates, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[thursdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.THURSDAY_START = new core_1.TimeField('ThursdayStart', ContractTemplates, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[thursdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.THURSDAY_END = new core_1.TimeField('ThursdayEnd', ContractTemplates, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[fridayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.FRIDAY_START = new core_1.TimeField('FridayStart', ContractTemplates, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[fridayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.FRIDAY_END = new core_1.TimeField('FridayEnd', ContractTemplates, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[saturdayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.SATURDAY_START = new core_1.TimeField('SaturdayStart', ContractTemplates, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[saturdayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.SATURDAY_END = new core_1.TimeField('SaturdayEnd', ContractTemplates, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[sundayStart]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.SUNDAY_START = new core_1.TimeField('SundayStart', ContractTemplates, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[sundayEnd]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.SUNDAY_END = new core_1.TimeField('SundayEnd', ContractTemplates, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[includeParts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.INCLUDE_PARTS = new core_1.EnumField('IncludeParts', ContractTemplates);
    /**
     * Static representation of the [[includeLabor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.INCLUDE_LABOR = new core_1.EnumField('IncludeLabor', ContractTemplates);
    /**
     * Static representation of the [[includeTravel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.INCLUDE_TRAVEL = new core_1.EnumField('IncludeTravel', ContractTemplates);
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.REMARKS = new core_1.StringField('Remarks', ContractTemplates, 'Edm.String');
    /**
     * Static representation of the [[includeHolidays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.INCLUDE_HOLIDAYS = new core_1.EnumField('IncludeHolidays', ContractTemplates);
    /**
     * Static representation of the [[responseUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.RESPONSE_UNIT = new core_1.EnumField('ResponseUnit', ContractTemplates);
    /**
     * Static representation of the [[resolutionTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.RESOLUTION_TIME = new core_1.NumberField('ResolutionTime', ContractTemplates, 'Edm.Int32');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', ContractTemplates, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.ITEMS = new core_1.OneToManyLink('Items', ContractTemplates, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[serviceContracts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ContractTemplates.SERVICE_CONTRACTS = new core_1.OneToManyLink('ServiceContracts', ContractTemplates, ServiceContracts_1.ServiceContracts);
    /**
     * All fields of the ContractTemplates entity.
     */
    ContractTemplates._allFields = [
        ContractTemplates.TEMPLATE_NAME,
        ContractTemplates.TEMPLATE_IS_DELETED,
        ContractTemplates.TEMPLATE_IS_RENEWAL,
        ContractTemplates.REMIND_BEFORE_RENEWAL,
        ContractTemplates.REMIND_UNIT,
        ContractTemplates.DURATION_OF_COVERAGE,
        ContractTemplates.RESPONSE_VALUE,
        ContractTemplates.RESOLUTION_UNIT,
        ContractTemplates.DESCRIPTION,
        ContractTemplates.CONTRACT_TYPE,
        ContractTemplates.MONDAY_ENABLED,
        ContractTemplates.TUESDAY_ENABLED,
        ContractTemplates.WEDNESDAY_ENABLED,
        ContractTemplates.THURSDAY_ENABLED,
        ContractTemplates.FRIDAY_ENABLED,
        ContractTemplates.SATURDAY_ENABLED,
        ContractTemplates.SUNDAY_ENABLED,
        ContractTemplates.MONDAY_START,
        ContractTemplates.MONDAY_END,
        ContractTemplates.TUESDAY_START,
        ContractTemplates.TUESDAY_END,
        ContractTemplates.WEDNESDAY_START,
        ContractTemplates.WEDNESDAY_END,
        ContractTemplates.THURSDAY_START,
        ContractTemplates.THURSDAY_END,
        ContractTemplates.FRIDAY_START,
        ContractTemplates.FRIDAY_END,
        ContractTemplates.SATURDAY_START,
        ContractTemplates.SATURDAY_END,
        ContractTemplates.SUNDAY_START,
        ContractTemplates.SUNDAY_END,
        ContractTemplates.INCLUDE_PARTS,
        ContractTemplates.INCLUDE_LABOR,
        ContractTemplates.INCLUDE_TRAVEL,
        ContractTemplates.REMARKS,
        ContractTemplates.INCLUDE_HOLIDAYS,
        ContractTemplates.RESPONSE_UNIT,
        ContractTemplates.RESOLUTION_TIME,
        ContractTemplates.ATTACHMENT_ENTRY,
        ContractTemplates.ITEMS,
        ContractTemplates.SERVICE_CONTRACTS
    ];
    /**
     * All fields selector.
     */
    ContractTemplates.ALL_FIELDS = new core_1.AllFields('*', ContractTemplates);
    /**
     * All key fields of the ContractTemplates entity.
     */
    ContractTemplates._keyFields = [ContractTemplates.TEMPLATE_NAME];
    /**
     * Mapping of all key field names to the respective static field property ContractTemplates.
     */
    ContractTemplates._keys = ContractTemplates._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ContractTemplates = exports.ContractTemplates || (exports.ContractTemplates = {}));
exports.ContractTemplates = ContractTemplates;
//# sourceMappingURL=ContractTemplates.js.map