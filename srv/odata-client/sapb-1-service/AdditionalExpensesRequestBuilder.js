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
exports.AdditionalExpensesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var AdditionalExpenses_1 = require("./AdditionalExpenses");
/**
 * Request builder class for operations supported on the [[AdditionalExpenses]] entity.
 */
var AdditionalExpensesRequestBuilder = /** @class */ (function (_super) {
    __extends(AdditionalExpensesRequestBuilder, _super);
    function AdditionalExpensesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AdditionalExpenses` entity based on its keys.
     * @param expensCode Key property. See [[AdditionalExpenses.expensCode]].
     * @returns A request builder for creating requests to retrieve one `AdditionalExpenses` entity based on its keys.
     */
    AdditionalExpensesRequestBuilder.prototype.getByKey = function (expensCode) {
        return new v4_1.GetByKeyRequestBuilder(AdditionalExpenses_1.AdditionalExpenses, { ExpensCode: expensCode });
    };
    /**
     * Returns a request builder for querying all `AdditionalExpenses` entities.
     * @returns A request builder for creating requests to retrieve all `AdditionalExpenses` entities.
     */
    AdditionalExpensesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(AdditionalExpenses_1.AdditionalExpenses);
    };
    /**
     * Returns a request builder for creating a `AdditionalExpenses` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AdditionalExpenses`.
     */
    AdditionalExpensesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(AdditionalExpenses_1.AdditionalExpenses, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AdditionalExpenses`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AdditionalExpenses`.
     */
    AdditionalExpensesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(AdditionalExpenses_1.AdditionalExpenses, entity);
    };
    AdditionalExpensesRequestBuilder.prototype.delete = function (expensCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(AdditionalExpenses_1.AdditionalExpenses, expensCodeOrEntity instanceof AdditionalExpenses_1.AdditionalExpenses ? expensCodeOrEntity : { ExpensCode: expensCodeOrEntity });
    };
    return AdditionalExpensesRequestBuilder;
}(v4_1.RequestBuilder));
exports.AdditionalExpensesRequestBuilder = AdditionalExpensesRequestBuilder;
//# sourceMappingURL=AdditionalExpensesRequestBuilder.js.map