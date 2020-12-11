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
exports.ApprovalStagesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ApprovalStages_1 = require("./ApprovalStages");
/**
 * Request builder class for operations supported on the [[ApprovalStages]] entity.
 */
var ApprovalStagesRequestBuilder = /** @class */ (function (_super) {
    __extends(ApprovalStagesRequestBuilder, _super);
    function ApprovalStagesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ApprovalStages` entity based on its keys.
     * @param code Key property. See [[ApprovalStages.code]].
     * @returns A request builder for creating requests to retrieve one `ApprovalStages` entity based on its keys.
     */
    ApprovalStagesRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(ApprovalStages_1.ApprovalStages, { Code: code });
    };
    /**
     * Returns a request builder for querying all `ApprovalStages` entities.
     * @returns A request builder for creating requests to retrieve all `ApprovalStages` entities.
     */
    ApprovalStagesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ApprovalStages_1.ApprovalStages);
    };
    /**
     * Returns a request builder for creating a `ApprovalStages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ApprovalStages`.
     */
    ApprovalStagesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ApprovalStages_1.ApprovalStages, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ApprovalStages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ApprovalStages`.
     */
    ApprovalStagesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ApprovalStages_1.ApprovalStages, entity);
    };
    ApprovalStagesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ApprovalStages_1.ApprovalStages, codeOrEntity instanceof ApprovalStages_1.ApprovalStages ? codeOrEntity : { Code: codeOrEntity });
    };
    return ApprovalStagesRequestBuilder;
}(core_1.RequestBuilder));
exports.ApprovalStagesRequestBuilder = ApprovalStagesRequestBuilder;
//# sourceMappingURL=ApprovalStagesRequestBuilder.js.map