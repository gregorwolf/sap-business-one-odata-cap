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
exports.BrazilStringIndexersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var BrazilStringIndexers_1 = require("./BrazilStringIndexers");
/**
 * Request builder class for operations supported on the [[BrazilStringIndexers]] entity.
 */
var BrazilStringIndexersRequestBuilder = /** @class */ (function (_super) {
    __extends(BrazilStringIndexersRequestBuilder, _super);
    function BrazilStringIndexersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BrazilStringIndexers` entity based on its keys.
     * @param id Key property. See [[BrazilStringIndexers.id]].
     * @returns A request builder for creating requests to retrieve one `BrazilStringIndexers` entity based on its keys.
     */
    BrazilStringIndexersRequestBuilder.prototype.getByKey = function (id) {
        return new v4_1.GetByKeyRequestBuilder(BrazilStringIndexers_1.BrazilStringIndexers, { ID: id });
    };
    /**
     * Returns a request builder for querying all `BrazilStringIndexers` entities.
     * @returns A request builder for creating requests to retrieve all `BrazilStringIndexers` entities.
     */
    BrazilStringIndexersRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(BrazilStringIndexers_1.BrazilStringIndexers);
    };
    /**
     * Returns a request builder for creating a `BrazilStringIndexers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BrazilStringIndexers`.
     */
    BrazilStringIndexersRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(BrazilStringIndexers_1.BrazilStringIndexers, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BrazilStringIndexers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BrazilStringIndexers`.
     */
    BrazilStringIndexersRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(BrazilStringIndexers_1.BrazilStringIndexers, entity);
    };
    BrazilStringIndexersRequestBuilder.prototype.delete = function (idOrEntity) {
        return new v4_1.DeleteRequestBuilder(BrazilStringIndexers_1.BrazilStringIndexers, idOrEntity instanceof BrazilStringIndexers_1.BrazilStringIndexers ? idOrEntity : { ID: idOrEntity });
    };
    return BrazilStringIndexersRequestBuilder;
}(v4_1.RequestBuilder));
exports.BrazilStringIndexersRequestBuilder = BrazilStringIndexersRequestBuilder;
//# sourceMappingURL=BrazilStringIndexersRequestBuilder.js.map