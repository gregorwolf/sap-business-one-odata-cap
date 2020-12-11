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
exports.CostElementsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CostElements_1 = require("./CostElements");
/**
 * Request builder class for operations supported on the [[CostElements]] entity.
 */
var CostElementsRequestBuilder = /** @class */ (function (_super) {
    __extends(CostElementsRequestBuilder, _super);
    function CostElementsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CostElements` entity based on its keys.
     * @param code Key property. See [[CostElements.code]].
     * @returns A request builder for creating requests to retrieve one `CostElements` entity based on its keys.
     */
    CostElementsRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(CostElements_1.CostElements, { Code: code });
    };
    /**
     * Returns a request builder for querying all `CostElements` entities.
     * @returns A request builder for creating requests to retrieve all `CostElements` entities.
     */
    CostElementsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(CostElements_1.CostElements);
    };
    /**
     * Returns a request builder for creating a `CostElements` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CostElements`.
     */
    CostElementsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(CostElements_1.CostElements, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CostElements`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CostElements`.
     */
    CostElementsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(CostElements_1.CostElements, entity);
    };
    CostElementsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(CostElements_1.CostElements, codeOrEntity instanceof CostElements_1.CostElements ? codeOrEntity : { Code: codeOrEntity });
    };
    return CostElementsRequestBuilder;
}(core_1.RequestBuilder));
exports.CostElementsRequestBuilder = CostElementsRequestBuilder;
//# sourceMappingURL=CostElementsRequestBuilder.js.map