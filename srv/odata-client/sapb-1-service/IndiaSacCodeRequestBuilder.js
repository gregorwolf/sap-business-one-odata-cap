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
exports.IndiaSacCodeRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var IndiaSacCode_1 = require("./IndiaSacCode");
/**
 * Request builder class for operations supported on the [[IndiaSacCode]] entity.
 */
var IndiaSacCodeRequestBuilder = /** @class */ (function (_super) {
    __extends(IndiaSacCodeRequestBuilder, _super);
    function IndiaSacCodeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `IndiaSacCode` entity based on its keys.
     * @param absEntry Key property. See [[IndiaSacCode.absEntry]].
     * @returns A request builder for creating requests to retrieve one `IndiaSacCode` entity based on its keys.
     */
    IndiaSacCodeRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(IndiaSacCode_1.IndiaSacCode, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `IndiaSacCode` entities.
     * @returns A request builder for creating requests to retrieve all `IndiaSacCode` entities.
     */
    IndiaSacCodeRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(IndiaSacCode_1.IndiaSacCode);
    };
    /**
     * Returns a request builder for creating a `IndiaSacCode` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `IndiaSacCode`.
     */
    IndiaSacCodeRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(IndiaSacCode_1.IndiaSacCode, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `IndiaSacCode`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `IndiaSacCode`.
     */
    IndiaSacCodeRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(IndiaSacCode_1.IndiaSacCode, entity);
    };
    IndiaSacCodeRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(IndiaSacCode_1.IndiaSacCode, absEntryOrEntity instanceof IndiaSacCode_1.IndiaSacCode ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return IndiaSacCodeRequestBuilder;
}(core_1.RequestBuilder));
exports.IndiaSacCodeRequestBuilder = IndiaSacCodeRequestBuilder;
//# sourceMappingURL=IndiaSacCodeRequestBuilder.js.map