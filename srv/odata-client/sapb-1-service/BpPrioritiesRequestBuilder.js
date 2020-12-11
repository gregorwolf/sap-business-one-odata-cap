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
exports.BpPrioritiesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BpPriorities_1 = require("./BpPriorities");
/**
 * Request builder class for operations supported on the [[BpPriorities]] entity.
 */
var BpPrioritiesRequestBuilder = /** @class */ (function (_super) {
    __extends(BpPrioritiesRequestBuilder, _super);
    function BpPrioritiesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BpPriorities` entity based on its keys.
     * @param priority Key property. See [[BpPriorities.priority]].
     * @returns A request builder for creating requests to retrieve one `BpPriorities` entity based on its keys.
     */
    BpPrioritiesRequestBuilder.prototype.getByKey = function (priority) {
        return new core_1.GetByKeyRequestBuilderV4(BpPriorities_1.BpPriorities, { Priority: priority });
    };
    /**
     * Returns a request builder for querying all `BpPriorities` entities.
     * @returns A request builder for creating requests to retrieve all `BpPriorities` entities.
     */
    BpPrioritiesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BpPriorities_1.BpPriorities);
    };
    /**
     * Returns a request builder for creating a `BpPriorities` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BpPriorities`.
     */
    BpPrioritiesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BpPriorities_1.BpPriorities, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BpPriorities`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BpPriorities`.
     */
    BpPrioritiesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BpPriorities_1.BpPriorities, entity);
    };
    BpPrioritiesRequestBuilder.prototype.delete = function (priorityOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BpPriorities_1.BpPriorities, priorityOrEntity instanceof BpPriorities_1.BpPriorities ? priorityOrEntity : { Priority: priorityOrEntity });
    };
    return BpPrioritiesRequestBuilder;
}(core_1.RequestBuilder));
exports.BpPrioritiesRequestBuilder = BpPrioritiesRequestBuilder;
//# sourceMappingURL=BpPrioritiesRequestBuilder.js.map