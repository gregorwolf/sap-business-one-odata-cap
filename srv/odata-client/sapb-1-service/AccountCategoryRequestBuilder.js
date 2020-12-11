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
exports.AccountCategoryRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(AccountCategory_1.AccountCategory, { CategoryCode: categoryCode });
    };
    /**
     * Returns a request builder for querying all `AccountCategory` entities.
     * @returns A request builder for creating requests to retrieve all `AccountCategory` entities.
     */
    AccountCategoryRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(AccountCategory_1.AccountCategory);
    };
    /**
     * Returns a request builder for creating a `AccountCategory` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AccountCategory`.
     */
    AccountCategoryRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(AccountCategory_1.AccountCategory, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AccountCategory`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AccountCategory`.
     */
    AccountCategoryRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(AccountCategory_1.AccountCategory, entity);
    };
    AccountCategoryRequestBuilder.prototype.delete = function (categoryCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(AccountCategory_1.AccountCategory, categoryCodeOrEntity instanceof AccountCategory_1.AccountCategory ? categoryCodeOrEntity : { CategoryCode: categoryCodeOrEntity });
    };
    return AccountCategoryRequestBuilder;
}(core_1.RequestBuilder));
exports.AccountCategoryRequestBuilder = AccountCategoryRequestBuilder;
//# sourceMappingURL=AccountCategoryRequestBuilder.js.map