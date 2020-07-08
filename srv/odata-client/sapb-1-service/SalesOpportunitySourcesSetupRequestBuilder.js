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
exports.SalesOpportunitySourcesSetupRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var SalesOpportunitySourcesSetup_1 = require("./SalesOpportunitySourcesSetup");
/**
 * Request builder class for operations supported on the [[SalesOpportunitySourcesSetup]] entity.
 */
var SalesOpportunitySourcesSetupRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesOpportunitySourcesSetupRequestBuilder, _super);
    function SalesOpportunitySourcesSetupRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesOpportunitySourcesSetup` entity based on its keys.
     * @param sequenceNo Key property. See [[SalesOpportunitySourcesSetup.sequenceNo]].
     * @returns A request builder for creating requests to retrieve one `SalesOpportunitySourcesSetup` entity based on its keys.
     */
    SalesOpportunitySourcesSetupRequestBuilder.prototype.getByKey = function (sequenceNo) {
        return new v4_1.GetByKeyRequestBuilder(SalesOpportunitySourcesSetup_1.SalesOpportunitySourcesSetup, { SequenceNo: sequenceNo });
    };
    /**
     * Returns a request builder for querying all `SalesOpportunitySourcesSetup` entities.
     * @returns A request builder for creating requests to retrieve all `SalesOpportunitySourcesSetup` entities.
     */
    SalesOpportunitySourcesSetupRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(SalesOpportunitySourcesSetup_1.SalesOpportunitySourcesSetup);
    };
    /**
     * Returns a request builder for creating a `SalesOpportunitySourcesSetup` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesOpportunitySourcesSetup`.
     */
    SalesOpportunitySourcesSetupRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(SalesOpportunitySourcesSetup_1.SalesOpportunitySourcesSetup, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SalesOpportunitySourcesSetup`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesOpportunitySourcesSetup`.
     */
    SalesOpportunitySourcesSetupRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(SalesOpportunitySourcesSetup_1.SalesOpportunitySourcesSetup, entity);
    };
    SalesOpportunitySourcesSetupRequestBuilder.prototype.delete = function (sequenceNoOrEntity) {
        return new v4_1.DeleteRequestBuilder(SalesOpportunitySourcesSetup_1.SalesOpportunitySourcesSetup, sequenceNoOrEntity instanceof SalesOpportunitySourcesSetup_1.SalesOpportunitySourcesSetup ? sequenceNoOrEntity : { SequenceNo: sequenceNoOrEntity });
    };
    return SalesOpportunitySourcesSetupRequestBuilder;
}(v4_1.RequestBuilder));
exports.SalesOpportunitySourcesSetupRequestBuilder = SalesOpportunitySourcesSetupRequestBuilder;
//# sourceMappingURL=SalesOpportunitySourcesSetupRequestBuilder.js.map