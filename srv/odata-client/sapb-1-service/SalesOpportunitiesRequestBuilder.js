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
exports.SalesOpportunitiesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(SalesOpportunities_1.SalesOpportunities, { SequentialNo: sequentialNo });
    };
    /**
     * Returns a request builder for querying all `SalesOpportunities` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOpportunities` entities.
     */
    SalesOpportunitiesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(SalesOpportunities_1.SalesOpportunities);
    };
    /**
     * Returns a request builder for creating a `SalesOpportunities` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOpportunities`.
     */
    SalesOpportunitiesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(SalesOpportunities_1.SalesOpportunities, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SalesOpportunities`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOpportunities`.
     */
    SalesOpportunitiesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(SalesOpportunities_1.SalesOpportunities, entity);
    };
    SalesOpportunitiesRequestBuilder.prototype.delete = function (sequentialNoOrEntity) {
        return new core_1.DeleteRequestBuilderV4(SalesOpportunities_1.SalesOpportunities, sequentialNoOrEntity instanceof SalesOpportunities_1.SalesOpportunities ? sequentialNoOrEntity : { SequentialNo: sequentialNoOrEntity });
    };
    return SalesOpportunitiesRequestBuilder;
}(core_1.RequestBuilder));
exports.SalesOpportunitiesRequestBuilder = SalesOpportunitiesRequestBuilder;
//# sourceMappingURL=SalesOpportunitiesRequestBuilder.js.map