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
exports.CashDiscountsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var CashDiscounts_1 = require("./CashDiscounts");
/**
 * Request builder class for operations supported on the [[CashDiscounts]] entity.
 */
var CashDiscountsRequestBuilder = /** @class */ (function (_super) {
    __extends(CashDiscountsRequestBuilder, _super);
    function CashDiscountsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CashDiscounts` entity based on its keys.
     * @param code Key property. See [[CashDiscounts.code]].
     * @returns A request builder for creating requests to retrieve one `CashDiscounts` entity based on its keys.
     */
    CashDiscountsRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(CashDiscounts_1.CashDiscounts, { Code: code });
    };
    /**
     * Returns a request builder for querying all `CashDiscounts` entities.
     * @returns A request builder for creating requests to retrieve all `CashDiscounts` entities.
     */
    CashDiscountsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(CashDiscounts_1.CashDiscounts);
    };
    /**
     * Returns a request builder for creating a `CashDiscounts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CashDiscounts`.
     */
    CashDiscountsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(CashDiscounts_1.CashDiscounts, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CashDiscounts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CashDiscounts`.
     */
    CashDiscountsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(CashDiscounts_1.CashDiscounts, entity);
    };
    CashDiscountsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(CashDiscounts_1.CashDiscounts, codeOrEntity instanceof CashDiscounts_1.CashDiscounts ? codeOrEntity : { Code: codeOrEntity });
    };
    return CashDiscountsRequestBuilder;
}(v4_1.RequestBuilder));
exports.CashDiscountsRequestBuilder = CashDiscountsRequestBuilder;
//# sourceMappingURL=CashDiscountsRequestBuilder.js.map