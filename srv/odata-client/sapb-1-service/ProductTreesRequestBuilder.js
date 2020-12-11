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
exports.ProductTreesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ProductTrees_1 = require("./ProductTrees");
/**
 * Request builder class for operations supported on the [[ProductTrees]] entity.
 */
var ProductTreesRequestBuilder = /** @class */ (function (_super) {
    __extends(ProductTreesRequestBuilder, _super);
    function ProductTreesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ProductTrees` entity based on its keys.
     * @param treeCode Key property. See [[ProductTrees.treeCode]].
     * @returns A request builder for creating requests to retrieve one `ProductTrees` entity based on its keys.
     */
    ProductTreesRequestBuilder.prototype.getByKey = function (treeCode) {
        return new core_1.GetByKeyRequestBuilderV4(ProductTrees_1.ProductTrees, { TreeCode: treeCode });
    };
    /**
     * Returns a request builder for querying all `ProductTrees` entities.
     * @returns A request builder for creating requests to retrieve all `ProductTrees` entities.
     */
    ProductTreesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ProductTrees_1.ProductTrees);
    };
    /**
     * Returns a request builder for creating a `ProductTrees` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductTrees`.
     */
    ProductTreesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ProductTrees_1.ProductTrees, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ProductTrees`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductTrees`.
     */
    ProductTreesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ProductTrees_1.ProductTrees, entity);
    };
    ProductTreesRequestBuilder.prototype.delete = function (treeCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ProductTrees_1.ProductTrees, treeCodeOrEntity instanceof ProductTrees_1.ProductTrees ? treeCodeOrEntity : { TreeCode: treeCodeOrEntity });
    };
    return ProductTreesRequestBuilder;
}(core_1.RequestBuilder));
exports.ProductTreesRequestBuilder = ProductTreesRequestBuilder;
//# sourceMappingURL=ProductTreesRequestBuilder.js.map