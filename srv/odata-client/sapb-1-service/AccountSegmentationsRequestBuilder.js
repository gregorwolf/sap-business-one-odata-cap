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
exports.AccountSegmentationsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var AccountSegmentations_1 = require("./AccountSegmentations");
/**
 * Request builder class for operations supported on the [[AccountSegmentations]] entity.
 */
var AccountSegmentationsRequestBuilder = /** @class */ (function (_super) {
    __extends(AccountSegmentationsRequestBuilder, _super);
    function AccountSegmentationsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AccountSegmentations` entity based on its keys.
     * @param numerator Key property. See [[AccountSegmentations.numerator]].
     * @returns A request builder for creating requests to retrieve one `AccountSegmentations` entity based on its keys.
     */
    AccountSegmentationsRequestBuilder.prototype.getByKey = function (numerator) {
        return new v4_1.GetByKeyRequestBuilder(AccountSegmentations_1.AccountSegmentations, { Numerator: numerator });
    };
    /**
     * Returns a request builder for querying all `AccountSegmentations` entities.
     * @returns A request builder for creating requests to retrieve all `AccountSegmentations` entities.
     */
    AccountSegmentationsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(AccountSegmentations_1.AccountSegmentations);
    };
    /**
     * Returns a request builder for creating a `AccountSegmentations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AccountSegmentations`.
     */
    AccountSegmentationsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(AccountSegmentations_1.AccountSegmentations, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AccountSegmentations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AccountSegmentations`.
     */
    AccountSegmentationsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(AccountSegmentations_1.AccountSegmentations, entity);
    };
    AccountSegmentationsRequestBuilder.prototype.delete = function (numeratorOrEntity) {
        return new v4_1.DeleteRequestBuilder(AccountSegmentations_1.AccountSegmentations, numeratorOrEntity instanceof AccountSegmentations_1.AccountSegmentations ? numeratorOrEntity : { Numerator: numeratorOrEntity });
    };
    return AccountSegmentationsRequestBuilder;
}(v4_1.RequestBuilder));
exports.AccountSegmentationsRequestBuilder = AccountSegmentationsRequestBuilder;
//# sourceMappingURL=AccountSegmentationsRequestBuilder.js.map