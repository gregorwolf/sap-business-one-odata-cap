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
exports.DepreciationTypePoolsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var DepreciationTypePools_1 = require("./DepreciationTypePools");
/**
 * Request builder class for operations supported on the [[DepreciationTypePools]] entity.
 */
var DepreciationTypePoolsRequestBuilder = /** @class */ (function (_super) {
    __extends(DepreciationTypePoolsRequestBuilder, _super);
    function DepreciationTypePoolsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DepreciationTypePools` entity based on its keys.
     * @param code Key property. See [[DepreciationTypePools.code]].
     * @returns A request builder for creating requests to retrieve one `DepreciationTypePools` entity based on its keys.
     */
    DepreciationTypePoolsRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(DepreciationTypePools_1.DepreciationTypePools, { Code: code });
    };
    /**
     * Returns a request builder for querying all `DepreciationTypePools` entities.
     * @returns A request builder for creating requests to retrieve all `DepreciationTypePools` entities.
     */
    DepreciationTypePoolsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(DepreciationTypePools_1.DepreciationTypePools);
    };
    /**
     * Returns a request builder for creating a `DepreciationTypePools` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DepreciationTypePools`.
     */
    DepreciationTypePoolsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(DepreciationTypePools_1.DepreciationTypePools, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DepreciationTypePools`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DepreciationTypePools`.
     */
    DepreciationTypePoolsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(DepreciationTypePools_1.DepreciationTypePools, entity);
    };
    DepreciationTypePoolsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(DepreciationTypePools_1.DepreciationTypePools, codeOrEntity instanceof DepreciationTypePools_1.DepreciationTypePools ? codeOrEntity : { Code: codeOrEntity });
    };
    return DepreciationTypePoolsRequestBuilder;
}(v4_1.RequestBuilder));
exports.DepreciationTypePoolsRequestBuilder = DepreciationTypePoolsRequestBuilder;
//# sourceMappingURL=DepreciationTypePoolsRequestBuilder.js.map