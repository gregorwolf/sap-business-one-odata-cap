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
exports.MaterialGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var MaterialGroupsRequestBuilder_1 = require("./MaterialGroupsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "MaterialGroups" of service "SAPB1".
 */
var MaterialGroups = /** @class */ (function (_super) {
    __extends(MaterialGroups, _super);
    function MaterialGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `MaterialGroups`.
     * @returns A builder that constructs instances of entity type `MaterialGroups`.
     */
    MaterialGroups.builder = function () {
        return core_1.EntityV4.entityBuilder(MaterialGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `MaterialGroups` entity type.
     * @returns A `MaterialGroups` request builder.
     */
    MaterialGroups.requestBuilder = function () {
        return new MaterialGroupsRequestBuilder_1.MaterialGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MaterialGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MaterialGroups`.
     */
    MaterialGroups.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, MaterialGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    MaterialGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for MaterialGroups.
     */
    MaterialGroups._entityName = 'MaterialGroups';
    /**
     * Default url path for the according service.
     */
    MaterialGroups._defaultServicePath = '/b1s/v2/';
    return MaterialGroups;
}(core_1.EntityV4));
exports.MaterialGroups = MaterialGroups;
var Items_1 = require("./Items");
(function (MaterialGroups) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialGroups.ABS_ENTRY = new core_1.NumberField('AbsEntry', MaterialGroups, 'Edm.Int32');
    /**
     * Static representation of the [[materialGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialGroups.MATERIAL_GROUP_CODE = new core_1.StringField('MaterialGroupCode', MaterialGroups, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialGroups.DESCRIPTION = new core_1.StringField('Description', MaterialGroups, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialGroups.ITEMS = new core_1.OneToManyLink('Items', MaterialGroups, Items_1.Items);
    /**
     * All fields of the MaterialGroups entity.
     */
    MaterialGroups._allFields = [
        MaterialGroups.ABS_ENTRY,
        MaterialGroups.MATERIAL_GROUP_CODE,
        MaterialGroups.DESCRIPTION,
        MaterialGroups.ITEMS
    ];
    /**
     * All fields selector.
     */
    MaterialGroups.ALL_FIELDS = new core_1.AllFields('*', MaterialGroups);
    /**
     * All key fields of the MaterialGroups entity.
     */
    MaterialGroups._keyFields = [MaterialGroups.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property MaterialGroups.
     */
    MaterialGroups._keys = MaterialGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(MaterialGroups = exports.MaterialGroups || (exports.MaterialGroups = {}));
exports.MaterialGroups = MaterialGroups;
//# sourceMappingURL=MaterialGroups.js.map