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
exports.SalesStagesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SalesStages_1 = require("./SalesStages");
/**
 * Request builder class for operations supported on the [[SalesStages]] entity.
 */
var SalesStagesRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesStagesRequestBuilder, _super);
    function SalesStagesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesStages` entity based on its keys.
     * @param sequenceNo Key property. See [[SalesStages.sequenceNo]].
     * @returns A request builder for creating requests to retrieve one `SalesStages` entity based on its keys.
     */
    SalesStagesRequestBuilder.prototype.getByKey = function (sequenceNo) {
        return new core_1.GetByKeyRequestBuilderV4(SalesStages_1.SalesStages, { SequenceNo: sequenceNo });
    };
    /**
     * Returns a request builder for querying all `SalesStages` entities.
     * @returns A request builder for creating requests to retrieve all `SalesStages` entities.
     */
    SalesStagesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(SalesStages_1.SalesStages);
    };
    /**
     * Returns a request builder for creating a `SalesStages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesStages`.
     */
    SalesStagesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(SalesStages_1.SalesStages, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SalesStages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesStages`.
     */
    SalesStagesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(SalesStages_1.SalesStages, entity);
    };
    SalesStagesRequestBuilder.prototype.delete = function (sequenceNoOrEntity) {
        return new core_1.DeleteRequestBuilderV4(SalesStages_1.SalesStages, sequenceNoOrEntity instanceof SalesStages_1.SalesStages ? sequenceNoOrEntity : { SequenceNo: sequenceNoOrEntity });
    };
    return SalesStagesRequestBuilder;
}(core_1.RequestBuilder));
exports.SalesStagesRequestBuilder = SalesStagesRequestBuilder;
//# sourceMappingURL=SalesStagesRequestBuilder.js.map