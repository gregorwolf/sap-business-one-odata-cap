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
exports.BillOfExchangeTransactionsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var BillOfExchangeTransactions_1 = require("./BillOfExchangeTransactions");
/**
 * Request builder class for operations supported on the [[BillOfExchangeTransactions]] entity.
 */
var BillOfExchangeTransactionsRequestBuilder = /** @class */ (function (_super) {
    __extends(BillOfExchangeTransactionsRequestBuilder, _super);
    function BillOfExchangeTransactionsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BillOfExchangeTransactions` entity based on its keys.
     * @param boeTransactionkey Key property. See [[BillOfExchangeTransactions.boeTransactionkey]].
     * @returns A request builder for creating requests to retrieve one `BillOfExchangeTransactions` entity based on its keys.
     */
    BillOfExchangeTransactionsRequestBuilder.prototype.getByKey = function (boeTransactionkey) {
        return new v4_1.GetByKeyRequestBuilder(BillOfExchangeTransactions_1.BillOfExchangeTransactions, { BOETransactionkey: boeTransactionkey });
    };
    /**
     * Returns a request builder for querying all `BillOfExchangeTransactions` entities.
     * @returns A request builder for creating requests to retrieve all `BillOfExchangeTransactions` entities.
     */
    BillOfExchangeTransactionsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(BillOfExchangeTransactions_1.BillOfExchangeTransactions);
    };
    /**
     * Returns a request builder for creating a `BillOfExchangeTransactions` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BillOfExchangeTransactions`.
     */
    BillOfExchangeTransactionsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(BillOfExchangeTransactions_1.BillOfExchangeTransactions, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BillOfExchangeTransactions`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BillOfExchangeTransactions`.
     */
    BillOfExchangeTransactionsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(BillOfExchangeTransactions_1.BillOfExchangeTransactions, entity);
    };
    BillOfExchangeTransactionsRequestBuilder.prototype.delete = function (boeTransactionkeyOrEntity) {
        return new v4_1.DeleteRequestBuilder(BillOfExchangeTransactions_1.BillOfExchangeTransactions, boeTransactionkeyOrEntity instanceof BillOfExchangeTransactions_1.BillOfExchangeTransactions ? boeTransactionkeyOrEntity : { BOETransactionkey: boeTransactionkeyOrEntity });
    };
    return BillOfExchangeTransactionsRequestBuilder;
}(v4_1.RequestBuilder));
exports.BillOfExchangeTransactionsRequestBuilder = BillOfExchangeTransactionsRequestBuilder;
//# sourceMappingURL=BillOfExchangeTransactionsRequestBuilder.js.map