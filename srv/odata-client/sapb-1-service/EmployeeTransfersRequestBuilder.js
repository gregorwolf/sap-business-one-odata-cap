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
exports.EmployeeTransfersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var EmployeeTransfers_1 = require("./EmployeeTransfers");
/**
 * Request builder class for operations supported on the [[EmployeeTransfers]] entity.
 */
var EmployeeTransfersRequestBuilder = /** @class */ (function (_super) {
    __extends(EmployeeTransfersRequestBuilder, _super);
    function EmployeeTransfersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmployeeTransfers` entity based on its keys.
     * @param transferId Key property. See [[EmployeeTransfers.transferId]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTransfers` entity based on its keys.
     */
    EmployeeTransfersRequestBuilder.prototype.getByKey = function (transferId) {
        return new core_1.GetByKeyRequestBuilderV4(EmployeeTransfers_1.EmployeeTransfers, { TransferID: transferId });
    };
    /**
     * Returns a request builder for querying all `EmployeeTransfers` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTransfers` entities.
     */
    EmployeeTransfersRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(EmployeeTransfers_1.EmployeeTransfers);
    };
    /**
     * Returns a request builder for creating a `EmployeeTransfers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmployeeTransfers`.
     */
    EmployeeTransfersRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(EmployeeTransfers_1.EmployeeTransfers, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EmployeeTransfers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EmployeeTransfers`.
     */
    EmployeeTransfersRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(EmployeeTransfers_1.EmployeeTransfers, entity);
    };
    EmployeeTransfersRequestBuilder.prototype.delete = function (transferIdOrEntity) {
        return new core_1.DeleteRequestBuilderV4(EmployeeTransfers_1.EmployeeTransfers, transferIdOrEntity instanceof EmployeeTransfers_1.EmployeeTransfers ? transferIdOrEntity : { TransferID: transferIdOrEntity });
    };
    return EmployeeTransfersRequestBuilder;
}(core_1.RequestBuilder));
exports.EmployeeTransfersRequestBuilder = EmployeeTransfersRequestBuilder;
//# sourceMappingURL=EmployeeTransfersRequestBuilder.js.map