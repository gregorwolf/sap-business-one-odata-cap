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
exports.BrazilStringIndexers = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BrazilStringIndexersRequestBuilder_1 = require("./BrazilStringIndexersRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "BrazilStringIndexers" of service "SAPB1".
 */
var BrazilStringIndexers = /** @class */ (function (_super) {
    __extends(BrazilStringIndexers, _super);
    function BrazilStringIndexers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BrazilStringIndexers`.
     * @returns A builder that constructs instances of entity type `BrazilStringIndexers`.
     */
    BrazilStringIndexers.builder = function () {
        return core_1.EntityV4.entityBuilder(BrazilStringIndexers);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BrazilStringIndexers` entity type.
     * @returns A `BrazilStringIndexers` request builder.
     */
    BrazilStringIndexers.requestBuilder = function () {
        return new BrazilStringIndexersRequestBuilder_1.BrazilStringIndexersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BrazilStringIndexers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BrazilStringIndexers`.
     */
    BrazilStringIndexers.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, BrazilStringIndexers);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BrazilStringIndexers.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BrazilStringIndexers.
     */
    BrazilStringIndexers._entityName = 'BrazilStringIndexers';
    /**
     * Default url path for the according service.
     */
    BrazilStringIndexers._defaultServicePath = '/b1s/v2/';
    return BrazilStringIndexers;
}(core_1.EntityV4));
exports.BrazilStringIndexers = BrazilStringIndexers;
var BrazilBeverageIndexers_1 = require("./BrazilBeverageIndexers");
var Items_1 = require("./Items");
var BusinessPlaces_1 = require("./BusinessPlaces");
var WithholdingTaxCodes_1 = require("./WithholdingTaxCodes");
(function (BrazilStringIndexers) {
    /**
     * Static representation of the [[indexerType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilStringIndexers.INDEXER_TYPE = new core_1.EnumField('IndexerType', BrazilStringIndexers);
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilStringIndexers.CODE = new core_1.StringField('Code', BrazilStringIndexers, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilStringIndexers.DESCRIPTION = new core_1.StringField('Description', BrazilStringIndexers, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilStringIndexers.ID = new core_1.NumberField('ID', BrazilStringIndexers, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[brazilBeverageIndexers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilStringIndexers.BRAZIL_BEVERAGE_INDEXERS = new core_1.OneToManyLink('BrazilBeverageIndexers', BrazilStringIndexers, BrazilBeverageIndexers_1.BrazilBeverageIndexers);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilStringIndexers.ITEMS = new core_1.OneToManyLink('Items', BrazilStringIndexers, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[businessPlaces]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilStringIndexers.BUSINESS_PLACES = new core_1.OneToManyLink('BusinessPlaces', BrazilStringIndexers, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilStringIndexers.WITHHOLDING_TAX_CODES = new core_1.OneToManyLink('WithholdingTaxCodes', BrazilStringIndexers, WithholdingTaxCodes_1.WithholdingTaxCodes);
    /**
     * All fields of the BrazilStringIndexers entity.
     */
    BrazilStringIndexers._allFields = [
        BrazilStringIndexers.INDEXER_TYPE,
        BrazilStringIndexers.CODE,
        BrazilStringIndexers.DESCRIPTION,
        BrazilStringIndexers.ID,
        BrazilStringIndexers.BRAZIL_BEVERAGE_INDEXERS,
        BrazilStringIndexers.ITEMS,
        BrazilStringIndexers.BUSINESS_PLACES,
        BrazilStringIndexers.WITHHOLDING_TAX_CODES
    ];
    /**
     * All fields selector.
     */
    BrazilStringIndexers.ALL_FIELDS = new core_1.AllFields('*', BrazilStringIndexers);
    /**
     * All key fields of the BrazilStringIndexers entity.
     */
    BrazilStringIndexers._keyFields = [BrazilStringIndexers.ID];
    /**
     * Mapping of all key field names to the respective static field property BrazilStringIndexers.
     */
    BrazilStringIndexers._keys = BrazilStringIndexers._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BrazilStringIndexers = exports.BrazilStringIndexers || (exports.BrazilStringIndexers = {}));
exports.BrazilStringIndexers = BrazilStringIndexers;
//# sourceMappingURL=BrazilStringIndexers.js.map