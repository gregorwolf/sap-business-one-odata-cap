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
exports.DepreciationAreasRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var DepreciationAreas_1 = require("./DepreciationAreas");
/**
 * Request builder class for operations supported on the [[DepreciationAreas]] entity.
 */
var DepreciationAreasRequestBuilder = /** @class */ (function (_super) {
    __extends(DepreciationAreasRequestBuilder, _super);
    function DepreciationAreasRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DepreciationAreas` entity based on its keys.
     * @param code Key property. See [[DepreciationAreas.code]].
     * @returns A request builder for creating requests to retrieve one `DepreciationAreas` entity based on its keys.
     */
    DepreciationAreasRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(DepreciationAreas_1.DepreciationAreas, { Code: code });
    };
    /**
     * Returns a request builder for querying all `DepreciationAreas` entities.
     * @returns A request builder for creating requests to retrieve all `DepreciationAreas` entities.
     */
    DepreciationAreasRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(DepreciationAreas_1.DepreciationAreas);
    };
    /**
     * Returns a request builder for creating a `DepreciationAreas` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DepreciationAreas`.
     */
    DepreciationAreasRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(DepreciationAreas_1.DepreciationAreas, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DepreciationAreas`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DepreciationAreas`.
     */
    DepreciationAreasRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(DepreciationAreas_1.DepreciationAreas, entity);
    };
    DepreciationAreasRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(DepreciationAreas_1.DepreciationAreas, codeOrEntity instanceof DepreciationAreas_1.DepreciationAreas ? codeOrEntity : { Code: codeOrEntity });
    };
    return DepreciationAreasRequestBuilder;
}(v4_1.RequestBuilder));
exports.DepreciationAreasRequestBuilder = DepreciationAreasRequestBuilder;
//# sourceMappingURL=DepreciationAreasRequestBuilder.js.map