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
exports.VatGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var VatGroups_1 = require("./VatGroups");
/**
 * Request builder class for operations supported on the [[VatGroups]] entity.
 */
var VatGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(VatGroupsRequestBuilder, _super);
    function VatGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `VatGroups` entity based on its keys.
     * @param code Key property. See [[VatGroups.code]].
     * @returns A request builder for creating requests to retrieve one `VatGroups` entity based on its keys.
     */
    VatGroupsRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(VatGroups_1.VatGroups, { Code: code });
    };
    /**
     * Returns a request builder for querying all `VatGroups` entities.
     * @returns A request builder for creating requests to retrieve all `VatGroups` entities.
     */
    VatGroupsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(VatGroups_1.VatGroups);
    };
    /**
     * Returns a request builder for creating a `VatGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `VatGroups`.
     */
    VatGroupsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(VatGroups_1.VatGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `VatGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `VatGroups`.
     */
    VatGroupsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(VatGroups_1.VatGroups, entity);
    };
    VatGroupsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(VatGroups_1.VatGroups, codeOrEntity instanceof VatGroups_1.VatGroups ? codeOrEntity : { Code: codeOrEntity });
    };
    return VatGroupsRequestBuilder;
}(v4_1.RequestBuilder));
exports.VatGroupsRequestBuilder = VatGroupsRequestBuilder;
//# sourceMappingURL=VatGroupsRequestBuilder.js.map