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
exports.KnowledgeBaseSolutionsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var KnowledgeBaseSolutions_1 = require("./KnowledgeBaseSolutions");
/**
 * Request builder class for operations supported on the [[KnowledgeBaseSolutions]] entity.
 */
var KnowledgeBaseSolutionsRequestBuilder = /** @class */ (function (_super) {
    __extends(KnowledgeBaseSolutionsRequestBuilder, _super);
    function KnowledgeBaseSolutionsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `KnowledgeBaseSolutions` entity based on its keys.
     * @param solutionCode Key property. See [[KnowledgeBaseSolutions.solutionCode]].
     * @returns A request builder for creating requests to retrieve one `KnowledgeBaseSolutions` entity based on its keys.
     */
    KnowledgeBaseSolutionsRequestBuilder.prototype.getByKey = function (solutionCode) {
        return new core_1.GetByKeyRequestBuilderV4(KnowledgeBaseSolutions_1.KnowledgeBaseSolutions, { SolutionCode: solutionCode });
    };
    /**
     * Returns a request builder for querying all `KnowledgeBaseSolutions` entities.
     * @returns A request builder for creating requests to retrieve all `KnowledgeBaseSolutions` entities.
     */
    KnowledgeBaseSolutionsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(KnowledgeBaseSolutions_1.KnowledgeBaseSolutions);
    };
    /**
     * Returns a request builder for creating a `KnowledgeBaseSolutions` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `KnowledgeBaseSolutions`.
     */
    KnowledgeBaseSolutionsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(KnowledgeBaseSolutions_1.KnowledgeBaseSolutions, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `KnowledgeBaseSolutions`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `KnowledgeBaseSolutions`.
     */
    KnowledgeBaseSolutionsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(KnowledgeBaseSolutions_1.KnowledgeBaseSolutions, entity);
    };
    KnowledgeBaseSolutionsRequestBuilder.prototype.delete = function (solutionCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(KnowledgeBaseSolutions_1.KnowledgeBaseSolutions, solutionCodeOrEntity instanceof KnowledgeBaseSolutions_1.KnowledgeBaseSolutions ? solutionCodeOrEntity : { SolutionCode: solutionCodeOrEntity });
    };
    return KnowledgeBaseSolutionsRequestBuilder;
}(core_1.RequestBuilder));
exports.KnowledgeBaseSolutionsRequestBuilder = KnowledgeBaseSolutionsRequestBuilder;
//# sourceMappingURL=KnowledgeBaseSolutionsRequestBuilder.js.map