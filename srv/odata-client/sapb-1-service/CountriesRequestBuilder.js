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
exports.CountriesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Countries_1 = require("./Countries");
/**
 * Request builder class for operations supported on the [[Countries]] entity.
 */
var CountriesRequestBuilder = /** @class */ (function (_super) {
    __extends(CountriesRequestBuilder, _super);
    function CountriesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Countries` entity based on its keys.
     * @param code Key property. See [[Countries.code]].
     * @returns A request builder for creating requests to retrieve one `Countries` entity based on its keys.
     */
    CountriesRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(Countries_1.Countries, { Code: code });
    };
    /**
     * Returns a request builder for querying all `Countries` entities.
     * @returns A request builder for creating requests to retrieve all `Countries` entities.
     */
    CountriesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Countries_1.Countries);
    };
    /**
     * Returns a request builder for creating a `Countries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Countries`.
     */
    CountriesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Countries_1.Countries, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Countries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Countries`.
     */
    CountriesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Countries_1.Countries, entity);
    };
    CountriesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(Countries_1.Countries, codeOrEntity instanceof Countries_1.Countries ? codeOrEntity : { Code: codeOrEntity });
    };
    return CountriesRequestBuilder;
}(v4_1.RequestBuilder));
exports.CountriesRequestBuilder = CountriesRequestBuilder;
//# sourceMappingURL=CountriesRequestBuilder.js.map