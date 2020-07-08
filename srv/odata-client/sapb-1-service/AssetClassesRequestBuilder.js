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
exports.AssetClassesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var AssetClasses_1 = require("./AssetClasses");
/**
 * Request builder class for operations supported on the [[AssetClasses]] entity.
 */
var AssetClassesRequestBuilder = /** @class */ (function (_super) {
    __extends(AssetClassesRequestBuilder, _super);
    function AssetClassesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AssetClasses` entity based on its keys.
     * @param code Key property. See [[AssetClasses.code]].
     * @returns A request builder for creating requests to retrieve one `AssetClasses` entity based on its keys.
     */
    AssetClassesRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(AssetClasses_1.AssetClasses, { Code: code });
    };
    /**
     * Returns a request builder for querying all `AssetClasses` entities.
     * @returns A request builder for creating requests to retrieve all `AssetClasses` entities.
     */
    AssetClassesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(AssetClasses_1.AssetClasses);
    };
    /**
     * Returns a request builder for creating a `AssetClasses` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetClasses`.
     */
    AssetClassesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(AssetClasses_1.AssetClasses, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AssetClasses`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetClasses`.
     */
    AssetClassesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(AssetClasses_1.AssetClasses, entity);
    };
    AssetClassesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(AssetClasses_1.AssetClasses, codeOrEntity instanceof AssetClasses_1.AssetClasses ? codeOrEntity : { Code: codeOrEntity });
    };
    return AssetClassesRequestBuilder;
}(v4_1.RequestBuilder));
exports.AssetClassesRequestBuilder = AssetClassesRequestBuilder;
//# sourceMappingURL=AssetClassesRequestBuilder.js.map