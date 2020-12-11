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
exports.ApprovalTemplatesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ApprovalTemplates_1 = require("./ApprovalTemplates");
/**
 * Request builder class for operations supported on the [[ApprovalTemplates]] entity.
 */
var ApprovalTemplatesRequestBuilder = /** @class */ (function (_super) {
    __extends(ApprovalTemplatesRequestBuilder, _super);
    function ApprovalTemplatesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ApprovalTemplates` entity based on its keys.
     * @param code Key property. See [[ApprovalTemplates.code]].
     * @returns A request builder for creating requests to retrieve one `ApprovalTemplates` entity based on its keys.
     */
    ApprovalTemplatesRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(ApprovalTemplates_1.ApprovalTemplates, { Code: code });
    };
    /**
     * Returns a request builder for querying all `ApprovalTemplates` entities.
     * @returns A request builder for creating requests to retrieve all `ApprovalTemplates` entities.
     */
    ApprovalTemplatesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ApprovalTemplates_1.ApprovalTemplates);
    };
    /**
     * Returns a request builder for creating a `ApprovalTemplates` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ApprovalTemplates`.
     */
    ApprovalTemplatesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ApprovalTemplates_1.ApprovalTemplates, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ApprovalTemplates`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ApprovalTemplates`.
     */
    ApprovalTemplatesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ApprovalTemplates_1.ApprovalTemplates, entity);
    };
    ApprovalTemplatesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ApprovalTemplates_1.ApprovalTemplates, codeOrEntity instanceof ApprovalTemplates_1.ApprovalTemplates ? codeOrEntity : { Code: codeOrEntity });
    };
    return ApprovalTemplatesRequestBuilder;
}(core_1.RequestBuilder));
exports.ApprovalTemplatesRequestBuilder = ApprovalTemplatesRequestBuilder;
//# sourceMappingURL=ApprovalTemplatesRequestBuilder.js.map