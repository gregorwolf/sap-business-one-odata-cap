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
exports.InvoicesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Invoices_1 = require("./Invoices");
/**
 * Request builder class for operations supported on the [[Invoices]] entity.
 */
var InvoicesRequestBuilder = /** @class */ (function (_super) {
    __extends(InvoicesRequestBuilder, _super);
    function InvoicesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Invoices` entity based on its keys.
     * @param docEntry Key property. See [[Invoices.docEntry]].
     * @returns A request builder for creating requests to retrieve one `Invoices` entity based on its keys.
     */
    InvoicesRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(Invoices_1.Invoices, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `Invoices` entities.
     * @returns A request builder for creating requests to retrieve all `Invoices` entities.
     */
    InvoicesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Invoices_1.Invoices);
    };
    /**
     * Returns a request builder for creating a `Invoices` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Invoices`.
     */
    InvoicesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Invoices_1.Invoices, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Invoices`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Invoices`.
     */
    InvoicesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Invoices_1.Invoices, entity);
    };
    InvoicesRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Invoices_1.Invoices, docEntryOrEntity instanceof Invoices_1.Invoices ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return InvoicesRequestBuilder;
}(core_1.RequestBuilder));
exports.InvoicesRequestBuilder = InvoicesRequestBuilder;
//# sourceMappingURL=InvoicesRequestBuilder.js.map