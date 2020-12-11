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
exports.AccrualTypesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var AccrualTypes_1 = require("./AccrualTypes");
/**
 * Request builder class for operations supported on the [[AccrualTypes]] entity.
 */
var AccrualTypesRequestBuilder = /** @class */ (function (_super) {
    __extends(AccrualTypesRequestBuilder, _super);
    function AccrualTypesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AccrualTypes` entity based on its keys.
     * @param code Key property. See [[AccrualTypes.code]].
     * @returns A request builder for creating requests to retrieve one `AccrualTypes` entity based on its keys.
     */
    AccrualTypesRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(AccrualTypes_1.AccrualTypes, { Code: code });
    };
    /**
     * Returns a request builder for querying all `AccrualTypes` entities.
     * @returns A request builder for creating requests to retrieve all `AccrualTypes` entities.
     */
    AccrualTypesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(AccrualTypes_1.AccrualTypes);
    };
    /**
     * Returns a request builder for creating a `AccrualTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AccrualTypes`.
     */
    AccrualTypesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(AccrualTypes_1.AccrualTypes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AccrualTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AccrualTypes`.
     */
    AccrualTypesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(AccrualTypes_1.AccrualTypes, entity);
    };
    AccrualTypesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(AccrualTypes_1.AccrualTypes, codeOrEntity instanceof AccrualTypes_1.AccrualTypes ? codeOrEntity : { Code: codeOrEntity });
    };
    return AccrualTypesRequestBuilder;
}(core_1.RequestBuilder));
exports.AccrualTypesRequestBuilder = AccrualTypesRequestBuilder;
//# sourceMappingURL=AccrualTypesRequestBuilder.js.map