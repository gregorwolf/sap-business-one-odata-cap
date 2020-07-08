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
exports.ExpenseTypesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ExpenseTypes_1 = require("./ExpenseTypes");
/**
 * Request builder class for operations supported on the [[ExpenseTypes]] entity.
 */
var ExpenseTypesRequestBuilder = /** @class */ (function (_super) {
    __extends(ExpenseTypesRequestBuilder, _super);
    function ExpenseTypesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ExpenseTypes` entity based on its keys.
     * @param expenseType Key property. See [[ExpenseTypes.expenseType]].
     * @returns A request builder for creating requests to retrieve one `ExpenseTypes` entity based on its keys.
     */
    ExpenseTypesRequestBuilder.prototype.getByKey = function (expenseType) {
        return new v4_1.GetByKeyRequestBuilder(ExpenseTypes_1.ExpenseTypes, { ExpenseType: expenseType });
    };
    /**
     * Returns a request builder for querying all `ExpenseTypes` entities.
     * @returns A request builder for creating requests to retrieve all `ExpenseTypes` entities.
     */
    ExpenseTypesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ExpenseTypes_1.ExpenseTypes);
    };
    /**
     * Returns a request builder for creating a `ExpenseTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExpenseTypes`.
     */
    ExpenseTypesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ExpenseTypes_1.ExpenseTypes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ExpenseTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ExpenseTypes`.
     */
    ExpenseTypesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ExpenseTypes_1.ExpenseTypes, entity);
    };
    ExpenseTypesRequestBuilder.prototype.delete = function (expenseTypeOrEntity) {
        return new v4_1.DeleteRequestBuilder(ExpenseTypes_1.ExpenseTypes, expenseTypeOrEntity instanceof ExpenseTypes_1.ExpenseTypes ? expenseTypeOrEntity : { ExpenseType: expenseTypeOrEntity });
    };
    return ExpenseTypesRequestBuilder;
}(v4_1.RequestBuilder));
exports.ExpenseTypesRequestBuilder = ExpenseTypesRequestBuilder;
//# sourceMappingURL=ExpenseTypesRequestBuilder.js.map