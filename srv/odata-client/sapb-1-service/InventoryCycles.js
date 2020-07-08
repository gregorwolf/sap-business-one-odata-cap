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
exports.InventoryCycles = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var InventoryCyclesRequestBuilder_1 = require("./InventoryCyclesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "InventoryCycles" of service "SAPB1".
 */
var InventoryCycles = /** @class */ (function (_super) {
    __extends(InventoryCycles, _super);
    function InventoryCycles() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `InventoryCycles`.
     * @returns A builder that constructs instances of entity type `InventoryCycles`.
     */
    InventoryCycles.builder = function () {
        return v4_1.Entity.entityBuilder(InventoryCycles);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InventoryCycles` entity type.
     * @returns A `InventoryCycles` request builder.
     */
    InventoryCycles.requestBuilder = function () {
        return new InventoryCyclesRequestBuilder_1.InventoryCyclesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryCycles`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InventoryCycles`.
     */
    InventoryCycles.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, InventoryCycles);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InventoryCycles.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InventoryCycles.
     */
    InventoryCycles._entityName = 'InventoryCycles';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for InventoryCycles.
     */
    InventoryCycles._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    InventoryCycles._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return InventoryCycles;
}(v4_1.Entity));
exports.InventoryCycles = InventoryCycles;
var ItemGroups_1 = require("./ItemGroups");
var Items_1 = require("./Items");
(function (InventoryCycles) {
    /**
     * Static representation of the [[cycleCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCycles.CYCLE_CODE = new v4_1.NumberField('CycleCode', InventoryCycles, 'Edm.Int32');
    /**
     * Static representation of the [[cycleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCycles.CYCLE_NAME = new v4_1.StringField('CycleName', InventoryCycles, 'Edm.String');
    /**
     * Static representation of the [[day]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCycles.DAY = new v4_1.NumberField('Day', InventoryCycles, 'Edm.Int32');
    /**
     * Static representation of the [[hour]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCycles.HOUR = new v4_1.TimeField('Hour', InventoryCycles, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[nextCountingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCycles.NEXT_COUNTING_DATE = new v4_1.DateField('NextCountingDate', InventoryCycles, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[interval]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCycles.INTERVAL = new v4_1.NumberField('Interval', InventoryCycles, 'Edm.Int32');
    /**
     * Static representation of the [[recurrenceDayInMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCycles.RECURRENCE_DAY_IN_MONTH = new v4_1.NumberField('RecurrenceDayInMonth', InventoryCycles, 'Edm.Int32');
    /**
     * Static representation of the [[recurrenceMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCycles.RECURRENCE_MONTH = new v4_1.NumberField('RecurrenceMonth', InventoryCycles, 'Edm.Int32');
    /**
     * Static representation of the [[maxOccurrence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCycles.MAX_OCCURRENCE = new v4_1.NumberField('MaxOccurrence', InventoryCycles, 'Edm.Int32');
    /**
     * Static representation of the [[seriesEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCycles.SERIES_END_DATE = new v4_1.DateField('SeriesEndDate', InventoryCycles, 'Edm.DateTimeOffset');
    /**
     * Static representation of the one-to-many navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCycles.ITEM_GROUPS = new v4_1.OneToManyLink('ItemGroups', InventoryCycles, ItemGroups_1.ItemGroups);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCycles.ITEMS = new v4_1.OneToManyLink('Items', InventoryCycles, Items_1.Items);
    /**
     * All fields of the InventoryCycles entity.
     */
    InventoryCycles._allFields = [
        InventoryCycles.CYCLE_CODE,
        InventoryCycles.CYCLE_NAME,
        InventoryCycles.DAY,
        InventoryCycles.HOUR,
        InventoryCycles.NEXT_COUNTING_DATE,
        InventoryCycles.INTERVAL,
        InventoryCycles.RECURRENCE_DAY_IN_MONTH,
        InventoryCycles.RECURRENCE_MONTH,
        InventoryCycles.MAX_OCCURRENCE,
        InventoryCycles.SERIES_END_DATE,
        InventoryCycles.ITEM_GROUPS,
        InventoryCycles.ITEMS
    ];
    /**
     * All fields selector.
     */
    InventoryCycles.ALL_FIELDS = new v4_1.AllFields('*', InventoryCycles);
    /**
     * All key fields of the InventoryCycles entity.
     */
    InventoryCycles._keyFields = [InventoryCycles.CYCLE_CODE];
    /**
     * Mapping of all key field names to the respective static field property InventoryCycles.
     */
    InventoryCycles._keys = InventoryCycles._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InventoryCycles = exports.InventoryCycles || (exports.InventoryCycles = {}));
exports.InventoryCycles = InventoryCycles;
//# sourceMappingURL=InventoryCycles.js.map