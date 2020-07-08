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
exports.DunningLetters = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DunningLettersRequestBuilder_1 = require("./DunningLettersRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "DunningLetters" of service "SAPB1".
 */
var DunningLetters = /** @class */ (function (_super) {
    __extends(DunningLetters, _super);
    function DunningLetters() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DunningLetters`.
     * @returns A builder that constructs instances of entity type `DunningLetters`.
     */
    DunningLetters.builder = function () {
        return v4_1.Entity.entityBuilder(DunningLetters);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DunningLetters` entity type.
     * @returns A `DunningLetters` request builder.
     */
    DunningLetters.requestBuilder = function () {
        return new DunningLettersRequestBuilder_1.DunningLettersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DunningLetters`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DunningLetters`.
     */
    DunningLetters.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, DunningLetters);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DunningLetters.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DunningLetters.
     */
    DunningLetters._entityName = 'DunningLetters';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DunningLetters.
     */
    DunningLetters._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    DunningLetters._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DunningLetters;
}(v4_1.Entity));
exports.DunningLetters = DunningLetters;
var BusinessPartners_1 = require("./BusinessPartners");
(function (DunningLetters) {
    /**
     * Static representation of the [[feeCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningLetters.FEE_CURRENCY = new v4_1.StringField('FeeCurrency', DunningLetters, 'Edm.String');
    /**
     * Static representation of the [[rowNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningLetters.ROW_NUMBER = new v4_1.NumberField('RowNumber', DunningLetters, 'Edm.Int32');
    /**
     * Static representation of the [[letterFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningLetters.LETTER_FORMAT = new v4_1.StringField('LetterFormat', DunningLetters, 'Edm.String');
    /**
     * Static representation of the [[effectiveafter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningLetters.EFFECTIVEAFTER = new v4_1.StringField('Effectiveafter', DunningLetters, 'Edm.String');
    /**
     * Static representation of the [[minimumBalanceCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningLetters.MINIMUM_BALANCE_CURRENCY = new v4_1.StringField('MinimumBalanceCurrency', DunningLetters, 'Edm.String');
    /**
     * Static representation of the [[feeperletter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningLetters.FEEPERLETTER = new v4_1.NumberField('Feeperletter', DunningLetters, 'Edm.Double');
    /**
     * Static representation of the [[minimumBalance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningLetters.MINIMUM_BALANCE = new v4_1.NumberField('MinimumBalance', DunningLetters, 'Edm.Double');
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DunningLetters.BUSINESS_PARTNERS = new v4_1.OneToManyLink('BusinessPartners', DunningLetters, BusinessPartners_1.BusinessPartners);
    /**
     * All fields of the DunningLetters entity.
     */
    DunningLetters._allFields = [
        DunningLetters.FEE_CURRENCY,
        DunningLetters.ROW_NUMBER,
        DunningLetters.LETTER_FORMAT,
        DunningLetters.EFFECTIVEAFTER,
        DunningLetters.MINIMUM_BALANCE_CURRENCY,
        DunningLetters.FEEPERLETTER,
        DunningLetters.MINIMUM_BALANCE,
        DunningLetters.BUSINESS_PARTNERS
    ];
    /**
     * All fields selector.
     */
    DunningLetters.ALL_FIELDS = new v4_1.AllFields('*', DunningLetters);
    /**
     * All key fields of the DunningLetters entity.
     */
    DunningLetters._keyFields = [DunningLetters.ROW_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property DunningLetters.
     */
    DunningLetters._keys = DunningLetters._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DunningLetters = exports.DunningLetters || (exports.DunningLetters = {}));
exports.DunningLetters = DunningLetters;
//# sourceMappingURL=DunningLetters.js.map