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
exports.InventoryOpeningBalancesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var InventoryOpeningBalances_1 = require("./InventoryOpeningBalances");
/**
 * Request builder class for operations supported on the [[InventoryOpeningBalances]] entity.
 */
var InventoryOpeningBalancesRequestBuilder = /** @class */ (function (_super) {
    __extends(InventoryOpeningBalancesRequestBuilder, _super);
    function InventoryOpeningBalancesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `InventoryOpeningBalances` entity based on its keys.
     * @param documentEntry Key property. See [[InventoryOpeningBalances.documentEntry]].
     * @returns A request builder for creating requests to retrieve one `InventoryOpeningBalances` entity based on its keys.
     */
    InventoryOpeningBalancesRequestBuilder.prototype.getByKey = function (documentEntry) {
        return new v4_1.GetByKeyRequestBuilder(InventoryOpeningBalances_1.InventoryOpeningBalances, { DocumentEntry: documentEntry });
    };
    /**
     * Returns a request builder for querying all `InventoryOpeningBalances` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryOpeningBalances` entities.
     */
    InventoryOpeningBalancesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(InventoryOpeningBalances_1.InventoryOpeningBalances);
    };
    /**
     * Returns a request builder for creating a `InventoryOpeningBalances` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryOpeningBalances`.
     */
    InventoryOpeningBalancesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(InventoryOpeningBalances_1.InventoryOpeningBalances, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InventoryOpeningBalances`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryOpeningBalances`.
     */
    InventoryOpeningBalancesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(InventoryOpeningBalances_1.InventoryOpeningBalances, entity);
    };
    InventoryOpeningBalancesRequestBuilder.prototype.delete = function (documentEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(InventoryOpeningBalances_1.InventoryOpeningBalances, documentEntryOrEntity instanceof InventoryOpeningBalances_1.InventoryOpeningBalances ? documentEntryOrEntity : { DocumentEntry: documentEntryOrEntity });
    };
    return InventoryOpeningBalancesRequestBuilder;
}(v4_1.RequestBuilder));
exports.InventoryOpeningBalancesRequestBuilder = InventoryOpeningBalancesRequestBuilder;
//# sourceMappingURL=InventoryOpeningBalancesRequestBuilder.js.map