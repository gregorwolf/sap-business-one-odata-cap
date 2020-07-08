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
exports.Sections = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SectionsRequestBuilder_1 = require("./SectionsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "Sections" of service "SAPB1".
 */
var Sections = /** @class */ (function (_super) {
    __extends(Sections, _super);
    function Sections() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Sections`.
     * @returns A builder that constructs instances of entity type `Sections`.
     */
    Sections.builder = function () {
        return v4_1.Entity.entityBuilder(Sections);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Sections` entity type.
     * @returns A `Sections` request builder.
     */
    Sections.requestBuilder = function () {
        return new SectionsRequestBuilder_1.SectionsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Sections`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Sections`.
     */
    Sections.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Sections);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Sections.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Sections.
     */
    Sections._entityName = 'Sections';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Sections.
     */
    Sections._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Sections._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Sections;
}(v4_1.Entity));
exports.Sections = Sections;
var CertificateSeries_1 = require("./CertificateSeries");
var WithholdingTaxCodes_1 = require("./WithholdingTaxCodes");
(function (Sections) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sections.ABS_ENTRY = new v4_1.NumberField('AbsEntry', Sections, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sections.CODE = new v4_1.StringField('Code', Sections, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sections.DESCRIPTION = new v4_1.StringField('Description', Sections, 'Edm.String');
    /**
     * Static representation of the [[eCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sections.E_CODE = new v4_1.StringField('ECode', Sections, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[certificateSeries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sections.CERTIFICATE_SERIES = new v4_1.OneToManyLink('CertificateSeries', Sections, CertificateSeries_1.CertificateSeries);
    /**
     * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Sections.WITHHOLDING_TAX_CODES = new v4_1.OneToManyLink('WithholdingTaxCodes', Sections, WithholdingTaxCodes_1.WithholdingTaxCodes);
    /**
     * All fields of the Sections entity.
     */
    Sections._allFields = [
        Sections.ABS_ENTRY,
        Sections.CODE,
        Sections.DESCRIPTION,
        Sections.E_CODE,
        Sections.CERTIFICATE_SERIES,
        Sections.WITHHOLDING_TAX_CODES
    ];
    /**
     * All fields selector.
     */
    Sections.ALL_FIELDS = new v4_1.AllFields('*', Sections);
    /**
     * All key fields of the Sections entity.
     */
    Sections._keyFields = [Sections.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property Sections.
     */
    Sections._keys = Sections._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Sections = exports.Sections || (exports.Sections = {}));
exports.Sections = Sections;
//# sourceMappingURL=Sections.js.map