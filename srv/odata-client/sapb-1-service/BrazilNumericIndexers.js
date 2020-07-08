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
exports.BrazilNumericIndexers = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BrazilNumericIndexersRequestBuilder_1 = require("./BrazilNumericIndexersRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "BrazilNumericIndexers" of service "SAPB1".
 */
var BrazilNumericIndexers = /** @class */ (function (_super) {
    __extends(BrazilNumericIndexers, _super);
    function BrazilNumericIndexers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BrazilNumericIndexers`.
     * @returns A builder that constructs instances of entity type `BrazilNumericIndexers`.
     */
    BrazilNumericIndexers.builder = function () {
        return v4_1.Entity.entityBuilder(BrazilNumericIndexers);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BrazilNumericIndexers` entity type.
     * @returns A `BrazilNumericIndexers` request builder.
     */
    BrazilNumericIndexers.requestBuilder = function () {
        return new BrazilNumericIndexersRequestBuilder_1.BrazilNumericIndexersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BrazilNumericIndexers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BrazilNumericIndexers`.
     */
    BrazilNumericIndexers.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, BrazilNumericIndexers);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BrazilNumericIndexers.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BrazilNumericIndexers.
     */
    BrazilNumericIndexers._entityName = 'BrazilNumericIndexers';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BrazilNumericIndexers.
     */
    BrazilNumericIndexers._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    BrazilNumericIndexers._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BrazilNumericIndexers;
}(v4_1.Entity));
exports.BrazilNumericIndexers = BrazilNumericIndexers;
var BrazilBeverageIndexers_1 = require("./BrazilBeverageIndexers");
var Items_1 = require("./Items");
var BusinessPlaces_1 = require("./BusinessPlaces");
(function (BrazilNumericIndexers) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilNumericIndexers.CODE = new v4_1.NumberField('Code', BrazilNumericIndexers, 'Edm.Int32');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilNumericIndexers.DESCRIPTION = new v4_1.StringField('Description', BrazilNumericIndexers, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilNumericIndexers.ID = new v4_1.NumberField('ID', BrazilNumericIndexers, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[brazilBeverageIndexers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilNumericIndexers.BRAZIL_BEVERAGE_INDEXERS = new v4_1.OneToManyLink('BrazilBeverageIndexers', BrazilNumericIndexers, BrazilBeverageIndexers_1.BrazilBeverageIndexers);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilNumericIndexers.ITEMS = new v4_1.OneToManyLink('Items', BrazilNumericIndexers, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilNumericIndexers.BUSINESS_PLACES = new v4_1.OneToManyLink('BusinessPlaces', BrazilNumericIndexers, BusinessPlaces_1.BusinessPlaces);
    /**
     * All fields of the BrazilNumericIndexers entity.
     */
    BrazilNumericIndexers._allFields = [
        BrazilNumericIndexers.CODE,
        BrazilNumericIndexers.DESCRIPTION,
        BrazilNumericIndexers.ID,
        BrazilNumericIndexers.BRAZIL_BEVERAGE_INDEXERS,
        BrazilNumericIndexers.ITEMS,
        BrazilNumericIndexers.BUSINESS_PLACES
    ];
    /**
     * All fields selector.
     */
    BrazilNumericIndexers.ALL_FIELDS = new v4_1.AllFields('*', BrazilNumericIndexers);
    /**
     * All key fields of the BrazilNumericIndexers entity.
     */
    BrazilNumericIndexers._keyFields = [BrazilNumericIndexers.ID];
    /**
     * Mapping of all key field names to the respective static field property BrazilNumericIndexers.
     */
    BrazilNumericIndexers._keys = BrazilNumericIndexers._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BrazilNumericIndexers = exports.BrazilNumericIndexers || (exports.BrazilNumericIndexers = {}));
exports.BrazilNumericIndexers = BrazilNumericIndexers;
//# sourceMappingURL=BrazilNumericIndexers.js.map