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
exports.NatureOfAssessees = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var NatureOfAssesseesRequestBuilder_1 = require("./NatureOfAssesseesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "NatureOfAssessees" of service "SAPB1".
 */
var NatureOfAssessees = /** @class */ (function (_super) {
    __extends(NatureOfAssessees, _super);
    function NatureOfAssessees() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `NatureOfAssessees`.
     * @returns A builder that constructs instances of entity type `NatureOfAssessees`.
     */
    NatureOfAssessees.builder = function () {
        return core_1.EntityV4.entityBuilder(NatureOfAssessees);
    };
    /**
     * Returns a request builder to construct requests for operations on the `NatureOfAssessees` entity type.
     * @returns A `NatureOfAssessees` request builder.
     */
    NatureOfAssessees.requestBuilder = function () {
        return new NatureOfAssesseesRequestBuilder_1.NatureOfAssesseesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `NatureOfAssessees`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `NatureOfAssessees`.
     */
    NatureOfAssessees.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, NatureOfAssessees);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    NatureOfAssessees.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for NatureOfAssessees.
     */
    NatureOfAssessees._entityName = 'NatureOfAssessees';
    /**
     * Default url path for the according service.
     */
    NatureOfAssessees._defaultServicePath = '/b1s/v2/';
    return NatureOfAssessees;
}(core_1.EntityV4));
exports.NatureOfAssessees = NatureOfAssessees;
var WithholdingTaxCodes_1 = require("./WithholdingTaxCodes");
(function (NatureOfAssessees) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NatureOfAssessees.ABS_ENTRY = new core_1.NumberField('AbsEntry', NatureOfAssessees, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NatureOfAssessees.CODE = new core_1.StringField('Code', NatureOfAssessees, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NatureOfAssessees.DESCRIPTION = new core_1.StringField('Description', NatureOfAssessees, 'Edm.String');
    /**
     * Static representation of the [[assesseeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NatureOfAssessees.ASSESSEE_TYPE = new core_1.EnumField('AssesseeType', NatureOfAssessees);
    /**
     * Static representation of the one-to-many navigation property [[withholdingTaxCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NatureOfAssessees.WITHHOLDING_TAX_CODES = new core_1.OneToManyLink('WithholdingTaxCodes', NatureOfAssessees, WithholdingTaxCodes_1.WithholdingTaxCodes);
    /**
     * All fields of the NatureOfAssessees entity.
     */
    NatureOfAssessees._allFields = [
        NatureOfAssessees.ABS_ENTRY,
        NatureOfAssessees.CODE,
        NatureOfAssessees.DESCRIPTION,
        NatureOfAssessees.ASSESSEE_TYPE,
        NatureOfAssessees.WITHHOLDING_TAX_CODES
    ];
    /**
     * All fields selector.
     */
    NatureOfAssessees.ALL_FIELDS = new core_1.AllFields('*', NatureOfAssessees);
    /**
     * All key fields of the NatureOfAssessees entity.
     */
    NatureOfAssessees._keyFields = [NatureOfAssessees.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property NatureOfAssessees.
     */
    NatureOfAssessees._keys = NatureOfAssessees._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(NatureOfAssessees = exports.NatureOfAssessees || (exports.NatureOfAssessees = {}));
exports.NatureOfAssessees = NatureOfAssessees;
//# sourceMappingURL=NatureOfAssessees.js.map