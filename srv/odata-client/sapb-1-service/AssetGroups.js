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
exports.AssetGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AssetGroupsRequestBuilder_1 = require("./AssetGroupsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "AssetGroups" of service "SAPB1".
 */
var AssetGroups = /** @class */ (function (_super) {
    __extends(AssetGroups, _super);
    function AssetGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AssetGroups`.
     * @returns A builder that constructs instances of entity type `AssetGroups`.
     */
    AssetGroups.builder = function () {
        return v4_1.Entity.entityBuilder(AssetGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AssetGroups` entity type.
     * @returns A `AssetGroups` request builder.
     */
    AssetGroups.requestBuilder = function () {
        return new AssetGroupsRequestBuilder_1.AssetGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AssetGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AssetGroups`.
     */
    AssetGroups.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, AssetGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AssetGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AssetGroups.
     */
    AssetGroups._entityName = 'AssetGroups';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AssetGroups.
     */
    AssetGroups._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    AssetGroups._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AssetGroups;
}(v4_1.Entity));
exports.AssetGroups = AssetGroups;
var Items_1 = require("./Items");
(function (AssetGroups) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetGroups.CODE = new v4_1.StringField('Code', AssetGroups, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetGroups.DESCRIPTION = new v4_1.StringField('Description', AssetGroups, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AssetGroups.ITEMS = new v4_1.OneToManyLink('Items', AssetGroups, Items_1.Items);
    /**
     * All fields of the AssetGroups entity.
     */
    AssetGroups._allFields = [
        AssetGroups.CODE,
        AssetGroups.DESCRIPTION,
        AssetGroups.ITEMS
    ];
    /**
     * All fields selector.
     */
    AssetGroups.ALL_FIELDS = new v4_1.AllFields('*', AssetGroups);
    /**
     * All key fields of the AssetGroups entity.
     */
    AssetGroups._keyFields = [AssetGroups.CODE];
    /**
     * Mapping of all key field names to the respective static field property AssetGroups.
     */
    AssetGroups._keys = AssetGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AssetGroups = exports.AssetGroups || (exports.AssetGroups = {}));
exports.AssetGroups = AssetGroups;
//# sourceMappingURL=AssetGroups.js.map