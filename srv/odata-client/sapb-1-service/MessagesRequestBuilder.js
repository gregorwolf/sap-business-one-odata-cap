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
exports.MessagesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Messages_1 = require("./Messages");
/**
 * Request builder class for operations supported on the [[Messages]] entity.
 */
var MessagesRequestBuilder = /** @class */ (function (_super) {
    __extends(MessagesRequestBuilder, _super);
    function MessagesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Messages` entity based on its keys.
     * @param code Key property. See [[Messages.code]].
     * @returns A request builder for creating requests to retrieve one `Messages` entity based on its keys.
     */
    MessagesRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(Messages_1.Messages, { Code: code });
    };
    /**
     * Returns a request builder for querying all `Messages` entities.
     * @returns A request builder for creating requests to retrieve all `Messages` entities.
     */
    MessagesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Messages_1.Messages);
    };
    /**
     * Returns a request builder for creating a `Messages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Messages`.
     */
    MessagesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Messages_1.Messages, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Messages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Messages`.
     */
    MessagesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Messages_1.Messages, entity);
    };
    MessagesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Messages_1.Messages, codeOrEntity instanceof Messages_1.Messages ? codeOrEntity : { Code: codeOrEntity });
    };
    return MessagesRequestBuilder;
}(core_1.RequestBuilder));
exports.MessagesRequestBuilder = MessagesRequestBuilder;
//# sourceMappingURL=MessagesRequestBuilder.js.map