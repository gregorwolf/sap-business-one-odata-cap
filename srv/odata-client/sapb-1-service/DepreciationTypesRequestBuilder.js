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
exports.DepreciationTypesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var DepreciationTypes_1 = require("./DepreciationTypes");
/**
 * Request builder class for operations supported on the [[DepreciationTypes]] entity.
 */
var DepreciationTypesRequestBuilder = /** @class */ (function (_super) {
    __extends(DepreciationTypesRequestBuilder, _super);
    function DepreciationTypesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DepreciationTypes` entity based on its keys.
     * @param code Key property. See [[DepreciationTypes.code]].
     * @returns A request builder for creating requests to retrieve one `DepreciationTypes` entity based on its keys.
     */
    DepreciationTypesRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(DepreciationTypes_1.DepreciationTypes, { Code: code });
    };
    /**
     * Returns a request builder for querying all `DepreciationTypes` entities.
     * @returns A request builder for creating requests to retrieve all `DepreciationTypes` entities.
     */
    DepreciationTypesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(DepreciationTypes_1.DepreciationTypes);
    };
    /**
     * Returns a request builder for creating a `DepreciationTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DepreciationTypes`.
     */
    DepreciationTypesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(DepreciationTypes_1.DepreciationTypes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DepreciationTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DepreciationTypes`.
     */
    DepreciationTypesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(DepreciationTypes_1.DepreciationTypes, entity);
    };
    DepreciationTypesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(DepreciationTypes_1.DepreciationTypes, codeOrEntity instanceof DepreciationTypes_1.DepreciationTypes ? codeOrEntity : { Code: codeOrEntity });
    };
    return DepreciationTypesRequestBuilder;
}(v4_1.RequestBuilder));
exports.DepreciationTypesRequestBuilder = DepreciationTypesRequestBuilder;
//# sourceMappingURL=DepreciationTypesRequestBuilder.js.map