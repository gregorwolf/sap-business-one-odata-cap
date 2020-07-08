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
exports.StockTakings = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var StockTakingsRequestBuilder_1 = require("./StockTakingsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "StockTakings" of service "SAPB1".
 */
var StockTakings = /** @class */ (function (_super) {
    __extends(StockTakings, _super);
    function StockTakings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `StockTakings`.
     * @returns A builder that constructs instances of entity type `StockTakings`.
     */
    StockTakings.builder = function () {
        return v4_1.Entity.entityBuilder(StockTakings);
    };
    /**
     * Returns a request builder to construct requests for operations on the `StockTakings` entity type.
     * @returns A `StockTakings` request builder.
     */
    StockTakings.requestBuilder = function () {
        return new StockTakingsRequestBuilder_1.StockTakingsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `StockTakings`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `StockTakings`.
     */
    StockTakings.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, StockTakings);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    StockTakings.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for StockTakings.
     */
    StockTakings._entityName = 'StockTakings';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for StockTakings.
     */
    StockTakings._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    StockTakings._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return StockTakings;
}(v4_1.Entity));
exports.StockTakings = StockTakings;
var Items_1 = require("./Items");
var Warehouses_1 = require("./Warehouses");
(function (StockTakings) {
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTakings.ITEM_CODE = new v4_1.StringField('ItemCode', StockTakings, 'Edm.String');
    /**
     * Static representation of the [[warehouseCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTakings.WAREHOUSE_CODE = new v4_1.StringField('WarehouseCode', StockTakings, 'Edm.String');
    /**
     * Static representation of the [[counted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTakings.COUNTED = new v4_1.NumberField('Counted', StockTakings, 'Edm.Double');
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTakings.ITEM = new v4_1.OneToOneLink('Item', StockTakings, Items_1.Items);
    /**
     * Static representation of the one-to-one navigation property [[warehouse]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    StockTakings.WAREHOUSE = new v4_1.OneToOneLink('Warehouse', StockTakings, Warehouses_1.Warehouses);
    /**
     * All fields of the StockTakings entity.
     */
    StockTakings._allFields = [
        StockTakings.ITEM_CODE,
        StockTakings.WAREHOUSE_CODE,
        StockTakings.COUNTED,
        StockTakings.ITEM,
        StockTakings.WAREHOUSE
    ];
    /**
     * All fields selector.
     */
    StockTakings.ALL_FIELDS = new v4_1.AllFields('*', StockTakings);
    /**
     * All key fields of the StockTakings entity.
     */
    StockTakings._keyFields = [StockTakings.ITEM_CODE, StockTakings.WAREHOUSE_CODE];
    /**
     * Mapping of all key field names to the respective static field property StockTakings.
     */
    StockTakings._keys = StockTakings._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(StockTakings = exports.StockTakings || (exports.StockTakings = {}));
exports.StockTakings = StockTakings;
//# sourceMappingURL=StockTakings.js.map