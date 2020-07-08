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
exports.SalesOpportunityInterestsSetup = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SalesOpportunityInterestsSetupRequestBuilder_1 = require("./SalesOpportunityInterestsSetupRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "SalesOpportunityInterestsSetup" of service "SAPB1".
 */
var SalesOpportunityInterestsSetup = /** @class */ (function (_super) {
    __extends(SalesOpportunityInterestsSetup, _super);
    function SalesOpportunityInterestsSetup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SalesOpportunityInterestsSetup`.
     * @returns A builder that constructs instances of entity type `SalesOpportunityInterestsSetup`.
     */
    SalesOpportunityInterestsSetup.builder = function () {
        return v4_1.Entity.entityBuilder(SalesOpportunityInterestsSetup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesOpportunityInterestsSetup` entity type.
     * @returns A `SalesOpportunityInterestsSetup` request builder.
     */
    SalesOpportunityInterestsSetup.requestBuilder = function () {
        return new SalesOpportunityInterestsSetupRequestBuilder_1.SalesOpportunityInterestsSetupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOpportunityInterestsSetup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesOpportunityInterestsSetup`.
     */
    SalesOpportunityInterestsSetup.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, SalesOpportunityInterestsSetup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesOpportunityInterestsSetup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesOpportunityInterestsSetup.
     */
    SalesOpportunityInterestsSetup._entityName = 'SalesOpportunityInterestsSetup';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesOpportunityInterestsSetup.
     */
    SalesOpportunityInterestsSetup._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    SalesOpportunityInterestsSetup._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SalesOpportunityInterestsSetup;
}(v4_1.Entity));
exports.SalesOpportunityInterestsSetup = SalesOpportunityInterestsSetup;
var SalesOpportunities_1 = require("./SalesOpportunities");
(function (SalesOpportunityInterestsSetup) {
    /**
     * Static representation of the [[sequenceNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunityInterestsSetup.SEQUENCE_NO = new v4_1.NumberField('SequenceNo', SalesOpportunityInterestsSetup, 'Edm.Int32');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunityInterestsSetup.DESCRIPTION = new v4_1.StringField('Description', SalesOpportunityInterestsSetup, 'Edm.String');
    /**
     * Static representation of the [[sort]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunityInterestsSetup.SORT = new v4_1.NumberField('Sort', SalesOpportunityInterestsSetup, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunityInterestsSetup.SALES_OPPORTUNITIES = new v4_1.OneToManyLink('SalesOpportunities', SalesOpportunityInterestsSetup, SalesOpportunities_1.SalesOpportunities);
    /**
     * All fields of the SalesOpportunityInterestsSetup entity.
     */
    SalesOpportunityInterestsSetup._allFields = [
        SalesOpportunityInterestsSetup.SEQUENCE_NO,
        SalesOpportunityInterestsSetup.DESCRIPTION,
        SalesOpportunityInterestsSetup.SORT,
        SalesOpportunityInterestsSetup.SALES_OPPORTUNITIES
    ];
    /**
     * All fields selector.
     */
    SalesOpportunityInterestsSetup.ALL_FIELDS = new v4_1.AllFields('*', SalesOpportunityInterestsSetup);
    /**
     * All key fields of the SalesOpportunityInterestsSetup entity.
     */
    SalesOpportunityInterestsSetup._keyFields = [SalesOpportunityInterestsSetup.SEQUENCE_NO];
    /**
     * Mapping of all key field names to the respective static field property SalesOpportunityInterestsSetup.
     */
    SalesOpportunityInterestsSetup._keys = SalesOpportunityInterestsSetup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesOpportunityInterestsSetup = exports.SalesOpportunityInterestsSetup || (exports.SalesOpportunityInterestsSetup = {}));
exports.SalesOpportunityInterestsSetup = SalesOpportunityInterestsSetup;
//# sourceMappingURL=SalesOpportunityInterestsSetup.js.map