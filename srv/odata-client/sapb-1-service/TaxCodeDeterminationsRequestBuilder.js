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
exports.TaxCodeDeterminationsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var TaxCodeDeterminations_1 = require("./TaxCodeDeterminations");
/**
 * Request builder class for operations supported on the [[TaxCodeDeterminations]] entity.
 */
var TaxCodeDeterminationsRequestBuilder = /** @class */ (function (_super) {
    __extends(TaxCodeDeterminationsRequestBuilder, _super);
    function TaxCodeDeterminationsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TaxCodeDeterminations` entity based on its keys.
     * @param docEntry Key property. See [[TaxCodeDeterminations.docEntry]].
     * @returns A request builder for creating requests to retrieve one `TaxCodeDeterminations` entity based on its keys.
     */
    TaxCodeDeterminationsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(TaxCodeDeterminations_1.TaxCodeDeterminations, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `TaxCodeDeterminations` entities.
     * @returns A request builder for creating requests to retrieve all `TaxCodeDeterminations` entities.
     */
    TaxCodeDeterminationsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(TaxCodeDeterminations_1.TaxCodeDeterminations);
    };
    /**
     * Returns a request builder for creating a `TaxCodeDeterminations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TaxCodeDeterminations`.
     */
    TaxCodeDeterminationsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(TaxCodeDeterminations_1.TaxCodeDeterminations, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `TaxCodeDeterminations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TaxCodeDeterminations`.
     */
    TaxCodeDeterminationsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(TaxCodeDeterminations_1.TaxCodeDeterminations, entity);
    };
    TaxCodeDeterminationsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(TaxCodeDeterminations_1.TaxCodeDeterminations, docEntryOrEntity instanceof TaxCodeDeterminations_1.TaxCodeDeterminations ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return TaxCodeDeterminationsRequestBuilder;
}(core_1.RequestBuilder));
exports.TaxCodeDeterminationsRequestBuilder = TaxCodeDeterminationsRequestBuilder;
//# sourceMappingURL=TaxCodeDeterminationsRequestBuilder.js.map