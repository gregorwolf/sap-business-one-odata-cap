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
exports.PosDailySummaryRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var PosDailySummary_1 = require("./PosDailySummary");
/**
 * Request builder class for operations supported on the [[PosDailySummary]] entity.
 */
var PosDailySummaryRequestBuilder = /** @class */ (function (_super) {
    __extends(PosDailySummaryRequestBuilder, _super);
    function PosDailySummaryRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PosDailySummary` entity based on its keys.
     * @param absEntry Key property. See [[PosDailySummary.absEntry]].
     * @returns A request builder for creating requests to retrieve one `PosDailySummary` entity based on its keys.
     */
    PosDailySummaryRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(PosDailySummary_1.PosDailySummary, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `PosDailySummary` entities.
     * @returns A request builder for creating requests to retrieve all `PosDailySummary` entities.
     */
    PosDailySummaryRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(PosDailySummary_1.PosDailySummary);
    };
    /**
     * Returns a request builder for creating a `PosDailySummary` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PosDailySummary`.
     */
    PosDailySummaryRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(PosDailySummary_1.PosDailySummary, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PosDailySummary`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PosDailySummary`.
     */
    PosDailySummaryRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(PosDailySummary_1.PosDailySummary, entity);
    };
    PosDailySummaryRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(PosDailySummary_1.PosDailySummary, absEntryOrEntity instanceof PosDailySummary_1.PosDailySummary ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return PosDailySummaryRequestBuilder;
}(core_1.RequestBuilder));
exports.PosDailySummaryRequestBuilder = PosDailySummaryRequestBuilder;
//# sourceMappingURL=PosDailySummaryRequestBuilder.js.map