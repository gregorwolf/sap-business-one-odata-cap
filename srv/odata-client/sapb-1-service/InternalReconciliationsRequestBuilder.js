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
exports.InternalReconciliationsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var InternalReconciliations_1 = require("./InternalReconciliations");
/**
 * Request builder class for operations supported on the [[InternalReconciliations]] entity.
 */
var InternalReconciliationsRequestBuilder = /** @class */ (function (_super) {
    __extends(InternalReconciliationsRequestBuilder, _super);
    function InternalReconciliationsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `InternalReconciliations` entity based on its keys.
     * @param reconNum Key property. See [[InternalReconciliations.reconNum]].
     * @returns A request builder for creating requests to retrieve one `InternalReconciliations` entity based on its keys.
     */
    InternalReconciliationsRequestBuilder.prototype.getByKey = function (reconNum) {
        return new v4_1.GetByKeyRequestBuilder(InternalReconciliations_1.InternalReconciliations, { ReconNum: reconNum });
    };
    /**
     * Returns a request builder for querying all `InternalReconciliations` entities.
     * @returns A request builder for creating requests to retrieve all `InternalReconciliations` entities.
     */
    InternalReconciliationsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(InternalReconciliations_1.InternalReconciliations);
    };
    /**
     * Returns a request builder for creating a `InternalReconciliations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InternalReconciliations`.
     */
    InternalReconciliationsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(InternalReconciliations_1.InternalReconciliations, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InternalReconciliations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InternalReconciliations`.
     */
    InternalReconciliationsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(InternalReconciliations_1.InternalReconciliations, entity);
    };
    InternalReconciliationsRequestBuilder.prototype.delete = function (reconNumOrEntity) {
        return new v4_1.DeleteRequestBuilder(InternalReconciliations_1.InternalReconciliations, reconNumOrEntity instanceof InternalReconciliations_1.InternalReconciliations ? reconNumOrEntity : { ReconNum: reconNumOrEntity });
    };
    return InternalReconciliationsRequestBuilder;
}(v4_1.RequestBuilder));
exports.InternalReconciliationsRequestBuilder = InternalReconciliationsRequestBuilder;
//# sourceMappingURL=InternalReconciliationsRequestBuilder.js.map