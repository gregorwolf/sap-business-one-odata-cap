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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemImagesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ItemImages_1 = require("./ItemImages");
/**
 * Request builder class for operations supported on the [[ItemImages]] entity.
 */
var ItemImagesRequestBuilder = /** @class */ (function (_super) {
    __extends(ItemImagesRequestBuilder, _super);
    function ItemImagesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ItemImages` entity based on its keys.
     * @param itemCode Key property. See [[ItemImages.itemCode]].
     * @returns A request builder for creating requests to retrieve one `ItemImages` entity based on its keys.
     */
    ItemImagesRequestBuilder.prototype.getByKey = function (itemCode) {
        return new core_1.GetByKeyRequestBuilderV4(ItemImages_1.ItemImages, { ItemCode: itemCode });
    };
    /**
     * Returns a request builder for querying all `ItemImages` entities.
     * @returns A request builder for creating requests to retrieve all `ItemImages` entities.
     */
    ItemImagesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ItemImages_1.ItemImages);
    };
    /**
     * Returns a request builder for creating a `ItemImages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ItemImages`.
     */
    ItemImagesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ItemImages_1.ItemImages, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ItemImages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ItemImages`.
     */
    ItemImagesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ItemImages_1.ItemImages, entity);
    };
    ItemImagesRequestBuilder.prototype.delete = function (itemCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ItemImages_1.ItemImages, itemCodeOrEntity instanceof ItemImages_1.ItemImages ? itemCodeOrEntity : { ItemCode: itemCodeOrEntity });
    };
    return ItemImagesRequestBuilder;
}(core_1.RequestBuilder));
exports.ItemImagesRequestBuilder = ItemImagesRequestBuilder;
//# sourceMappingURL=ItemImagesRequestBuilder.js.map