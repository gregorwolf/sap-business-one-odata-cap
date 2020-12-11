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
exports.ItemsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Items_1 = require("./Items");
/**
 * Request builder class for operations supported on the [[Items]] entity.
 */
var ItemsRequestBuilder = /** @class */ (function (_super) {
    __extends(ItemsRequestBuilder, _super);
    function ItemsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Items` entity based on its keys.
     * @param itemCode Key property. See [[Items.itemCode]].
     * @returns A request builder for creating requests to retrieve one `Items` entity based on its keys.
     */
    ItemsRequestBuilder.prototype.getByKey = function (itemCode) {
        return new core_1.GetByKeyRequestBuilderV4(Items_1.Items, { ItemCode: itemCode });
    };
    /**
     * Returns a request builder for querying all `Items` entities.
     * @returns A request builder for creating requests to retrieve all `Items` entities.
     */
    ItemsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Items_1.Items);
    };
    /**
     * Returns a request builder for creating a `Items` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Items`.
     */
    ItemsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Items_1.Items, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Items`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Items`.
     */
    ItemsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Items_1.Items, entity);
    };
    ItemsRequestBuilder.prototype.delete = function (itemCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Items_1.Items, itemCodeOrEntity instanceof Items_1.Items ? itemCodeOrEntity : { ItemCode: itemCodeOrEntity });
    };
    return ItemsRequestBuilder;
}(core_1.RequestBuilder));
exports.ItemsRequestBuilder = ItemsRequestBuilder;
//# sourceMappingURL=ItemsRequestBuilder.js.map