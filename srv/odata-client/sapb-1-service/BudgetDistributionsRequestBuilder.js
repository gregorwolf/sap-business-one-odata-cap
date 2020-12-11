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
exports.BudgetDistributionsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BudgetDistributions_1 = require("./BudgetDistributions");
/**
 * Request builder class for operations supported on the [[BudgetDistributions]] entity.
 */
var BudgetDistributionsRequestBuilder = /** @class */ (function (_super) {
    __extends(BudgetDistributionsRequestBuilder, _super);
    function BudgetDistributionsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BudgetDistributions` entity based on its keys.
     * @param divisionCode Key property. See [[BudgetDistributions.divisionCode]].
     * @returns A request builder for creating requests to retrieve one `BudgetDistributions` entity based on its keys.
     */
    BudgetDistributionsRequestBuilder.prototype.getByKey = function (divisionCode) {
        return new core_1.GetByKeyRequestBuilderV4(BudgetDistributions_1.BudgetDistributions, { DivisionCode: divisionCode });
    };
    /**
     * Returns a request builder for querying all `BudgetDistributions` entities.
     * @returns A request builder for creating requests to retrieve all `BudgetDistributions` entities.
     */
    BudgetDistributionsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BudgetDistributions_1.BudgetDistributions);
    };
    /**
     * Returns a request builder for creating a `BudgetDistributions` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BudgetDistributions`.
     */
    BudgetDistributionsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BudgetDistributions_1.BudgetDistributions, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BudgetDistributions`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BudgetDistributions`.
     */
    BudgetDistributionsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BudgetDistributions_1.BudgetDistributions, entity);
    };
    BudgetDistributionsRequestBuilder.prototype.delete = function (divisionCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BudgetDistributions_1.BudgetDistributions, divisionCodeOrEntity instanceof BudgetDistributions_1.BudgetDistributions ? divisionCodeOrEntity : { DivisionCode: divisionCodeOrEntity });
    };
    return BudgetDistributionsRequestBuilder;
}(core_1.RequestBuilder));
exports.BudgetDistributionsRequestBuilder = BudgetDistributionsRequestBuilder;
//# sourceMappingURL=BudgetDistributionsRequestBuilder.js.map