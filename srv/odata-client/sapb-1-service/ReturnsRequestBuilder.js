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
exports.ReturnsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Returns_1 = require("./Returns");
/**
 * Request builder class for operations supported on the [[Returns]] entity.
 */
var ReturnsRequestBuilder = /** @class */ (function (_super) {
    __extends(ReturnsRequestBuilder, _super);
    function ReturnsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Returns` entity based on its keys.
     * @param docEntry Key property. See [[Returns.docEntry]].
     * @returns A request builder for creating requests to retrieve one `Returns` entity based on its keys.
     */
    ReturnsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(Returns_1.Returns, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `Returns` entities.
     * @returns A request builder for creating requests to retrieve all `Returns` entities.
     */
    ReturnsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Returns_1.Returns);
    };
    /**
     * Returns a request builder for creating a `Returns` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Returns`.
     */
    ReturnsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Returns_1.Returns, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Returns`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Returns`.
     */
    ReturnsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Returns_1.Returns, entity);
    };
    ReturnsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(Returns_1.Returns, docEntryOrEntity instanceof Returns_1.Returns ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return ReturnsRequestBuilder;
}(v4_1.RequestBuilder));
exports.ReturnsRequestBuilder = ReturnsRequestBuilder;
//# sourceMappingURL=ReturnsRequestBuilder.js.map