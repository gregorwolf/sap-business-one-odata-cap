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
exports.CertificateSeriesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var CertificateSeries_1 = require("./CertificateSeries");
/**
 * Request builder class for operations supported on the [[CertificateSeries]] entity.
 */
var CertificateSeriesRequestBuilder = /** @class */ (function (_super) {
    __extends(CertificateSeriesRequestBuilder, _super);
    function CertificateSeriesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CertificateSeries` entity based on its keys.
     * @param absEntry Key property. See [[CertificateSeries.absEntry]].
     * @returns A request builder for creating requests to retrieve one `CertificateSeries` entity based on its keys.
     */
    CertificateSeriesRequestBuilder.prototype.getByKey = function (absEntry) {
        return new v4_1.GetByKeyRequestBuilder(CertificateSeries_1.CertificateSeries, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `CertificateSeries` entities.
     * @returns A request builder for creating requests to retrieve all `CertificateSeries` entities.
     */
    CertificateSeriesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(CertificateSeries_1.CertificateSeries);
    };
    /**
     * Returns a request builder for creating a `CertificateSeries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CertificateSeries`.
     */
    CertificateSeriesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(CertificateSeries_1.CertificateSeries, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CertificateSeries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CertificateSeries`.
     */
    CertificateSeriesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(CertificateSeries_1.CertificateSeries, entity);
    };
    CertificateSeriesRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(CertificateSeries_1.CertificateSeries, absEntryOrEntity instanceof CertificateSeries_1.CertificateSeries ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return CertificateSeriesRequestBuilder;
}(v4_1.RequestBuilder));
exports.CertificateSeriesRequestBuilder = CertificateSeriesRequestBuilder;
//# sourceMappingURL=CertificateSeriesRequestBuilder.js.map