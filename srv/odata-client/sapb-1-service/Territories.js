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
exports.Territories = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TerritoriesRequestBuilder_1 = require("./TerritoriesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Territories" of service "SAPB1".
 */
var Territories = /** @class */ (function (_super) {
    __extends(Territories, _super);
    function Territories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Territories`.
     * @returns A builder that constructs instances of entity type `Territories`.
     */
    Territories.builder = function () {
        return core_1.EntityV4.entityBuilder(Territories);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Territories` entity type.
     * @returns A `Territories` request builder.
     */
    Territories.requestBuilder = function () {
        return new TerritoriesRequestBuilder_1.TerritoriesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Territories`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Territories`.
     */
    Territories.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Territories);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Territories.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Territories.
     */
    Territories._entityName = 'Territories';
    /**
     * Default url path for the according service.
     */
    Territories._defaultServicePath = '/b1s/v2/';
    return Territories;
}(core_1.EntityV4));
exports.Territories = Territories;
var SalesOpportunities_1 = require("./SalesOpportunities");
var BusinessPartners_1 = require("./BusinessPartners");
var CustomerEquipmentCards_1 = require("./CustomerEquipmentCards");
var ProjectManagements_1 = require("./ProjectManagements");
(function (Territories) {
    /**
     * Static representation of the [[territoryId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Territories.TERRITORY_ID = new core_1.NumberField('TerritoryID', Territories, 'Edm.Int32');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Territories.DESCRIPTION = new core_1.StringField('Description', Territories, 'Edm.String');
    /**
     * Static representation of the [[locationIndex]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Territories.LOCATION_INDEX = new core_1.NumberField('LocationIndex', Territories, 'Edm.Int32');
    /**
     * Static representation of the [[inactive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Territories.INACTIVE = new core_1.EnumField('Inactive', Territories);
    /**
     * Static representation of the [[parent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Territories.PARENT = new core_1.NumberField('Parent', Territories, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Territories.SALES_OPPORTUNITIES = new core_1.OneToManyLink('SalesOpportunities', Territories, SalesOpportunities_1.SalesOpportunities);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Territories.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', Territories, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Territories.CUSTOMER_EQUIPMENT_CARDS = new core_1.OneToManyLink('CustomerEquipmentCards', Territories, CustomerEquipmentCards_1.CustomerEquipmentCards);
    /**
     * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Territories.PROJECT_MANAGEMENTS = new core_1.OneToManyLink('ProjectManagements', Territories, ProjectManagements_1.ProjectManagements);
    /**
     * All fields of the Territories entity.
     */
    Territories._allFields = [
        Territories.TERRITORY_ID,
        Territories.DESCRIPTION,
        Territories.LOCATION_INDEX,
        Territories.INACTIVE,
        Territories.PARENT,
        Territories.SALES_OPPORTUNITIES,
        Territories.BUSINESS_PARTNERS,
        Territories.CUSTOMER_EQUIPMENT_CARDS,
        Territories.PROJECT_MANAGEMENTS
    ];
    /**
     * All fields selector.
     */
    Territories.ALL_FIELDS = new core_1.AllFields('*', Territories);
    /**
     * All key fields of the Territories entity.
     */
    Territories._keyFields = [Territories.TERRITORY_ID];
    /**
     * Mapping of all key field names to the respective static field property Territories.
     */
    Territories._keys = Territories._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Territories = exports.Territories || (exports.Territories = {}));
exports.Territories = Territories;
//# sourceMappingURL=Territories.js.map