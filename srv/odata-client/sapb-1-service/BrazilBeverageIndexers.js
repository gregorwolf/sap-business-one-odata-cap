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
exports.BrazilBeverageIndexers = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BrazilBeverageIndexersRequestBuilder_1 = require("./BrazilBeverageIndexersRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "BrazilBeverageIndexers" of service "SAPB1".
 */
var BrazilBeverageIndexers = /** @class */ (function (_super) {
    __extends(BrazilBeverageIndexers, _super);
    function BrazilBeverageIndexers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BrazilBeverageIndexers`.
     * @returns A builder that constructs instances of entity type `BrazilBeverageIndexers`.
     */
    BrazilBeverageIndexers.builder = function () {
        return v4_1.Entity.entityBuilder(BrazilBeverageIndexers);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BrazilBeverageIndexers` entity type.
     * @returns A `BrazilBeverageIndexers` request builder.
     */
    BrazilBeverageIndexers.requestBuilder = function () {
        return new BrazilBeverageIndexersRequestBuilder_1.BrazilBeverageIndexersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BrazilBeverageIndexers`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BrazilBeverageIndexers`.
     */
    BrazilBeverageIndexers.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, BrazilBeverageIndexers);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BrazilBeverageIndexers.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BrazilBeverageIndexers.
     */
    BrazilBeverageIndexers._entityName = 'BrazilBeverageIndexers';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BrazilBeverageIndexers.
     */
    BrazilBeverageIndexers._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    BrazilBeverageIndexers._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BrazilBeverageIndexers;
}(v4_1.Entity));
exports.BrazilBeverageIndexers = BrazilBeverageIndexers;
var BrazilStringIndexers_1 = require("./BrazilStringIndexers");
var BrazilNumericIndexers_1 = require("./BrazilNumericIndexers");
(function (BrazilBeverageIndexers) {
    /**
     * Static representation of the [[beverageGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilBeverageIndexers.BEVERAGE_GROUP_CODE = new v4_1.StringField('BeverageGroupCode', BrazilBeverageIndexers, 'Edm.String');
    /**
     * Static representation of the [[beverageTableCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilBeverageIndexers.BEVERAGE_TABLE_CODE = new v4_1.StringField('BeverageTableCode', BrazilBeverageIndexers, 'Edm.String');
    /**
     * Static representation of the [[beverageCommercialBrandCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilBeverageIndexers.BEVERAGE_COMMERCIAL_BRAND_CODE = new v4_1.NumberField('BeverageCommercialBrandCode', BrazilBeverageIndexers, 'Edm.Int32');
    /**
     * Static representation of the [[beverageId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilBeverageIndexers.BEVERAGE_ID = new v4_1.NumberField('BeverageID', BrazilBeverageIndexers, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[brazilStringIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilBeverageIndexers.BRAZIL_STRING_INDEXER = new v4_1.OneToOneLink('BrazilStringIndexer', BrazilBeverageIndexers, BrazilStringIndexers_1.BrazilStringIndexers);
    /**
     * Static representation of the one-to-one navigation property [[brazilNumericIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BrazilBeverageIndexers.BRAZIL_NUMERIC_INDEXER = new v4_1.OneToOneLink('BrazilNumericIndexer', BrazilBeverageIndexers, BrazilNumericIndexers_1.BrazilNumericIndexers);
    /**
     * All fields of the BrazilBeverageIndexers entity.
     */
    BrazilBeverageIndexers._allFields = [
        BrazilBeverageIndexers.BEVERAGE_GROUP_CODE,
        BrazilBeverageIndexers.BEVERAGE_TABLE_CODE,
        BrazilBeverageIndexers.BEVERAGE_COMMERCIAL_BRAND_CODE,
        BrazilBeverageIndexers.BEVERAGE_ID,
        BrazilBeverageIndexers.BRAZIL_STRING_INDEXER,
        BrazilBeverageIndexers.BRAZIL_NUMERIC_INDEXER
    ];
    /**
     * All fields selector.
     */
    BrazilBeverageIndexers.ALL_FIELDS = new v4_1.AllFields('*', BrazilBeverageIndexers);
    /**
     * All key fields of the BrazilBeverageIndexers entity.
     */
    BrazilBeverageIndexers._keyFields = [BrazilBeverageIndexers.BEVERAGE_ID];
    /**
     * Mapping of all key field names to the respective static field property BrazilBeverageIndexers.
     */
    BrazilBeverageIndexers._keys = BrazilBeverageIndexers._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BrazilBeverageIndexers = exports.BrazilBeverageIndexers || (exports.BrazilBeverageIndexers = {}));
exports.BrazilBeverageIndexers = BrazilBeverageIndexers;
//# sourceMappingURL=BrazilBeverageIndexers.js.map