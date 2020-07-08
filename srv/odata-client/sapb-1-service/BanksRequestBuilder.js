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
exports.BanksRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Banks_1 = require("./Banks");
/**
 * Request builder class for operations supported on the [[Banks]] entity.
 */
var BanksRequestBuilder = /** @class */ (function (_super) {
    __extends(BanksRequestBuilder, _super);
    function BanksRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Banks` entity based on its keys.
     * @param absoluteEntry Key property. See [[Banks.absoluteEntry]].
     * @returns A request builder for creating requests to retrieve one `Banks` entity based on its keys.
     */
    BanksRequestBuilder.prototype.getByKey = function (absoluteEntry) {
        return new v4_1.GetByKeyRequestBuilder(Banks_1.Banks, { AbsoluteEntry: absoluteEntry });
    };
    /**
     * Returns a request builder for querying all `Banks` entities.
     * @returns A request builder for creating requests to retrieve all `Banks` entities.
     */
    BanksRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Banks_1.Banks);
    };
    /**
     * Returns a request builder for creating a `Banks` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Banks`.
     */
    BanksRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Banks_1.Banks, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Banks`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Banks`.
     */
    BanksRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Banks_1.Banks, entity);
    };
    BanksRequestBuilder.prototype.delete = function (absoluteEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(Banks_1.Banks, absoluteEntryOrEntity instanceof Banks_1.Banks ? absoluteEntryOrEntity : { AbsoluteEntry: absoluteEntryOrEntity });
    };
    return BanksRequestBuilder;
}(v4_1.RequestBuilder));
exports.BanksRequestBuilder = BanksRequestBuilder;
//# sourceMappingURL=BanksRequestBuilder.js.map