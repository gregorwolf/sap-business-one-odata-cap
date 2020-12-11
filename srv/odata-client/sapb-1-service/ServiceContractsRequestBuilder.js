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
exports.ServiceContractsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ServiceContracts_1 = require("./ServiceContracts");
/**
 * Request builder class for operations supported on the [[ServiceContracts]] entity.
 */
var ServiceContractsRequestBuilder = /** @class */ (function (_super) {
    __extends(ServiceContractsRequestBuilder, _super);
    function ServiceContractsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ServiceContracts` entity based on its keys.
     * @param contractId Key property. See [[ServiceContracts.contractId]].
     * @returns A request builder for creating requests to retrieve one `ServiceContracts` entity based on its keys.
     */
    ServiceContractsRequestBuilder.prototype.getByKey = function (contractId) {
        return new core_1.GetByKeyRequestBuilderV4(ServiceContracts_1.ServiceContracts, { ContractID: contractId });
    };
    /**
     * Returns a request builder for querying all `ServiceContracts` entities.
     * @returns A request builder for creating requests to retrieve all `ServiceContracts` entities.
     */
    ServiceContractsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ServiceContracts_1.ServiceContracts);
    };
    /**
     * Returns a request builder for creating a `ServiceContracts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ServiceContracts`.
     */
    ServiceContractsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ServiceContracts_1.ServiceContracts, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ServiceContracts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ServiceContracts`.
     */
    ServiceContractsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ServiceContracts_1.ServiceContracts, entity);
    };
    ServiceContractsRequestBuilder.prototype.delete = function (contractIdOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ServiceContracts_1.ServiceContracts, contractIdOrEntity instanceof ServiceContracts_1.ServiceContracts ? contractIdOrEntity : { ContractID: contractIdOrEntity });
    };
    return ServiceContractsRequestBuilder;
}(core_1.RequestBuilder));
exports.ServiceContractsRequestBuilder = ServiceContractsRequestBuilder;
//# sourceMappingURL=ServiceContractsRequestBuilder.js.map