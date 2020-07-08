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
exports.SalesOpportunityCompetitorsSetupRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var SalesOpportunityCompetitorsSetup_1 = require("./SalesOpportunityCompetitorsSetup");
/**
 * Request builder class for operations supported on the [[SalesOpportunityCompetitorsSetup]] entity.
 */
var SalesOpportunityCompetitorsSetupRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesOpportunityCompetitorsSetupRequestBuilder, _super);
    function SalesOpportunityCompetitorsSetupRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesOpportunityCompetitorsSetup` entity based on its keys.
     * @param sequenceNo Key property. See [[SalesOpportunityCompetitorsSetup.sequenceNo]].
     * @returns A request builder for creating requests to retrieve one `SalesOpportunityCompetitorsSetup` entity based on its keys.
     */
    SalesOpportunityCompetitorsSetupRequestBuilder.prototype.getByKey = function (sequenceNo) {
        return new v4_1.GetByKeyRequestBuilder(SalesOpportunityCompetitorsSetup_1.SalesOpportunityCompetitorsSetup, { SequenceNo: sequenceNo });
    };
    /**
     * Returns a request builder for querying all `SalesOpportunityCompetitorsSetup` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOpportunityCompetitorsSetup` entities.
     */
    SalesOpportunityCompetitorsSetupRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(SalesOpportunityCompetitorsSetup_1.SalesOpportunityCompetitorsSetup);
    };
    /**
     * Returns a request builder for creating a `SalesOpportunityCompetitorsSetup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOpportunityCompetitorsSetup`.
     */
    SalesOpportunityCompetitorsSetupRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(SalesOpportunityCompetitorsSetup_1.SalesOpportunityCompetitorsSetup, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SalesOpportunityCompetitorsSetup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOpportunityCompetitorsSetup`.
     */
    SalesOpportunityCompetitorsSetupRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(SalesOpportunityCompetitorsSetup_1.SalesOpportunityCompetitorsSetup, entity);
    };
    SalesOpportunityCompetitorsSetupRequestBuilder.prototype.delete = function (sequenceNoOrEntity) {
        return new v4_1.DeleteRequestBuilder(SalesOpportunityCompetitorsSetup_1.SalesOpportunityCompetitorsSetup, sequenceNoOrEntity instanceof SalesOpportunityCompetitorsSetup_1.SalesOpportunityCompetitorsSetup ? sequenceNoOrEntity : { SequenceNo: sequenceNoOrEntity });
    };
    return SalesOpportunityCompetitorsSetupRequestBuilder;
}(v4_1.RequestBuilder));
exports.SalesOpportunityCompetitorsSetupRequestBuilder = SalesOpportunityCompetitorsSetupRequestBuilder;
//# sourceMappingURL=SalesOpportunityCompetitorsSetupRequestBuilder.js.map