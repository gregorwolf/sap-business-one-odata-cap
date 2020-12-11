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
exports.ValueMappingCommunicationRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ValueMappingCommunication_1 = require("./ValueMappingCommunication");
/**
 * Request builder class for operations supported on the [[ValueMappingCommunication]] entity.
 */
var ValueMappingCommunicationRequestBuilder = /** @class */ (function (_super) {
    __extends(ValueMappingCommunicationRequestBuilder, _super);
    function ValueMappingCommunicationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ValueMappingCommunication` entity based on its keys.
     * @param absEntry Key property. See [[ValueMappingCommunication.absEntry]].
     * @returns A request builder for creating requests to retrieve one `ValueMappingCommunication` entity based on its keys.
     */
    ValueMappingCommunicationRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(ValueMappingCommunication_1.ValueMappingCommunication, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `ValueMappingCommunication` entities.
     * @returns A request builder for creating requests to retrieve all `ValueMappingCommunication` entities.
     */
    ValueMappingCommunicationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ValueMappingCommunication_1.ValueMappingCommunication);
    };
    /**
     * Returns a request builder for creating a `ValueMappingCommunication` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ValueMappingCommunication`.
     */
    ValueMappingCommunicationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ValueMappingCommunication_1.ValueMappingCommunication, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ValueMappingCommunication`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ValueMappingCommunication`.
     */
    ValueMappingCommunicationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ValueMappingCommunication_1.ValueMappingCommunication, entity);
    };
    ValueMappingCommunicationRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ValueMappingCommunication_1.ValueMappingCommunication, absEntryOrEntity instanceof ValueMappingCommunication_1.ValueMappingCommunication ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return ValueMappingCommunicationRequestBuilder;
}(core_1.RequestBuilder));
exports.ValueMappingCommunicationRequestBuilder = ValueMappingCommunicationRequestBuilder;
//# sourceMappingURL=ValueMappingCommunicationRequestBuilder.js.map