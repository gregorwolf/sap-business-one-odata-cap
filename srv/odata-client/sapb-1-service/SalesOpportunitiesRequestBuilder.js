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
exports.SalesOpportunitiesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var SalesOpportunities_1 = require("./SalesOpportunities");
/**
 * Request builder class for operations supported on the [[SalesOpportunities]] entity.
 */
var SalesOpportunitiesRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesOpportunitiesRequestBuilder, _super);
    function SalesOpportunitiesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesOpportunities` entity based on its keys.
     * @param sequentialNo Key property. See [[SalesOpportunities.sequentialNo]].
     * @returns A request builder for creating requests to retrieve one `SalesOpportunities` entity based on its keys.
     */
    SalesOpportunitiesRequestBuilder.prototype.getByKey = function (sequentialNo) {
        return new v4_1.GetByKeyRequestBuilder(SalesOpportunities_1.SalesOpportunities, { SequentialNo: sequentialNo });
    };
    /**
     * Returns a request builder for querying all `SalesOpportunities` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOpportunities` entities.
     */
    SalesOpportunitiesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(SalesOpportunities_1.SalesOpportunities);
    };
    /**
     * Returns a request builder for creating a `SalesOpportunities` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOpportunities`.
     */
    SalesOpportunitiesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(SalesOpportunities_1.SalesOpportunities, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SalesOpportunities`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOpportunities`.
     */
    SalesOpportunitiesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(SalesOpportunities_1.SalesOpportunities, entity);
    };
    SalesOpportunitiesRequestBuilder.prototype.delete = function (sequentialNoOrEntity) {
        return new v4_1.DeleteRequestBuilder(SalesOpportunities_1.SalesOpportunities, sequentialNoOrEntity instanceof SalesOpportunities_1.SalesOpportunities ? sequentialNoOrEntity : { SequentialNo: sequentialNoOrEntity });
    };
    return SalesOpportunitiesRequestBuilder;
}(v4_1.RequestBuilder));
exports.SalesOpportunitiesRequestBuilder = SalesOpportunitiesRequestBuilder;
//# sourceMappingURL=SalesOpportunitiesRequestBuilder.js.map