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
exports.BrazilMultiIndexersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var BrazilMultiIndexers_1 = require("./BrazilMultiIndexers");
/**
 * Request builder class for operations supported on the [[BrazilMultiIndexers]] entity.
 */
var BrazilMultiIndexersRequestBuilder = /** @class */ (function (_super) {
    __extends(BrazilMultiIndexersRequestBuilder, _super);
    function BrazilMultiIndexersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BrazilMultiIndexers` entity based on its keys.
     * @param id Key property. See [[BrazilMultiIndexers.id]].
     * @returns A request builder for creating requests to retrieve one `BrazilMultiIndexers` entity based on its keys.
     */
    BrazilMultiIndexersRequestBuilder.prototype.getByKey = function (id) {
        return new v4_1.GetByKeyRequestBuilder(BrazilMultiIndexers_1.BrazilMultiIndexers, { ID: id });
    };
    /**
     * Returns a request builder for querying all `BrazilMultiIndexers` entities.
     * @returns A request builder for creating requests to retrieve all `BrazilMultiIndexers` entities.
     */
    BrazilMultiIndexersRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(BrazilMultiIndexers_1.BrazilMultiIndexers);
    };
    /**
     * Returns a request builder for creating a `BrazilMultiIndexers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BrazilMultiIndexers`.
     */
    BrazilMultiIndexersRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(BrazilMultiIndexers_1.BrazilMultiIndexers, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BrazilMultiIndexers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BrazilMultiIndexers`.
     */
    BrazilMultiIndexersRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(BrazilMultiIndexers_1.BrazilMultiIndexers, entity);
    };
    BrazilMultiIndexersRequestBuilder.prototype.delete = function (idOrEntity) {
        return new v4_1.DeleteRequestBuilder(BrazilMultiIndexers_1.BrazilMultiIndexers, idOrEntity instanceof BrazilMultiIndexers_1.BrazilMultiIndexers ? idOrEntity : { ID: idOrEntity });
    };
    return BrazilMultiIndexersRequestBuilder;
}(v4_1.RequestBuilder));
exports.BrazilMultiIndexersRequestBuilder = BrazilMultiIndexersRequestBuilder;
//# sourceMappingURL=BrazilMultiIndexersRequestBuilder.js.map