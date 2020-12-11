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
exports.BankPagesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BankPages_1 = require("./BankPages");
/**
 * Request builder class for operations supported on the [[BankPages]] entity.
 */
var BankPagesRequestBuilder = /** @class */ (function (_super) {
    __extends(BankPagesRequestBuilder, _super);
    function BankPagesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BankPages` entity based on its keys.
     * @param accountCode Key property. See [[BankPages.accountCode]].
     * @param sequence Key property. See [[BankPages.sequence]].
     * @returns A request builder for creating requests to retrieve one `BankPages` entity based on its keys.
     */
    BankPagesRequestBuilder.prototype.getByKey = function (accountCode, sequence) {
        return new core_1.GetByKeyRequestBuilderV4(BankPages_1.BankPages, {
            AccountCode: accountCode,
            Sequence: sequence
        });
    };
    /**
     * Returns a request builder for querying all `BankPages` entities.
     * @returns A request builder for creating requests to retrieve all `BankPages` entities.
     */
    BankPagesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BankPages_1.BankPages);
    };
    /**
     * Returns a request builder for creating a `BankPages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BankPages`.
     */
    BankPagesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BankPages_1.BankPages, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BankPages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BankPages`.
     */
    BankPagesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BankPages_1.BankPages, entity);
    };
    BankPagesRequestBuilder.prototype.delete = function (accountCodeOrEntity, sequence) {
        return new core_1.DeleteRequestBuilderV4(BankPages_1.BankPages, accountCodeOrEntity instanceof BankPages_1.BankPages ? accountCodeOrEntity : {
            AccountCode: accountCodeOrEntity,
            Sequence: sequence
        });
    };
    return BankPagesRequestBuilder;
}(core_1.RequestBuilder));
exports.BankPagesRequestBuilder = BankPagesRequestBuilder;
//# sourceMappingURL=BankPagesRequestBuilder.js.map