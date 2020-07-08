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
exports.ItemGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ItemGroups_1 = require("./ItemGroups");
/**
 * Request builder class for operations supported on the [[ItemGroups]] entity.
 */
var ItemGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(ItemGroupsRequestBuilder, _super);
    function ItemGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ItemGroups` entity based on its keys.
     * @param number Key property. See [[ItemGroups.number]].
     * @returns A request builder for creating requests to retrieve one `ItemGroups` entity based on its keys.
     */
    ItemGroupsRequestBuilder.prototype.getByKey = function (number) {
        return new v4_1.GetByKeyRequestBuilder(ItemGroups_1.ItemGroups, { Number: number });
    };
    /**
     * Returns a request builder for querying all `ItemGroups` entities.
     * @returns A request builder for creating requests to retrieve all `ItemGroups` entities.
     */
    ItemGroupsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ItemGroups_1.ItemGroups);
    };
    /**
     * Returns a request builder for creating a `ItemGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ItemGroups`.
     */
    ItemGroupsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ItemGroups_1.ItemGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ItemGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ItemGroups`.
     */
    ItemGroupsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ItemGroups_1.ItemGroups, entity);
    };
    ItemGroupsRequestBuilder.prototype.delete = function (numberOrEntity) {
        return new v4_1.DeleteRequestBuilder(ItemGroups_1.ItemGroups, numberOrEntity instanceof ItemGroups_1.ItemGroups ? numberOrEntity : { Number: numberOrEntity });
    };
    return ItemGroupsRequestBuilder;
}(v4_1.RequestBuilder));
exports.ItemGroupsRequestBuilder = ItemGroupsRequestBuilder;
//# sourceMappingURL=ItemGroupsRequestBuilder.js.map