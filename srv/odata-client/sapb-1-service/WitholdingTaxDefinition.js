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
exports.WitholdingTaxDefinition = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var WitholdingTaxDefinitionRequestBuilder_1 = require("./WitholdingTaxDefinitionRequestBuilder");
var WtdEffectiveDate_1 = require("./WtdEffectiveDate");
var Wtdbp_1 = require("./Wtdbp");
var WtdItem_1 = require("./WtdItem");
var WtdFreight_1 = require("./WtdFreight");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WitholdingTaxDefinition" of service "SAPB1".
 */
var WitholdingTaxDefinition = /** @class */ (function (_super) {
    __extends(WitholdingTaxDefinition, _super);
    function WitholdingTaxDefinition() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `WitholdingTaxDefinition`.
     * @returns A builder that constructs instances of entity type `WitholdingTaxDefinition`.
     */
    WitholdingTaxDefinition.builder = function () {
        return core_1.EntityV4.entityBuilder(WitholdingTaxDefinition);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WitholdingTaxDefinition` entity type.
     * @returns A `WitholdingTaxDefinition` request builder.
     */
    WitholdingTaxDefinition.requestBuilder = function () {
        return new WitholdingTaxDefinitionRequestBuilder_1.WitholdingTaxDefinitionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WitholdingTaxDefinition`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WitholdingTaxDefinition`.
     */
    WitholdingTaxDefinition.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, WitholdingTaxDefinition);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WitholdingTaxDefinition.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WitholdingTaxDefinition.
     */
    WitholdingTaxDefinition._entityName = 'WitholdingTaxDefinition';
    /**
     * Default url path for the according service.
     */
    WitholdingTaxDefinition._defaultServicePath = '/b1s/v2/';
    return WitholdingTaxDefinition;
}(core_1.EntityV4));
exports.WitholdingTaxDefinition = WitholdingTaxDefinition;
(function (WitholdingTaxDefinition) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.ABS_ENTRY = new core_1.NumberField('AbsEntry', WitholdingTaxDefinition, 'Edm.Int32');
    /**
     * Static representation of the [[wTaxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.W_TAX_CODE = new core_1.StringField('WTaxCode', WitholdingTaxDefinition, 'Edm.String');
    /**
     * Static representation of the [[wTaxName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.W_TAX_NAME = new core_1.StringField('WTaxName', WitholdingTaxDefinition, 'Edm.String');
    /**
     * Static representation of the [[formulaId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.FORMULA_ID = new core_1.NumberField('FormulaID', WitholdingTaxDefinition, 'Edm.Int32');
    /**
     * Static representation of the [[inactive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.INACTIVE = new core_1.EnumField('Inactive', WitholdingTaxDefinition);
    /**
     * Static representation of the [[officialCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.OFFICIAL_CODE = new core_1.StringField('OfficialCode', WitholdingTaxDefinition, 'Edm.String');
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.CATEGORY = new core_1.EnumField('Category', WitholdingTaxDefinition);
    /**
     * Static representation of the [[baseType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.BASE_TYPE = new core_1.EnumField('BaseType', WitholdingTaxDefinition);
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.TYPE = new core_1.NumberField('Type', WitholdingTaxDefinition, 'Edm.Int32');
    /**
     * Static representation of the [[minAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.MIN_AMOUNT = new core_1.NumberField('MinAmount', WitholdingTaxDefinition, 'Edm.Double');
    /**
     * Static representation of the [[baseAmountPrct]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.BASE_AMOUNT_PRCT = new core_1.NumberField('BaseAmountPrct', WitholdingTaxDefinition, 'Edm.Double');
    /**
     * Static representation of the [[slidingScaleProgressiveTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.SLIDING_SCALE_PROGRESSIVE_TAX = new core_1.EnumField('SlidingScaleProgressiveTax', WitholdingTaxDefinition);
    /**
     * Static representation of the [[wtdEffectiveDateCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.WTD_EFFECTIVE_DATE_COLLECTION = new core_1.CollectionField('WTDEffectiveDateCollection', WitholdingTaxDefinition, WtdEffectiveDate_1.WtdEffectiveDate);
    /**
     * Static representation of the [[wtdbpCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.WTDBP_COLLECTION = new core_1.CollectionField('WTDBPCollection', WitholdingTaxDefinition, Wtdbp_1.Wtdbp);
    /**
     * Static representation of the [[wtdItemCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.WTD_ITEM_COLLECTION = new core_1.CollectionField('WTDItemCollection', WitholdingTaxDefinition, WtdItem_1.WtdItem);
    /**
     * Static representation of the [[wtdFreightCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WitholdingTaxDefinition.WTD_FREIGHT_COLLECTION = new core_1.CollectionField('WTDFreightCollection', WitholdingTaxDefinition, WtdFreight_1.WtdFreight);
    /**
     * All fields of the WitholdingTaxDefinition entity.
     */
    WitholdingTaxDefinition._allFields = [
        WitholdingTaxDefinition.ABS_ENTRY,
        WitholdingTaxDefinition.W_TAX_CODE,
        WitholdingTaxDefinition.W_TAX_NAME,
        WitholdingTaxDefinition.FORMULA_ID,
        WitholdingTaxDefinition.INACTIVE,
        WitholdingTaxDefinition.OFFICIAL_CODE,
        WitholdingTaxDefinition.CATEGORY,
        WitholdingTaxDefinition.BASE_TYPE,
        WitholdingTaxDefinition.TYPE,
        WitholdingTaxDefinition.MIN_AMOUNT,
        WitholdingTaxDefinition.BASE_AMOUNT_PRCT,
        WitholdingTaxDefinition.SLIDING_SCALE_PROGRESSIVE_TAX,
        WitholdingTaxDefinition.WTD_EFFECTIVE_DATE_COLLECTION,
        WitholdingTaxDefinition.WTDBP_COLLECTION,
        WitholdingTaxDefinition.WTD_ITEM_COLLECTION,
        WitholdingTaxDefinition.WTD_FREIGHT_COLLECTION
    ];
    /**
     * All fields selector.
     */
    WitholdingTaxDefinition.ALL_FIELDS = new core_1.AllFields('*', WitholdingTaxDefinition);
    /**
     * All key fields of the WitholdingTaxDefinition entity.
     */
    WitholdingTaxDefinition._keyFields = [WitholdingTaxDefinition.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property WitholdingTaxDefinition.
     */
    WitholdingTaxDefinition._keys = WitholdingTaxDefinition._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WitholdingTaxDefinition = exports.WitholdingTaxDefinition || (exports.WitholdingTaxDefinition = {}));
exports.WitholdingTaxDefinition = WitholdingTaxDefinition;
//# sourceMappingURL=WitholdingTaxDefinition.js.map