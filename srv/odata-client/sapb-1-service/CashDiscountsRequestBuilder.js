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
exports.CashDiscountsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(CashDiscounts_1.CashDiscounts, { Code: code });
    };
    /**
     * Returns a request builder for querying all `CashDiscounts` entities.
     * @returns A request builder for creating requests to retrieve all `CashDiscounts` entities.
     */
    CashDiscountsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(CashDiscounts_1.CashDiscounts);
    };
    /**
     * Returns a request builder for creating a `CashDiscounts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CashDiscounts`.
     */
    CashDiscountsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(CashDiscounts_1.CashDiscounts, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CashDiscounts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CashDiscounts`.
     */
    CashDiscountsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(CashDiscounts_1.CashDiscounts, entity);
    };
    CashDiscountsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(CashDiscounts_1.CashDiscounts, codeOrEntity instanceof CashDiscounts_1.CashDiscounts ? codeOrEntity : { Code: codeOrEntity });
    };
    return CashDiscountsRequestBuilder;
}(core_1.RequestBuilder));
exports.CashDiscountsRequestBuilder = CashDiscountsRequestBuilder;
//# sourceMappingURL=CashDiscountsRequestBuilder.js.map