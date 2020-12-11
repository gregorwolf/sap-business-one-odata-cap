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
exports.SalesOpportunityReasonsSetupRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SalesOpportunityReasonsSetup_1 = require("./SalesOpportunityReasonsSetup");
/**
 * Request builder class for operations supported on the [[SalesOpportunityReasonsSetup]] entity.
 */
var SalesOpportunityReasonsSetupRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesOpportunityReasonsSetupRequestBuilder, _super);
    function SalesOpportunityReasonsSetupRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesOpportunityReasonsSetup` entity based on its keys.
     * @param sequenceNo Key property. See [[SalesOpportunityReasonsSetup.sequenceNo]].
     * @returns A request builder for creating requests to retrieve one `SalesOpportunityReasonsSetup` entity based on its keys.
     */
    SalesOpportunityReasonsSetupRequestBuilder.prototype.getByKey = function (sequenceNo) {
        return new core_1.GetByKeyRequestBuilderV4(SalesOpportunityReasonsSetup_1.SalesOpportunityReasonsSetup, { SequenceNo: sequenceNo });
    };
    /**
     * Returns a request builder for querying all `SalesOpportunityReasonsSetup` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOpportunityReasonsSetup` entities.
     */
    SalesOpportunityReasonsSetupRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(SalesOpportunityReasonsSetup_1.SalesOpportunityReasonsSetup);
    };
    /**
     * Returns a request builder for creating a `SalesOpportunityReasonsSetup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOpportunityReasonsSetup`.
     */
    SalesOpportunityReasonsSetupRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(SalesOpportunityReasonsSetup_1.SalesOpportunityReasonsSetup, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SalesOpportunityReasonsSetup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOpportunityReasonsSetup`.
     */
    SalesOpportunityReasonsSetupRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(SalesOpportunityReasonsSetup_1.SalesOpportunityReasonsSetup, entity);
    };
    SalesOpportunityReasonsSetupRequestBuilder.prototype.delete = function (sequenceNoOrEntity) {
        return new core_1.DeleteRequestBuilderV4(SalesOpportunityReasonsSetup_1.SalesOpportunityReasonsSetup, sequenceNoOrEntity instanceof SalesOpportunityReasonsSetup_1.SalesOpportunityReasonsSetup ? sequenceNoOrEntity : { SequenceNo: sequenceNoOrEntity });
    };
    return SalesOpportunityReasonsSetupRequestBuilder;
}(core_1.RequestBuilder));
exports.SalesOpportunityReasonsSetupRequestBuilder = SalesOpportunityReasonsSetupRequestBuilder;
//# sourceMappingURL=SalesOpportunityReasonsSetupRequestBuilder.js.map