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
exports.EmployeePositionRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var EmployeePosition_1 = require("./EmployeePosition");
/**
 * Request builder class for operations supported on the [[EmployeePosition]] entity.
 */
var EmployeePositionRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeePositionRequestBuilder, _super);
    function EmployeePositionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeePosition` entity based on its keys.
     * @param positionId Key property. See [[EmployeePosition.positionId]].
     * @returns A request builder for creating requests to retrieve one `EmployeePosition` entity based on its keys.
     */
    EmployeePositionRequestBuilder.prototype.getByKey = function (positionId) {
        return new v4_1.GetByKeyRequestBuilder(EmployeePosition_1.EmployeePosition, { PositionID: positionId });
    };
    /**
     * Returns a request builder for querying all `EmployeePosition` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeePosition` entities.
     */
    EmployeePositionRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(EmployeePosition_1.EmployeePosition);
    };
    /**
     * Returns a request builder for creating a `EmployeePosition` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeePosition`.
     */
    EmployeePositionRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(EmployeePosition_1.EmployeePosition, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmployeePosition`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeePosition`.
     */
    EmployeePositionRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(EmployeePosition_1.EmployeePosition, entity);
    };
    EmployeePositionRequestBuilder.prototype.delete = function (positionIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(EmployeePosition_1.EmployeePosition, positionIdOrEntity instanceof EmployeePosition_1.EmployeePosition ? positionIdOrEntity : { PositionID: positionIdOrEntity });
    };
    return EmployeePositionRequestBuilder;
}(v4_1.RequestBuilder));
exports.EmployeePositionRequestBuilder = EmployeePositionRequestBuilder;
//# sourceMappingURL=EmployeePositionRequestBuilder.js.map