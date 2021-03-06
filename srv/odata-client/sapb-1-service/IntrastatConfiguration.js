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
exports.IntrastatConfiguration = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var IntrastatConfigurationRequestBuilder_1 = require("./IntrastatConfigurationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "IntrastatConfiguration" of service "SAPB1".
 */
var IntrastatConfiguration = /** @class */ (function (_super) {
    __extends(IntrastatConfiguration, _super);
    function IntrastatConfiguration() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `IntrastatConfiguration`.
     * @returns A builder that constructs instances of entity type `IntrastatConfiguration`.
     */
    IntrastatConfiguration.builder = function () {
        return core_1.EntityV4.entityBuilder(IntrastatConfiguration);
    };
    /**
     * Returns a request builder to construct requests for operations on the `IntrastatConfiguration` entity type.
     * @returns A `IntrastatConfiguration` request builder.
     */
    IntrastatConfiguration.requestBuilder = function () {
        return new IntrastatConfigurationRequestBuilder_1.IntrastatConfigurationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `IntrastatConfiguration`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `IntrastatConfiguration`.
     */
    IntrastatConfiguration.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, IntrastatConfiguration);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    IntrastatConfiguration.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for IntrastatConfiguration.
     */
    IntrastatConfiguration._entityName = 'IntrastatConfiguration';
    /**
     * Default url path for the according service.
     */
    IntrastatConfiguration._defaultServicePath = '/b1s/v2/';
    return IntrastatConfiguration;
}(core_1.EntityV4));
exports.IntrastatConfiguration = IntrastatConfiguration;
(function (IntrastatConfiguration) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntrastatConfiguration.ABS_ENTRY = new core_1.NumberField('AbsEntry', IntrastatConfiguration, 'Edm.Int32');
    /**
     * Static representation of the [[confType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntrastatConfiguration.CONF_TYPE = new core_1.EnumField('ConfType', IntrastatConfiguration);
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntrastatConfiguration.CODE = new core_1.StringField('Code', IntrastatConfiguration, 'Edm.String');
    /**
     * Static representation of the [[descr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntrastatConfiguration.DESCR = new core_1.StringField('Descr', IntrastatConfiguration, 'Edm.String');
    /**
     * Static representation of the [[prcstVal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntrastatConfiguration.PRCST_VAL = new core_1.NumberField('PrcstVal', IntrastatConfiguration, 'Edm.Double');
    /**
     * Static representation of the [[suppUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntrastatConfiguration.SUPP_UNIT = new core_1.NumberField('SuppUnit', IntrastatConfiguration, 'Edm.Int32');
    /**
     * Static representation of the [[export]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntrastatConfiguration.EXPORT = new core_1.EnumField('Export', IntrastatConfiguration);
    /**
     * Static representation of the [[import]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntrastatConfiguration.IMPORT = new core_1.EnumField('Import', IntrastatConfiguration);
    /**
     * Static representation of the [[statCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntrastatConfiguration.STAT_CODE = new core_1.StringField('StatCode', IntrastatConfiguration, 'Edm.String');
    /**
     * Static representation of the [[dateFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntrastatConfiguration.DATE_FROM = new core_1.DateField('DateFrom', IntrastatConfiguration, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[dateTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntrastatConfiguration.DATE_TO = new core_1.DateField('DateTo', IntrastatConfiguration, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntrastatConfiguration.COUNTRY = new core_1.StringField('Country', IntrastatConfiguration, 'Edm.String');
    /**
     * Static representation of the [[confId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    IntrastatConfiguration.CONF_ID = new core_1.StringField('ConfID', IntrastatConfiguration, 'Edm.String');
    /**
     * All fields of the IntrastatConfiguration entity.
     */
    IntrastatConfiguration._allFields = [
        IntrastatConfiguration.ABS_ENTRY,
        IntrastatConfiguration.CONF_TYPE,
        IntrastatConfiguration.CODE,
        IntrastatConfiguration.DESCR,
        IntrastatConfiguration.PRCST_VAL,
        IntrastatConfiguration.SUPP_UNIT,
        IntrastatConfiguration.EXPORT,
        IntrastatConfiguration.IMPORT,
        IntrastatConfiguration.STAT_CODE,
        IntrastatConfiguration.DATE_FROM,
        IntrastatConfiguration.DATE_TO,
        IntrastatConfiguration.COUNTRY,
        IntrastatConfiguration.CONF_ID
    ];
    /**
     * All fields selector.
     */
    IntrastatConfiguration.ALL_FIELDS = new core_1.AllFields('*', IntrastatConfiguration);
    /**
     * All key fields of the IntrastatConfiguration entity.
     */
    IntrastatConfiguration._keyFields = [IntrastatConfiguration.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property IntrastatConfiguration.
     */
    IntrastatConfiguration._keys = IntrastatConfiguration._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(IntrastatConfiguration = exports.IntrastatConfiguration || (exports.IntrastatConfiguration = {}));
exports.IntrastatConfiguration = IntrastatConfiguration;
//# sourceMappingURL=IntrastatConfiguration.js.map