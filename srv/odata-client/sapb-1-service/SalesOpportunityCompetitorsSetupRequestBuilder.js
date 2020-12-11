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
exports.SalesOpportunityCompetitorsSetupRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(SalesOpportunityCompetitorsSetup_1.SalesOpportunityCompetitorsSetup, { SequenceNo: sequenceNo });
    };
    /**
     * Returns a request builder for querying all `SalesOpportunityCompetitorsSetup` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOpportunityCompetitorsSetup` entities.
     */
    SalesOpportunityCompetitorsSetupRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(SalesOpportunityCompetitorsSetup_1.SalesOpportunityCompetitorsSetup);
    };
    /**
     * Returns a request builder for creating a `SalesOpportunityCompetitorsSetup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOpportunityCompetitorsSetup`.
     */
    SalesOpportunityCompetitorsSetupRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(SalesOpportunityCompetitorsSetup_1.SalesOpportunityCompetitorsSetup, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SalesOpportunityCompetitorsSetup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOpportunityCompetitorsSetup`.
     */
    SalesOpportunityCompetitorsSetupRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(SalesOpportunityCompetitorsSetup_1.SalesOpportunityCompetitorsSetup, entity);
    };
    SalesOpportunityCompetitorsSetupRequestBuilder.prototype.delete = function (sequenceNoOrEntity) {
        return new core_1.DeleteRequestBuilderV4(SalesOpportunityCompetitorsSetup_1.SalesOpportunityCompetitorsSetup, sequenceNoOrEntity instanceof SalesOpportunityCompetitorsSetup_1.SalesOpportunityCompetitorsSetup ? sequenceNoOrEntity : { SequenceNo: sequenceNoOrEntity });
    };
    return SalesOpportunityCompetitorsSetupRequestBuilder;
}(core_1.RequestBuilder));
exports.SalesOpportunityCompetitorsSetupRequestBuilder = SalesOpportunityCompetitorsSetupRequestBuilder;
//# sourceMappingURL=SalesOpportunityCompetitorsSetupRequestBuilder.js.map