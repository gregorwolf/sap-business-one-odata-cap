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
exports.ServiceCallProblemTypesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ServiceCallProblemTypes_1 = require("./ServiceCallProblemTypes");
/**
 * Request builder class for operations supported on the [[ServiceCallProblemTypes]] entity.
 */
var ServiceCallProblemTypesRequestBuilder = /** @class */ (function (_super) {
    __extends(ServiceCallProblemTypesRequestBuilder, _super);
    function ServiceCallProblemTypesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ServiceCallProblemTypes` entity based on its keys.
     * @param problemTypeId Key property. See [[ServiceCallProblemTypes.problemTypeId]].
     * @returns A request builder for creating requests to retrieve one `ServiceCallProblemTypes` entity based on its keys.
     */
    ServiceCallProblemTypesRequestBuilder.prototype.getByKey = function (problemTypeId) {
        return new v4_1.GetByKeyRequestBuilder(ServiceCallProblemTypes_1.ServiceCallProblemTypes, { ProblemTypeID: problemTypeId });
    };
    /**
     * Returns a request builder for querying all `ServiceCallProblemTypes` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceCallProblemTypes` entities.
     */
    ServiceCallProblemTypesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ServiceCallProblemTypes_1.ServiceCallProblemTypes);
    };
    /**
     * Returns a request builder for creating a `ServiceCallProblemTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceCallProblemTypes`.
     */
    ServiceCallProblemTypesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ServiceCallProblemTypes_1.ServiceCallProblemTypes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ServiceCallProblemTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceCallProblemTypes`.
     */
    ServiceCallProblemTypesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ServiceCallProblemTypes_1.ServiceCallProblemTypes, entity);
    };
    ServiceCallProblemTypesRequestBuilder.prototype.delete = function (problemTypeIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(ServiceCallProblemTypes_1.ServiceCallProblemTypes, problemTypeIdOrEntity instanceof ServiceCallProblemTypes_1.ServiceCallProblemTypes ? problemTypeIdOrEntity : { ProblemTypeID: problemTypeIdOrEntity });
    };
    return ServiceCallProblemTypesRequestBuilder;
}(v4_1.RequestBuilder));
exports.ServiceCallProblemTypesRequestBuilder = ServiceCallProblemTypesRequestBuilder;
//# sourceMappingURL=ServiceCallProblemTypesRequestBuilder.js.map