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
exports.Attachments2RequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(Attachments2_1.Attachments2, { AbsoluteEntry: absoluteEntry });
    };
    /**
     * Returns a request builder for querying all `Attachments2` entities.
     * @returns A request builder for creating requests to retrieve all `Attachments2` entities.
     */
    Attachments2RequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Attachments2_1.Attachments2);
    };
    /**
     * Returns a request builder for creating a `Attachments2` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Attachments2`.
     */
    Attachments2RequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Attachments2_1.Attachments2, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Attachments2`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Attachments2`.
     */
    Attachments2RequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Attachments2_1.Attachments2, entity);
    };
    Attachments2RequestBuilder.prototype.delete = function (absoluteEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Attachments2_1.Attachments2, absoluteEntryOrEntity instanceof Attachments2_1.Attachments2 ? absoluteEntryOrEntity : { AbsoluteEntry: absoluteEntryOrEntity });
    };
    return Attachments2RequestBuilder;
}(core_1.RequestBuilder));
exports.Attachments2RequestBuilder = Attachments2RequestBuilder;
//# sourceMappingURL=Attachments2RequestBuilder.js.map