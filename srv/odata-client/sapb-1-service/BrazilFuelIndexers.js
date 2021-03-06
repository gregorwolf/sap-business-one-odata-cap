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
exports.BrazilFuelIndexers = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BrazilFuelIndexersRequestBuilder_1 = require("./BrazilFuelIndexersRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "BrazilFuelIndexers" of service "SAPB1".
 */
var BrazilFuelIndexers = /** @class */ (function (_super) {
    __extends(BrazilFuelIndexers, _super);
    function BrazilFuelIndexers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BrazilFuelIndexers`.
     * @returns A builder that constructs instances of entity type `BrazilFuelIndexers`.
     */
    BrazilFuelIndexers.builder = function () {
        return core_1.EntityV4.entityBuilder(BrazilFuelIndexers);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BrazilFuelIndexers` entity type.
     * @returns A `BrazilFuelIndexers` request builder.
     */
    BrazilFuelIndexers.requestBuilder = function () {
        return new BrazilFuelIndexersRequestBuilder_1.BrazilFuelIndexersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BrazilFuelIndexers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BrazilFuelIndexers`.
     */
    BrazilFuelIndexers.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, BrazilFuelIndexers);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BrazilFuelIndexers.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BrazilFuelIndexers.
     */
    BrazilFuelIndexers._entityName = 'BrazilFuelIndexers';
    /**
     * Default url path for the according service.
     */
    BrazilFuelIndexers._defaultServicePath = '/b1s/v2/';
    return BrazilFuelIndexers;
}(core_1.EntityV4));
exports.BrazilFuelIndexers = BrazilFuelIndexers;
var Items_1 = require("./Items");
(function (BrazilFuelIndexers) {
    /**
     * Static representation of the [[fuelId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilFuelIndexers.FUEL_ID = new core_1.NumberField('FuelID', BrazilFuelIndexers, 'Edm.Int32');
    /**
     * Static representation of the [[fuelGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilFuelIndexers.FUEL_GROUP_CODE = new core_1.NumberField('FuelGroupCode', BrazilFuelIndexers, 'Edm.Int32');
    /**
     * Static representation of the [[fuelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilFuelIndexers.FUEL_CODE = new core_1.StringField('FuelCode', BrazilFuelIndexers, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilFuelIndexers.DESCRIPTION = new core_1.StringField('Description', BrazilFuelIndexers, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilFuelIndexers.ITEMS = new core_1.OneToManyLink('Items', BrazilFuelIndexers, Items_1.Items);
    /**
     * All fields of the BrazilFuelIndexers entity.
     */
    BrazilFuelIndexers._allFields = [
        BrazilFuelIndexers.FUEL_ID,
        BrazilFuelIndexers.FUEL_GROUP_CODE,
        BrazilFuelIndexers.FUEL_CODE,
        BrazilFuelIndexers.DESCRIPTION,
        BrazilFuelIndexers.ITEMS
    ];
    /**
     * All fields selector.
     */
    BrazilFuelIndexers.ALL_FIELDS = new core_1.AllFields('*', BrazilFuelIndexers);
    /**
     * All key fields of the BrazilFuelIndexers entity.
     */
    BrazilFuelIndexers._keyFields = [BrazilFuelIndexers.FUEL_ID];
    /**
     * Mapping of all key field names to the respective static field property BrazilFuelIndexers.
     */
    BrazilFuelIndexers._keys = BrazilFuelIndexers._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BrazilFuelIndexers = exports.BrazilFuelIndexers || (exports.BrazilFuelIndexers = {}));
exports.BrazilFuelIndexers = BrazilFuelIndexers;
//# sourceMappingURL=BrazilFuelIndexers.js.map