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
exports.BankStatementsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var BankStatements_1 = require("./BankStatements");
/**
 * Request builder class for operations supported on the [[BankStatements]] entity.
 */
var BankStatementsRequestBuilder = /** @class */ (function (_super) {
    __extends(BankStatementsRequestBuilder, _super);
    function BankStatementsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BankStatements` entity based on its keys.
     * @param internalNumber Key property. See [[BankStatements.internalNumber]].
     * @returns A request builder for creating requests to retrieve one `BankStatements` entity based on its keys.
     */
    BankStatementsRequestBuilder.prototype.getByKey = function (internalNumber) {
        return new v4_1.GetByKeyRequestBuilder(BankStatements_1.BankStatements, { InternalNumber: internalNumber });
    };
    /**
     * Returns a request builder for querying all `BankStatements` entities.
     * @returns A request builder for creating requests to retrieve all `BankStatements` entities.
     */
    BankStatementsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(BankStatements_1.BankStatements);
    };
    /**
     * Returns a request builder for creating a `BankStatements` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BankStatements`.
     */
    BankStatementsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(BankStatements_1.BankStatements, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BankStatements`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BankStatements`.
     */
    BankStatementsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(BankStatements_1.BankStatements, entity);
    };
    BankStatementsRequestBuilder.prototype.delete = function (internalNumberOrEntity) {
        return new v4_1.DeleteRequestBuilder(BankStatements_1.BankStatements, internalNumberOrEntity instanceof BankStatements_1.BankStatements ? internalNumberOrEntity : { InternalNumber: internalNumberOrEntity });
    };
    return BankStatementsRequestBuilder;
}(v4_1.RequestBuilder));
exports.BankStatementsRequestBuilder = BankStatementsRequestBuilder;
//# sourceMappingURL=BankStatementsRequestBuilder.js.map