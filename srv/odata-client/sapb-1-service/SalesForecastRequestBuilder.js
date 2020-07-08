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
exports.SalesForecastRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var SalesForecast_1 = require("./SalesForecast");
/**
 * Request builder class for operations supported on the [[SalesForecast]] entity.
 */
var SalesForecastRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesForecastRequestBuilder, _super);
    function SalesForecastRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesForecast` entity based on its keys.
     * @param numerator Key property. See [[SalesForecast.numerator]].
     * @returns A request builder for creating requests to retrieve one `SalesForecast` entity based on its keys.
     */
    SalesForecastRequestBuilder.prototype.getByKey = function (numerator) {
        return new v4_1.GetByKeyRequestBuilder(SalesForecast_1.SalesForecast, { Numerator: numerator });
    };
    /**
     * Returns a request builder for querying all `SalesForecast` entities.
     * @returns A request builder for creating requests to retrieve all `SalesForecast` entities.
     */
    SalesForecastRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(SalesForecast_1.SalesForecast);
    };
    /**
     * Returns a request builder for creating a `SalesForecast` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesForecast`.
     */
    SalesForecastRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(SalesForecast_1.SalesForecast, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SalesForecast`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesForecast`.
     */
    SalesForecastRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(SalesForecast_1.SalesForecast, entity);
    };
    SalesForecastRequestBuilder.prototype.delete = function (numeratorOrEntity) {
        return new v4_1.DeleteRequestBuilder(SalesForecast_1.SalesForecast, numeratorOrEntity instanceof SalesForecast_1.SalesForecast ? numeratorOrEntity : { Numerator: numeratorOrEntity });
    };
    return SalesForecastRequestBuilder;
}(v4_1.RequestBuilder));
exports.SalesForecastRequestBuilder = SalesForecastRequestBuilder;
//# sourceMappingURL=SalesForecastRequestBuilder.js.map