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
exports.BudgetScenariosRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var BudgetScenarios_1 = require("./BudgetScenarios");
/**
 * Request builder class for operations supported on the [[BudgetScenarios]] entity.
 */
var BudgetScenariosRequestBuilder = /** @class */ (function (_super) {
    __extends(BudgetScenariosRequestBuilder, _super);
    function BudgetScenariosRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BudgetScenarios` entity based on its keys.
     * @param numerator Key property. See [[BudgetScenarios.numerator]].
     * @returns A request builder for creating requests to retrieve one `BudgetScenarios` entity based on its keys.
     */
    BudgetScenariosRequestBuilder.prototype.getByKey = function (numerator) {
        return new v4_1.GetByKeyRequestBuilder(BudgetScenarios_1.BudgetScenarios, { Numerator: numerator });
    };
    /**
     * Returns a request builder for querying all `BudgetScenarios` entities.
     * @returns A request builder for creating requests to retrieve all `BudgetScenarios` entities.
     */
    BudgetScenariosRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(BudgetScenarios_1.BudgetScenarios);
    };
    /**
     * Returns a request builder for creating a `BudgetScenarios` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BudgetScenarios`.
     */
    BudgetScenariosRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(BudgetScenarios_1.BudgetScenarios, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BudgetScenarios`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BudgetScenarios`.
     */
    BudgetScenariosRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(BudgetScenarios_1.BudgetScenarios, entity);
    };
    BudgetScenariosRequestBuilder.prototype.delete = function (numeratorOrEntity) {
        return new v4_1.DeleteRequestBuilder(BudgetScenarios_1.BudgetScenarios, numeratorOrEntity instanceof BudgetScenarios_1.BudgetScenarios ? numeratorOrEntity : { Numerator: numeratorOrEntity });
    };
    return BudgetScenariosRequestBuilder;
}(v4_1.RequestBuilder));
exports.BudgetScenariosRequestBuilder = BudgetScenariosRequestBuilder;
//# sourceMappingURL=BudgetScenariosRequestBuilder.js.map