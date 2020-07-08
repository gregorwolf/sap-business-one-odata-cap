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
exports.BudgetsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Budgets_1 = require("./Budgets");
/**
 * Request builder class for operations supported on the [[Budgets]] entity.
 */
var BudgetsRequestBuilder = /** @class */ (function (_super) {
    __extends(BudgetsRequestBuilder, _super);
    function BudgetsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Budgets` entity based on its keys.
     * @param numerator Key property. See [[Budgets.numerator]].
     * @returns A request builder for creating requests to retrieve one `Budgets` entity based on its keys.
     */
    BudgetsRequestBuilder.prototype.getByKey = function (numerator) {
        return new v4_1.GetByKeyRequestBuilder(Budgets_1.Budgets, { Numerator: numerator });
    };
    /**
     * Returns a request builder for querying all `Budgets` entities.
     * @returns A request builder for creating requests to retrieve all `Budgets` entities.
     */
    BudgetsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Budgets_1.Budgets);
    };
    /**
     * Returns a request builder for creating a `Budgets` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Budgets`.
     */
    BudgetsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Budgets_1.Budgets, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Budgets`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Budgets`.
     */
    BudgetsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Budgets_1.Budgets, entity);
    };
    BudgetsRequestBuilder.prototype.delete = function (numeratorOrEntity) {
        return new v4_1.DeleteRequestBuilder(Budgets_1.Budgets, numeratorOrEntity instanceof Budgets_1.Budgets ? numeratorOrEntity : { Numerator: numeratorOrEntity });
    };
    return BudgetsRequestBuilder;
}(v4_1.RequestBuilder));
exports.BudgetsRequestBuilder = BudgetsRequestBuilder;
//# sourceMappingURL=BudgetsRequestBuilder.js.map