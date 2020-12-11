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
exports.InventoryPostingsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var InventoryPostings_1 = require("./InventoryPostings");
/**
 * Request builder class for operations supported on the [[InventoryPostings]] entity.
 */
var InventoryPostingsRequestBuilder = /** @class */ (function (_super) {
    __extends(InventoryPostingsRequestBuilder, _super);
    function InventoryPostingsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `InventoryPostings` entity based on its keys.
     * @param documentEntry Key property. See [[InventoryPostings.documentEntry]].
     * @returns A request builder for creating requests to retrieve one `InventoryPostings` entity based on its keys.
     */
    InventoryPostingsRequestBuilder.prototype.getByKey = function (documentEntry) {
        return new core_1.GetByKeyRequestBuilderV4(InventoryPostings_1.InventoryPostings, { DocumentEntry: documentEntry });
    };
    /**
     * Returns a request builder for querying all `InventoryPostings` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryPostings` entities.
     */
    InventoryPostingsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(InventoryPostings_1.InventoryPostings);
    };
    /**
     * Returns a request builder for creating a `InventoryPostings` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryPostings`.
     */
    InventoryPostingsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(InventoryPostings_1.InventoryPostings, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InventoryPostings`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryPostings`.
     */
    InventoryPostingsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(InventoryPostings_1.InventoryPostings, entity);
    };
    InventoryPostingsRequestBuilder.prototype.delete = function (documentEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(InventoryPostings_1.InventoryPostings, documentEntryOrEntity instanceof InventoryPostings_1.InventoryPostings ? documentEntryOrEntity : { DocumentEntry: documentEntryOrEntity });
    };
    return InventoryPostingsRequestBuilder;
}(core_1.RequestBuilder));
exports.InventoryPostingsRequestBuilder = InventoryPostingsRequestBuilder;
//# sourceMappingURL=InventoryPostingsRequestBuilder.js.map