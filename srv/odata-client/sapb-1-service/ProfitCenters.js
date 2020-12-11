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
exports.ProfitCenters = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ProfitCentersRequestBuilder_1 = require("./ProfitCentersRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ProfitCenters" of service "SAPB1".
 */
var ProfitCenters = /** @class */ (function (_super) {
    __extends(ProfitCenters, _super);
    function ProfitCenters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ProfitCenters`.
     * @returns A builder that constructs instances of entity type `ProfitCenters`.
     */
    ProfitCenters.builder = function () {
        return core_1.EntityV4.entityBuilder(ProfitCenters);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ProfitCenters` entity type.
     * @returns A `ProfitCenters` request builder.
     */
    ProfitCenters.requestBuilder = function () {
        return new ProfitCentersRequestBuilder_1.ProfitCentersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ProfitCenters`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ProfitCenters`.
     */
    ProfitCenters.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ProfitCenters);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ProfitCenters.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ProfitCenters.
     */
    ProfitCenters._entityName = 'ProfitCenters';
    /**
     * Default url path for the according service.
     */
    ProfitCenters._defaultServicePath = '/b1s/v2/';
    return ProfitCenters;
}(core_1.EntityV4));
exports.ProfitCenters = ProfitCenters;
var Dimensions_1 = require("./Dimensions");
var CostCenterTypes_1 = require("./CostCenterTypes");
var EmployeesInfo_1 = require("./EmployeesInfo");
(function (ProfitCenters) {
    /**
     * Static representation of the [[centerCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProfitCenters.CENTER_CODE = new core_1.StringField('CenterCode', ProfitCenters, 'Edm.String');
    /**
     * Static representation of the [[centerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProfitCenters.CENTER_NAME = new core_1.StringField('CenterName', ProfitCenters, 'Edm.String');
    /**
     * Static representation of the [[groupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProfitCenters.GROUP_CODE = new core_1.StringField('GroupCode', ProfitCenters, 'Edm.String');
    /**
     * Static representation of the [[inWhichDimension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProfitCenters.IN_WHICH_DIMENSION = new core_1.NumberField('InWhichDimension', ProfitCenters, 'Edm.Int32');
    /**
     * Static representation of the [[costCenterType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProfitCenters.COST_CENTER_TYPE = new core_1.StringField('CostCenterType', ProfitCenters, 'Edm.String');
    /**
     * Static representation of the [[effectiveFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProfitCenters.EFFECTIVE_FROM = new core_1.DateField('EffectiveFrom', ProfitCenters, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[effectiveTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProfitCenters.EFFECTIVE_TO = new core_1.DateField('EffectiveTo', ProfitCenters, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[active]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProfitCenters.ACTIVE = new core_1.EnumField('Active', ProfitCenters);
    /**
     * Static representation of the [[centerOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProfitCenters.CENTER_OWNER = new core_1.NumberField('CenterOwner', ProfitCenters, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[dimension]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProfitCenters.DIMENSION = new core_1.OneToOneLink('Dimension', ProfitCenters, Dimensions_1.Dimensions);
    /**
     * Static representation of the one-to-one navigation property [[costCenterType2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProfitCenters.COST_CENTER_TYPE_2 = new core_1.OneToOneLink('CostCenterType2', ProfitCenters, CostCenterTypes_1.CostCenterTypes);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProfitCenters.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', ProfitCenters, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ProfitCenters.EMPLOYEES_INFO = new core_1.OneToManyLink('EmployeesInfo', ProfitCenters, EmployeesInfo_1.EmployeesInfo);
    /**
     * All fields of the ProfitCenters entity.
     */
    ProfitCenters._allFields = [
        ProfitCenters.CENTER_CODE,
        ProfitCenters.CENTER_NAME,
        ProfitCenters.GROUP_CODE,
        ProfitCenters.IN_WHICH_DIMENSION,
        ProfitCenters.COST_CENTER_TYPE,
        ProfitCenters.EFFECTIVE_FROM,
        ProfitCenters.EFFECTIVE_TO,
        ProfitCenters.ACTIVE,
        ProfitCenters.CENTER_OWNER,
        ProfitCenters.DIMENSION,
        ProfitCenters.COST_CENTER_TYPE_2,
        ProfitCenters.EMPLOYEE_INFO,
        ProfitCenters.EMPLOYEES_INFO
    ];
    /**
     * All fields selector.
     */
    ProfitCenters.ALL_FIELDS = new core_1.AllFields('*', ProfitCenters);
    /**
     * All key fields of the ProfitCenters entity.
     */
    ProfitCenters._keyFields = [ProfitCenters.CENTER_CODE];
    /**
     * Mapping of all key field names to the respective static field property ProfitCenters.
     */
    ProfitCenters._keys = ProfitCenters._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ProfitCenters = exports.ProfitCenters || (exports.ProfitCenters = {}));
exports.ProfitCenters = ProfitCenters;
//# sourceMappingURL=ProfitCenters.js.map