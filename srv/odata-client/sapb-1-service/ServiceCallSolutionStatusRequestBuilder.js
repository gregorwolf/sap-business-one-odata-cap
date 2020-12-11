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
exports.ServiceCallSolutionStatusRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ServiceCallSolutionStatus_1 = require("./ServiceCallSolutionStatus");
/**
 * Request builder class for operations supported on the [[ServiceCallSolutionStatus]] entity.
 */
var ServiceCallSolutionStatusRequestBuilder = /** @class */ (function (_super) {
    __extends(ServiceCallSolutionStatusRequestBuilder, _super);
    function ServiceCallSolutionStatusRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ServiceCallSolutionStatus` entity based on its keys.
     * @param statusId Key property. See [[ServiceCallSolutionStatus.statusId]].
     * @returns A request builder for creating requests to retrieve one `ServiceCallSolutionStatus` entity based on its keys.
     */
    ServiceCallSolutionStatusRequestBuilder.prototype.getByKey = function (statusId) {
        return new core_1.GetByKeyRequestBuilderV4(ServiceCallSolutionStatus_1.ServiceCallSolutionStatus, { StatusId: statusId });
    };
    /**
     * Returns a request builder for querying all `ServiceCallSolutionStatus` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceCallSolutionStatus` entities.
     */
    ServiceCallSolutionStatusRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ServiceCallSolutionStatus_1.ServiceCallSolutionStatus);
    };
    /**
     * Returns a request builder for creating a `ServiceCallSolutionStatus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceCallSolutionStatus`.
     */
    ServiceCallSolutionStatusRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ServiceCallSolutionStatus_1.ServiceCallSolutionStatus, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ServiceCallSolutionStatus`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceCallSolutionStatus`.
     */
    ServiceCallSolutionStatusRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ServiceCallSolutionStatus_1.ServiceCallSolutionStatus, entity);
    };
    ServiceCallSolutionStatusRequestBuilder.prototype.delete = function (statusIdOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ServiceCallSolutionStatus_1.ServiceCallSolutionStatus, statusIdOrEntity instanceof ServiceCallSolutionStatus_1.ServiceCallSolutionStatus ? statusIdOrEntity : { StatusId: statusIdOrEntity });
    };
    return ServiceCallSolutionStatusRequestBuilder;
}(core_1.RequestBuilder));
exports.ServiceCallSolutionStatusRequestBuilder = ServiceCallSolutionStatusRequestBuilder;
//# sourceMappingURL=ServiceCallSolutionStatusRequestBuilder.js.map