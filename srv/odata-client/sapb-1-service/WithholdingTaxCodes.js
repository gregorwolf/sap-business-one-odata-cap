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
exports.WithholdingTaxCodes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var WithholdingTaxCodesRequestBuilder_1 = require("./WithholdingTaxCodesRequestBuilder");
var WithholdingTaxCodesLine_1 = require("./WithholdingTaxCodesLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WithholdingTaxCodes" of service "SAPB1".
 */
var WithholdingTaxCodes = /** @class */ (function (_super) {
    __extends(WithholdingTaxCodes, _super);
    function WithholdingTaxCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `WithholdingTaxCodes`.
     * @returns A builder that constructs instances of entity type `WithholdingTaxCodes`.
     */
    WithholdingTaxCodes.builder = function () {
        return core_1.EntityV4.entityBuilder(WithholdingTaxCodes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WithholdingTaxCodes` entity type.
     * @returns A `WithholdingTaxCodes` request builder.
     */
    WithholdingTaxCodes.requestBuilder = function () {
        return new WithholdingTaxCodesRequestBuilder_1.WithholdingTaxCodesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WithholdingTaxCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WithholdingTaxCodes`.
     */
    WithholdingTaxCodes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, WithholdingTaxCodes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WithholdingTaxCodes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WithholdingTaxCodes.
     */
    WithholdingTaxCodes._entityName = 'WithholdingTaxCodes';
    /**
     * Default url path for the according service.
     */
    WithholdingTaxCodes._defaultServicePath = '/b1s/v2/';
    return WithholdingTaxCodes;
}(core_1.EntityV4));
exports.WithholdingTaxCodes = WithholdingTaxCodes;
var VendorPayments_1 = require("./VendorPayments");
var BusinessPartners_1 = require("./BusinessPartners");
var PaymentDrafts_1 = require("./PaymentDrafts");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var Sections_1 = require("./Sections");
var NatureOfAssessees_1 = require("./NatureOfAssessees");
var WarehouseLocations_1 = require("./WarehouseLocations");
var BrazilStringIndexers_1 = require("./BrazilStringIndexers");
var Currencies_1 = require("./Currencies");
var IncomingPayments_1 = require("./IncomingPayments");
(function (WithholdingTaxCodes) {
    /**
     * Static representation of the [[wtCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.WT_CODE = new core_1.StringField('WTCode', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[wtName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.WT_NAME = new core_1.StringField('WTName', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.CATEGORY = new core_1.EnumField('Category', WithholdingTaxCodes);
    /**
     * Static representation of the [[baseType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.BASE_TYPE = new core_1.EnumField('BaseType', WithholdingTaxCodes);
    /**
     * Static representation of the [[baseAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.BASE_AMOUNT = new core_1.NumberField('BaseAmount', WithholdingTaxCodes, 'Edm.Double');
    /**
     * Static representation of the [[officialCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.OFFICIAL_CODE = new core_1.StringField('OfficialCode', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[account]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.ACCOUNT = new core_1.StringField('Account', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[withholdingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.WITHHOLDING_TYPE = new core_1.EnumField('WithholdingType', WithholdingTaxCodes);
    /**
     * Static representation of the [[roundingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.ROUNDING_TYPE = new core_1.EnumField('RoundingType', WithholdingTaxCodes);
    /**
     * Static representation of the [[section]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.SECTION = new core_1.NumberField('Section', WithholdingTaxCodes, 'Edm.Int32');
    /**
     * Static representation of the [[threshold]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.THRESHOLD = new core_1.NumberField('Threshold', WithholdingTaxCodes, 'Edm.Double');
    /**
     * Static representation of the [[surcharge]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.SURCHARGE = new core_1.NumberField('Surcharge', WithholdingTaxCodes, 'Edm.Double');
    /**
     * Static representation of the [[concessional]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.CONCESSIONAL = new core_1.EnumField('Concessional', WithholdingTaxCodes);
    /**
     * Static representation of the [[assessee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.ASSESSEE = new core_1.NumberField('Assessee', WithholdingTaxCodes, 'Edm.Int32');
    /**
     * Static representation of the [[aptdsAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.APTDS_ACCOUNT = new core_1.StringField('APTDSAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[apSurchargeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.AP_SURCHARGE_ACCOUNT = new core_1.StringField('APSurchargeAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[apCessAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.AP_CESS_ACCOUNT = new core_1.StringField('APCessAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[aphscAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.APHSC_ACCOUNT = new core_1.StringField('APHSCAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[apigstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.APIGST_ACCOUNT = new core_1.StringField('APIGSTAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[apcgstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.APCGST_ACCOUNT = new core_1.StringField('APCGSTAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[apsgstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.APSGST_ACCOUNT = new core_1.StringField('APSGSTAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[aputgstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.APUTGST_ACCOUNT = new core_1.StringField('APUTGSTAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[apCessGstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.AP_CESS_GST_ACCOUNT = new core_1.StringField('APCessGSTAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[artdsAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.ARTDS_ACCOUNT = new core_1.StringField('ARTDSAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[arSurchargeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.AR_SURCHARGE_ACCOUNT = new core_1.StringField('ARSurchargeAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[arCessAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.AR_CESS_ACCOUNT = new core_1.StringField('ARCessAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[arhscAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.ARHSC_ACCOUNT = new core_1.StringField('ARHSCAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[arigstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.ARIGST_ACCOUNT = new core_1.StringField('ARIGSTAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[arcgstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.ARCGST_ACCOUNT = new core_1.StringField('ARCGSTAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[arsgstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.ARSGST_ACCOUNT = new core_1.StringField('ARSGSTAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[arutgstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.ARUTGST_ACCOUNT = new core_1.StringField('ARUTGSTAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[arCessGstAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.AR_CESS_GST_ACCOUNT = new core_1.StringField('ARCessGSTAccount', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.LOCATION = new core_1.NumberField('Location', WithholdingTaxCodes, 'Edm.Int32');
    /**
     * Static representation of the [[returnType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.RETURN_TYPE = new core_1.EnumField('ReturnType', WithholdingTaxCodes);
    /**
     * Static representation of the [[inactive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.INACTIVE = new core_1.EnumField('Inactive', WithholdingTaxCodes);
    /**
     * Static representation of the [[cstCodeIncomingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.CST_CODE_INCOMING_ID = new core_1.NumberField('CSTCodeIncomingID', WithholdingTaxCodes, 'Edm.Int32');
    /**
     * Static representation of the [[cstCodeOutgoingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.CST_CODE_OUTGOING_ID = new core_1.NumberField('CSTCodeOutgoingID', WithholdingTaxCodes, 'Edm.Int32');
    /**
     * Static representation of the [[natureOfCalculationBaseCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.NATURE_OF_CALCULATION_BASE_CODE = new core_1.StringField('NatureOfCalculationBaseCode', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[typeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.TYPE_ID = new core_1.NumberField('TypeID', WithholdingTaxCodes, 'Edm.Int32');
    /**
     * Static representation of the [[rate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.RATE = new core_1.NumberField('Rate', WithholdingTaxCodes, 'Edm.Double');
    /**
     * Static representation of the [[effectiveFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.EFFECTIVE_FROM = new core_1.DateField('EffectiveFrom', WithholdingTaxCodes, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[minimumTaxableAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.MINIMUM_TAXABLE_AMOUNT = new core_1.NumberField('MinimumTaxableAmount', WithholdingTaxCodes, 'Edm.Double');
    /**
     * Static representation of the [[isProgressiveTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.IS_PROGRESSIVE_TAX = new core_1.EnumField('IsProgressiveTax', WithholdingTaxCodes);
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.CURRENCY = new core_1.StringField('Currency', WithholdingTaxCodes, 'Edm.String');
    /**
     * Static representation of the [[tdsType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.TDS_TYPE = new core_1.EnumField('TdsType', WithholdingTaxCodes);
    /**
     * Static representation of the [[withholdingTaxCodesLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.WITHHOLDING_TAX_CODES_LINES = new core_1.CollectionField('WithholdingTaxCodes_Lines', WithholdingTaxCodes, WithholdingTaxCodesLine_1.WithholdingTaxCodesLine);
    /**
     * Static representation of the one-to-many navigation property [[vendorPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.VENDOR_PAYMENTS = new core_1.OneToManyLink('VendorPayments', WithholdingTaxCodes, VendorPayments_1.VendorPayments);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', WithholdingTaxCodes, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[paymentDrafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.PAYMENT_DRAFTS = new core_1.OneToManyLink('PaymentDrafts', WithholdingTaxCodes, PaymentDrafts_1.PaymentDrafts);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', WithholdingTaxCodes, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[section2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.SECTION_2 = new core_1.OneToOneLink('Section2', WithholdingTaxCodes, Sections_1.Sections);
    /**
     * Static representation of the one-to-one navigation property [[natureOfAssessee]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.NATURE_OF_ASSESSEE = new core_1.OneToOneLink('NatureOfAssessee', WithholdingTaxCodes, NatureOfAssessees_1.NatureOfAssessees);
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.WAREHOUSE_LOCATION = new core_1.OneToOneLink('WarehouseLocation', WithholdingTaxCodes, WarehouseLocations_1.WarehouseLocations);
    /**
     * Static representation of the one-to-one navigation property [[brazilStringIndexer]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.BRAZIL_STRING_INDEXER = new core_1.OneToOneLink('BrazilStringIndexer', WithholdingTaxCodes, BrazilStringIndexers_1.BrazilStringIndexers);
    /**
     * Static representation of the one-to-one navigation property [[currency2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.CURRENCY_2 = new core_1.OneToOneLink('Currency2', WithholdingTaxCodes, Currencies_1.Currencies);
    /**
     * Static representation of the one-to-many navigation property [[incomingPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WithholdingTaxCodes.INCOMING_PAYMENTS = new core_1.OneToManyLink('IncomingPayments', WithholdingTaxCodes, IncomingPayments_1.IncomingPayments);
    /**
     * All fields of the WithholdingTaxCodes entity.
     */
    WithholdingTaxCodes._allFields = [
        WithholdingTaxCodes.WT_CODE,
        WithholdingTaxCodes.WT_NAME,
        WithholdingTaxCodes.CATEGORY,
        WithholdingTaxCodes.BASE_TYPE,
        WithholdingTaxCodes.BASE_AMOUNT,
        WithholdingTaxCodes.OFFICIAL_CODE,
        WithholdingTaxCodes.ACCOUNT,
        WithholdingTaxCodes.WITHHOLDING_TYPE,
        WithholdingTaxCodes.ROUNDING_TYPE,
        WithholdingTaxCodes.SECTION,
        WithholdingTaxCodes.THRESHOLD,
        WithholdingTaxCodes.SURCHARGE,
        WithholdingTaxCodes.CONCESSIONAL,
        WithholdingTaxCodes.ASSESSEE,
        WithholdingTaxCodes.APTDS_ACCOUNT,
        WithholdingTaxCodes.AP_SURCHARGE_ACCOUNT,
        WithholdingTaxCodes.AP_CESS_ACCOUNT,
        WithholdingTaxCodes.APHSC_ACCOUNT,
        WithholdingTaxCodes.APIGST_ACCOUNT,
        WithholdingTaxCodes.APCGST_ACCOUNT,
        WithholdingTaxCodes.APSGST_ACCOUNT,
        WithholdingTaxCodes.APUTGST_ACCOUNT,
        WithholdingTaxCodes.AP_CESS_GST_ACCOUNT,
        WithholdingTaxCodes.ARTDS_ACCOUNT,
        WithholdingTaxCodes.AR_SURCHARGE_ACCOUNT,
        WithholdingTaxCodes.AR_CESS_ACCOUNT,
        WithholdingTaxCodes.ARHSC_ACCOUNT,
        WithholdingTaxCodes.ARIGST_ACCOUNT,
        WithholdingTaxCodes.ARCGST_ACCOUNT,
        WithholdingTaxCodes.ARSGST_ACCOUNT,
        WithholdingTaxCodes.ARUTGST_ACCOUNT,
        WithholdingTaxCodes.AR_CESS_GST_ACCOUNT,
        WithholdingTaxCodes.LOCATION,
        WithholdingTaxCodes.RETURN_TYPE,
        WithholdingTaxCodes.INACTIVE,
        WithholdingTaxCodes.CST_CODE_INCOMING_ID,
        WithholdingTaxCodes.CST_CODE_OUTGOING_ID,
        WithholdingTaxCodes.NATURE_OF_CALCULATION_BASE_CODE,
        WithholdingTaxCodes.TYPE_ID,
        WithholdingTaxCodes.RATE,
        WithholdingTaxCodes.EFFECTIVE_FROM,
        WithholdingTaxCodes.MINIMUM_TAXABLE_AMOUNT,
        WithholdingTaxCodes.IS_PROGRESSIVE_TAX,
        WithholdingTaxCodes.CURRENCY,
        WithholdingTaxCodes.TDS_TYPE,
        WithholdingTaxCodes.WITHHOLDING_TAX_CODES_LINES,
        WithholdingTaxCodes.VENDOR_PAYMENTS,
        WithholdingTaxCodes.BUSINESS_PARTNERS,
        WithholdingTaxCodes.PAYMENT_DRAFTS,
        WithholdingTaxCodes.CHART_OF_ACCOUNT,
        WithholdingTaxCodes.SECTION_2,
        WithholdingTaxCodes.NATURE_OF_ASSESSEE,
        WithholdingTaxCodes.WAREHOUSE_LOCATION,
        WithholdingTaxCodes.BRAZIL_STRING_INDEXER,
        WithholdingTaxCodes.CURRENCY_2,
        WithholdingTaxCodes.INCOMING_PAYMENTS
    ];
    /**
     * All fields selector.
     */
    WithholdingTaxCodes.ALL_FIELDS = new core_1.AllFields('*', WithholdingTaxCodes);
    /**
     * All key fields of the WithholdingTaxCodes entity.
     */
    WithholdingTaxCodes._keyFields = [WithholdingTaxCodes.WT_CODE];
    /**
     * Mapping of all key field names to the respective static field property WithholdingTaxCodes.
     */
    WithholdingTaxCodes._keys = WithholdingTaxCodes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WithholdingTaxCodes = exports.WithholdingTaxCodes || (exports.WithholdingTaxCodes = {}));
exports.WithholdingTaxCodes = WithholdingTaxCodes;
//# sourceMappingURL=WithholdingTaxCodes.js.map