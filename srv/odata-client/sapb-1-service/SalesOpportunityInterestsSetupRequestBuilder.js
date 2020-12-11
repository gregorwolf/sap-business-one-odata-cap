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
exports.SalesOpportunityInterestsSetupRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SalesOpportunityInterestsSetup_1 = require("./SalesOpportunityInterestsSetup");
/**
 * Request builder class for operations supported on the [[SalesOpportunityInterestsSetup]] entity.
 */
var SalesOpportunityInterestsSetupRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesOpportunityInterestsSetupRequestBuilder, _super);
    function SalesOpportunityInterestsSetupRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesOpportunityInterestsSetup` entity based on its keys.
     * @param sequenceNo Key property. See [[SalesOpportunityInterestsSetup.sequenceNo]].
     * @returns A request builder for creating requests to retrieve one `SalesOpportunityInterestsSetup` entity based on its keys.
     */
    SalesOpportunityInterestsSetupRequestBuilder.prototype.getByKey = function (sequenceNo) {
        return new core_1.GetByKeyRequestBuilderV4(SalesOpportunityInterestsSetup_1.SalesOpportunityInterestsSetup, { SequenceNo: sequenceNo });
    };
    /**
     * Returns a request builder for querying all `SalesOpportunityInterestsSetup` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOpportunityInterestsSetup` entities.
     */
    SalesOpportunityInterestsSetupRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(SalesOpportunityInterestsSetup_1.SalesOpportunityInterestsSetup);
    };
    /**
     * Returns a request builder for creating a `SalesOpportunityInterestsSetup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOpportunityInterestsSetup`.
     */
    SalesOpportunityInterestsSetupRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(SalesOpportunityInterestsSetup_1.SalesOpportunityInterestsSetup, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SalesOpportunityInterestsSetup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOpportunityInterestsSetup`.
     */
    SalesOpportunityInterestsSetupRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(SalesOpportunityInterestsSetup_1.SalesOpportunityInterestsSetup, entity);
    };
    SalesOpportunityInterestsSetupRequestBuilder.prototype.delete = function (sequenceNoOrEntity) {
        return new core_1.DeleteRequestBuilderV4(SalesOpportunityInterestsSetup_1.SalesOpportunityInterestsSetup, sequenceNoOrEntity instanceof SalesOpportunityInterestsSetup_1.SalesOpportunityInterestsSetup ? sequenceNoOrEntity : { SequenceNo: sequenceNoOrEntity });
    };
    return SalesOpportunityInterestsSetupRequestBuilder;
}(core_1.RequestBuilder));
exports.SalesOpportunityInterestsSetupRequestBuilder = SalesOpportunityInterestsSetupRequestBuilder;
//# sourceMappingURL=SalesOpportunityInterestsSetupRequestBuilder.js.map