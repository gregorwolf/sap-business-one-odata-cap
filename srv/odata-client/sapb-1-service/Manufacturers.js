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
exports.Manufacturers = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ManufacturersRequestBuilder_1 = require("./ManufacturersRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Manufacturers" of service "SAPB1".
 */
var Manufacturers = /** @class */ (function (_super) {
    __extends(Manufacturers, _super);
    function Manufacturers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Manufacturers`.
     * @returns A builder that constructs instances of entity type `Manufacturers`.
     */
    Manufacturers.builder = function () {
        return core_1.EntityV4.entityBuilder(Manufacturers);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Manufacturers` entity type.
     * @returns A `Manufacturers` request builder.
     */
    Manufacturers.requestBuilder = function () {
        return new ManufacturersRequestBuilder_1.ManufacturersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Manufacturers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Manufacturers`.
     */
    Manufacturers.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Manufacturers);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Manufacturers.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Manufacturers.
     */
    Manufacturers._entityName = 'Manufacturers';
    /**
     * Default url path for the according service.
     */
    Manufacturers._defaultServicePath = '/b1s/v2/';
    return Manufacturers;
}(core_1.EntityV4));
exports.Manufacturers = Manufacturers;
var Items_1 = require("./Items");
(function (Manufacturers) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Manufacturers.CODE = new core_1.NumberField('Code', Manufacturers, 'Edm.Int32');
    /**
     * Static representation of the [[manufacturerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Manufacturers.MANUFACTURER_NAME = new core_1.StringField('ManufacturerName', Manufacturers, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Manufacturers.ITEMS = new core_1.OneToManyLink('Items', Manufacturers, Items_1.Items);
    /**
     * All fields of the Manufacturers entity.
     */
    Manufacturers._allFields = [
        Manufacturers.CODE,
        Manufacturers.MANUFACTURER_NAME,
        Manufacturers.ITEMS
    ];
    /**
     * All fields selector.
     */
    Manufacturers.ALL_FIELDS = new core_1.AllFields('*', Manufacturers);
    /**
     * All key fields of the Manufacturers entity.
     */
    Manufacturers._keyFields = [Manufacturers.CODE];
    /**
     * Mapping of all key field names to the respective static field property Manufacturers.
     */
    Manufacturers._keys = Manufacturers._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Manufacturers = exports.Manufacturers || (exports.Manufacturers = {}));
exports.Manufacturers = Manufacturers;
//# sourceMappingURL=Manufacturers.js.map