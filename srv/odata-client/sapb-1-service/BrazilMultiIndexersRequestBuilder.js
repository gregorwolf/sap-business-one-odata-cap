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
exports.BrazilMultiIndexersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(BrazilMultiIndexers_1.BrazilMultiIndexers, { ID: id });
    };
    /**
     * Returns a request builder for querying all `BrazilMultiIndexers` entities.
     * @returns A request builder for creating requests to retrieve all `BrazilMultiIndexers` entities.
     */
    BrazilMultiIndexersRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BrazilMultiIndexers_1.BrazilMultiIndexers);
    };
    /**
     * Returns a request builder for creating a `BrazilMultiIndexers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BrazilMultiIndexers`.
     */
    BrazilMultiIndexersRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BrazilMultiIndexers_1.BrazilMultiIndexers, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BrazilMultiIndexers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BrazilMultiIndexers`.
     */
    BrazilMultiIndexersRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BrazilMultiIndexers_1.BrazilMultiIndexers, entity);
    };
    BrazilMultiIndexersRequestBuilder.prototype.delete = function (idOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BrazilMultiIndexers_1.BrazilMultiIndexers, idOrEntity instanceof BrazilMultiIndexers_1.BrazilMultiIndexers ? idOrEntity : { ID: idOrEntity });
    };
    return BrazilMultiIndexersRequestBuilder;
}(core_1.RequestBuilder));
exports.BrazilMultiIndexersRequestBuilder = BrazilMultiIndexersRequestBuilder;
//# sourceMappingURL=BrazilMultiIndexersRequestBuilder.js.map