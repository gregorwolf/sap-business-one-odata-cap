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
exports.FaAccountDeterminationsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var FaAccountDeterminations_1 = require("./FaAccountDeterminations");
/**
 * Request builder class for operations supported on the [[FaAccountDeterminations]] entity.
 */
var FaAccountDeterminationsRequestBuilder = /** @class */ (function (_super) {
    __extends(FaAccountDeterminationsRequestBuilder, _super);
    function FaAccountDeterminationsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FaAccountDeterminations` entity based on its keys.
     * @param code Key property. See [[FaAccountDeterminations.code]].
     * @returns A request builder for creating requests to retrieve one `FaAccountDeterminations` entity based on its keys.
     */
    FaAccountDeterminationsRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(FaAccountDeterminations_1.FaAccountDeterminations, { Code: code });
    };
    /**
     * Returns a request builder for querying all `FaAccountDeterminations` entities.
     * @returns A request builder for creating requests to retrieve all `FaAccountDeterminations` entities.
     */
    FaAccountDeterminationsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(FaAccountDeterminations_1.FaAccountDeterminations);
    };
    /**
     * Returns a request builder for creating a `FaAccountDeterminations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FaAccountDeterminations`.
     */
    FaAccountDeterminationsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(FaAccountDeterminations_1.FaAccountDeterminations, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FaAccountDeterminations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FaAccountDeterminations`.
     */
    FaAccountDeterminationsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(FaAccountDeterminations_1.FaAccountDeterminations, entity);
    };
    FaAccountDeterminationsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(FaAccountDeterminations_1.FaAccountDeterminations, codeOrEntity instanceof FaAccountDeterminations_1.FaAccountDeterminations ? codeOrEntity : { Code: codeOrEntity });
    };
    return FaAccountDeterminationsRequestBuilder;
}(core_1.RequestBuilder));
exports.FaAccountDeterminationsRequestBuilder = FaAccountDeterminationsRequestBuilder;
//# sourceMappingURL=FaAccountDeterminationsRequestBuilder.js.map