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
exports.ReportTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ReportTypesRequestBuilder_1 = require("./ReportTypesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ReportTypes" of service "SAPB1".
 */
var ReportTypes = /** @class */ (function (_super) {
    __extends(ReportTypes, _super);
    function ReportTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ReportTypes`.
     * @returns A builder that constructs instances of entity type `ReportTypes`.
     */
    ReportTypes.builder = function () {
        return core_1.EntityV4.entityBuilder(ReportTypes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ReportTypes` entity type.
     * @returns A `ReportTypes` request builder.
     */
    ReportTypes.requestBuilder = function () {
        return new ReportTypesRequestBuilder_1.ReportTypesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ReportTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ReportTypes`.
     */
    ReportTypes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ReportTypes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ReportTypes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ReportTypes.
     */
    ReportTypes._entityName = 'ReportTypes';
    /**
     * Default url path for the according service.
     */
    ReportTypes._defaultServicePath = '/b1s/v2/';
    return ReportTypes;
}(core_1.EntityV4));
exports.ReportTypes = ReportTypes;
(function (ReportTypes) {
    /**
     * Static representation of the [[typeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportTypes.TYPE_CODE = new core_1.StringField('TypeCode', ReportTypes, 'Edm.String');
    /**
     * Static representation of the [[typeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportTypes.TYPE_NAME = new core_1.StringField('TypeName', ReportTypes, 'Edm.String');
    /**
     * Static representation of the [[defaultReportLayout]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportTypes.DEFAULT_REPORT_LAYOUT = new core_1.StringField('DefaultReportLayout', ReportTypes, 'Edm.String');
    /**
     * Static representation of the [[addonName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportTypes.ADDON_NAME = new core_1.StringField('AddonName', ReportTypes, 'Edm.String');
    /**
     * Static representation of the [[addonFormType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportTypes.ADDON_FORM_TYPE = new core_1.StringField('AddonFormType', ReportTypes, 'Edm.String');
    /**
     * Static representation of the [[menuId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ReportTypes.MENU_ID = new core_1.StringField('MenuID', ReportTypes, 'Edm.String');
    /**
     * All fields of the ReportTypes entity.
     */
    ReportTypes._allFields = [
        ReportTypes.TYPE_CODE,
        ReportTypes.TYPE_NAME,
        ReportTypes.DEFAULT_REPORT_LAYOUT,
        ReportTypes.ADDON_NAME,
        ReportTypes.ADDON_FORM_TYPE,
        ReportTypes.MENU_ID
    ];
    /**
     * All fields selector.
     */
    ReportTypes.ALL_FIELDS = new core_1.AllFields('*', ReportTypes);
    /**
     * All key fields of the ReportTypes entity.
     */
    ReportTypes._keyFields = [ReportTypes.TYPE_CODE];
    /**
     * Mapping of all key field names to the respective static field property ReportTypes.
     */
    ReportTypes._keys = ReportTypes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ReportTypes = exports.ReportTypes || (exports.ReportTypes = {}));
exports.ReportTypes = ReportTypes;
//# sourceMappingURL=ReportTypes.js.map