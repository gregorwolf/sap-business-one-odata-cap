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
exports.AssetClasses = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AssetClassesRequestBuilder_1 = require("./AssetClassesRequestBuilder");
var AssetClassLine_1 = require("./AssetClassLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AssetClasses" of service "SAPB1".
 */
var AssetClasses = /** @class */ (function (_super) {
    __extends(AssetClasses, _super);
    function AssetClasses() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `AssetClasses`.
     * @returns A builder that constructs instances of entity type `AssetClasses`.
     */
    AssetClasses.builder = function () {
        return core_1.EntityV4.entityBuilder(AssetClasses);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AssetClasses` entity type.
     * @returns A `AssetClasses` request builder.
     */
    AssetClasses.requestBuilder = function () {
        return new AssetClassesRequestBuilder_1.AssetClassesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetClasses`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AssetClasses`.
     */
    AssetClasses.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, AssetClasses);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AssetClasses.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AssetClasses.
     */
    AssetClasses._entityName = 'AssetClasses';
    /**
     * Default url path for the according service.
     */
    AssetClasses._defaultServicePath = '/b1s/v2/';
    return AssetClasses;
}(core_1.EntityV4));
exports.AssetClasses = AssetClasses;
var Items_1 = require("./Items");
var BusinessPlaces_1 = require("./BusinessPlaces");
var AttributeGroups_1 = require("./AttributeGroups");
(function (AssetClasses) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetClasses.CODE = new core_1.StringField('Code', AssetClasses, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetClasses.DESCRIPTION = new core_1.StringField('Description', AssetClasses, 'Edm.String');
    /**
     * Static representation of the [[assetType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetClasses.ASSET_TYPE = new core_1.EnumField('AssetType', AssetClasses);
    /**
     * Static representation of the [[valueLimitFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetClasses.VALUE_LIMIT_FROM = new core_1.NumberField('ValueLimitFrom', AssetClasses, 'Edm.Double');
    /**
     * Static representation of the [[valueLimitTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetClasses.VALUE_LIMIT_TO = new core_1.NumberField('ValueLimitTo', AssetClasses, 'Edm.Double');
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetClasses.BPLID = new core_1.NumberField('BPLID', AssetClasses, 'Edm.Int32');
    /**
     * Static representation of the [[attributeGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetClasses.ATTRIBUTE_GROUP = new core_1.NumberField('AttributeGroup', AssetClasses, 'Edm.Int32');
    /**
     * Static representation of the [[assetClassCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetClasses.ASSET_CLASS_COLLECTION = new core_1.CollectionField('AssetClassCollection', AssetClasses, AssetClassLine_1.AssetClassLine);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetClasses.ITEMS = new core_1.OneToManyLink('Items', AssetClasses, Items_1.Items);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetClasses.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', AssetClasses, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[attributeGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetClasses.ATTRIBUTE_GROUP_2 = new core_1.OneToOneLink('AttributeGroup2', AssetClasses, AttributeGroups_1.AttributeGroups);
    /**
     * All fields of the AssetClasses entity.
     */
    AssetClasses._allFields = [
        AssetClasses.CODE,
        AssetClasses.DESCRIPTION,
        AssetClasses.ASSET_TYPE,
        AssetClasses.VALUE_LIMIT_FROM,
        AssetClasses.VALUE_LIMIT_TO,
        AssetClasses.BPLID,
        AssetClasses.ATTRIBUTE_GROUP,
        AssetClasses.ASSET_CLASS_COLLECTION,
        AssetClasses.ITEMS,
        AssetClasses.BUSINESS_PLACE,
        AssetClasses.ATTRIBUTE_GROUP_2
    ];
    /**
     * All fields selector.
     */
    AssetClasses.ALL_FIELDS = new core_1.AllFields('*', AssetClasses);
    /**
     * All key fields of the AssetClasses entity.
     */
    AssetClasses._keyFields = [AssetClasses.CODE];
    /**
     * Mapping of all key field names to the respective static field property AssetClasses.
     */
    AssetClasses._keys = AssetClasses._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AssetClasses = exports.AssetClasses || (exports.AssetClasses = {}));
exports.AssetClasses = AssetClasses;
//# sourceMappingURL=AssetClasses.js.map