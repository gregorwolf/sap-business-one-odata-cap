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
exports.QuotationsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Quotations_1 = require("./Quotations");
/**
 * Request builder class for operations supported on the [[Quotations]] entity.
 */
var QuotationsRequestBuilder = /** @class */ (function (_super) {
    __extends(QuotationsRequestBuilder, _super);
    function QuotationsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Quotations` entity based on its keys.
     * @param docEntry Key property. See [[Quotations.docEntry]].
     * @returns A request builder for creating requests to retrieve one `Quotations` entity based on its keys.
     */
    QuotationsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(Quotations_1.Quotations, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `Quotations` entities.
     * @returns A request builder for creating requests to retrieve all `Quotations` entities.
     */
    QuotationsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Quotations_1.Quotations);
    };
    /**
     * Returns a request builder for creating a `Quotations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Quotations`.
     */
    QuotationsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Quotations_1.Quotations, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Quotations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Quotations`.
     */
    QuotationsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Quotations_1.Quotations, entity);
    };
    QuotationsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(Quotations_1.Quotations, docEntryOrEntity instanceof Quotations_1.Quotations ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return QuotationsRequestBuilder;
}(v4_1.RequestBuilder));
exports.QuotationsRequestBuilder = QuotationsRequestBuilder;
//# sourceMappingURL=QuotationsRequestBuilder.js.map