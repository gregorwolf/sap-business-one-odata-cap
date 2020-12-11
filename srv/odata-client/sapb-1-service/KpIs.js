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
exports.KpIs = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var KpIsRequestBuilder_1 = require("./KpIsRequestBuilder");
var KpiItemLine_1 = require("./KpiItemLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "KPIs" of service "SAPB1".
 */
var KpIs = /** @class */ (function (_super) {
    __extends(KpIs, _super);
    function KpIs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `KpIs`.
     * @returns A builder that constructs instances of entity type `KpIs`.
     */
    KpIs.builder = function () {
        return core_1.EntityV4.entityBuilder(KpIs);
    };
    /**
     * Returns a request builder to construct requests for operations on the `KpIs` entity type.
     * @returns A `KpIs` request builder.
     */
    KpIs.requestBuilder = function () {
        return new KpIsRequestBuilder_1.KpIsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `KpIs`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `KpIs`.
     */
    KpIs.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, KpIs);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    KpIs.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for KpIs.
     */
    KpIs._entityName = 'KPIs';
    /**
     * Default url path for the according service.
     */
    KpIs._defaultServicePath = '/b1s/v2/';
    return KpIs;
}(core_1.EntityV4));
exports.KpIs = KpIs;
(function (KpIs) {
    /**
     * Static representation of the [[kpiCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KpIs.KPI_CODE = new core_1.StringField('KPICode', KpIs, 'Edm.String');
    /**
     * Static representation of the [[kpiName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KpIs.KPI_NAME = new core_1.StringField('KPIName', KpIs, 'Edm.String');
    /**
     * Static representation of the [[kpiType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KpIs.KPI_TYPE = new core_1.EnumField('KPIType', KpIs);
    /**
     * Static representation of the [[numberOfColumns]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KpIs.NUMBER_OF_COLUMNS = new core_1.NumberField('NumberOfColumns', KpIs, 'Edm.Int32');
    /**
     * Static representation of the [[kpiItemLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    KpIs.KPI_ITEM_LINES = new core_1.CollectionField('KPI_ItemLines', KpIs, KpiItemLine_1.KpiItemLine);
    /**
     * All fields of the KpIs entity.
     */
    KpIs._allFields = [
        KpIs.KPI_CODE,
        KpIs.KPI_NAME,
        KpIs.KPI_TYPE,
        KpIs.NUMBER_OF_COLUMNS,
        KpIs.KPI_ITEM_LINES
    ];
    /**
     * All fields selector.
     */
    KpIs.ALL_FIELDS = new core_1.AllFields('*', KpIs);
    /**
     * All key fields of the KpIs entity.
     */
    KpIs._keyFields = [KpIs.KPI_CODE];
    /**
     * Mapping of all key field names to the respective static field property KpIs.
     */
    KpIs._keys = KpIs._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(KpIs = exports.KpIs || (exports.KpIs = {}));
exports.KpIs = KpIs;
//# sourceMappingURL=KpIs.js.map