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
exports.ActivitiesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Activities_1 = require("./Activities");
/**
 * Request builder class for operations supported on the [[Activities]] entity.
 */
var ActivitiesRequestBuilder = /** @class */ (function (_super) {
    __extends(ActivitiesRequestBuilder, _super);
    function ActivitiesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Activities` entity based on its keys.
     * @param activityCode Key property. See [[Activities.activityCode]].
     * @returns A request builder for creating requests to retrieve one `Activities` entity based on its keys.
     */
    ActivitiesRequestBuilder.prototype.getByKey = function (activityCode) {
        return new core_1.GetByKeyRequestBuilderV4(Activities_1.Activities, { ActivityCode: activityCode });
    };
    /**
     * Returns a request builder for querying all `Activities` entities.
     * @returns A request builder for creating requests to retrieve all `Activities` entities.
     */
    ActivitiesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Activities_1.Activities);
    };
    /**
     * Returns a request builder for creating a `Activities` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Activities`.
     */
    ActivitiesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Activities_1.Activities, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Activities`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Activities`.
     */
    ActivitiesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Activities_1.Activities, entity);
    };
    ActivitiesRequestBuilder.prototype.delete = function (activityCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Activities_1.Activities, activityCodeOrEntity instanceof Activities_1.Activities ? activityCodeOrEntity : { ActivityCode: activityCodeOrEntity });
    };
    return ActivitiesRequestBuilder;
}(core_1.RequestBuilder));
exports.ActivitiesRequestBuilder = ActivitiesRequestBuilder;
//# sourceMappingURL=ActivitiesRequestBuilder.js.map