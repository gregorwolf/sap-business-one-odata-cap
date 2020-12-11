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
exports.ActivityTypesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ActivityTypes_1 = require("./ActivityTypes");
/**
 * Request builder class for operations supported on the [[ActivityTypes]] entity.
 */
var ActivityTypesRequestBuilder = /** @class */ (function (_super) {
    __extends(ActivityTypesRequestBuilder, _super);
    function ActivityTypesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ActivityTypes` entity based on its keys.
     * @param code Key property. See [[ActivityTypes.code]].
     * @returns A request builder for creating requests to retrieve one `ActivityTypes` entity based on its keys.
     */
    ActivityTypesRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(ActivityTypes_1.ActivityTypes, { Code: code });
    };
    /**
     * Returns a request builder for querying all `ActivityTypes` entities.
     * @returns A request builder for creating requests to retrieve all `ActivityTypes` entities.
     */
    ActivityTypesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ActivityTypes_1.ActivityTypes);
    };
    /**
     * Returns a request builder for creating a `ActivityTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ActivityTypes`.
     */
    ActivityTypesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ActivityTypes_1.ActivityTypes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ActivityTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ActivityTypes`.
     */
    ActivityTypesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ActivityTypes_1.ActivityTypes, entity);
    };
    ActivityTypesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ActivityTypes_1.ActivityTypes, codeOrEntity instanceof ActivityTypes_1.ActivityTypes ? codeOrEntity : { Code: codeOrEntity });
    };
    return ActivityTypesRequestBuilder;
}(core_1.RequestBuilder));
exports.ActivityTypesRequestBuilder = ActivityTypesRequestBuilder;
//# sourceMappingURL=ActivityTypesRequestBuilder.js.map