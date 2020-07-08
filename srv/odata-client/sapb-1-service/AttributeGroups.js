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
exports.AttributeGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AttributeGroupsRequestBuilder_1 = require("./AttributeGroupsRequestBuilder");
var AttributeGroupLine_1 = require("./AttributeGroupLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "AttributeGroups" of service "SAPB1".
 */
var AttributeGroups = /** @class */ (function (_super) {
    __extends(AttributeGroups, _super);
    function AttributeGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AttributeGroups`.
     * @returns A builder that constructs instances of entity type `AttributeGroups`.
     */
    AttributeGroups.builder = function () {
        return v4_1.Entity.entityBuilder(AttributeGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AttributeGroups` entity type.
     * @returns A `AttributeGroups` request builder.
     */
    AttributeGroups.requestBuilder = function () {
        return new AttributeGroupsRequestBuilder_1.AttributeGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AttributeGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AttributeGroups`.
     */
    AttributeGroups.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, AttributeGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AttributeGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AttributeGroups.
     */
    AttributeGroups._entityName = 'AttributeGroups';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AttributeGroups.
     */
    AttributeGroups._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    AttributeGroups._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AttributeGroups;
}(v4_1.Entity));
exports.AttributeGroups = AttributeGroups;
var AssetClasses_1 = require("./AssetClasses");
(function (AttributeGroups) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AttributeGroups.CODE = new v4_1.NumberField('Code', AttributeGroups, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AttributeGroups.NAME = new v4_1.StringField('Name', AttributeGroups, 'Edm.String');
    /**
     * Static representation of the [[attributeGroupCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AttributeGroups.ATTRIBUTE_GROUP_COLLECTION = new v4_1.CollectionField('AttributeGroupCollection', AttributeGroups, new AttributeGroupLine_1.AttributeGroupLineField('', AttributeGroups));
    /**
     * Static representation of the one-to-many navigation property [[assetClasses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AttributeGroups.ASSET_CLASSES = new v4_1.OneToManyLink('AssetClasses', AttributeGroups, AssetClasses_1.AssetClasses);
    /**
     * All fields of the AttributeGroups entity.
     */
    AttributeGroups._allFields = [
        AttributeGroups.CODE,
        AttributeGroups.NAME,
        AttributeGroups.ATTRIBUTE_GROUP_COLLECTION,
        AttributeGroups.ASSET_CLASSES
    ];
    /**
     * All fields selector.
     */
    AttributeGroups.ALL_FIELDS = new v4_1.AllFields('*', AttributeGroups);
    /**
     * All key fields of the AttributeGroups entity.
     */
    AttributeGroups._keyFields = [AttributeGroups.CODE];
    /**
     * Mapping of all key field names to the respective static field property AttributeGroups.
     */
    AttributeGroups._keys = AttributeGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AttributeGroups = exports.AttributeGroups || (exports.AttributeGroups = {}));
exports.AttributeGroups = AttributeGroups;
//# sourceMappingURL=AttributeGroups.js.map