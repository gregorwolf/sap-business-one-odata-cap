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
exports.PartnersSetups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PartnersSetupsRequestBuilder_1 = require("./PartnersSetupsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "PartnersSetups" of service "SAPB1".
 */
var PartnersSetups = /** @class */ (function (_super) {
    __extends(PartnersSetups, _super);
    function PartnersSetups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PartnersSetups`.
     * @returns A builder that constructs instances of entity type `PartnersSetups`.
     */
    PartnersSetups.builder = function () {
        return v4_1.Entity.entityBuilder(PartnersSetups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PartnersSetups` entity type.
     * @returns A `PartnersSetups` request builder.
     */
    PartnersSetups.requestBuilder = function () {
        return new PartnersSetupsRequestBuilder_1.PartnersSetupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PartnersSetups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PartnersSetups`.
     */
    PartnersSetups.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, PartnersSetups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PartnersSetups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PartnersSetups.
     */
    PartnersSetups._entityName = 'PartnersSetups';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PartnersSetups.
     */
    PartnersSetups._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    PartnersSetups._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PartnersSetups;
}(v4_1.Entity));
exports.PartnersSetups = PartnersSetups;
var Relationships_1 = require("./Relationships");
var BusinessPartners_1 = require("./BusinessPartners");
(function (PartnersSetups) {
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PartnersSetups.NAME = new v4_1.StringField('Name', PartnersSetups, 'Edm.String');
    /**
     * Static representation of the [[defaultRelationship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PartnersSetups.DEFAULT_RELATIONSHIP = new v4_1.NumberField('DefaultRelationship', PartnersSetups, 'Edm.Int32');
    /**
     * Static representation of the [[relatedBp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PartnersSetups.RELATED_BP = new v4_1.StringField('RelatedBP', PartnersSetups, 'Edm.String');
    /**
     * Static representation of the [[details]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PartnersSetups.DETAILS = new v4_1.StringField('Details', PartnersSetups, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[relationship]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PartnersSetups.RELATIONSHIP = new v4_1.OneToOneLink('Relationship', PartnersSetups, Relationships_1.Relationships);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PartnersSetups.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', PartnersSetups, BusinessPartners_1.BusinessPartners);
    /**
     * All fields of the PartnersSetups entity.
     */
    PartnersSetups._allFields = [
        PartnersSetups.NAME,
        PartnersSetups.DEFAULT_RELATIONSHIP,
        PartnersSetups.RELATED_BP,
        PartnersSetups.DETAILS,
        PartnersSetups.RELATIONSHIP,
        PartnersSetups.BUSINESS_PARTNER
    ];
    /**
     * All fields selector.
     */
    PartnersSetups.ALL_FIELDS = new v4_1.AllFields('*', PartnersSetups);
    /**
     * All key fields of the PartnersSetups entity.
     */
    PartnersSetups._keyFields = [PartnersSetups.NAME];
    /**
     * Mapping of all key field names to the respective static field property PartnersSetups.
     */
    PartnersSetups._keys = PartnersSetups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PartnersSetups = exports.PartnersSetups || (exports.PartnersSetups = {}));
exports.PartnersSetups = PartnersSetups;
//# sourceMappingURL=PartnersSetups.js.map