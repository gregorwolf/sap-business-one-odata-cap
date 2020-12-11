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
exports.ItemImages = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ItemImagesRequestBuilder_1 = require("./ItemImagesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "ItemImages" of service "SAPB1".
 */
var ItemImages = /** @class */ (function (_super) {
    __extends(ItemImages, _super);
    function ItemImages() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `ItemImages`.
     * @returns A builder that constructs instances of entity type `ItemImages`.
     */
    ItemImages.builder = function () {
        return core_1.EntityV4.entityBuilder(ItemImages);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ItemImages` entity type.
     * @returns A `ItemImages` request builder.
     */
    ItemImages.requestBuilder = function () {
        return new ItemImagesRequestBuilder_1.ItemImagesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ItemImages`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ItemImages`.
     */
    ItemImages.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, ItemImages);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ItemImages.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ItemImages.
     */
    ItemImages._entityName = 'ItemImages';
    /**
     * Default url path for the according service.
     */
    ItemImages._defaultServicePath = '/b1s/v2/';
    return ItemImages;
}(core_1.EntityV4));
exports.ItemImages = ItemImages;
(function (ItemImages) {
    /**
     * Static representation of the [[itemCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemImages.ITEM_CODE = new core_1.StringField('ItemCode', ItemImages, 'Edm.String');
    /**
     * Static representation of the [[picture]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ItemImages.PICTURE = new core_1.StringField('Picture', ItemImages, 'Edm.String');
    /**
     * All fields of the ItemImages entity.
     */
    ItemImages._allFields = [
        ItemImages.ITEM_CODE,
        ItemImages.PICTURE
    ];
    /**
     * All fields selector.
     */
    ItemImages.ALL_FIELDS = new core_1.AllFields('*', ItemImages);
    /**
     * All key fields of the ItemImages entity.
     */
    ItemImages._keyFields = [ItemImages.ITEM_CODE];
    /**
     * Mapping of all key field names to the respective static field property ItemImages.
     */
    ItemImages._keys = ItemImages._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ItemImages = exports.ItemImages || (exports.ItemImages = {}));
exports.ItemImages = ItemImages;
//# sourceMappingURL=ItemImages.js.map