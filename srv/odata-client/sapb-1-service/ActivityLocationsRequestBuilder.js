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
exports.ActivityLocationsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var ActivityLocations_1 = require("./ActivityLocations");
/**
 * Request builder class for operations supported on the [[ActivityLocations]] entity.
 */
var ActivityLocationsRequestBuilder = /** @class */ (function (_super) {
    __extends(ActivityLocationsRequestBuilder, _super);
    function ActivityLocationsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ActivityLocations` entity based on its keys.
     * @param code Key property. See [[ActivityLocations.code]].
     * @returns A request builder for creating requests to retrieve one `ActivityLocations` entity based on its keys.
     */
    ActivityLocationsRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(ActivityLocations_1.ActivityLocations, { Code: code });
    };
    /**
     * Returns a request builder for querying all `ActivityLocations` entities.
     * @returns A request builder for creating requests to retrieve all `ActivityLocations` entities.
     */
    ActivityLocationsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(ActivityLocations_1.ActivityLocations);
    };
    /**
     * Returns a request builder for creating a `ActivityLocations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ActivityLocations`.
     */
    ActivityLocationsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(ActivityLocations_1.ActivityLocations, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ActivityLocations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ActivityLocations`.
     */
    ActivityLocationsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(ActivityLocations_1.ActivityLocations, entity);
    };
    ActivityLocationsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(ActivityLocations_1.ActivityLocations, codeOrEntity instanceof ActivityLocations_1.ActivityLocations ? codeOrEntity : { Code: codeOrEntity });
    };
    return ActivityLocationsRequestBuilder;
}(v4_1.RequestBuilder));
exports.ActivityLocationsRequestBuilder = ActivityLocationsRequestBuilder;
//# sourceMappingURL=ActivityLocationsRequestBuilder.js.map