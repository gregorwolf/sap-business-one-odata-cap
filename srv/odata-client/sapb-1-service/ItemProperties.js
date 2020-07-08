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
exports.ItemProperties = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ItemPropertiesRequestBuilder_1 = require("./ItemPropertiesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "ItemProperties" of service "SAPB1".
 */
var ItemProperties = /** @class */ (function (_super) {
    __extends(ItemProperties, _super);
    function ItemProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ItemProperties`.
     * @returns A builder that constructs instances of entity type `ItemProperties`.
     */
    ItemProperties.builder = function () {
        return v4_1.Entity.entityBuilder(ItemProperties);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ItemProperties` entity type.
     * @returns A `ItemProperties` request builder.
     */
    ItemProperties.requestBuilder = function () {
        return new ItemPropertiesRequestBuilder_1.ItemPropertiesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ItemProperties`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ItemProperties`.
     */
    ItemProperties.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, ItemProperties);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ItemProperties.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ItemProperties.
     */
    ItemProperties._entityName = 'ItemProperties';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ItemProperties.
     */
    ItemProperties._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    ItemProperties._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ItemProperties;
}(v4_1.Entity));
exports.ItemProperties = ItemProperties;
(function (ItemProperties) {
    /**
     * Static representation of the [[number]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemProperties.NUMBER = new v4_1.NumberField('Number', ItemProperties, 'Edm.Int32');
    /**
     * Static representation of the [[propertyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemProperties.PROPERTY_NAME = new v4_1.StringField('PropertyName', ItemProperties, 'Edm.String');
    /**
     * All fields of the ItemProperties entity.
     */
    ItemProperties._allFields = [
        ItemProperties.NUMBER,
        ItemProperties.PROPERTY_NAME
    ];
    /**
     * All fields selector.
     */
    ItemProperties.ALL_FIELDS = new v4_1.AllFields('*', ItemProperties);
    /**
     * All key fields of the ItemProperties entity.
     */
    ItemProperties._keyFields = [ItemProperties.NUMBER];
    /**
     * Mapping of all key field names to the respective static field property ItemProperties.
     */
    ItemProperties._keys = ItemProperties._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ItemProperties = exports.ItemProperties || (exports.ItemProperties = {}));
exports.ItemProperties = ItemProperties;
//# sourceMappingURL=ItemProperties.js.map