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
exports.ApprovalRequestsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ApprovalRequests_1 = require("./ApprovalRequests");
/**
 * Request builder class for operations supported on the [[ApprovalRequests]] entity.
 */
var ApprovalRequestsRequestBuilder = /** @class */ (function (_super) {
    __extends(ApprovalRequestsRequestBuilder, _super);
    function ApprovalRequestsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ApprovalRequests` entity based on its keys.
     * @param code Key property. See [[ApprovalRequests.code]].
     * @returns A request builder for creating requests to retrieve one `ApprovalRequests` entity based on its keys.
     */
    ApprovalRequestsRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(ApprovalRequests_1.ApprovalRequests, { Code: code });
    };
    /**
     * Returns a request builder for querying all `ApprovalRequests` entities.
     * @returns A request builder for creating requests to retrieve all `ApprovalRequests` entities.
     */
    ApprovalRequestsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ApprovalRequests_1.ApprovalRequests);
    };
    /**
     * Returns a request builder for creating a `ApprovalRequests` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ApprovalRequests`.
     */
    ApprovalRequestsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ApprovalRequests_1.ApprovalRequests, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ApprovalRequests`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ApprovalRequests`.
     */
    ApprovalRequestsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ApprovalRequests_1.ApprovalRequests, entity);
    };
    ApprovalRequestsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ApprovalRequests_1.ApprovalRequests, codeOrEntity instanceof ApprovalRequests_1.ApprovalRequests ? codeOrEntity : { Code: codeOrEntity });
    };
    return ApprovalRequestsRequestBuilder;
}(core_1.RequestBuilder));
exports.ApprovalRequestsRequestBuilder = ApprovalRequestsRequestBuilder;
//# sourceMappingURL=ApprovalRequestsRequestBuilder.js.map