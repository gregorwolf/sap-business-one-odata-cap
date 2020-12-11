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
exports.DraftsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Drafts_1 = require("./Drafts");
/**
 * Request builder class for operations supported on the [[Drafts]] entity.
 */
var DraftsRequestBuilder = /** @class */ (function (_super) {
    __extends(DraftsRequestBuilder, _super);
    function DraftsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Drafts` entity based on its keys.
     * @param docEntry Key property. See [[Drafts.docEntry]].
     * @returns A request builder for creating requests to retrieve one `Drafts` entity based on its keys.
     */
    DraftsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(Drafts_1.Drafts, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `Drafts` entities.
     * @returns A request builder for creating requests to retrieve all `Drafts` entities.
     */
    DraftsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Drafts_1.Drafts);
    };
    /**
     * Returns a request builder for creating a `Drafts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Drafts`.
     */
    DraftsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Drafts_1.Drafts, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Drafts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Drafts`.
     */
    DraftsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Drafts_1.Drafts, entity);
    };
    DraftsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Drafts_1.Drafts, docEntryOrEntity instanceof Drafts_1.Drafts ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return DraftsRequestBuilder;
}(core_1.RequestBuilder));
exports.DraftsRequestBuilder = DraftsRequestBuilder;
//# sourceMappingURL=DraftsRequestBuilder.js.map