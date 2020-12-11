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
exports.PriceListsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var PriceLists_1 = require("./PriceLists");
/**
 * Request builder class for operations supported on the [[PriceLists]] entity.
 */
var PriceListsRequestBuilder = /** @class */ (function (_super) {
    __extends(PriceListsRequestBuilder, _super);
    function PriceListsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PriceLists` entity based on its keys.
     * @param priceListNo Key property. See [[PriceLists.priceListNo]].
     * @returns A request builder for creating requests to retrieve one `PriceLists` entity based on its keys.
     */
    PriceListsRequestBuilder.prototype.getByKey = function (priceListNo) {
        return new core_1.GetByKeyRequestBuilderV4(PriceLists_1.PriceLists, { PriceListNo: priceListNo });
    };
    /**
     * Returns a request builder for querying all `PriceLists` entities.
     * @returns A request builder for creating requests to retrieve all `PriceLists` entities.
     */
    PriceListsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(PriceLists_1.PriceLists);
    };
    /**
     * Returns a request builder for creating a `PriceLists` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PriceLists`.
     */
    PriceListsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(PriceLists_1.PriceLists, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PriceLists`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PriceLists`.
     */
    PriceListsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(PriceLists_1.PriceLists, entity);
    };
    PriceListsRequestBuilder.prototype.delete = function (priceListNoOrEntity) {
        return new core_1.DeleteRequestBuilderV4(PriceLists_1.PriceLists, priceListNoOrEntity instanceof PriceLists_1.PriceLists ? priceListNoOrEntity : { PriceListNo: priceListNoOrEntity });
    };
    return PriceListsRequestBuilder;
}(core_1.RequestBuilder));
exports.PriceListsRequestBuilder = PriceListsRequestBuilder;
//# sourceMappingURL=PriceListsRequestBuilder.js.map