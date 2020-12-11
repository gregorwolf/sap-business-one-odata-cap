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
exports.PickListsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var PickLists_1 = require("./PickLists");
/**
 * Request builder class for operations supported on the [[PickLists]] entity.
 */
var PickListsRequestBuilder = /** @class */ (function (_super) {
    __extends(PickListsRequestBuilder, _super);
    function PickListsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PickLists` entity based on its keys.
     * @param absoluteentry Key property. See [[PickLists.absoluteentry]].
     * @returns A request builder for creating requests to retrieve one `PickLists` entity based on its keys.
     */
    PickListsRequestBuilder.prototype.getByKey = function (absoluteentry) {
        return new core_1.GetByKeyRequestBuilderV4(PickLists_1.PickLists, { Absoluteentry: absoluteentry });
    };
    /**
     * Returns a request builder for querying all `PickLists` entities.
     * @returns A request builder for creating requests to retrieve all `PickLists` entities.
     */
    PickListsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(PickLists_1.PickLists);
    };
    /**
     * Returns a request builder for creating a `PickLists` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PickLists`.
     */
    PickListsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(PickLists_1.PickLists, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PickLists`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PickLists`.
     */
    PickListsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(PickLists_1.PickLists, entity);
    };
    PickListsRequestBuilder.prototype.delete = function (absoluteentryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(PickLists_1.PickLists, absoluteentryOrEntity instanceof PickLists_1.PickLists ? absoluteentryOrEntity : { Absoluteentry: absoluteentryOrEntity });
    };
    return PickListsRequestBuilder;
}(core_1.RequestBuilder));
exports.PickListsRequestBuilder = PickListsRequestBuilder;
//# sourceMappingURL=PickListsRequestBuilder.js.map