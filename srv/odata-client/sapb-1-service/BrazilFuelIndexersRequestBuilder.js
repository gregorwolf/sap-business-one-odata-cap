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
exports.BrazilFuelIndexersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(BrazilFuelIndexers_1.BrazilFuelIndexers, { FuelID: fuelId });
    };
    /**
     * Returns a request builder for querying all `BrazilFuelIndexers` entities.
     * @returns A request builder for creating requests to retrieve all `BrazilFuelIndexers` entities.
     */
    BrazilFuelIndexersRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BrazilFuelIndexers_1.BrazilFuelIndexers);
    };
    /**
     * Returns a request builder for creating a `BrazilFuelIndexers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BrazilFuelIndexers`.
     */
    BrazilFuelIndexersRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BrazilFuelIndexers_1.BrazilFuelIndexers, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BrazilFuelIndexers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BrazilFuelIndexers`.
     */
    BrazilFuelIndexersRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BrazilFuelIndexers_1.BrazilFuelIndexers, entity);
    };
    BrazilFuelIndexersRequestBuilder.prototype.delete = function (fuelIdOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BrazilFuelIndexers_1.BrazilFuelIndexers, fuelIdOrEntity instanceof BrazilFuelIndexers_1.BrazilFuelIndexers ? fuelIdOrEntity : { FuelID: fuelIdOrEntity });
    };
    return BrazilFuelIndexersRequestBuilder;
}(core_1.RequestBuilder));
exports.BrazilFuelIndexersRequestBuilder = BrazilFuelIndexersRequestBuilder;
//# sourceMappingURL=BrazilFuelIndexersRequestBuilder.js.map