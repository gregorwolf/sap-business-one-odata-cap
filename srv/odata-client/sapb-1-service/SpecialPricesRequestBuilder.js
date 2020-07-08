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
exports.SpecialPricesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var SpecialPrices_1 = require("./SpecialPrices");
/**
 * Request builder class for operations supported on the [[SpecialPrices]] entity.
 */
var SpecialPricesRequestBuilder = /** @class */ (function (_super) {
    __extends(SpecialPricesRequestBuilder, _super);
    function SpecialPricesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SpecialPrices` entity based on its keys.
     * @param itemCode Key property. See [[SpecialPrices.itemCode]].
     * @param cardCode Key property. See [[SpecialPrices.cardCode]].
     * @returns A request builder for creating requests to retrieve one `SpecialPrices` entity based on its keys.
     */
    SpecialPricesRequestBuilder.prototype.getByKey = function (itemCode, cardCode) {
        return new v4_1.GetByKeyRequestBuilder(SpecialPrices_1.SpecialPrices, {
            ItemCode: itemCode,
            CardCode: cardCode
        });
    };
    /**
     * Returns a request builder for querying all `SpecialPrices` entities.
     * @returns A request builder for creating requests to retrieve all `SpecialPrices` entities.
     */
    SpecialPricesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(SpecialPrices_1.SpecialPrices);
    };
    /**
     * Returns a request builder for creating a `SpecialPrices` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SpecialPrices`.
     */
    SpecialPricesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(SpecialPrices_1.SpecialPrices, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SpecialPrices`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SpecialPrices`.
     */
    SpecialPricesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(SpecialPrices_1.SpecialPrices, entity);
    };
    SpecialPricesRequestBuilder.prototype.delete = function (itemCodeOrEntity, cardCode) {
        return new v4_1.DeleteRequestBuilder(SpecialPrices_1.SpecialPrices, itemCodeOrEntity instanceof SpecialPrices_1.SpecialPrices ? itemCodeOrEntity : {
            ItemCode: itemCodeOrEntity,
            CardCode: cardCode
        });
    };
    return SpecialPricesRequestBuilder;
}(v4_1.RequestBuilder));
exports.SpecialPricesRequestBuilder = SpecialPricesRequestBuilder;
//# sourceMappingURL=SpecialPricesRequestBuilder.js.map