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
exports.BrazilFuelIndexersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var BrazilFuelIndexers_1 = require("./BrazilFuelIndexers");
/**
 * Request builder class for operations supported on the [[BrazilFuelIndexers]] entity.
 */
var BrazilFuelIndexersRequestBuilder = /** @class */ (function (_super) {
    __extends(BrazilFuelIndexersRequestBuilder, _super);
    function BrazilFuelIndexersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BrazilFuelIndexers` entity based on its keys.
     * @param fuelId Key property. See [[BrazilFuelIndexers.fuelId]].
     * @returns A request builder for creating requests to retrieve one `BrazilFuelIndexers` entity based on its keys.
     */
    BrazilFuelIndexersRequestBuilder.prototype.getByKey = function (fuelId) {
        return new v4_1.GetByKeyRequestBuilder(BrazilFuelIndexers_1.BrazilFuelIndexers, { FuelID: fuelId });
    };
    /**
     * Returns a request builder for querying all `BrazilFuelIndexers` entities.
     * @returns A request builder for creating requests to retrieve all `BrazilFuelIndexers` entities.
     */
    BrazilFuelIndexersRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(BrazilFuelIndexers_1.BrazilFuelIndexers);
    };
    /**
     * Returns a request builder for creating a `BrazilFuelIndexers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BrazilFuelIndexers`.
     */
    BrazilFuelIndexersRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(BrazilFuelIndexers_1.BrazilFuelIndexers, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BrazilFuelIndexers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BrazilFuelIndexers`.
     */
    BrazilFuelIndexersRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(BrazilFuelIndexers_1.BrazilFuelIndexers, entity);
    };
    BrazilFuelIndexersRequestBuilder.prototype.delete = function (fuelIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(BrazilFuelIndexers_1.BrazilFuelIndexers, fuelIdOrEntity instanceof BrazilFuelIndexers_1.BrazilFuelIndexers ? fuelIdOrEntity : { FuelID: fuelIdOrEntity });
    };
    return BrazilFuelIndexersRequestBuilder;
}(v4_1.RequestBuilder));
exports.BrazilFuelIndexersRequestBuilder = BrazilFuelIndexersRequestBuilder;
//# sourceMappingURL=BrazilFuelIndexersRequestBuilder.js.map