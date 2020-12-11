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
exports.AssetDepreciationGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AssetDepreciationGroupsRequestBuilder_1 = require("./AssetDepreciationGroupsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AssetDepreciationGroups" of service "SAPB1".
 */
var AssetDepreciationGroups = /** @class */ (function (_super) {
    __extends(AssetDepreciationGroups, _super);
    function AssetDepreciationGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `AssetDepreciationGroups`.
     * @returns A builder that constructs instances of entity type `AssetDepreciationGroups`.
     */
    AssetDepreciationGroups.builder = function () {
        return core_1.EntityV4.entityBuilder(AssetDepreciationGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AssetDepreciationGroups` entity type.
     * @returns A `AssetDepreciationGroups` request builder.
     */
    AssetDepreciationGroups.requestBuilder = function () {
        return new AssetDepreciationGroupsRequestBuilder_1.AssetDepreciationGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetDepreciationGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AssetDepreciationGroups`.
     */
    AssetDepreciationGroups.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, AssetDepreciationGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AssetDepreciationGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AssetDepreciationGroups.
     */
    AssetDepreciationGroups._entityName = 'AssetDepreciationGroups';
    /**
     * Default url path for the according service.
     */
    AssetDepreciationGroups._defaultServicePath = '/b1s/v2/';
    return AssetDepreciationGroups;
}(core_1.EntityV4));
exports.AssetDepreciationGroups = AssetDepreciationGroups;
var Items_1 = require("./Items");
(function (AssetDepreciationGroups) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetDepreciationGroups.CODE = new core_1.StringField('Code', AssetDepreciationGroups, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetDepreciationGroups.DESCRIPTION = new core_1.StringField('Description', AssetDepreciationGroups, 'Edm.String');
    /**
     * Static representation of the [[group]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetDepreciationGroups.GROUP = new core_1.StringField('Group', AssetDepreciationGroups, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetDepreciationGroups.ITEMS = new core_1.OneToManyLink('Items', AssetDepreciationGroups, Items_1.Items);
    /**
     * All fields of the AssetDepreciationGroups entity.
     */
    AssetDepreciationGroups._allFields = [
        AssetDepreciationGroups.CODE,
        AssetDepreciationGroups.DESCRIPTION,
        AssetDepreciationGroups.GROUP,
        AssetDepreciationGroups.ITEMS
    ];
    /**
     * All fields selector.
     */
    AssetDepreciationGroups.ALL_FIELDS = new core_1.AllFields('*', AssetDepreciationGroups);
    /**
     * All key fields of the AssetDepreciationGroups entity.
     */
    AssetDepreciationGroups._keyFields = [AssetDepreciationGroups.CODE];
    /**
     * Mapping of all key field names to the respective static field property AssetDepreciationGroups.
     */
    AssetDepreciationGroups._keys = AssetDepreciationGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AssetDepreciationGroups = exports.AssetDepreciationGroups || (exports.AssetDepreciationGroups = {}));
exports.AssetDepreciationGroups = AssetDepreciationGroups;
//# sourceMappingURL=AssetDepreciationGroups.js.map