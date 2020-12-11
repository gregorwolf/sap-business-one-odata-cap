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
exports.SerialNumberDetailsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SerialNumberDetails_1 = require("./SerialNumberDetails");
/**
 * Request builder class for operations supported on the [[SerialNumberDetails]] entity.
 */
var SerialNumberDetailsRequestBuilder = /** @class */ (function (_super) {
    __extends(SerialNumberDetailsRequestBuilder, _super);
    function SerialNumberDetailsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SerialNumberDetails` entity based on its keys.
     * @param docEntry Key property. See [[SerialNumberDetails.docEntry]].
     * @returns A request builder for creating requests to retrieve one `SerialNumberDetails` entity based on its keys.
     */
    SerialNumberDetailsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(SerialNumberDetails_1.SerialNumberDetails, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `SerialNumberDetails` entities.
     * @returns A request builder for creating requests to retrieve all `SerialNumberDetails` entities.
     */
    SerialNumberDetailsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(SerialNumberDetails_1.SerialNumberDetails);
    };
    /**
     * Returns a request builder for creating a `SerialNumberDetails` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SerialNumberDetails`.
     */
    SerialNumberDetailsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(SerialNumberDetails_1.SerialNumberDetails, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SerialNumberDetails`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SerialNumberDetails`.
     */
    SerialNumberDetailsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(SerialNumberDetails_1.SerialNumberDetails, entity);
    };
    SerialNumberDetailsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(SerialNumberDetails_1.SerialNumberDetails, docEntryOrEntity instanceof SerialNumberDetails_1.SerialNumberDetails ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return SerialNumberDetailsRequestBuilder;
}(core_1.RequestBuilder));
exports.SerialNumberDetailsRequestBuilder = SerialNumberDetailsRequestBuilder;
//# sourceMappingURL=SerialNumberDetailsRequestBuilder.js.map