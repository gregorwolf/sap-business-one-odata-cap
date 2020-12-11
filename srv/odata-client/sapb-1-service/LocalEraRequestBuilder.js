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
exports.LocalEraRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var LocalEra_1 = require("./LocalEra");
/**
 * Request builder class for operations supported on the [[LocalEra]] entity.
 */
var LocalEraRequestBuilder = /** @class */ (function (_super) {
    __extends(LocalEraRequestBuilder, _super);
    function LocalEraRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `LocalEra` entity based on its keys.
     * @param code Key property. See [[LocalEra.code]].
     * @returns A request builder for creating requests to retrieve one `LocalEra` entity based on its keys.
     */
    LocalEraRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(LocalEra_1.LocalEra, { Code: code });
    };
    /**
     * Returns a request builder for querying all `LocalEra` entities.
     * @returns A request builder for creating requests to retrieve all `LocalEra` entities.
     */
    LocalEraRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(LocalEra_1.LocalEra);
    };
    /**
     * Returns a request builder for creating a `LocalEra` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LocalEra`.
     */
    LocalEraRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(LocalEra_1.LocalEra, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `LocalEra`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LocalEra`.
     */
    LocalEraRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(LocalEra_1.LocalEra, entity);
    };
    LocalEraRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(LocalEra_1.LocalEra, codeOrEntity instanceof LocalEra_1.LocalEra ? codeOrEntity : { Code: codeOrEntity });
    };
    return LocalEraRequestBuilder;
}(core_1.RequestBuilder));
exports.LocalEraRequestBuilder = LocalEraRequestBuilder;
//# sourceMappingURL=LocalEraRequestBuilder.js.map