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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemPropertiesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ItemProperties_1 = require("./ItemProperties");
/**
 * Request builder class for operations supported on the [[ItemProperties]] entity.
 */
var ItemPropertiesRequestBuilder = /** @class */ (function (_super) {
    __extends(ItemPropertiesRequestBuilder, _super);
    function ItemPropertiesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ItemProperties` entity based on its keys.
     * @param number Key property. See [[ItemProperties.number]].
     * @returns A request builder for creating requests to retrieve one `ItemProperties` entity based on its keys.
     */
    ItemPropertiesRequestBuilder.prototype.getByKey = function (number) {
        return new v4_1.GetByKeyRequestBuilder(ItemProperties_1.ItemProperties, { Number: number });
    };
    /**
     * Returns a request builder for querying all `ItemProperties` entities.
     * @returns A request builder for creating requests to retrieve all `ItemProperties` entities.
     */
    ItemPropertiesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ItemProperties_1.ItemProperties);
    };
    /**
     * Returns a request builder for creating a `ItemProperties` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ItemProperties`.
     */
    ItemPropertiesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ItemProperties_1.ItemProperties, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ItemProperties`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ItemProperties`.
     */
    ItemPropertiesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ItemProperties_1.ItemProperties, entity);
    };
    ItemPropertiesRequestBuilder.prototype.delete = function (numberOrEntity) {
        return new v4_1.DeleteRequestBuilder(ItemProperties_1.ItemProperties, numberOrEntity instanceof ItemProperties_1.ItemProperties ? numberOrEntity : { Number: numberOrEntity });
    };
    return ItemPropertiesRequestBuilder;
}(v4_1.RequestBuilder));
exports.ItemPropertiesRequestBuilder = ItemPropertiesRequestBuilder;
//# sourceMappingURL=ItemPropertiesRequestBuilder.js.map