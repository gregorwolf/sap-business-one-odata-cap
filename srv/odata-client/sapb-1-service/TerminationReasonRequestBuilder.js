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
exports.TerminationReasonRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var TerminationReason_1 = require("./TerminationReason");
/**
 * Request builder class for operations supported on the [[TerminationReason]] entity.
 */
var TerminationReasonRequestBuilder = /** @class */ (function (_super) {
    __extends(TerminationReasonRequestBuilder, _super);
    function TerminationReasonRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TerminationReason` entity based on its keys.
     * @param reasonId Key property. See [[TerminationReason.reasonId]].
     * @returns A request builder for creating requests to retrieve one `TerminationReason` entity based on its keys.
     */
    TerminationReasonRequestBuilder.prototype.getByKey = function (reasonId) {
        return new v4_1.GetByKeyRequestBuilder(TerminationReason_1.TerminationReason, { ReasonID: reasonId });
    };
    /**
     * Returns a request builder for querying all `TerminationReason` entities.
     * @returns A request builder for creating requests to retrieve all `TerminationReason` entities.
     */
    TerminationReasonRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(TerminationReason_1.TerminationReason);
    };
    /**
     * Returns a request builder for creating a `TerminationReason` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TerminationReason`.
     */
    TerminationReasonRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(TerminationReason_1.TerminationReason, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TerminationReason`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TerminationReason`.
     */
    TerminationReasonRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(TerminationReason_1.TerminationReason, entity);
    };
    TerminationReasonRequestBuilder.prototype.delete = function (reasonIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(TerminationReason_1.TerminationReason, reasonIdOrEntity instanceof TerminationReason_1.TerminationReason ? reasonIdOrEntity : { ReasonID: reasonIdOrEntity });
    };
    return TerminationReasonRequestBuilder;
}(v4_1.RequestBuilder));
exports.TerminationReasonRequestBuilder = TerminationReasonRequestBuilder;
//# sourceMappingURL=TerminationReasonRequestBuilder.js.map