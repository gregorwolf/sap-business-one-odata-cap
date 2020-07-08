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
exports.AccountCategoryRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var AccountCategory_1 = require("./AccountCategory");
/**
 * Request builder class for operations supported on the [[AccountCategory]] entity.
 */
var AccountCategoryRequestBuilder = /** @class */ (function (_super) {
    __extends(AccountCategoryRequestBuilder, _super);
    function AccountCategoryRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AccountCategory` entity based on its keys.
     * @param categoryCode Key property. See [[AccountCategory.categoryCode]].
     * @returns A request builder for creating requests to retrieve one `AccountCategory` entity based on its keys.
     */
    AccountCategoryRequestBuilder.prototype.getByKey = function (categoryCode) {
        return new v4_1.GetByKeyRequestBuilder(AccountCategory_1.AccountCategory, { CategoryCode: categoryCode });
    };
    /**
     * Returns a request builder for querying all `AccountCategory` entities.
     * @returns A request builder for creating requests to retrieve all `AccountCategory` entities.
     */
    AccountCategoryRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(AccountCategory_1.AccountCategory);
    };
    /**
     * Returns a request builder for creating a `AccountCategory` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AccountCategory`.
     */
    AccountCategoryRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(AccountCategory_1.AccountCategory, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AccountCategory`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AccountCategory`.
     */
    AccountCategoryRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(AccountCategory_1.AccountCategory, entity);
    };
    AccountCategoryRequestBuilder.prototype.delete = function (categoryCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(AccountCategory_1.AccountCategory, categoryCodeOrEntity instanceof AccountCategory_1.AccountCategory ? categoryCodeOrEntity : { CategoryCode: categoryCodeOrEntity });
    };
    return AccountCategoryRequestBuilder;
}(v4_1.RequestBuilder));
exports.AccountCategoryRequestBuilder = AccountCategoryRequestBuilder;
//# sourceMappingURL=AccountCategoryRequestBuilder.js.map