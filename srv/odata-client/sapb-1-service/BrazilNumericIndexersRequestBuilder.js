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
exports.BrazilNumericIndexersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BrazilNumericIndexers_1 = require("./BrazilNumericIndexers");
/**
 * Request builder class for operations supported on the [[BrazilNumericIndexers]] entity.
 */
var BrazilNumericIndexersRequestBuilder = /** @class */ (function (_super) {
    __extends(BrazilNumericIndexersRequestBuilder, _super);
    function BrazilNumericIndexersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BrazilNumericIndexers` entity based on its keys.
     * @param id Key property. See [[BrazilNumericIndexers.id]].
     * @returns A request builder for creating requests to retrieve one `BrazilNumericIndexers` entity based on its keys.
     */
    BrazilNumericIndexersRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilderV4(BrazilNumericIndexers_1.BrazilNumericIndexers, { ID: id });
    };
    /**
     * Returns a request builder for querying all `BrazilNumericIndexers` entities.
     * @returns A request builder for creating requests to retrieve all `BrazilNumericIndexers` entities.
     */
    BrazilNumericIndexersRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BrazilNumericIndexers_1.BrazilNumericIndexers);
    };
    /**
     * Returns a request builder for creating a `BrazilNumericIndexers` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BrazilNumericIndexers`.
     */
    BrazilNumericIndexersRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BrazilNumericIndexers_1.BrazilNumericIndexers, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BrazilNumericIndexers`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BrazilNumericIndexers`.
     */
    BrazilNumericIndexersRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BrazilNumericIndexers_1.BrazilNumericIndexers, entity);
    };
    BrazilNumericIndexersRequestBuilder.prototype.delete = function (idOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BrazilNumericIndexers_1.BrazilNumericIndexers, idOrEntity instanceof BrazilNumericIndexers_1.BrazilNumericIndexers ? idOrEntity : { ID: idOrEntity });
    };
    return BrazilNumericIndexersRequestBuilder;
}(core_1.RequestBuilder));
exports.BrazilNumericIndexersRequestBuilder = BrazilNumericIndexersRequestBuilder;
//# sourceMappingURL=BrazilNumericIndexersRequestBuilder.js.map