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
exports.ServiceCallProblemSubTypesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ServiceCallProblemSubTypes_1 = require("./ServiceCallProblemSubTypes");
/**
 * Request builder class for operations supported on the [[ServiceCallProblemSubTypes]] entity.
 */
var ServiceCallProblemSubTypesRequestBuilder = /** @class */ (function (_super) {
    __extends(ServiceCallProblemSubTypesRequestBuilder, _super);
    function ServiceCallProblemSubTypesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ServiceCallProblemSubTypes` entity based on its keys.
     * @param problemSubTypeId Key property. See [[ServiceCallProblemSubTypes.problemSubTypeId]].
     * @returns A request builder for creating requests to retrieve one `ServiceCallProblemSubTypes` entity based on its keys.
     */
    ServiceCallProblemSubTypesRequestBuilder.prototype.getByKey = function (problemSubTypeId) {
        return new core_1.GetByKeyRequestBuilderV4(ServiceCallProblemSubTypes_1.ServiceCallProblemSubTypes, { ProblemSubTypeID: problemSubTypeId });
    };
    /**
     * Returns a request builder for querying all `ServiceCallProblemSubTypes` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceCallProblemSubTypes` entities.
     */
    ServiceCallProblemSubTypesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ServiceCallProblemSubTypes_1.ServiceCallProblemSubTypes);
    };
    /**
     * Returns a request builder for creating a `ServiceCallProblemSubTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceCallProblemSubTypes`.
     */
    ServiceCallProblemSubTypesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ServiceCallProblemSubTypes_1.ServiceCallProblemSubTypes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ServiceCallProblemSubTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceCallProblemSubTypes`.
     */
    ServiceCallProblemSubTypesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ServiceCallProblemSubTypes_1.ServiceCallProblemSubTypes, entity);
    };
    ServiceCallProblemSubTypesRequestBuilder.prototype.delete = function (problemSubTypeIdOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ServiceCallProblemSubTypes_1.ServiceCallProblemSubTypes, problemSubTypeIdOrEntity instanceof ServiceCallProblemSubTypes_1.ServiceCallProblemSubTypes ? problemSubTypeIdOrEntity : { ProblemSubTypeID: problemSubTypeIdOrEntity });
    };
    return ServiceCallProblemSubTypesRequestBuilder;
}(core_1.RequestBuilder));
exports.ServiceCallProblemSubTypesRequestBuilder = ServiceCallProblemSubTypesRequestBuilder;
//# sourceMappingURL=ServiceCallProblemSubTypesRequestBuilder.js.map