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
exports.Attachments2RequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Attachments2_1 = require("./Attachments2");
/**
 * Request builder class for operations supported on the [[Attachments2]] entity.
 */
var Attachments2RequestBuilder = /** @class */ (function (_super) {
    __extends(Attachments2RequestBuilder, _super);
    function Attachments2RequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Attachments2` entity based on its keys.
     * @param absoluteEntry Key property. See [[Attachments2.absoluteEntry]].
     * @returns A request builder for creating requests to retrieve one `Attachments2` entity based on its keys.
     */
    Attachments2RequestBuilder.prototype.getByKey = function (absoluteEntry) {
        return new v4_1.GetByKeyRequestBuilder(Attachments2_1.Attachments2, { AbsoluteEntry: absoluteEntry });
    };
    /**
     * Returns a request builder for querying all `Attachments2` entities.
     * @returns A request builder for creating requests to retrieve all `Attachments2` entities.
     */
    Attachments2RequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Attachments2_1.Attachments2);
    };
    /**
     * Returns a request builder for creating a `Attachments2` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Attachments2`.
     */
    Attachments2RequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Attachments2_1.Attachments2, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Attachments2`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Attachments2`.
     */
    Attachments2RequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Attachments2_1.Attachments2, entity);
    };
    Attachments2RequestBuilder.prototype.delete = function (absoluteEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(Attachments2_1.Attachments2, absoluteEntryOrEntity instanceof Attachments2_1.Attachments2 ? absoluteEntryOrEntity : { AbsoluteEntry: absoluteEntryOrEntity });
    };
    return Attachments2RequestBuilder;
}(v4_1.RequestBuilder));
exports.Attachments2RequestBuilder = Attachments2RequestBuilder;
//# sourceMappingURL=Attachments2RequestBuilder.js.map