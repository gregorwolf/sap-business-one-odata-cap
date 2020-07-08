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
exports.NfTaxCategoriesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var NfTaxCategories_1 = require("./NfTaxCategories");
/**
 * Request builder class for operations supported on the [[NfTaxCategories]] entity.
 */
var NfTaxCategoriesRequestBuilder = /** @class */ (function (_super) {
    __extends(NfTaxCategoriesRequestBuilder, _super);
    function NfTaxCategoriesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `NfTaxCategories` entity based on its keys.
     * @param absId Key property. See [[NfTaxCategories.absId]].
     * @returns A request builder for creating requests to retrieve one `NfTaxCategories` entity based on its keys.
     */
    NfTaxCategoriesRequestBuilder.prototype.getByKey = function (absId) {
        return new v4_1.GetByKeyRequestBuilder(NfTaxCategories_1.NfTaxCategories, { AbsId: absId });
    };
    /**
     * Returns a request builder for querying all `NfTaxCategories` entities.
     * @returns A request builder for creating requests to retrieve all `NfTaxCategories` entities.
     */
    NfTaxCategoriesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(NfTaxCategories_1.NfTaxCategories);
    };
    /**
     * Returns a request builder for creating a `NfTaxCategories` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `NfTaxCategories`.
     */
    NfTaxCategoriesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(NfTaxCategories_1.NfTaxCategories, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `NfTaxCategories`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `NfTaxCategories`.
     */
    NfTaxCategoriesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(NfTaxCategories_1.NfTaxCategories, entity);
    };
    NfTaxCategoriesRequestBuilder.prototype.delete = function (absIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(NfTaxCategories_1.NfTaxCategories, absIdOrEntity instanceof NfTaxCategories_1.NfTaxCategories ? absIdOrEntity : { AbsId: absIdOrEntity });
    };
    return NfTaxCategoriesRequestBuilder;
}(v4_1.RequestBuilder));
exports.NfTaxCategoriesRequestBuilder = NfTaxCategoriesRequestBuilder;
//# sourceMappingURL=NfTaxCategoriesRequestBuilder.js.map