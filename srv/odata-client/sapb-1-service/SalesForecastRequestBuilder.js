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
exports.SalesForecastRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(SalesForecast_1.SalesForecast, { Numerator: numerator });
    };
    /**
     * Returns a request builder for querying all `SalesForecast` entities.
     * @returns A request builder for creating requests to retrieve all `SalesForecast` entities.
     */
    SalesForecastRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(SalesForecast_1.SalesForecast);
    };
    /**
     * Returns a request builder for creating a `SalesForecast` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesForecast`.
     */
    SalesForecastRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(SalesForecast_1.SalesForecast, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SalesForecast`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesForecast`.
     */
    SalesForecastRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(SalesForecast_1.SalesForecast, entity);
    };
    SalesForecastRequestBuilder.prototype.delete = function (numeratorOrEntity) {
        return new core_1.DeleteRequestBuilderV4(SalesForecast_1.SalesForecast, numeratorOrEntity instanceof SalesForecast_1.SalesForecast ? numeratorOrEntity : { Numerator: numeratorOrEntity });
    };
    return SalesForecastRequestBuilder;
}(core_1.RequestBuilder));
exports.SalesForecastRequestBuilder = SalesForecastRequestBuilder;
//# sourceMappingURL=SalesForecastRequestBuilder.js.map