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
exports.ActivityStatusesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ActivityStatuses_1 = require("./ActivityStatuses");
/**
 * Request builder class for operations supported on the [[ActivityStatuses]] entity.
 */
var ActivityStatusesRequestBuilder = /** @class */ (function (_super) {
    __extends(ActivityStatusesRequestBuilder, _super);
    function ActivityStatusesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ActivityStatuses` entity based on its keys.
     * @param statusId Key property. See [[ActivityStatuses.statusId]].
     * @returns A request builder for creating requests to retrieve one `ActivityStatuses` entity based on its keys.
     */
    ActivityStatusesRequestBuilder.prototype.getByKey = function (statusId) {
        return new v4_1.GetByKeyRequestBuilder(ActivityStatuses_1.ActivityStatuses, { StatusId: statusId });
    };
    /**
     * Returns a request builder for querying all `ActivityStatuses` entities.
     * @returns A request builder for creating requests to retrieve all `ActivityStatuses` entities.
     */
    ActivityStatusesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ActivityStatuses_1.ActivityStatuses);
    };
    /**
     * Returns a request builder for creating a `ActivityStatuses` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ActivityStatuses`.
     */
    ActivityStatusesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ActivityStatuses_1.ActivityStatuses, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ActivityStatuses`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ActivityStatuses`.
     */
    ActivityStatusesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ActivityStatuses_1.ActivityStatuses, entity);
    };
    ActivityStatusesRequestBuilder.prototype.delete = function (statusIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(ActivityStatuses_1.ActivityStatuses, statusIdOrEntity instanceof ActivityStatuses_1.ActivityStatuses ? statusIdOrEntity : { StatusId: statusIdOrEntity });
    };
    return ActivityStatusesRequestBuilder;
}(v4_1.RequestBuilder));
exports.ActivityStatusesRequestBuilder = ActivityStatusesRequestBuilder;
//# sourceMappingURL=ActivityStatusesRequestBuilder.js.map