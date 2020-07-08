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
exports.Relationships = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var RelationshipsRequestBuilder_1 = require("./RelationshipsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "Relationships" of service "SAPB1".
 */
var Relationships = /** @class */ (function (_super) {
    __extends(Relationships, _super);
    function Relationships() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Relationships`.
     * @returns A builder that constructs instances of entity type `Relationships`.
     */
    Relationships.builder = function () {
        return v4_1.Entity.entityBuilder(Relationships);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Relationships` entity type.
     * @returns A `Relationships` request builder.
     */
    Relationships.requestBuilder = function () {
        return new RelationshipsRequestBuilder_1.RelationshipsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Relationships`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Relationships`.
     */
    Relationships.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Relationships);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Relationships.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Relationships.
     */
    Relationships._entityName = 'Relationships';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Relationships.
     */
    Relationships._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Relationships._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Relationships;
}(v4_1.Entity));
exports.Relationships = Relationships;
var PartnersSetups_1 = require("./PartnersSetups");
(function (Relationships) {
    /**
     * Static representation of the [[relationshipDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Relationships.RELATIONSHIP_DESCRIPTION = new v4_1.StringField('RelationshipDescription', Relationships, 'Edm.String');
    /**
     * Static representation of the [[relationshipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Relationships.RELATIONSHIP_CODE = new v4_1.NumberField('RelationshipCode', Relationships, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[partnersSetups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Relationships.PARTNERS_SETUPS = new v4_1.OneToManyLink('PartnersSetups', Relationships, PartnersSetups_1.PartnersSetups);
    /**
     * All fields of the Relationships entity.
     */
    Relationships._allFields = [
        Relationships.RELATIONSHIP_DESCRIPTION,
        Relationships.RELATIONSHIP_CODE,
        Relationships.PARTNERS_SETUPS
    ];
    /**
     * All fields selector.
     */
    Relationships.ALL_FIELDS = new v4_1.AllFields('*', Relationships);
    /**
     * All key fields of the Relationships entity.
     */
    Relationships._keyFields = [Relationships.RELATIONSHIP_CODE];
    /**
     * Mapping of all key field names to the respective static field property Relationships.
     */
    Relationships._keys = Relationships._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Relationships = exports.Relationships || (exports.Relationships = {}));
exports.Relationships = Relationships;
//# sourceMappingURL=Relationships.js.map