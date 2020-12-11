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
exports.B1SessionsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var B1Sessions_1 = require("./B1Sessions");
/**
 * Request builder class for operations supported on the [[B1Sessions]] entity.
 */
var B1SessionsRequestBuilder = /** @class */ (function (_super) {
    __extends(B1SessionsRequestBuilder, _super);
    function B1SessionsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `B1Sessions` entity based on its keys.
     * @param sessionId Key property. See [[B1Sessions.sessionId]].
     * @returns A request builder for creating requests to retrieve one `B1Sessions` entity based on its keys.
     */
    B1SessionsRequestBuilder.prototype.getByKey = function (sessionId) {
        return new core_1.GetByKeyRequestBuilderV4(B1Sessions_1.B1Sessions, { SessionId: sessionId });
    };
    /**
     * Returns a request builder for querying all `B1Sessions` entities.
     * @returns A request builder for creating requests to retrieve all `B1Sessions` entities.
     */
    B1SessionsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(B1Sessions_1.B1Sessions);
    };
    /**
     * Returns a request builder for creating a `B1Sessions` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `B1Sessions`.
     */
    B1SessionsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(B1Sessions_1.B1Sessions, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `B1Sessions`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `B1Sessions`.
     */
    B1SessionsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(B1Sessions_1.B1Sessions, entity);
    };
    B1SessionsRequestBuilder.prototype.delete = function (sessionIdOrEntity) {
        return new core_1.DeleteRequestBuilderV4(B1Sessions_1.B1Sessions, sessionIdOrEntity instanceof B1Sessions_1.B1Sessions ? sessionIdOrEntity : { SessionId: sessionIdOrEntity });
    };
    return B1SessionsRequestBuilder;
}(core_1.RequestBuilder));
exports.B1SessionsRequestBuilder = B1SessionsRequestBuilder;
//# sourceMappingURL=B1SessionsRequestBuilder.js.map