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
exports.QueueRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Queue_1 = require("./Queue");
/**
 * Request builder class for operations supported on the [[Queue]] entity.
 */
var QueueRequestBuilder = /** @class */ (function (_super) {
    __extends(QueueRequestBuilder, _super);
    function QueueRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Queue` entity based on its keys.
     * @param queueId Key property. See [[Queue.queueId]].
     * @returns A request builder for creating requests to retrieve one `Queue` entity based on its keys.
     */
    QueueRequestBuilder.prototype.getByKey = function (queueId) {
        return new core_1.GetByKeyRequestBuilderV4(Queue_1.Queue, { QueueID: queueId });
    };
    /**
     * Returns a request builder for querying all `Queue` entities.
     * @returns A request builder for creating requests to retrieve all `Queue` entities.
     */
    QueueRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Queue_1.Queue);
    };
    /**
     * Returns a request builder for creating a `Queue` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Queue`.
     */
    QueueRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Queue_1.Queue, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Queue`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Queue`.
     */
    QueueRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Queue_1.Queue, entity);
    };
    QueueRequestBuilder.prototype.delete = function (queueIdOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Queue_1.Queue, queueIdOrEntity instanceof Queue_1.Queue ? queueIdOrEntity : { QueueID: queueIdOrEntity });
    };
    return QueueRequestBuilder;
}(core_1.RequestBuilder));
exports.QueueRequestBuilder = QueueRequestBuilder;
//# sourceMappingURL=QueueRequestBuilder.js.map